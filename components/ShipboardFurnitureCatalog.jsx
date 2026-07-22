"use client";

import { useState } from "react";
import folderIcon from "@/assets/images/icons/folder-icon.png"
import compassIcon from "@/assets/images/icons/drafting-compass-icon.png"
import downloadIcon from "@/assets/images/icons/download-icon.png"
import TopText from "./Text/TopText";

const ShipboardFurnitureCatalog = ({ data = {}, onOpenOverlay }) => {
    const { title, subtitle, rows = [] } = data;
    const [isSfcExpanded, setIsSfcExpanded] = useState(false);

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
                    <div className="sfc-table-header">
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
                            <div key={idx} className="sfc-table-row">
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View More Button */}
                {rows.length > 4 && (
                    <div className="sfc-action-box">
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
