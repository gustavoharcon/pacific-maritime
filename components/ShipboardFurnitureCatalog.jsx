"use client";

import { useState } from "react";
import { FiFolder, FiCompass, FiDownload } from "react-icons/fi";
import TopText from "./Text/TopText";

const ShipboardFurnitureCatalog = ({ data = {} }) => {
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
                                <FiFolder className="header-icon" />
                                <span>Section Title</span>
                            </div>
                        </div>
                        <div className="header-cell item-cell">
                            <div className="icon-header-box">
                                <FiCompass className="header-icon" />
                                <span>Item</span>
                            </div>
                        </div>
                        <div className="header-cell link-cell">
                            <div className="icon-header-box">
                                <FiDownload className="header-icon" />
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
                                    <a href={row.url} className="sfc-link-btn">
                                        {row.file_link}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View More Button */}
                {rows.length > 4 && (
                    <div className="sfc-action-box">
                        <button
                            className="btn-view-more"
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
