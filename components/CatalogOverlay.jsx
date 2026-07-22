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
        if (!isZoomed) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setTransformOrigin(`${x}% ${y}%`);
    };

    const toggleZoom = () => {
        setIsZoomed(!isZoomed);
        setTransformOrigin("center");
    };

    // Close when clicking the backdrop
    const handleBackdropClick = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
            onClose();
        }
    };

    return (
        <div className="catalog-overlay-backdrop" onClick={handleBackdropClick}>
            {/* Close Button top right */}
            <button className="overlay-close-btn" onClick={onClose} aria-label="Close overlay">
                <FiX />
            </button>

            <div className="overlay-content-wrapper">
                {/* Image Container */}
                <div 
                    ref={containerRef}
                    className={`overlay-image-container ${isZoomed ? "zoomed" : ""}`}
                    onClick={toggleZoom}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => isZoomed && setIsZoomed(false)}
                    style={{ cursor: isZoomed ? "zoom-out" : "zoom-in" }}
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
                        className="btn btn-black-outline btn-animation-two overlay-btn-outline"
                    >
                        View Full Size
                    </a>
                    <a 
                        href={highResUrl} 
                        download={`catalog-${item?.file_link || "sheet"}.jpg`}
                        className="btn btn-white-filled overlay-btn-filled"
                        onClick={(e) => {
                            // If the image is external (Cloudinary), we may just navigate/open depending on CORS.
                            // But we can keep standard download anchor behavior.
                        }}
                    >
                        Download
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CatalogOverlay;
