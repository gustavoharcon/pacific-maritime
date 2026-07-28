"use client";

import { useState } from "react";
import TopText from "./Text/TopText";
import { LuDroplet, LuZap, LuCpu } from "react-icons/lu";
import { MdOutlineScreenshotMonitor, MdCompress, MdOutlineBlinds } from "react-icons/md";


const renderIcon = (iconName) => {
    if (!iconName) return null;

    switch (iconName.toLowerCase()) {
        case "2x":
            return <div className="text-icon">2x</div>;
        case "water-lightning":
            return (
                <div className="combined-icon">
                    <LuDroplet className="icon-drop" />
                    <LuZap className="icon-zap" />
                </div>
            );
        case "water":
            return <LuDroplet className="icon" />;
        case "lightning":
        case "zap":
            return <LuZap className="icon" />;
        case "blinds":
            return <MdOutlineBlinds className="icon" />;
        case "compress":
            return <MdCompress className="icon" />;
        case "screen":
            return <MdOutlineScreenshotMonitor className="icon" />;
        default:
            return <LuCpu className="icon" />;
    }
};

const EquipmentSection = ({ data, sectionKey }) => {
    const {
        image_side = "left",
        items_axis = "horizontal",
        items_with_bottom_border = false,
        top_text_included = true,
        top_text_alignment = "left",
        tabs_included = false,
        top_text,
        column_one,
        column_two,
        column_two_top_text_position,
        tabs = []
    } = data;

    const [activeTabIdx, setActiveTabIdx] = useState(0);

    // If tabs are included, get active tab data
    const activeTab = tabs_included && tabs.length > 0 ? tabs[activeTabIdx] : null;

    // Determine layout columns
    const imageSrc = tabs_included ? activeTab?.image : column_one?.image;

    // Render active content block(s)
    const contentBlocks = tabs_included
        ? (activeTab?.content || [])
        : [
            {
                subtitle: column_two?.top_text?.subtitle,
                buttons: column_two?.buttons,
                items: column_two?.items,
                column_two_button_position: column_two?.column_two_button_position
            }
        ];

    return (
        <section className={`equipment-section section-${sectionKey} image-${image_side} ${top_text_included === false ? "two-columns-grid-full" : ""}`}>
            <div className="container">
                {/* Optional Top Header Text */}
                {top_text_included && top_text && (
                    <TopText className={`section-header text-align-${top_text_alignment}`} data={top_text} />
                )}

                {/* Tabs Selectors if included */}
                {tabs_included && tabs.length > 0 && (
                    <div
                        className="tabs-nav-wrapper"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="100"
                    >
                        <div className="tabs-nav">
                            {tabs.map((tab, idx) => (
                                <a
                                    key={idx}
                                    className={`tab-nav-btn ${activeTabIdx === idx ? "active" : ""}`}
                                    onClick={() => setActiveTabIdx(idx)}
                                >
                                    {tab.title}
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                {/* Two-Column Grid */}
                <div className={`two-columns-grid ${image_side === "right" ? "grid-reversed" : ""}`}>
                    {/* Image Column */}
                    {imageSrc && (
                        <div
                            className="column column-image"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <div className={`image-wrapper ${top_text_included === false ? "image-wrapper-two" : ""}`}>
                                <img src={imageSrc} alt={tabs_included ? activeTab?.title : top_text?.title || "Equipment"} />
                            </div>
                        </div>
                    )}

                    {/* Content Column */}
                    <div
                        className="column column-content"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="100"
                    >
                        {contentBlocks.map((block, bIdx) => (
                            <div key={bIdx} className={`content-block ${column_two_top_text_position === 'bottom' ? 'buttons-bottom' : ''} ${items_with_bottom_border == true ? 'items-with-bottom-border' : ''}`}>
                                {block && <TopText data={block} />}

                                {/* Render Items if they exist in this block or column */}
                                {block.items && block.items.length > 0 && (
                                    <div className={`items-grid axis-${items_axis}`}>
                                        {block.items.map((item, itemIdx) => (
                                            <div
                                                key={itemIdx}
                                                className={`item-card ${items_with_bottom_border ? "has-border" : ""}`}
                                            >
                                                {item.icon && (
                                                    <div className="item-icon-container">
                                                        {renderIcon(item.icon)}
                                                    </div>
                                                )}
                                                <div className="item-info">
                                                    <h3 className="item-title">{item.title}</h3>
                                                    <p className="item-description">{item.subtitle}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EquipmentSection;
