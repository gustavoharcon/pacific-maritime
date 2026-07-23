"use client";

import { useEffect, useState, useRef } from "react";
import { FiX } from "react-icons/fi";

const CatalogOverlay = ({ item, onClose }) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const [transformOrigin, setTransformOrigin] = useState("center");
    const containerRef = useRef(null);

    // Clean Cloudinary URL to get the high-resolution image
    const getHighResUrl = (url) => {
        if (!url) return "";
        return url.replace("/w_200/", "/w_1200/");
    };

    const highResUrl = getHighResUrl(item?.image);

    // Close on escape key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    // Handle mouse move for panning zoom
    const handleMouseMove = (e) => {
        setIsZoomed(true);
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setTransformOrigin(`${x}% ${y}%`);
    };

    // Close when clicking the backdrop directly
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleDownload = async (e) => {
        e.preventDefault();
        try {
            // Append a query parameter to bypass cache and prevent CORS caching issues
            const downloadUrl = highResUrl + (highResUrl.includes("?") ? "&" : "?") + "cors=true";
            console.log(downloadUrl);
            const response = await fetch(downloadUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);

            // Dynamically detect file extension from MIME type
            const contentType = response.headers.get("content-type") || "";
            let extension = "jpg";
            if (contentType.includes("png")) {
                extension = "png";
            } else if (contentType.includes("webp")) {
                extension = "webp";
            } else if (contentType.includes("pdf")) {
                extension = "pdf";
            }

            // Clean filename to make it safe
            const baseName = (item?.file_link || item?.title || "sheet")
                .toLowerCase()
                .replace(/[^a-z0-9-_]/g, "_");

            const link = document.createElement("a");
            link.href = blobUrl;

            console.log(link);

            link.download = `catalog-${baseName}.${extension}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(blobUrl);
        } catch (error) {
            console.error("Failed to download image automatically, falling back to open:", error);
            window.open(highResUrl, "_blank");
        }
    };

    return (
        // <div className="catalog-overlay-backdrop" onClick={handleBackdropClick}>
        <div className="catalog-overlay-backdrop">
            {/* Close Button top right */}
            <button className="overlay-close-btn" onClick={onClose} aria-label="Close overlay">
                <FiX />
            </button>

            {/* <div className="overlay-content-wrapper" onClick={handleBackdropClick}> */}
            <div className="overlay-content-wrapper">
                {/* Image Container */}
                <div
                    ref={containerRef}
                    className={`overlay-image-container ${isZoomed ? "zoomed" : ""}`}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => {
                        setIsZoomed(false);
                        setTransformOrigin("center");
                    }}
                    style={{ cursor: "zoom-in" }}
                >
                    <img
                        src={highResUrl}
                        alt={item?.title || "Catalog Sheet"}
                        className="overlay-image"
                        style={{
                            transform: isZoomed ? "scale(2.2)" : "scale(1)",
                            transformOrigin: transformOrigin
                        }}
                    />
                </div>

                {/* Bottom Action Bar */}
                <div className="overlay-action-bar">
                    <a
                        href={highResUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-animation-two"
                    >
                        View Full Size
                    </a>
                    <a
                        href={highResUrl}
                        download={`catalog-${item?.file_link || "sheet"}.jpg`}
                        // download={highResUrl}
                        className="btn btn--primary btn-animation-four"
                        onClick={handleDownload}
                    >
                        Download
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CatalogOverlay;
