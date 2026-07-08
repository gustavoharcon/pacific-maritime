"use client";

import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    // YouTube Video ID and URL configurations
    const videoId = "4_Kq6xXg1u0";
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&si=u07lP7i4l69v83s8`;

    return (
        <section className="video-section">
            <div className="video-container">
                <div className="video-wrapper">
                    {isPlaying ? (
                        <iframe
                            className="video-iframe"
                            src={embedUrl}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <div 
                            className="video-thumbnail-container"
                            style={{ backgroundImage: `url(${thumbnailUrl})` }}
                            onClick={() => setIsPlaying(true)}
                        >
                            <div className="video-thumbnail-overlay"></div>
                            <div className="video-content-overlay">
                                <div className="play-btn-outer">
                                    <div className="play-btn-pulse"></div>
                                    <div className="play-btn-pulse-2"></div>
                                    <div className="play-btn-circle">
                                        <span className="play-icon-adjust">
                                            <FaPlay />
                                        </span>
                                    </div>
                                </div>
                                <span className="video-tagline">Watch Video</span>
                                <h2 className="video-title">NAVSEA-Compliant Shipboard Fabrication & Seating</h2>
                                <p className="video-description">
                                    Discover how we design and build heavy-duty marine furniture and custom seating for the U.S. Navy and commercial shipyards.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default VideoSection;