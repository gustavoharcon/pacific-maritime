"use client";

import { useState, useEffect } from "react";
import { getIcon } from "@/utils/helperFunctions";
import { FaSpinner } from "react-icons/fa6";

const JobListings = ({ data = [] }) => {
    const [jobs, setJobs] = useState(data);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch("/api/jobs");
                if (res.ok) {
                    const fetchedJobs = await res.json();
                    if (fetchedJobs && fetchedJobs.length > 0) {
                        setJobs(fetchedJobs);
                    }
                }
            } catch (e) {
                console.error("Failed to load job listings:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    return (
        <div className="job-listings">
            {loading ? (
                <div className="loading-container">
                    <FaSpinner className="spinner-icon" />
                    <span>Loading career opportunities...</span>
                </div>
            ) : (
                jobs.map((item, index) => (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" key={index} className="job-listing">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <ul className="icons-container">
                            {
                                item.icons && item.icons.map((iconObj, iconIndex) => (
                                    <li key={iconIndex}>
                                        <div className="icon-container">
                                            {getIcon(iconObj.icon)}
                                        </div>
                                        <p>{iconObj.description}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </a>
                ))
            )}
        </div>
    );
};

export default JobListings;