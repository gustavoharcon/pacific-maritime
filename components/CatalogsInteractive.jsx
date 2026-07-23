"use client";

import { useState, useEffect } from "react";
import { FiFolder, FiSettings, FiChevronDown } from "react-icons/fi";
import { TbDoor } from "react-icons/tb";
import { LiaShipSolid } from "react-icons/lia";
import { TfiLocationArrow } from "react-icons/tfi";
import { LuSofa } from "react-icons/lu";
import TopText from "./Text/TopText";
import AOS from "aos";
import "aos/dist/aos.css";


const CatalogsInteractive = ({ data = {}, onOpenOverlay }) => {
    const { catalogs_interactive_section = {} } = data;
    const catalogs = catalogs_interactive_section.catalogs || [];

    // State for catalog selection (Design 506)
    const [activeCatalogId, setActiveCatalogId] = useState(catalogs[0]?.id || "");
    const activeCatalog = catalogs.find((c) => c.id === activeCatalogId) || catalogs[0] || {};

    // State for category selection (Design 505)
    const [activeCategory, setActiveCategory] = useState("ALL FILES");

    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 100,
            once: false,
            mirror: true,
            easing: "ease-out-quad",
        });

    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [activeCatalogId, activeCategory]);

    const handleCatalogChange = (id) => {
        setActiveCatalogId(id);
        setActiveCategory("ALL FILES");
    };

    const getCatalogIcon = (id) => {
        switch (id) {
            case "naval-furniture":
                return <LiaShipSolid className="catalog-icon-svg naval-furniture-icon" />;
            case "metal-joiner":
                return <TbDoor className="catalog-icon-svg metal-joiner-icon" />;
            case "pacific-maritime-furniture":
                return <LuSofa className="catalog-icon-svg" />
            case "pacific-maritime-parts":
                return <FiSettings className="catalog-icon-svg" />;
            default:
                return <FiFolder className="catalog-icon-svg" />;
        }
    };

    // Filter files for the active category
    const filteredFiles = (activeCatalog.files || []).filter((file) => {
        if (activeCategory === "ALL FILES") return true;
        return file.category === activeCategory;
    });

    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const target = document.getElementById("individual-files");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div
            className="catalogs-container-wrapper"
        >
            <section className="catalogs-tabs-section">
                <div className="container">
                    <div className="catalog-card"
                        data-aos="fade-up"
                        data-aos-once="false"
                        data-aos-delay="200"
                        data-aos-duration="800"
                    >
                        {/* Left side details */}
                        <div className="catalog-details" key={activeCatalogId}>
                            <div className="icon-wrapper">
                                {getCatalogIcon(activeCatalog.id)}
                            </div>
                            <h2 className="catalog-title">{activeCatalog.title}</h2>
                            <p className="catalog-subtitle">{activeCatalog.subtitle}</p>
                            <div className="action-buttons">
                                <a href={activeCatalog.download_url} className="btn btn-black-outline btn-animation-two">
                                    Download
                                </a>
                                <a
                                    href="#individual-files"
                                    className="link-view-individual"
                                    onClick={handleSmoothScroll}
                                >
                                    View individual files below <FiChevronDown />
                                </a>
                            </div>
                        </div>

                        {/* Right side tabs */}
                        <div className="catalog-tabs">
                            {catalogs.map((catalog) => (
                                <button
                                    key={catalog.id}
                                    className={`tab-item-btn ${activeCatalogId === catalog.id ? "active" : ""}`}
                                    onClick={() => handleCatalogChange(catalog.id)}
                                >
                                    <span className="right-icon" data-aos="fade-left" data-aos-delay="200" data-aos-duration="800"><TfiLocationArrow /></span>
                                    {catalog.tab_name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="individual-files" className="individual-files-section">
                <div className="container">
                    <TopText data={{
                        small_title: "Files",
                        title: activeCatalog.tab_name + " Individual Files"
                    }} />

                    <div className="files-layout">
                        {/* Sidebar */}
                        <aside className="files-sidebar" data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
                            {(activeCatalog.categories || []).map((category, idx) => (
                                <button
                                    key={idx}
                                    className={`sidebar-cat-btn ${activeCategory === category ? "active" : ""}`}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </aside>

                        {/* Grid */}
                        <main className="files-grid-container">
                            {filteredFiles.length > 0 ? (
                                <div className="files-grid">
                                    {filteredFiles.map((file, idx) => (
                                        <div
                                            key={idx}
                                            className="file-card"
                                            data-aos="fade-up"
                                            data-aos-delay={Math.min(idx * 50, 300)}
                                            data-aos-duration="600"
                                        >
                                            <div className="thumbnail-box">
                                                <img src={file.image} alt={file.title} />
                                            </div>
                                            <h4 className="file-title">{file.title}</h4>
                                            <button
                                                onClick={() => onOpenOverlay && onOpenOverlay(file)}
                                                className="btn btn-secondary btn-animation-two"
                                                style={{ cursor: "pointer" }}
                                            >
                                                Download PDF
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="no-files-message">
                                    <p>No files available in this category.</p>
                                </div>
                            )}
                        </main>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CatalogsInteractive;
