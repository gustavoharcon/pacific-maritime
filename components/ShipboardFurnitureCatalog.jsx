"use client";

import { useState, useEffect } from "react";
import folderIcon from "@/assets/images/icons/folder-icon.png"
import compassIcon from "@/assets/images/icons/drafting-compass-icon.png"
import downloadIcon from "@/assets/images/icons/download-icon.png"
import TopText from "./Text/TopText";
import Aos from "aos";
import "aos/dist/aos.css";

const ShipboardFurnitureCatalog = ({ data = {}, onOpenOverlay }) => {
    const { title, subtitle, rows = [] } = data;
    const [isSfcExpanded, setIsSfcExpanded] = useState(false);

    useEffect(() => {
        Aos.init({
            duration: 800,
            once: true,
            easing: "ease-out-quad",
        });
    }, []);

    useEffect(() => {
        Aos.refresh();
    }, [isSfcExpanded]);

    const displayedSfcRows = isSfcExpanded ? rows : rows.slice(0, 4);

    return (
        <section className="sfc-table-section">
            <div className="container">

                <TopText data={{
                    small_title: "Furniture",
                    title: title,
                    subtitle: subtitle
                }} />

                <div className="sfc-table-wrapper">
                    {/* Table Header */}
                    <div 
                        className="sfc-table-header"
                        data-aos="fade-up"
                        data-aos-duration="600"
                    >
                        <div className="header-cell category-cell">Category</div>
                        <div className="header-cell section-cell">
                            <div className="icon-header-box">
                                <img src={folderIcon.src} className="header-icon" />
                                <span>Section Title</span>
                            </div>
                        </div>
                        <div className="header-cell item-cell">
                            <div className="icon-header-box">
                                <img src={compassIcon.src} className="header-icon" />
                                <span>Item</span>
                            </div>
                        </div>
                        <div className="header-cell link-cell">
                            <div className="icon-header-box">
                                <img src={downloadIcon.src} className="header-icon" />
                                <span>File Link</span>
                            </div>
                        </div>
                    </div>

                    {/* Table Body */}
                    <div className="sfc-table-body">
                        {displayedSfcRows.map((row, idx) => (
                            <div 
                                key={idx} 
                                className="sfc-table-row"
                                data-aos="fade-up"
                                data-aos-delay={Math.min(idx * 50, 300)}
                                data-aos-duration="600"
                            >
                                <div className="body-cell category-cell">{row.category}</div>
                                <div className="body-cell section-cell">{row.section_title}</div>
                                <div className="body-cell item-cell">{row.item}</div>
                                <div className="body-cell link-cell">
                                    <button 
                                        onClick={() => onOpenOverlay && onOpenOverlay(row)}
                                        className="sfc-link-btn btn btn-secondary btn-animation-two"
                                        style={{ cursor: "pointer" }}
                                    >
                                        {row.file_link}
                                    </button>
                                    {row.image && (
                                        <div className="sfc-preview-tooltip">
                                            <img src={row.image} alt={row.item || "Preview"} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View More Button */}
                {rows.length > 4 && (
                    <div 
                        className="sfc-action-box"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-offset="50"
                    >
                        <button
                            className="btn btn-secondary btn-animation-two"
                            onClick={() => setIsSfcExpanded(!isSfcExpanded)}
                        >
                            {isSfcExpanded ? "View Less" : "View More"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ShipboardFurnitureCatalog;
