import termsOfService from './terms_of_service.js';

const siteData = [
    {
        "site_name": "Pacific Maritime Industries Corp.",
        "tagline": "Heavy-Duty Marine Fabrication & NAVSEA-Compliant Shipboard Furniture.",
        "site_url": "http://www.pacmaritime.com/",
        "site_logo": "/assets/images/logos/black_with_text_Pacific_Maritime_Industries_Corporation.png",
    },
    {
        "social_media": [
            {
                "name": "facebook",
                "link": ""
            },
            {
                "name": "instagram",
                "link": ""
            },
            {
                "name": "youtube",
                "link": ""
            },
            {
                "name": "tiktok",
                "link": ""
            }
        ]
    },
    {
        "contact_info": {
            "email_1": process.env.CONTACT_EMAIL,
            "sales_email": "sales@pacmaritime.com",
            "phone_number_1": process.env.CONTACT_PHONE_NUMBER,
            "address_line_1": "1790 Dornoch Court",
            "address_line_2": "San Diego, CA 92154"
        }
    },
    {
        "main_menu": [
            {
                "menu_name": "About",
                "menu_url": "/about",
                "sub_menu": [
                    {
                        "text": "Manufacturing Capabilities",
                        "link": "/about/manufacturing-capabilities"
                    },
                    {
                        "text": "Quality & Compliance",
                        "link": "/about/quality-and-compliance"
                    }
                ],
            },
            {
                "menu_name": "Catalogs",
                "menu_url": "/catalogs-and-downloads"
            },
            {
                "menu_name": "Careers",
                "menu_url": "/careers",
                "button_style": "secondary"
            }
        ]
    },
    {
        "mobile_main_menu": [
            {
                "menu_name": "About",
                "menu_url": "/about",
                "sub_menu": [
                    {
                        "text": "Manufacturing Capabilities",
                        "link": "/about/manufacturing-capabilities"
                    },
                    {
                        "text": "Quality & Compliance",
                        "link": "/about/quality-and-compliance"
                    }
                ],
            },
            {
                "menu_name": "Catalogs",
                "menu_url": "/catalogs-and-downloads"
            },
            {
                "menu_name": "Careers",
                "menu_url": "/careers",
                "button_style": "secondary"
            },
            {
                "menu_name": "Contact",
                "menu_url": "/contact",
                "button_style": "secondary"
            },
            {
                "menu_name": "Request quote",
                "menu_url": "/request-quote",
                "button_style": "secondary"
            }
        ]
    },
    {
        "bottom_credits": {
            "menu": [
                // {
                //     "text": "Privacy policy",
                //     "link": "/privacy-policy"
                // },
                {
                    "text": "Terms & Conditions",
                    "link": "/terms-and-conditions"
                }
            ],
            "copyright_text": "© " + new Date().getFullYear() + " Pacific Maritime Industries Corp. All rights reserved."
        }
    },
    {
        "footer_menu": [
            {
                "menu_name": "About",
                "link": "/about",
                "sub_menu": [
                    {
                        "text": "Manufacturing Capabilities",
                        "link": "/about/manufacturing-capabilities"
                    },
                    {
                        "text": "Quality & Compliance",
                        "link": "/about/quality-and-compliance"
                    }
                ],
            },
            {
                "menu_name": "Contact",
                "link": "/contact",
                "sub_menu": [
                    {
                        "text": "Request a Quote",
                        "link": "/request-quote"
                    },
                    {
                        "text": "Careers",
                        "link": "/careers"
                    }
                ],
            },
            {
                "menu_name": "Catalogs & Downloads",
                "link": "/catalogs-and-downloads",
                // "sub_menu": [
                //     {
                //         "text": "Equipment List",
                //         "link": "/about/equipment-list"
                //     }
                // ],
            },
            // {
            //     "menu_name": "Blog & News",
            //     "link": "/blog"
            // }
        ]
    },
    {
        "terms_of_service_page": {
            "meta_data": {
                "title": "Terms and Conditions",
                "description": "Terms and Conditions"
            },
            "hero_section": {
                "title": "Terms and Conditions",
                "subtitle": "Terms and Conditions for Pacific Maritime Industries Corp."
            },
            "text_and_table_of_contents": {
                "text": termsOfService,
                "table_of_contents": [
                    {
                        "text": "Terms and Conditions",
                        "link": "#terms-and-conditions"
                    },
                    {
                        "text": "1. Acceptance; Entire Agreement; Order of Precedence",
                        "link": "#acceptance-agreement-precedence"
                    },
                    {
                        "text": "2. Definitions",
                        "link": "#definitions"
                    },
                    {
                        "text": "3. Pricing, Invoicing, and Payment",
                        "link": "#pricing-invoicing-payment"
                    },
                    {
                        "text": "4. Delivery; Title and Risk of Loss",
                        "link": "#delivery-title-risk-of-loss"
                    },
                    {
                        "text": "5. Quality Requirements; Certifications; Traceability",
                        "link": "#quality-requirements"
                    },
                    {
                        "text": "6. Inspection, Acceptance, and Nonconforming Goods",
                        "link": "#inspection-acceptance"
                    },
                    {
                        "text": "7. Packaging, Preservation, Marking, and Shipping",
                        "link": "#packaging-preservation"
                    },
                    {
                        "text": "8. Warranty",
                        "link": "#warranty"
                    },
                    {
                        "text": "9. Changes",
                        "link": "#changes"
                    },
                    {
                        "text": "10. Confidentiality; Proprietary Information; Publicity",
                        "link": "#confidentiality"
                    },
                    {
                        "text": "11. Cybersecurity; Safeguarding Covered Defense Information",
                        "link": "#cybersecurity"
                    },
                    {
                        "text": "12. Compliance with Laws; Anti-Corruption; Trade",
                        "link": "#compliance-with-laws"
                    },
                    {
                        "text": "13. Insurance",
                        "link": "#insurance"
                    },
                    {
                        "text": "14. Government Contract Flow-Down Provisions",
                        "link": "#government-contract-flow-down"
                    },
                    {
                        "text": "15. Intellectual Property; Rights in Technical Data",
                        "link": "#intellectual-property"
                    },
                    {
                        "text": "16. Indemnification; Limitation of Liability",
                        "link": "#indemnification-liability"
                    },
                    {
                        "text": "17. Termination",
                        "link": "#termination"
                    },
                    {
                        "text": "18. Records, Audit, and Retention",
                        "link": "#records-audit"
                    },
                    {
                        "text": "19. Disputes; Governing Law; Forum",
                        "link": "#disputes-governing-law"
                    },
                    {
                        "text": "20. Assignment; Subcontracting",
                        "link": "#assignment-subcontracting"
                    },
                    {
                        "text": "21. Force Majeure",
                        "link": "#force-majeure"
                    },
                    {
                        "text": "22. Notices",
                        "link": "#notices"
                    },
                    {
                        "text": "23. Survival",
                        "link": "#survival"
                    },
                    {
                        "text": "24. Miscellaneous",
                        "link": "#miscellaneous"
                    }
                ]
            }
        }
    },
    {
        "home_page": {
            "meta_data": {
                "title": "Pacific Maritime Industries Corp.",
                "description": "Pacific Maritime Industries Corp. manufactures heavy-duty, NAVSEA-compliant marine furniture and custom seating for the U.S. Navy and commercial shipyards."
            },
            "call_to_action": {
                "title": "Same-day or next-day quote guaranteed",
                "subtitle": "Every RFQ is flagged urgent. Our estimating team commits to a complete, line-item quotation within one business day.",
                "buttons": [
                    {
                        "text": "Request quote",
                        "link": "/request-quote",
                        "button_style": "btn btn-secondary btn-animation-two"
                    }
                ]
            },
            "hero_section": {
                "right_column_image": "https://res.cloudinary.com/irwujctd/image/upload/v1787344203/san-diego-coronado-bridge-bay-area-us-navy-ships_hqs4uu.png",
                "small_title": "Pacific Maritime Industries Corp.",
                "title": "MIL-SPEC INTERIORS, DOORS, AND CUSTOM FABRICATION",
                "subtitle": "San Diego-based manufacturer offering comprehensive in-house fabrication—from stateroom outfitting to custom platforms and ladders. Proudly servicing the Pacific, Atlantic, and Gulf military fleets, alongside Coast Guard and commercial vessels.",
                "description_and_logo": {
                    "title": "ISO 9001:2015 Certified",
                    "logo": {
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/v1786123668/ISO-9001-2015-white-logo_opkqbj.png",
                        "alt": "ISO 9001:2015 Certified"
                    }
                }
            },
            "compliance_section": {
                "top_text": {
                    "title": "Strict MIL-SPEC & Maritime Compliance",
                    "subtitle": "For three decades, Pacific Maritime Industries Corp. has maintained uncompromising adherence to the highest military and commercial maritime regulations.",
                    "buttons": [
                        {
                            "text": "Request quote",
                            "link": "/request-quote",
                            "button_style": "btn btn-secondary btn-animation-two"
                        }
                    ]
                },
                "items": [
                    {
                        "icon": "dotted-graph",
                        "title": "Total Digital Traceability",
                        "subtitle": "Utilizing a robust Enterprise Resource Planning (ERP) system to manage the entire project lifecycle, providing real-time manufacturing tracking and stringent quality control for defense auditing."
                    },
                    {
                        "icon": "fire",
                        "title": "MIL-STD-1623 Fire Performance",
                        "subtitle": "All interior finish materials, furnishings, and custom fabrications meet rigorous fire resistance and performance requirements for safe utilization onboard surface ships."
                    },
                    {
                        "icon": "boat",
                        "title": "We Supply to the U.S. Navy Shipboard Habitability Program",
                        "subtitle": "Supplying compliant, heavy-duty modular staterooms, berthing, and metal joiner doors designed to maximize spatial efficiency without compromising standard maritime requirements."
                    }
                ]
            },
            "capabilities_three_columns": {
                "top_text": {
                    "title": "Built on decades of precision",
                    "subtitle": "30 years serving the fleet",
                },
                "columns": [
                    {
                        "top_image": "https://res.cloudinary.com/irwujctd/image/upload/w_500/v1786124656/metal-joiner-door.png_202608041000.jpeg_202608070649_zl03ft.jpg",
                        "title": " Metal Joiner Doors & Frames",
                        "description": "Navy-grade metal joiner doors, watertight closures, and specialized frames custom-fabricated for rapid procurement and installation.",
                    },
                    {
                        "top_image": "https://res.cloudinary.com/irwujctd/image/upload/w_500/v1786124463/berth-3.jpg_202608061455_wrjegs.jpg",
                        "small_title": "Interiors",
                        "title": "Staterooms & Crew Berthing",
                        "description": "Complete marine accommodations built with superior workmanship. Precision-built to match marine standard drawings and your exact conceptual sketches.",
                    },
                    // {
                    //     "top_image": "https://res.cloudinary.com/irwujctd/image/upload/w_500/v1786124463/berth-3.jpg_202608061455_wrjegs.jpg",
                    //     "title": "Platforms & Ladders",
                    //     "description": "Heavy-duty marine platforms, access structures, and industrial ladders engineered for strict space efficiency and rugged shipboard environments.",
                    // },
                    {
                        "top_image": "https://res.cloudinary.com/irwujctd/image/upload/w_500/v1786125028/1000000249.jpg_202608061451_qfgaqf.jpg",
                        "title": "Naval Lockers & Stowage",
                        "description": "Specialized industrial stowage including ammunition lockers, medical cabinets, weapons stowage, key lockers, and secure filing units.",
                    },
                    {
                        "top_image": "https://res.cloudinary.com/irwujctd/image/upload/w_500/v1786125021/seating-b3g6-mod-4.jpg_202608070645_mt22zp.jpg",
                        "title": "Marine Seating & Upholstery",
                        "description": "MIL-SPEC fire-resistant shipboard seating, mess deck benches, stools, and custom upholstery services conforming to MIL-STD-1623.",
                    },
                    {
                        "top_image": "https://res.cloudinary.com/irwujctd/image/upload/w_500/v1786125037/desk-4.jpg_202608061444_oiqrld.jpg",
                        "title": "Office & Dining Furniture",
                        "description": "Heavy-duty modular workstations, chart tables, mess deck dining assemblies, sideboards, and administrative office systems.",
                    },
                    {
                        "top_image": "https://res.cloudinary.com/irwujctd/image/upload/v1786371254/eebd_he5hkr.jpg",
                        "title": "Marine Accessories & Safety",
                        "description": "Diverse manufacturing capabilities for essential shipboard accessories, ranging from emergency EEBD and first aid enclosures to custom stainless steel architectural fixtures and acoustic phone booths.",
                    }
                ],
                "buttons": [
                    {
                        "text": "Request quote",
                        "link": "/request-quote",
                        "button_style": "btn btn-secondary btn-animation-two"
                    }
                ]
            },
            "why_choose_pmi": {
                "top_text": {
                    "title": "why choose pacific maritime industries corp.",
                    "subtitle": "Delivering MIL-SPEC compliant manufacturing backed by over three decades of dedicated service to the U.S. Navy and prime contractors."
                },
                "right_side_image": "https://res.cloudinary.com/irwujctd/image/upload/w_768/v1785941532/Warship_navigating_open_ocean_202608040717_1_poicoo.jpg",
                "items": [
                    {
                        "icon": "fabrication",
                        "text": "Operating 66,000 square feet of advanced CNC fabrication space alongside 14,000 square feet of dedicated inventory staging for high-volume production."
                    },
                    {
                        "icon": "erp",
                        "text": "Utilizing a robust Enterprise Resource Planning (ERP) software system to seamlessly manage your project's entire lifecycle, from the initial quote to real-time manufacturing tracking."
                    },
                    {
                        "icon": "anchor",
                        "text": "Proudly manufacturing structural components and modular interiors for the U.S. Navy Shipboard Habitability Program, custom-built to balance crew comfort with strict space efficiency."
                    },
                    {
                        "icon": "drafting-compass",
                        "text": "Equipped with an extensive, in-house archive of standard Navy manufacturing drawings, ensuring flawless first-time execution and MIL-SPEC compliance without technical delays."
                    }
                ]
            },
            "equipment_by_process_section": {
                "top_text": {
                    "title": "ADVANCED EQUIPMENT BY PROCESS",
                    "subtitle": "Our ongoing investment in cutting-edge machining capabilities ensures uninterrupted performance and rapid fulfillment of maritime defense orders."
                },
                "columns": [
                    {
                        "icon": "fold-vertical",
                        "title": "CNC Press Brakes",
                        "subtitle": "Advanced press brakes designed for precise bending and forming of heavy sheet metal to support continuous high-volume manufacturing."
                    },
                    {
                        "icon": "droplet",
                        "title": "Laser Cutting",
                        "subtitle": "Automated heavy sheet metal stock handling and direct-feed laser cutting systems for continuous clean, square cuts."
                    },
                    {
                        "icon": "3by3dots",
                        "title": "CNC Punching",
                        "subtitle": "High-performance CNC turret punching and shearing capabilities designed to process heavy steel with exact, repeatable precision."
                    },
                    {
                        "icon": "diamond-plus",
                        "title": "Waterjet Cutting",
                        "subtitle": "Precision abrasive waterjet systems capable of cutting thick steel with extreme accuracy, leaving a satin-smooth edge that greatly reduces secondary operations."
                    }
                ],
                "buttons": [
                    {
                        "text": "Learn More",
                        "link": "/about/manufacturing-capabilities",
                        "button_style": "btn btn--primary btn-animation-four"
                    },
                    {
                        "text": "Request a Quote",
                        "link": "/request-quote",
                        "button_style": "btn btn-secondary btn-animation-two"
                    }
                ]
            },
            "timeline_three_columns": {
                "top_text": {
                    "small_title": "Process",
                    "title": "From drawing to sea trial in three phases",
                    "subtitle": "A proven sequence. Lead times vary by scope. Request a project timeline with your RFQ."
                },
                "columns": [
                    {
                        "icon": "drafting-compass",
                        "title": "DESIGN",
                        "subtitle": "CAD modeling, material specs, revision control."
                    },
                    {
                        "icon": "manufacturing",
                        "title": "FABRICATE",
                        "subtitle": "CNC cutting, welding, and finishing in our San Diego facility."
                    },
                    {
                        "icon": "boxes",
                        "title": "DELIVER",
                        "subtitle": "Components are palletized, tightly wrapped, and staged for immediate freight dispatch."
                    }
                ]
            },
            "products_three_columns": {
                "width": "2",
                "top_text": {
                    "small_title": "Portfolio",
                    "title": "Proven components, ready to specify",
                    "subtitle": "Standard models built to MIL-SPEC. Custom modifications available."
                },
                "columns": [
                    {
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_768/v1785872728/Placeholder_Image.png_202608040955_qmmibs.jpg",
                        "image_description": "STATEROOM & BERTHING",
                        "title": "STATEROOM & BERTHING",
                        "subtitle": "Complete marine accommodations built with superior workmanship. Precision-built to match marine standard drawings and your exact conceptual sketches.",
                        "with_border": true,
                        "categories": [
                            "Modular",
                            "Habitability",
                            "Integrated"
                        ]
                    },
                    {
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_768/v1785872728/metal-joiner-door.png_202608041000_cu2yvp.jpg",
                        "image_description": "Metal Joiner Doors",
                        "title": "Metal Joiner Doors",
                        "subtitle": "Custom manufactured shipboard doors designed to satisfy all marine environments. Supported by our dedicated technical catalog for rapid procurement.",
                        "with_border": true,
                        "categories": [
                            "Watertight",
                            "Joiner",
                            "Primed"
                        ]
                    },
                    {
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_768/v1785872728/locker-01.png_202608041006_husihi.jpg",
                        "image_description": "Naval Lockers & Cabinets",
                        "title": "Naval Lockers & Cabinets",
                        "subtitle": "Fabricated to conform to stringent U.S. Navy specifications. Configurations include ammo lockers, file cabinets, dressers, and specialized industrial stowage.",
                        "with_border": true,
                        "categories": [
                            "Steel",
                            "Shock Grade",
                            "MIL-SPEC"
                        ]
                    },
                    {
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_768/v1785944839/seating_202608050846_bobkzi.jpg",
                        "image_description": "Seating",
                        "title": "Seating",
                        "subtitle": "MIL-SPEC compliant seating solutions designed to balance crew comfort with strict space efficiency",
                        "with_border": true,
                        "categories": [
                            "Aluminum",
                            "Upholstered",
                            "MIL-SPEC"
                        ]
                    }
                ]
            }
        },
        "about_page": {
            "meta_data": {
                "title": "About",
                "description": "About"
            },
            "call_to_action": {
                "title": "Same-day or next-day quote guaranteed",
                "subtitle": "Every RFQ is flagged urgent. Our estimating team commits to a complete, line-item quotation within one business day.",
                "buttons": [
                    {
                        "text": "Request quote",
                        "link": "/request-quote",
                        "button_style": "btn btn-secondary btn-animation-two"
                    }
                ]
            },
            "hero_section": {
                // "max_width": "991",
                "right_column_image": "https://res.cloudinary.com/irwujctd/image/upload/w_768/v1785938994/Control_panel_of_CNC_press_202608050706_vdyaxo.jpg",
                "title": "The mark of quality in shipboard furniture",
                "subtitle": "San Diego shipboard interiors manufacturer offering comprehensive in-house fabrication services for the Pacific, Atlantic, and Gulf military fleets, alongside Coast Guard and commercial vessels. As an ISO 9001:2015 certified company, we deliver MIL-SPEC compliant solutions.",
                "buttons": [
                    {
                        "text": "Explore capabilities",
                        "link": "/about/manufacturing-capabilities",
                        "button_style": "btn btn--primary btn-animation-four"
                    },
                    {
                        "text": "Request a quote",
                        "link": "/request-quote",
                        "button_style": "btn btn-secondary btn-animation-two"
                    }
                ]
            },
            "about_pmi": {
                "left_side": {
                    "image": "https://res.cloudinary.com/irwujctd/image/upload/w_768/v1785939104/Worker_operating_industrial_pres__202608050710_md3qki.jpg"
                },
                "right_side": {
                    "top_text": {
                        "align_left": true,
                        "title": "Comprehensive Manufacturing Services",
                        "subtitle": "<p>The professionals at Pacific Maritime Industries Corp. have built a reputation for quality products and services for the U.S. Navy, ship repair yards, the maritime fleet, and a variety of other on-the-water customers. We manufacture more than shipboard interiors; our capabilities extend to heavy-duty platforms, ladders, and metal joiner doors</p><p>It’s the superior quality and unsurpassed reliability of our fabrication process—managed through a centralized ERP software system for total digital traceability—along with our commitment to hands-on customer service that sets us apart.</p><p>Pacific Maritime Industries Corp. proudly manufactures structural components and modular interiors for the U.S. Navy Shipboard Habitability Program, custom-built to balance crew comfort with strict space efficiency.</p>"
                    },
                }
            },
            "milestones_section": {
                "top_text": {
                    "small_title": "Milestones",
                    "title": "Four decades of precision engineering for the fleet",
                    "subtitle": "A timeline of continuous service to the U.S. Navy and prime contractors. Each date marks a commitment to quality and on-time delivery.",
                    "buttons": [
                        {
                            "text": "Careers",
                            "link": "/careers",
                            "button_style": "btn btn-black-outline btn-animation-two"
                        }
                    ]
                },
                "timeline": [
                    {
                        "year": "1979",
                        "title": "Humble dockside beginnings",
                        "subtitle": "Founded in San Diego to serve Navy ship repair contracts. The work was hard, the standards were high, and the reputation grew fast."
                    },
                    {
                        "year": "1987",
                        "title": "First major retrofit",
                        "subtitle": "Awarded our first MSC berthing system retrofit contract. This job proved we could handle complex modular manufacturing under tight deadlines."
                    },
                    {
                        "year": "1998",
                        "title": "Capacity expands",
                        "subtitle": "Expanded to a fully equipped 45,000 square foot facility. The new floor space allowed for simultaneous fabrication of multiple large-scale shipboard furniture projects."
                    },
                    {
                        "year": "2007",
                        "title": "Digital traceability",
                        "subtitle": "Implemented SolidWorks CAD and MetalSoft production control. Every cut, weld, and assembly point now had a digital record from design to delivery."
                    }
                ]
            },
            "capabilities_section": {
                "top_text": {
                    "title": "Engineered and fabricated under one roof",
                    "subtitle": "The state-of-the-art facilities and talent to take your project from concept to shipyard integration."
                },
                "columns": [
                    {
                        "icon": "engineering",
                        "title": "Engineering",
                        "subtitle": "3D CAD simulation drives every design to ensure strict MIL-SPEC compliance.",
                        "buttons": [
                            {
                                "text": "Learn More",
                                "link": "/about/manufacturing-capabilities",
                                "button_style": "btn btn-secondary btn-animation-two"
                            }
                        ]
                    },
                    {
                        "icon": "fabrication",
                        "title": "Fabrication",
                        "subtitle": "Over 45,000 sq ft of CNC cutting, welding, and finishing capacity in San Diego.",
                        "buttons": [
                            {
                                "text": "Learn More",
                                "link": "/about/manufacturing-capabilities",
                                "button_style": "btn btn-secondary btn-animation-two"
                            }
                        ]
                    },
                    {
                        "icon": "logistics",
                        "title": "STAGING & LOGISTICS",
                        "subtitle": "Pre-assembled modules are palletized, secured, and ready for immediate on-board fit-out by crews.",
                        "buttons": [
                            {
                                "text": "Learn More",
                                "link": "/about/manufacturing-capabilities",
                                "button_style": "btn btn-secondary btn-animation-two"
                            }
                        ]
                    },
                ]
            },
            "our_team_section": {
                "top_text": {
                    "small_title": "Leadership",
                    "title": "Our team",
                    "subtitle": "Three decades of experience in maritime manufacturing, fabrication, and quality control. These are the people who deliver on every contract.",
                    "buttons": [
                        {
                            "text": "Open positions",
                            "link": "/careers",
                            "button_style": "btn btn-secondary btn-animation-two"
                        }
                    ]
                },
                "team_members": [
                    {
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/v1784913543/team-member-placeholder_wpiqzi.png",
                        "name": "John Atkinson",
                        "position": "President",
                        "description": "5 years in maritime manufacturing. Former NASSCO production planner. Founded PMI in 1979. He oversees all contract execution.",
                        "phone": process.env.CONTACT_PHONE_NUMBER,
                        "email": "jatkinson@pacmaritime.com",
                        "social_media": [
                            {
                                "icon": "linkedin",
                                "link": ""
                            }
                        ]
                    }
                ]
            },
            "process_section": {
                "top_text": {
                    "small_title": "Process",
                    "title": "From ship spec to final sign-off in four steps",
                    "subtitle": "A disciplined workflow that respects the Navy's requirements and your schedule. Every step is documented and traceable."
                },
                "steps": [
                    {
                        "icon": "design-and-quote",
                        "title": "REVIEW AND QUOTE",
                        "description": "We treat every request for quote as urgent. We return a firm-fixed-price and fabrication lead time the same day or the following day. Preliminary drawings are included for new fabrications or substantial modifications."
                    },
                    {
                        "icon": "engineering",
                        "title": "TECHNICAL PLANNING",
                        "description": "Using SolidWorks and our extensive, in-house archive of standard Navy manufacturing drawings, we finalize shop routing to ensure flawless first-time execution and MIL-SPEC compliance without technical delays."
                    },
                    {
                        "icon": "fabrication",
                        "title": "FABRICATION AND QUALITY CONTROL",
                        "description": "Production runs with in-process inspection. Final dimensional and coating checks meet all contract requirements."
                    },
                    {
                        "icon": "logistics",
                        "title": "STAGING AND LOGISTICS",
                        "description": "Components are meticulously wrapped, palletized, and securely staged at our San Diego facility for seamless load-out and transport by logistics teams."
                    },
                ],
                "buttons": [
                    {
                        "text": "Contact",
                        "link": "/contact",
                        "button_style": "btn btn-secondary btn-animation-two"
                    },
                    {
                        "text": "Careers",
                        "link": "/careers",
                        "button_style": "btn btn--primary btn-animation-four"
                    }
                ]
            },
            "contracts_section": {
                "top_text": {
                    "small_title": "References",
                    "title": "Contracts that Prove the Work"
                },
                "contracts_text": {
                    "description": "With three decades of manufacturing experience, Pacific Maritime Industries Corp has a proven track record of delivering high-quality marine equipment to the defense sector. As a trusted government contractor, we hold multiple Indefinite Delivery/Indefinite Quantity (IDIQ) contracts to supply essential habitability and storage solutions for naval vessels.",
                    "title": "Notable contracts",
                    "contracts": [
                        // {
                        //     "description": "The Fleet & Industrial Supply Center has awarded an Indefinite Delivery Order IDTC Habitability Contract to Pacific Maritime Industries.",
                        //     "number": "N00244-02-D-0039",
                        //     "contact_info_title": "FISC Contact Information",
                        //     "contact_name": "Pat Walsh",
                        //     "contact_phone": "(619) 556-2116",
                        //     "contact_email": "patrick.walsh@navy.mil"
                        // }
                        {
                            "contact_info_title": "Marine Recreation Furniture",
                            "description": "Supplying durable, marine-grade recreation and lounge furniture designed to withstand rigorous maritime environments while improving crew morale and comfort during extended deployments.",
                            "number": "N0018925D0013",
                            "contact_name": "",
                            "contact_phone": "",
                            "contact_email": ""
                        },
                        {
                            "contact_info_title": "Navy Shipboard Lavatory Countertops",
                            "description": "Manufacturing specialized lavatory countertops fabricated to meet stringent military specifications for hygiene, durability, and space efficiency in shipboard washrooms.",
                            "number": "N0018925D0014",
                            "contact_name": "",
                            "contact_phone": "",
                            "contact_email": ""
                        },
                        {
                            "contact_info_title": "Lightweight Modular Berthing Systems",
                            "description": "Fabricating modern, lightweight modular berths that optimize limited cabin space. These systems are designed to enhance overall crew habitability, rest, and safety on active-duty vessels.",
                            "number": "N0018925D0027",
                            "contact_name": "",
                            "contact_phone": "",
                            "contact_email": ""
                        },
                        {
                            "contact_info_title": "Heavy-Duty Shipboard Lockers",
                            "description": "Producing secure, space-efficient storage lockers tailored for crew organization. Built to military standards, these lockers provide robust personal storage solutions that integrate seamlessly into shipboard living quarters.",
                            "number": "N0018925D0036",
                            "contact_name": "",
                            "contact_phone": "",
                            "contact_email": ""
                        },
                    ]
                },
                "buttons": [
                    {
                        "text": "Contact",
                        "link": "/contact",
                        "button_style": "btn btn-secondary btn-animation-two"
                    },
                    {
                        "text": "Request quote",
                        "link": "/request-quote",
                        "button_style": "btn btn--primary btn-animation-four"
                    }
                ]
            },
        },
        "manufacturing_capabilities_page": {
            "meta_data": {
                "title": "Manufacturing Capabilities and Equipment",
                "description": "Operating 66,000 square feet of advanced CNC fabrication space alongside 14,000 square feet of inventory staging in San Diego. We manufacture MIL-SPEC compliant shipboard interiors, doors, platforms, and ladders for the Pacific, Atlantic, and Gulf fleets."
            },
            "call_to_action": {
                "title": "Same-day or next-day quote guaranteed",
                "subtitle": "Every RFQ is flagged urgent. Our estimating team commits to a complete, line-item quotation within one business day.",
                "buttons": [
                    {
                        "text": "Request quote",
                        "link": "/request-quote",
                        "button_style": "btn btn-secondary btn-animation-two"
                    }
                ]
            },
            "hero_section": {
                // "max_width": "768",
                "right_column_image": "https://res.cloudinary.com/irwujctd/image/upload/w_768/v1785941197/worker-at-cnc-machine_1_puance.png",
                "title": "Manufacturing Capabilities and Equipment",
                "subtitle": "Operating 66,000 square feet of advanced CNC fabrication space alongside 14,000 square feet of inventory staging in San Diego. We manufacture MIL-SPEC compliant shipboard interiors, doors, platforms, and ladders for the Pacific, Atlantic, and Gulf fleets.",
                "buttons": [
                    {
                        "text": "Request a quote",
                        "link": "/request-quote",
                        "button_style": "btn btn--primary btn-animation-four"
                    }
                ]
            },
            "two_columns_left_side_image": {
                "left_side_image": "https://res.cloudinary.com/irwujctd/image/upload/h_810/v1785168851/machine-shop_rou5my.png",
                "top_text": {
                    "small_title": "Facility",
                    "title": "San Diego production facility",
                    "subtitle": "Forty-five thousand square feet of precision fabrication capacity at the Port of San Diego. We have been turning Navy-grade specifications into staged, finished shipboard interiors since 1979"
                },
                "numbers": [
                    {
                        "number": "45,000",
                        "text": "Square feet of production floor"
                    },
                    {
                        "number": "1979",
                        "text": "Year established in San Diego"
                    }
                ],
                "buttons": [
                    {
                        "text": "Contact",
                        "link": "/contact",
                        "button_style": "btn btn-black-outline btn-animation-two"
                    }
                ]
            },
            "workflow_section": {
                "top_text": {
                    "small_title": "Workflow",
                    "title": "From Drawing to Deployment in Four Steps",
                    "subtitle": "A clear production pipeline that moves your project from SolidWorks model to final acceptance aboard the vessel. Every step is measured and documented."
                },
                "columns": [
                    {
                        "icon": "drafting-compass",
                        "title": "Design & Technical Planning",
                        "description": "SolidWorks CAD modeling, BOM generation, and leveraging our extensive in-house archive of standard Navy manufacturing drawings for rapid production routing."
                    },
                    {
                        "icon": "request-quote",
                        "title": "RAPID RFQ & PLANNING",
                        "description": "Every RFQ is treated as urgent. We return firm-fixed pricing, lead times, and conceptual drawings (for new or custom modifications) the same day or following day."
                    },
                    {
                        "icon": "engineering",
                        "title": "FABRICATION & QC",
                        "description": "Laser cutting, waterjet, CNC punching, forming, and welding tracked in real time through our centralized ERP software system for total digital traceability."
                    },
                    {
                        "icon": "clipboard",
                        "title": "STAGE & DISPATCH",
                        "description": "Pre-assembled components are palletized, tightly wrapped, and staged for immediate freight dispatch."
                    },
                ],
                "buttons": [
                    {
                        "text": "Request a quote",
                        "link": "/request-quote",
                        "button_style": "btn btn-secondary btn-animation-two"
                    }
                ]
            },
            "equipment_section": {
                "top_text": {
                    "small_title": "Equipment",
                    "title": "Major Equipment by Process",
                    "subtitle": "The machines that turn specification into steel."
                },
                "equipment_list": [
                    {
                        "small_title": "CNC Press Brake",
                        "title": "Amada HDS 2204 NT",
                        "subtitle": "A high-performance, 240-ton CNC press brake featuring a Hybrid Drive system for low energy consumption. Designed for precise bending of heavy sheet metal up to 161.4 inches.",
                        "bottom_image": "https://res.cloudinary.com/irwujctd/image/upload/w_768/v1785875916/Amada_HDS_2204_NT_xo7ahy.jpg"
                    },
                    {
                        "small_title": "Abrasive Waterjet",
                        "title": "OMAX Waterjet",
                        "subtitle": "A precision abrasive waterjet cutting system utilizing Intelli-TRAX linear drive technology for clean cuts on thick metals without heat-affected zones.",
                        "bottom_image": "https://res.cloudinary.com/irwujctd/image/upload/w_768/v1785875981/OMAX_Waterjet_d4keut.jpg"
                    },
                    {
                        "small_title": "CNC Press Brake",
                        "title": "Amada HG ATC Series Press Brake",
                        "subtitle": "An advanced 110-ton press brake equipped with an integrated Automatic Tool Changer (ATC) to eliminate manual setup delays during high-mix production runs.",
                        "bottom_image": "https://res.cloudinary.com/irwujctd/image/upload/w_768/v1785876049/Amada_HG_ATC_Series_Press_Brake_pl68sf.jpg"
                    },
                    {
                        "small_title": "Automation",
                        "title": "Amada ASFH 3015 E",
                        "subtitle": "High-speed automated material storage tower and pallet changer designed to store heavy sheet stock and feed adjacent laser systems automatically.",
                        "bottom_image": "https://res.cloudinary.com/irwujctd/image/upload/w_768/v1785876116/Amada_ASFH_3015_E_rtu6ke.jpg"
                    },
                    {
                        "small_title": "Punch & Fiber Laser",
                        "title": "Amada EML 2515 AJ",
                        "subtitle": "High-speed punch and fiber laser combination system allowing complex profiling, punching, and forming to be completed on a single machine without transferring stock.",
                        "bottom_image": "https://res.cloudinary.com/irwujctd/image/upload/w_768/v1785876252/Amada_EML_2515_AJ_giew1b.jpg"
                    },
                ]
            },
            "production_capacity_section": {
                "top_text": {
                    "small_title": "Capacity",
                    "title": "Production capacity and lead times you can plan against",
                    "subtitle": "We run one to two shifts with surge capacity to three. Typical weekly throughput is 1,200 sheet metal parts and 80 welded assemblies. Lead times are small parts in one to two weeks, medium assemblies in three to six weeks, and large custom projects by schedule."
                },
                "production_statistics": [
                    {
                        "number": "1,200",
                        "text": "Sheet metal parts weekly"
                    },
                    {
                        "number": "80",
                        "text": "Welded assemblies weekly"
                    },
                    {
                        "icon": "plus-minus",
                        "number": "0.1",
                        "text": "Laser tolerance in MM"
                    },
                    {
                        "number": "3",
                        "text": "Shift surge capacity"
                    }
                ]
            },
            "quality_section": {
                "top_text": {
                    "small_title": "Quality",
                    "title": "Quality, testing and finishing",
                    "subtitle": "Every part is checked. Every finish is tested. The documentation proves it.",
                    "buttons": [
                        {
                            "text": "Request a quote",
                            "link": "/request-quote",
                            "button_style": "btn btn-black-outline btn-animation-two"
                        }
                    ]
                },
                "right_side_column": {
                    "left_side_image": "https://res.cloudinary.com/irwujctd/image/upload/v1785184237/testing-piece-of-steel_vbrzvx.png",
                    "top_text": {
                        "small_title": "QA",
                        "title": "Checkpoints at every critical stage",
                        "subtitle": "We inspect at receiving, first‑article, in‑process weld, pre‑finish, and final assembly. Nothing moves forward without a sign‑off.",
                        "buttons": [
                            {
                                "text": "Request a quote",
                                "link": "/request-quote",
                                "button_style": "btn btn-black-outline btn-animation-two"
                            }
                        ]
                    }

                }
            }
        },
        "equipment_list_page": {
            "meta_data": {
                "title": "Equipment List",
                "description": "45,000 sq. ft. San Diego facility with in-house fabrication, finishing, and assembly resources."
            },
            "hero_section": {
                "title": "Equipment List",
                "subtitle": "45,000 sq. ft. San Diego facility with in-house fabrication, finishing, and assembly resources.",
                "center_text": true
            },
            "laser_and_waterjet_cutting_section": {
                "image_side": "left",
                "items_axis": "horizontal",
                "items_with_bottom_border": false,
                "top_text_included": true,
                "top_text_alignment": "left",
                "tabs_included": false,
                "top_text": {
                    "small_title": "Precision",
                    "title": "Laser and Waterjet Cutting"
                },
                "column_one": {
                    "image": "https://res.cloudinary.com/irwujctd/image/upload/h_800/v1785254396/laser-mazak-hyper-turbo-x_jenjtj.png"
                },
                "column_two": {
                    "top_text": {
                        "subtitle": "Two distinct cutting technologies for any material or tolerance. From high-speed steel profiling to cold-cut aluminum.",
                    },
                    "buttons": [
                        {
                            "text": "Request a quote",
                            "link": "/request-quote",
                            "button_style": "btn btn-black-outline btn-animation-two"
                        }
                    ],
                    "items": [
                        {
                            "icon": "2x",
                            "title": "Mazak Hyper Turbo-X",
                            "subtitle": "Laser load/unload cell, high-speed 2D cutting, automated material handling."
                        },
                        {
                            "icon": "water-lightning",
                            "title": "Omax Waterjet 55100",
                            "subtitle": "Abrasive waterjet, 5' x 10' bed, cold-cut process for sensitive alloys."
                        }
                    ]
                }
            },
            "cnc_punching_section": {
                "image_side": "right",
                "items_axis": "horizontal",
                "items_with_bottom_border": false,
                "top_text_included": true,
                "top_text_alignment": "center",
                "tabs_included": true,
                "top_text": {
                    "small_title": "Punching",
                    "title": "CNC Punching"
                },
                "tabs": [
                    {
                        "title": "Amada Vipro 255",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_768/v1785257202/amada-vipro-255-quantity-3_k4dvrz.png",
                        "content": [
                            {
                                "small_title": "Speed",
                                "title": "Amada Vipro 255, quantity 3",
                                "subtitle": "High-speed 30-ton turret punch presses. Two units are equipped with automated loaders for lights-out production.",
                                "heading_type": "h3",
                                "buttons": [
                                    {
                                        "text": "Request a quote",
                                        "link": "/request-quote",
                                        "button_style": "btn btn-black-outline btn-animation-two"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Amada Pega 345",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_768/v1785261242/Amada-Pega-345-Queen-with-Loader_gj4tuo.jpg",
                        "content": [
                            {
                                "small_title": "Efficient",
                                "title": "Amada Pega 345 Queen with Loader",
                                "subtitle": "The Pega is one of the most efficient 58 station turrets available. It has a programmable work chute and an in-table automatic crank shaft lubrication.",
                                "buttons": [
                                    {
                                        "text": "Request a quote",
                                        "link": "/request-quote",
                                        "button_style": "btn btn-black-outline btn-animation-two"
                                    }
                                ]
                            }
                        ]
                    }
                ],
            },
            "amada_rg_series_section": {
                "image_side": "left",
                "items_axis": "vertical",
                "items_with_bottom_border": false,
                "top_text_included": false,
                "tabs_included": false,
                "column_two_top_text_position": "bottom",
                "column_one": {
                    "image": "https://res.cloudinary.com/irwujctd/image/upload/w_768/v1785261826/amada-rg-100_bi0oja.png"
                },
                "column_two": {
                    "items": [
                        {
                            "icon": "blinds",
                            "title": "Amada RG 100",
                            "subtitle": "Two 110-ton precision press brakes. They have a 10-foot bed length and multi-axis back gauge for complex bends."
                        },
                        {
                            "icon": "screen",
                            "title": "Amada RG 500",
                            "subtitle": "Three 55-ton press brakes for smaller components. They deliver speed and accuracy on tight flanges."
                        },
                        {
                            "icon": "compress",
                            "title": "Amada FBD and Accupress",
                            "subtitle": "Hydraulic press brakes for heavy-gauge forming and coining. They shape the thickest locker shells we build."
                        }
                    ],
                    "buttons": [
                        {
                            "text": "Request a quote",
                            "link": "/request-quote",
                            "button_style": "btn btn-black-outline btn-animation-two"
                        }
                    ],
                }
            },
            "cnc_shearing": {
                "image_side": "right",
                "items_axis": "vertical",
                "items_with_bottom_border": true,
                "top_text_included": true,
                "top_text_alignment": "center",
                "tabs_included": false,
                "top_text": {
                    "small_title": "Shearing",
                    "title": "CNC Shearing",
                    "subtitle": "Programmed for nested blank optimization. We cut high-volume parts with minimal waste.",
                    "buttons": [
                        {
                            "text": "Request a quote",
                            "link": "/request-quote",
                            "button_style": "btn btn-black-outline btn-animation-two"
                        }
                    ],
                },
                "column_one": {
                    "image": "https://res.cloudinary.com/irwujctd/image/upload/w_600/v1785266251/amada-3060-with-conveyors_vteh0h.png"
                },
                "column_two": {
                    "items": [
                        {
                            "title": "Amada 3060 with conveyors",
                            "subtitle": "Quarter-inch by 10-foot capacity. Auto-sheet feed and part sorting for continuous operation."
                        },
                        {
                            "title": "Amada 3040 with conveyors",
                            "subtitle": "10-gauge by 4-foot capacity. High-speed cycling for thin-gauge blanks."
                        },
                        {
                            "title": "Amada M-1245 48-inch mechanical shear",
                            "subtitle": "16-gauge capacity. Rapid blanking for high-volume locker parts."
                        }
                    ]

                }
            },
            "machining_section": {
                "image_side": "right",
                "items_axis": "horizontal",
                "items_with_bottom_border": false,
                "top_text_included": true,
                "top_text_alignment": "center",
                "tabs_included": true,
                "top_text": {
                    "small_title": "Machining",
                    "title": "CNC Machining"
                },
                "tabs": [
                    {
                        "title": "Haas Minimill",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_768/v1785268361/haas-cnc-milling_njyvxj.png",
                        "content": [
                            {
                                "small_title": "Compact",
                                "title": "Haas CNC Milling",
                                "subtitle": "The Haas VF-3 is a rugged, medium-sized VMC that yields full reliability and accuracy. The VF-3 produces either 75 ft-lb of torque at a low 1400 rpm, or 250 ft-lb at 450 rpm with the optional 2-speed gearbox -- and will also run up to 7500 rpm in 1.2 seconds for finishing aluminum.",
                                "heading_type": "h3",
                                "buttons": [
                                    {
                                        "text": "Request a quote",
                                        "link": "/request-quote",
                                        "button_style": "btn btn-black-outline btn-animation-two"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Takisawa lathes",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_768/v1785269320/Takisawa_CNC_Lathe_machine_01_erwba4.png",
                        "content": [
                            {
                                "small_title": "Turning",
                                "title": "Takisawa lathes",
                                "subtitle": "Use the latest technology for a perfect and balanced integration of controller, servo motors and mechanics. Great solution for small batches of complex parts with advanced safety features that reduce time dramatically due to operator errors.",
                                "heading_type": "h3",
                                "buttons": [
                                    {
                                        "text": "Request a quote",
                                        "link": "/request-quote",
                                        "button_style": "btn btn-black-outline btn-animation-two"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Fadal mills",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_768/v1785269731/White_Fadal_CNC_milling_machine_202607281315_cdrogp.jpg",
                        "content": [
                            {
                                "small_title": "Milling",
                                "title": "Fadal CNC Milling",
                                "subtitle": "VMC 4020 with a WYE/Delta 15,000 RPM spindle system that delivers a wider range of cutting performance for high-speed aluminum operations.",
                                "heading_type": "h3",
                                "buttons": [
                                    {
                                        "text": "Request a quote",
                                        "link": "/request-quote",
                                        "button_style": "btn btn-black-outline btn-animation-two"
                                    }
                                ]
                            }
                        ]
                    }
                ],
            },
            "welding_section": {
                "image_side": "none",
                "items_axis": "horizontal",
                "items_with_bottom_border": false,
                "top_text_included": true,
                "top_text_alignment": "left",
                "tabs_included": false,
                "top_text": {
                    "small_title": "Welding",
                    "title": "Welding and certified fusion",
                },
                "column_two": {
                    "top_text": {
                        "subtitle": "All weld procedures are qualified and documented per contract requirements. Steel, stainless, and aluminum capability under one roof."
                    },
                    "items": [
                        {
                            "title": "Resistance",
                            "subtitle": "Amada spotwelder and two Janda spotwelders for sheet metal tacking."
                        },
                        {
                            "title": "Fusion",
                            "subtitle": "Ten TIG/MIG weld stations certified to MIL-STD-22 and NAVSEA TP 248."
                        }
                    ],
                    "buttons": [
                        {
                            "text": "Request a quote",
                            "link": "/request-quote",
                            "button_style": "btn btn-black-outline btn-animation-two"
                        }
                    ]
                }
            },
            "secondary_operations_section": {
                "image_side": "right",
                "items_axis": "vertical",
                "items_with_bottom_border": true,
                "top_text_included": true,
                "top_text_alignment": "center",
                "tabs_included": false,
                "top_text": {
                    "small_title": "Finish",
                    "title": "Forming, Cutting and Secondary Operations",
                    "subtitle": "Complete in-house powder coating capability, upholstery shop, and laminate shop for full turnkey assembly. We finish what we fabricate.",
                    "buttons": [
                        {
                            "text": "Request a quote",
                            "link": "/request-quote",
                            "button_style": "btn btn-black-outline btn-animation-two"
                        }
                    ]
                },
                "column_one": {
                    "image": "https://res.cloudinary.com/irwujctd/image/upload/w_768/v1785270570/amada_di4lub.png"
                },
                "column_two": {
                    "items": [
                        {
                            "title": "Forming",
                            "subtitle": "Webb Rolls and Eagle Tube Rolls for radius forming of brackets and stiffeners."
                        },
                        {
                            "title": "Sawing",
                            "subtitle": "Amada HA-250 band saw, George Fisher RA-6, Pedrazzoli cold saw, and misc. extrusion saws."
                        },
                        {
                            "title": "Deburr and Finishing",
                            "subtitle": "Time Saver 36\"W MDL, RAMCO MDL, Burr King deburring machines, and a Honeycomb Press."
                        }
                    ]
                }
            }
        },
        "catalogs_page": {
            "meta_data": {
                "title": "Catalogs & Downloads",
                "description": "Access the complete Naval Shipboard Furniture Catalog, Metal Joiner Door Catalog, and individual product datasheets.",
            },
            // "hero_section": {
            //     "title": "Catalogs & downloads",
            //     "subtitle": "Access the complete Naval Shipboard Furniture Catalog, Metal Joiner Door Catalog, and individual product datasheets. Download CAD files, DWGs, and technical PDFs.",
            //     "center_text": true
            // },
            "catalogs_interactive_section": {
                "catalogs": [
                    {
                        "id": "naval-furniture",
                        "tab_name": "Naval Shipboard Furniture Catalog",
                        "title": "NAVAL SHIPBOARD FURNITURE CATALOG",
                        "subtitle": "The complete 145-page stateroom and berthing systems catalog",
                        "download_url": "#",
                        "categories": [
                            "ALL FILES",
                            "REFERENCE DIAGRAMS",
                            "HONEYCOMB CORE",
                            "METAL JOINER",
                            "FUME TIGHT / FIRE ZONE",
                            "ACCESSORIES & REPLACEMENT PARTS",
                            "SUPERSEDED DOOR TYPE SCHEDULE"
                        ],
                        "files": [
                            {
                                "category": "HONEYCOMB CORE",
                                "title": "TYPE-1 MODEL",
                                "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1784747872/B-1A-1_h1chds.jpg",
                                "download_url": "#"
                            },
                            {
                                "category": "HONEYCOMB CORE",
                                "title": "TYPE-1 (ALTERNATIVE) MODEL",
                                "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1784747872/B-1A-1_h1chds.jpg",
                                "download_url": "#"
                            },
                            {
                                "category": "HONEYCOMB CORE",
                                "title": "TYPE-2 (6 1/4\" SILL) MODEL",
                                "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1784747872/B-1A-1_h1chds.jpg",
                                "download_url": "#"
                            },
                            {
                                "category": "METAL JOINER",
                                "title": "TYPE-3 MODEL",
                                "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1784747872/B-1A-1_h1chds.jpg",
                                "download_url": "#"
                            },
                            {
                                "category": "METAL JOINER",
                                "title": "TYPE-3 (ALTERNATE SILL) MODEL",
                                "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1784747872/B-1A-1_h1chds.jpg",
                                "download_url": "#"
                            },
                            {
                                "category": "FUME TIGHT / FIRE ZONE",
                                "title": "TYPE-4 FUME TIGHT (6 1/4\" SILL) MODEL",
                                "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1784747872/B-1A-1_h1chds.jpg",
                                "download_url": "#"
                            },
                            {
                                "category": "FUME TIGHT / FIRE ZONE",
                                "title": "TYPE-4 FUME TIGHT (6 1/4\" SILL) MODEL",
                                "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1784747872/B-1A-1_h1chds.jpg",
                                "download_url": "#"
                            }
                        ]
                    },
                    // {
                    //     "id": "metal-joiner",
                    //     "tab_name": "Metal Joiner Door Catalog",
                    //     "title": "METAL JOINER DOOR CATALOG",
                    //     "subtitle": "NAVSEA-compliant door assemblies, frames, hardware and drawings",
                    //     "download_url": "#",
                    //     "categories": [
                    //         "ALL FILES",
                    //         "DOOR ASSEMBLIES",
                    //         "FRAMES",
                    //         "HARDWARE"
                    //     ],
                    //     "files": [
                    //         {
                    //             "category": "DOOR ASSEMBLIES",
                    //             "title": "TYPE-1 METAL JOINER DOOR",
                    //             "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1784747872/B-1A-1_h1chds.jpg",
                    //             "download_url": "#"
                    //         },
                    //         {
                    //             "category": "FRAMES",
                    //             "title": "TYPE-A DOOR FRAME DETAILS",
                    //             "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1784747872/B-1A-1_h1chds.jpg",
                    //             "download_url": "#"
                    //         },
                    //         {
                    //             "category": "HARDWARE",
                    //             "title": "SHOCK-GRADE DOOR LOCKSETS",
                    //             "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1784747872/B-1A-1_h1chds.jpg",
                    //             "download_url": "#"
                    //         }
                    //     ]
                    // },
                    // {
                    //     "id": "pacific-maritime-furniture",
                    //     "tab_name": "Pacific Maritime Furniture Catalog",
                    //     "title": "PACIFIC MARITIME FURNITURE CATALOG",
                    //     "subtitle": "Commercial shipboard furniture, berths, and custom seating designs",
                    //     "download_url": "#",
                    //     "categories": [
                    //         "ALL FILES",
                    //         "BERTHING SYSTEMS",
                    //         "SEATING & LOUNGE",
                    //         "WARDROOM FURNITURE"
                    //     ],
                    //     "files": [
                    //         {
                    //             "category": "BERTHING SYSTEMS",
                    //             "title": "MODULAR 3-TIER BERTH MODEL",
                    //             "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1784747872/B-1A-1_h1chds.jpg",
                    //             "download_url": "#"
                    //         },
                    //         {
                    //             "category": "SEATING & LOUNGE",
                    //             "title": "HEAVY-DUTY NAVY CHAIRS",
                    //             "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1784747872/B-1A-1_h1chds.jpg",
                    //             "download_url": "#"
                    //         }
                    //     ]
                    // },
                    // {
                    //     "id": "pacific-maritime-parts",
                    //     "tab_name": "Pacific Maritime Parts Catalog",
                    //     "title": "PACIFIC MARITIME PARTS CATALOG",
                    //     "subtitle": "Shock-grade hardware, latches, hinges, and marine locksets",
                    //     "download_url": "#",
                    //     "categories": [
                    //         "ALL FILES",
                    //         "LOCKSETS & LATCHES",
                    //         "HINGES",
                    //         "FASTENERS"
                    //     ],
                    //     "files": [
                    //         {
                    //             "category": "LOCKSETS & LATCHES",
                    //             "title": "CYLINDER SHOCK LATCH SPEC",
                    //             "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1784747872/B-1A-1_h1chds.jpg",
                    //             "download_url": "#"
                    //         },
                    //         {
                    //             "category": "HINGES",
                    //             "title": "NAVY BRONZE HINGE DRAWING",
                    //             "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1784747872/B-1A-1_h1chds.jpg",
                    //             "download_url": "#"
                    //         }
                    //     ]
                    // }
                ]
            },
            "shipboard_furniture_catalog": {
                "title": "Shipboard Furniture Catalog",
                "subtitle": `The official US Navy Shipboard Furniture Catalog (SFC) which is updated at: <a href='https://navlogtd.navy.mil/habitability' rel='noopener noreferrer'>navlogtd.navy.mil/habitability</a>`,
                "headers": [
                    "Category",
                    "Section Title",
                    "Item",
                    "File Link"
                ],
                "rows": [
                    {
                        "category": "Beds and Berths",
                        "section_title": "Beds and Berths (Officer)",
                        "item": "Bed, Cabin-Stateroom",
                        "file_link": "B-1A-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1784747872/B-1A-1_h1chds.jpg",
                    },
                    {
                        "category": "Beds and Berths",
                        "section_title": "Beds and Berths (Officer)",
                        "item": "Berth, Officer's, Size 1 & 2, Single or Double",
                        "file_link": "B-1A-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785525027/B-1A-2_bnorlb.jpg",
                    },
                    {
                        "category": "Beds and Berths",
                        "section_title": "Beds and Berths (Officer)",
                        "item": "Berth, Transom, Officer, Types L36 & L36-W31",
                        "file_link": "B-1A-3",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785525113/B-1A-3_fd60ad.jpg",
                    },
                    {
                        "category": "Beds and Berths",
                        "section_title": "Beds and Berths (Officer)",
                        "item": "Berth, Transom, with Fold-Away Table",
                        "file_link": "B-1A-4",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785525167/B-1A-4_d1zbhz.jpg",
                    },
                    {
                        "category": "Beds and Berths",
                        "section_title": "Berths (Enlisted Personnel)",
                        "item": "Berth, Modular, Lightweight Page 1 of 5",
                        "file_link": "B-1B-1-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785525334/B-1B-1-1_a4ujr2.jpg",
                    },
                    {
                        "category": "Beds and Berths",
                        "section_title": "Berths (Enlisted Personnel)",
                        "item": "Beth, Modular, Crew and Troop Page 2 of 55",
                        "file_link": "B-1B-1-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785525385/B-1B-1-2_lrvcue.jpg",
                    },
                    {
                        "category": "Beds and Berths",
                        "section_title": "Berths (Enlisted Personnel)",
                        "item": "Berth, Modular, Crew and Troop (cont'd) Page 3 of 5",
                        "file_link": "B-1B-1-3",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785525552/B-1B-1-3_q0ugsx.jpg",
                    },
                    {
                        "category": "Beds and Berths",
                        "section_title": "Berths (Enlisted Personnel)",
                        "item": "Berth, Modular, CPO Page 4 of 5",
                        "file_link": "B-1B-1-4",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785525641/B-1B-1-4_r8wesu.jpg",
                    },
                    {
                        "category": "Beds and Berths",
                        "section_title": "Berths (Enlisted Personnel)",
                        "item": "Berth, Modular, CPO (cont'd) Page 5 of 5",
                        "file_link": "B-1B-1-5",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785525751/B-1B-1-5_tmcskv.jpg",
                    },
                    {
                        "category": "Beds and Berths",
                        "section_title": "Berths (Enlisted Personnel)",
                        "item": "Berth, Submarine, with Lockers Under",
                        "file_link": "B-1B-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785525817/B-1B-2_pcl0hu.jpg",
                    },
                    {
                        "category": "Beds and Berths",
                        "section_title": "Berths (Enlisted Personnel)",
                        "item": "Berth, Submarine, without Lockers Under",
                        "file_link": "B-1B-3",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785525877/B-1B-3_nwwt7s.jpg",
                    },
                    {
                        "category": "Beds and Berths",
                        "section_title": "Berths (Enlisted Personnel)",
                        "item": "Berth, Folding Pullman Type",
                        "file_link": "B-1B-4",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785525931/B-1B-4_art9bk.jpg",
                    },
                    {
                        "category": "Beds and Berths",
                        "section_title": "Berths (Hospital and Miscellaneous)",
                        "item": "Berth, Hospital",
                        "file_link": "B-1C-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785526077/B-1C-1_stbwjb.jpg",
                    },
                    {
                        "category": "Beds and Berths",
                        "section_title": "Mattresses",
                        "item": "Mattresses, Ticking, and Covers for the Berths and Beds",
                        "file_link": "B-1C-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785526077/B-1C-1_stbwjb.jpg",
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Officer Staterooms",
                        "item": "Case, Toilet Article",
                        "file_link": "B-2A-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785527339/B-2A-1_nqmfkk.jpg",
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Officer Staterooms",
                        "item": "Lavatory Unit",
                        "file_link": "B-2A-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785527957/B-2A-2_ze2bpi.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Officer Staterooms",
                        "item": "Lavatory Unit, Submarine",
                        "file_link": "B-2A-3",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528009/B-2A-3_qepj2n.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Officer Staterooms",
                        "item": "Tables, Night, Types A & B",
                        "file_link": "B-2A-4",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528052/B-2A-4_leyexp.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Officer Staterooms",
                        "item": "Wardrobe, Long 24\" Modular Furniture Unit No. 5",
                        "file_link": "B-2A-5",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528074/B-2A-5_xlqap3.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Officer Staterooms",
                        "item": "Wardrobe and File Section, 24\" Modular Furniture Unit No. 12",
                        "file_link": "B-2A-6",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528093/B-2A-6_elre8u.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Officer Staterooms",
                        "item": "Wardrobe and File Section, 36\" Modular Furniture Unit No. 13",
                        "file_link": "B-2A-7",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528117/B-2A-7_nodtsy.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Officer Staterooms",
                        "item": "Locker, Secretary and Drawer Section, 24\" Modular Furniture Unit No. 14",
                        "file_link": "B-2A-8",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528137/B-2A-8_gibdwn.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Officer Staterooms",
                        "item": "Locker, Secretary and Drawer Section, 36\" Modular Furniture Unit No. 15",
                        "file_link": "B-2A-9",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528232/B-2A-9_hlkpm5.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Officer Staterooms",
                        "item": "Drawer Locker Station, 36\" Modular Furniture Unit No. 16",
                        "file_link": "B-2A-10",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785527454/B-2A-10_fxeoic.jpg",
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Officer Staterooms",
                        "item": "Chest of Drawers",
                        "file_link": "B-2A-11",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528252/B-2A-11_pyruai.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Officer Staterooms",
                        "item": "Wardrobes, Double with/without Drawer Section, 36\" or 42\"",
                        "file_link": "B-2A-12",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528232/B-2A-12_kwylvz.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Officer Staterooms",
                        "item": "Wardrobe Units S1 and S2, Short Hanging, Submarine",
                        "file_link": "B-2A-13",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528232/B-2A-13_ufkace.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Officer Staterooms",
                        "item": "Wardrobe units S3 and S4, Long Hanging, Submarine",
                        "file_link": "B-2A-14",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528233/B-2A-14_twiggm.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Officer Staterooms",
                        "item": "Secretary Bureau Unit S5, Submarine",
                        "file_link": "B-2A-15",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528255/B-2A-15_eevnld.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Officer Staterooms",
                        "item": "Drawer Units S6, S7, S8 and S9 submarine",
                        "file_link": "B-2A-16",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528256/B-2A-16_lagzte.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Officer Staterooms",
                        "item": "Locker Units S10, S11, and S12 Utility, Submarine",
                        "file_link": "B-2A-17",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528257/B-2A-17_ppmk3r.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Enlisted Berthing Spaces",
                        "item": "Mirror, Full Length, Bulkhead Mounted",
                        "file_link": "B-2B-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528235/B-2B-1_f1q1gj.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Enlisted Berthing Spaces",
                        "item": "Mirror, Mounted, Shock-hardened",
                        "file_link": "B-2B-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/v1785528222/B-2B-2_khiosu.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Enlisted Berthing Spaces",
                        "item": "Berth Curtain, Track and Suspension Systems",
                        "file_link": "B-2B-3",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528286/B-2B-3_wsooa8.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Enlisted Berthing Spaces",
                        "item": "Container, Stowage, For Emergency Escape Breathing Device (EEBD)",
                        "file_link": "B-2B-4",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528235/B-2B-4_eol560.jpg"

                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Enlisted Berthing Spaces",
                        "item": "Lockers, Soiled Clothes",
                        "file_link": "B-2B-5",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528288/B-2B-5_vl5itc.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Enlisted Berthing Spaces",
                        "item": "Locker, Clothes, Type A",
                        "file_link": "B-2B-6",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528236/B-2B-6_dbur3l.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Enlisted Berthing Spaces",
                        "item": "Locker, Overcoat, Types E and F and, Uniform, types G and H, CPO and Marine",
                        "file_link": "B-2B-7",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528260/B-2B-7_zkmown.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Enlisted Berthing Spaces",
                        "item": "Lockers, Clothes, Type B-1, Crew",
                        "file_link": "B-2B-8",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528238/B-2B-8_z306al.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Enlisted Berthing Spaces",
                        "item": "Lockers, Crew, Type B-2, Clothes",
                        "file_link": "B-2B-9",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528262/B-2B-9_p1n3nb.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Enlisted Berthing Spaces",
                        "item": "Locker, Clothes, Marine",
                        "file_link": "B-2B-10",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528239/B-2B-10_jwayzk.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Enlisted Berthing Spaces",
                        "item": "Locker, Clothes, Troop",
                        "file_link": "B-2B-11",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528239/B-2B-11_pmvexx.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Enlisted Berthing Spaces",
                        "item": "Locker, Clothes, Troop",
                        "file_link": "B-2B-12",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528240/B-2B-12_pkot3p.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Enlisted Berthing Spaces",
                        "item": "Locker, Clothing",
                        "file_link": "B-2B-13-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528292/B-2B-13-1_vdcimv.jpg"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Enlisted Berthing Spaces",
                        "item": "Locker Clothing",
                        "file_link": "B-2B-13-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528292/B-2B-13-2_g6xeon.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528267/B-3A-1_k6k3hj.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528266/B-3A-2_sqj80u.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-3",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528268/B-3A-3_iggpd4.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-4",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528271/B-3A-4_z1lyge.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-5",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528275/B-3A-5_cii65t.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-6",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528276/B-3A-6_p5hwzv.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-7",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528276/B-3A-7_kocyme.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-8",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528276/B-3A-8_imprrw.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-9",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528280/B-3A-9_vx5vsh.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-10",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528280/B-3A-10_uap31r.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-11",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528283/B-3A-11_pabxlf.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofa, Corner Unit",
                        "file_link": "B-3A-12",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528281/B-3A-12_emrpg2.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofa Sectional",
                        "file_link": "B-3A-13",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528283/B-3A-13_q3scej.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofa, Corner Unit",
                        "file_link": "B-3A-15",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528283/B-3A-15_s5apnn.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Chair, Lounge, Swivel",
                        "file_link": "B-3A-16",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528243/B-3A-16_aiy3xb.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Chair, Lounge, Reclining",
                        "file_link": "B-3A-17",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528245/B-3A-17_hajxi1.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-18",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528284/B-3A-18_ualydn.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Transom Seats, Type I Through VI, Crew Submarine",
                        "file_link": "B-3A-19",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528271/B-3A-19_ytzrqu.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Arm Chairs and Side Chairs",
                        "item": "Chair, Arm",
                        "file_link": "B-3B-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528242/B-3B-1_ber5tg.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Arm Chairs and Side Chairs",
                        "item": "Chair, Arm, Type 1, Class 1 & 2, Style A",
                        "file_link": "B-3B-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528295/B-3B-2_vowt8v.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Arm Chairs and Side Chairs",
                        "item": "Chair, without Arms, Type 1, Class 1 & 2, Style B",
                        "file_link": "B-3B-3",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528280/B-3B-3_xr8x4u.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Arm Chairs and Side Chairs",
                        "item": "Chair, without Arms, Oval Back",
                        "file_link": "B-3B-4",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528245/B-3B-4_wdnlwf.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Arm Chairs and Side Chairs",
                        "item": "Chair, without Arms",
                        "file_link": "B-3B-5",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528246/B-3B-5_vpa6zq.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Arm Chairs and Side Chairs",
                        "item": "Chair, with Arms",
                        "file_link": "B-3B-6",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528246/B-3B-6_bizyy9.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Stacking and Folding Chairs",
                        "item": "Chair, Stacking, Cast Aluminum Seat",
                        "file_link": "B-3C-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528249/B-3C-1_n2u7b4.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Stacking and Folding Chairs",
                        "item": "Chair, Folding, with Table Arm",
                        "file_link": "B-3C-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528285/B-3C-2_fqvfyq.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Stacking and Folding Chairs",
                        "item": "Chair, Folding",
                        "file_link": "B-3C-3",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528249/B-3C-3_gsvzhg.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Stacking and Folding Chairs",
                        "item": "Chair, Stacking, Upholstered Seat",
                        "file_link": "B-3C-4",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528250/B-3C-4_gzlelg.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Desk Chairs, Swivel, Tilt",
                        "item": "Chair, Desk Swivel, Tilt",
                        "file_link": "B-3D-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528253/B-3D-1_wogq2l.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Desk Chairs, Swivel, Tilt",
                        "item": "Chair, Desk, Swivel, Tilt",
                        "file_link": "B-3D-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528253/B-3D-2_vqltsb.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Desk Chairs, Swivel, Tilt",
                        "item": "Chair, Desk Secretarial Swivel, Tilt",
                        "file_link": "B-3D-3",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528253/B-3D-3_y10ybm.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Desk Chairs, Swivel, Tilt",
                        "item": "Chair, Computer",
                        "file_link": "B-3D-4",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528254/B-3D-4_dfmkpe.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Desk Chairs, Swivel, Tilt",
                        "item": "Chair, Computer",
                        "file_link": "B-3D-5",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528256/B-3D-5_yzh3y3.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Booths and Mess Seats",
                        "item": "Booths, Mess, Single & Double",
                        "file_link": "B-3E-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528286/B-3E-1_geqhw6.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Booths and Mess Seats",
                        "item": "Chair, Dining",
                        "file_link": "B-3E-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528257/B-3E-2_lynp3v.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Booths and Mess Seats",
                        "item": "Chair, Arm, Dining",
                        "file_link": "B-3E-3",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528259/B-3E-3_vajy4i.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Stools and Benches",
                        "item": "Bench with Stowage Under",
                        "file_link": "B-3F-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528259/B-3F-1_rxciwq.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Stools and Benches",
                        "item": "Benches with Stowage Under, Padded",
                        "file_link": "B-3F-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528259/B-3F-2_vyuwzd.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Stools and Benches",
                        "item": "Stools, Revolving, Types V & VA",
                        "file_link": "B-3F-3",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528288/B-3F-3_yqqhde.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Chair with Writing Tablet",
                        "file_link": "B-3G-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528288/B-3G-1_gyaa2s.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Chair, Primary Fly Control",
                        "file_link": "B-3G-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528288/B-3G-2_ao9yva.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Chair, Operator's Special-Purpose, Non-Magnetic",
                        "file_link": "B-3G-3",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528289/B-3G-3_kypiuk.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Chair, Bridge Wing, Shock Mounted, Non-Magnetic",
                        "file_link": "B-3G-4",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528262/B-3G-4_sfmmhq.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Chair, Bridge Wing",
                        "file_link": "B-3G-5",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528262/B-3G-5_dx5wz6.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Chair, Helmsman",
                        "file_link": "B-3G-6",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528262/B-3G-6_mc5hs3.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Chair, Operators",
                        "file_link": "B-3G-7",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528291/B-3G-7_v60j4z.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Chair, Operators",
                        "file_link": "B-3G-8",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528296/B-3G-8_rjf9on.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Chair, Bridge Wing- High Back",
                        "file_link": "B-3G-9",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528291/B-3G-9_pwbnhx.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Chair, Bridge Wing-Low Back",
                        "file_link": "B-3G-10",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528294/B-3G-10_itnd3q.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Chair and Foot Rest, Pilot House Folding",
                        "file_link": "B-3G-11",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528265/B-3G-11_aj0kjt.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Seat, Surface Lookout",
                        "file_link": "B-3G-12",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528263/B-3G-12_mm17qf.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Stool, Spring-Loaded",
                        "file_link": "B-3G-13",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528265/B-3G-13_sqwazw.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Seat, Folding, Bulkhead Mounted",
                        "file_link": "B-3G-14",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528265/B-3G-14_ddqkjt.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Seat, Folding, with Arms, Bulkhead Mounted",
                        "file_link": "B-3G-15",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528294/B-3G-15_jufabe.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Child, Bulkhead Mounted, Folding, Non Magnetic",
                        "file_link": "B-3G-16",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528267/B-3G-16_adbddd.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Chair, Aviator Ready Room",
                        "file_link": "B-3G-17",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528269/B-3G-17_kuvcy6.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Seating, Training and Lecture Room",
                        "file_link": "B-3G-18",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528295/B-3G-18_sjft9t.jpg"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Barber Chair",
                        "file_link": "B-3G-19",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528292/B-3G-19_vxitp5.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Dining and Serving Tables (Officer)",
                        "item": "Sideboards and Serving Tables, Modular",
                        "file_link": "B-4A-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528297/B-4A-1_bjdcki.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Dining and Serving Tables (Officer)",
                        "item": "Table, Dining, Round top",
                        "file_link": "B-4A-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528270/B-4A-2_hngdap.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Dining and Serving Tables (Officer)",
                        "item": "Table, Dining, Portable",
                        "file_link": "B-4A-3",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528272/B-4A-3_hbdlkh.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Dining and Serving Tables (Officer)",
                        "item": "Table, Dining/Coffee, Adjustable Height",
                        "file_link": "B-4A-4",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528271/B-4A-4_smpkh9.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Mess Tables (Enlisted Personnel)",
                        "item": "Tables, Mess, Portable Lightweight, Crew",
                        "file_link": "B-4B-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528298/B-4B-1_djj9tz.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Mess Tables (Enlisted Personnel)",
                        "item": "Table, Mess, Crew",
                        "file_link": "B-4B-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528225/B-4B-2_jiadwr.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Mess Tables (Enlisted Personnel)",
                        "item": "Table, Portable",
                        "file_link": "B-4B-3",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528228/B-4B-3_qp2dma.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Mess Tables (Enlisted Personnel)",
                        "item": "Mess Table w/Swivel Seats",
                        "file_link": "B-4B-4",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528226/B-4B-4_fmutti.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Mess Tables (Enlisted Personnel)",
                        "item": "Stack Table, Dining",
                        "file_link": "B-4B-5",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528221/B-4B-5_pr0cdl.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Lounge and Recreation Tables",
                        "item": "Table ,End",
                        "file_link": "B-4C-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528230/B-4C-1_gaaytv.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Lounge and Recreation Tables",
                        "item": "Tables, Lounge",
                        "file_link": "B-4C-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528230/B-4C-2_w13d7c.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Lounge and Recreation Tables",
                        "item": "Tables, Lounge",
                        "file_link": "B-4C-3",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528221/B-4C-3_ax1p4p.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Lounge and Recreation Tables",
                        "item": "Tables, Lounge",
                        "file_link": "B-4C-4",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528221/B-4C-4_e8ocsm.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Lounge and Recreation Tables",
                        "item": "Tables, Lounge",
                        "file_link": "B-4C-5",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528235/B-4C-5_j6ehv9.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Lounge and Recreation Tables",
                        "item": "Tables, Lounge",
                        "file_link": "B-4C-6",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528235/B-4C-6_dccrqv.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Lounge and Recreation Tables",
                        "item": "Table, Coffee",
                        "file_link": "B-4C-7",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528223/B-4C-7_wdt9hm.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Lounge and Recreation Tables",
                        "item": "Tables, Coffee",
                        "file_link": "B-4C-8",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528238/B-4C-8_sgoagz.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Lounge and Recreation Tables",
                        "item": "Table, Card, Folding",
                        "file_link": "B-4C-9",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528225/B-4C-9_baugfm.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Lounge and Recreation Tables",
                        "item": "Tables, Recreation, Types 1 & 11",
                        "file_link": "B-4C-10",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528239/B-4C-10_wctzdc.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Lounge and Recreation Tables",
                        "item": "Tables, Lounge",
                        "file_link": "B-4C-11",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528226/B-4C-11_etbfn7.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Work, Writing and Special Purpose Tables",
                        "item": "Table, Solid Top",
                        "file_link": "B-4D-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528242/B-4D-1_xpdxae.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Work, Writing and Special Purpose Tables",
                        "item": "Table, Folding",
                        "file_link": "B-4D-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528227/B-4D-2_jsibs0.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Work, Writing and Special Purpose Tables",
                        "item": "Table, Solid Top",
                        "file_link": "B-4D-3",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528229/B-4D-3_holwip.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Work, Writing and Special Purpose Tables",
                        "item": "Table, Writing, with Drawer",
                        "file_link": "B-4D-4",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528243/B-4D-4_d3vpnu.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Work, Writing and Special Purpose Tables",
                        "item": "Table, Writing, Bulkhead-mounted",
                        "file_link": "B-4D-5",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528245/B-4D-5_jxozbv.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Work, Writing and Special Purpose Tables",
                        "item": "Tables, Chart, Modular",
                        "file_link": "B-4D-6",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528298/B-4D-6_lazgxl.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Work, Writing and Special Purpose Tables",
                        "item": "Study Carrel",
                        "file_link": "B-4D-7",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528229/B-4D-7_xmuear.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Workstations and Computer Furniture",
                        "item": "Terminal and Printer Stand",
                        "file_link": "B-4E-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528248/B-4E-1_x7httf.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Workstations and Computer Furniture",
                        "item": "Multimedia Stowage Cabinets",
                        "file_link": "B-4E-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528249/B-4E-2_bcd0t7.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Workstations and Computer Furniture",
                        "item": "P.C. Cabinet",
                        "file_link": "B-4E-3",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785528249/B-4E-3_vjj0hh.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Workstations and Computer Furniture",
                        "item": "Computer Cabinet",
                        "file_link": "B-4E-4",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531613/B-4E-4_yggnol.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Workstations and Computer Furniture",
                        "item": "Computer Cabinets",
                        "file_link": "B-4E-5",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531615/B-4E-5_xjlmt4.jpg"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Workstations and Computer Furniture",
                        "item": "Desk,",
                        "file_link": "B-4E-6",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531618/B-4E-6_oqpk2u.jpg"
                    },
                    {
                        "category": "Desks",
                        "section_title": "Desks, Flat Top",
                        "item": "Desk, Flat Top, Double Pedestal",
                        "file_link": "B-5A-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531619/B-5A-1_gcnrlq.jpg"
                    },
                    {
                        "category": "Desks",
                        "section_title": "Desks, Flat Top",
                        "item": "Desk, Flat Top, Single Pedestal",
                        "file_link": "B-5A-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531621/B-5A-2_lmclod.jpg"
                    },
                    {
                        "category": "Desks",
                        "section_title": "Desks, Log and Special Purpose",
                        "item": "Desk, Standing, Types A & B",
                        "file_link": "B-5B-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531624/B-5B-1_xzag2y.jpg"
                    },
                    {
                        "category": "Desks",
                        "section_title": "Desks, Log and Special Purpose",
                        "item": "Desk, Log, with Hinged Top",
                        "file_link": "B-5B-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531625/B-5B-2_zbxaj3.jpg"
                    },
                    {
                        "category": "Desks",
                        "section_title": "Desks, Log and Special Purpose",
                        "item": "Desk, Log, with Drawer",
                        "file_link": "B-5B-3",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531627/B-5B-3_poh6as.jpg"
                    },
                    {
                        "category": "Desks",
                        "section_title": "Desks, Log and Special Purpose",
                        "item": "Desk, Log, Drop Leaf",
                        "file_link": "B-5B-4",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531631/B-5B-4_agzkl8.jpg"
                    },
                    {
                        "category": "Desks",
                        "section_title": "Desks, Log and Special Purpose",
                        "item": "Booth, Telephone, and Integral Log Desk",
                        "file_link": "B-5B-5",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531631/B-5B-5_t0gnt7.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Locker, Cleaning Gear or Battle Dressing Stowage",
                        "file_link": "B-6A-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531631/B-6A-1_gfthx4.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Cabinet, Plan",
                        "file_link": "B-6A-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531633/B-6A-2_cqpuvv.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Cabinet, Form",
                        "file_link": "B-6A-3",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531638/B-6A-3_efzsbm.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Cabinet, Stationery",
                        "file_link": "B-6A-4",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531638/B-6A-4_mbsxpi.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Cabinet, Key, Type A",
                        "file_link": "B-6A-5",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531639/B-6A-5_susz9g.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Cabinet, Key, Type E",
                        "file_link": "B-6A-6",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531644/B-6A-6_rxvu8e.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Cabinet, Liberty Card",
                        "file_link": "B-6A-7",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531644/B-6A-7_h3azpj.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Bookcase, 48\"",
                        "file_link": "B-6A-8",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531645/B-6A-8_uc2nod.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Bookcases, Sectional, Types A ,B & C",
                        "file_link": "B-6A-9",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531649/B-6A-9_koo6jp.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Cabinet, Filling, Types II & IV",
                        "file_link": "B-6A-10",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531650/B-6A-10_gerb73.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Cabinet, Filing, with Combination Lock",
                        "file_link": "B-6A-11",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531652/B-6A-11_ralcbn.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Cabinet, Napkin (Capacity 30 to 50)",
                        "file_link": "B-6A-12",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531655/B-6A-12_nysndf.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Cabinets, Napkin (Capacity 100 to 130)",
                        "file_link": "B-6A-13",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531656/B-6A-13_hkapum.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Lockers, Chronometer, types A, B & C",
                        "file_link": "B-6A-14",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531656/B-6A-14_p9gg4w.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "TV/Stereo Cabinet and Bookcase",
                        "file_link": "B-6A-15",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531661/B-6A-15_rlxgu4.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Cabinet, Corner",
                        "file_link": "B-6A-16",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531661/B-6A-16_tg3yct.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Key Cabinet, Wall, High Security",
                        "file_link": "B-6A-17",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531662/B-6A-17_yw7ek9.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Cabinet, Class 6- Special Size, 2 Dwr",
                        "file_link": "B-6A-18",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531667/B-6A-18_dpdpym.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Racks and Shelving",
                        "item": "Bookracks, Types I & II",
                        "file_link": "B-6B-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531667/B-6B-1_n7r7jk.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Racks and Shelving",
                        "item": "Bookracks, Types A, B & C",
                        "file_link": "B-6B-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531667/B-6B-2_wtmt6a.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Racks and Shelving",
                        "item": "Racks, Magazine, types A & B",
                        "file_link": "B-6B-3",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531672/B-6B-3_yfzwle.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Racks and Shelving",
                        "item": "Shelf for Chain-Dex Book",
                        "file_link": "B-6B-4",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531673/B-6B-4_f5tfbu.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Racks and Shelving",
                        "item": "Shelving, Library",
                        "file_link": "B-6B-5",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531673/B-6B-5_jxv5vs.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Safes and Safe Lockers",
                        "item": "Safes, Burglar-resisting, TL-30 & TL-15",
                        "file_link": "B-6C-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531554/B-6C-1_wadkzp.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Safes and Safe Lockers",
                        "item": "Money Safe",
                        "file_link": "B-6C-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531554/B-6C-2_lpaf4d.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Safes and Safe Lockers",
                        "item": "Safe, Class 6, Plan File",
                        "file_link": "B-6C-3",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531554/B-6C-3_ikf7pb.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Safes and Safe Lockers",
                        "item": "Locker, Safe, Type No.3",
                        "file_link": "B-6C-4",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531555/B-6C-4_q3t8j2.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Safes and Safe Lockers",
                        "item": "Locker, Safe, Type No.4",
                        "file_link": "B-6C-5",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531561/B-6C-5_ciyfj6.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Safes and Safe Lockers",
                        "item": "Safe, Class 6, Special Size, 1-Drawer",
                        "file_link": "B-6C-6",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531562/B-6C-6_cxst1j.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Safes and Safe Lockers",
                        "item": "Safe, Class 5, Plan File",
                        "file_link": "B-6C-7",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531562/B-6C-7_bjngl1.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Safes and Safe Lockers",
                        "item": "Locker, Safe, Type No.8",
                        "file_link": "B-6C-8",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531566/B-6C-8_gzfone.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Safes and Safe Lockers",
                        "item": "Locker, Safe, Type No. 10",
                        "file_link": "B-6C-9",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531567/B-6C-9_vaqer0.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Safes and Safe Lockers",
                        "item": "Safe, Class 6, Special Size- Millimeters, W/Interior Locks",
                        "file_link": "B-6C-10",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531567/B-6C-10_rqzbnn.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Safes and Safe Lockers",
                        "item": "Safe, Locker, Class 6, Special Size- Millimeters, and TL-15",
                        "file_link": "B-6C-11",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531572/B-6C-11_mpznnr.jpg"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Safes and Safe Lockers",
                        "item": "Safe, General Purpose Cabinet, Class 5",
                        "file_link": "B-6C-12",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531573/B-6C-12_musiij.jpg"
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Medical and Dental",
                        "item": "Cabinet and Locker for Operating Room and Surgical Dressing Room",
                        "file_link": "B-7A-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531573/B-7A-1_c5qlfp.jpg"
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Medical and Dental",
                        "item": "Cabinet, Medical, with Narcotics Locker",
                        "file_link": "B-7A-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531578/B-7A-2_b3nzp1.jpg"
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Medical and Dental",
                        "item": "Cabinet, Bacteriological Laboratory",
                        "file_link": "B-7A-3",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531579/B-7A-3_jqjpwa.jpg"
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Medical and Dental",
                        "item": "Cabinet, Oral Surgical",
                        "file_link": "B-7A-4",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531580/B-7A-4_nr5ilk.jpg"
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Medical and Dental",
                        "item": "Cabinet, Medical Supply or Poison Antidote",
                        "file_link": "B-7A-5",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531584/B-7A-5_iqlhzv.jpg"
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Medical and Dental",
                        "item": "Locker, Medicine",
                        "file_link": "B-7A-6",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531584/B-7A-6_fxlfub.jpg"
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Medical and Dental",
                        "item": "Locker, Medical, Portable",
                        "file_link": "B-7A-7",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531586/B-7A-7_bzhegv.jpg"
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Medical and Dental",
                        "item": "Rack, Clinical Chart Holder",
                        "file_link": "B-7A-8",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531589/B-7A-8_zrfdfu.jpg"
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Medical and Dental",
                        "item": "Box, First Aid",
                        "file_link": "B-7A-9",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531590/B-7A-9_gi16ci.jpg"
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Medical and Dental",
                        "item": "Locker, Hospital Berth",
                        "file_link": "B-7A-10",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531590/B-7A-10_p6lrwd.jpg"
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Post Office",
                        "item": "Cabinets, Post Office, Units Type A & D",
                        "file_link": "B-7B-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531595/B-7B-1_k5otkz.jpg"
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Post Office",
                        "item": "Cabinet, Post Office, Unit Type C",
                        "file_link": "B-7B-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531596/B-7B-2_awf2qk.jpg"
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Post Office",
                        "item": "Mailbox",
                        "file_link": "B-7B-3",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531598/B-7B-3_r0as6v.jpg"
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Post Office",
                        "item": "Counter, Post Office",
                        "file_link": "B-7B-4",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531601/B-7B-4_n6qkau.jpg"
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Barber Shop",
                        "item": "Locker, Supply Barber",
                        "file_link": "B-7C-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531601/B-7C-1_cxdt6y.jpg"
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Barber Shop",
                        "item": "Barber, Back Bar",
                        "file_link": "B-7C-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531602/B-7C-2_rmdafd.jpg"
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Display and Bulletin Boards",
                        "item": "Boards, Bulletin, Type A & B",
                        "file_link": "B-7D-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531607/B-7D-1_ubnbi6.jpg"
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Display and Bulletin Boards",
                        "item": "Dry Erase Board",
                        "file_link": "B-7D-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531607/B-7D-2_w9wdc2.jpg"
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Religious Furnishings",
                        "item": "Pulpit, Portable",
                        "file_link": "B-7E-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531608/B-7E-1_dps6gd.jpg"
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Religious Furnishings",
                        "item": "Locker, Religious Literature",
                        "file_link": "B-7E-2",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1785531612/B-7E-2_damgsh.jpg"
                    }
                ]
            }
        },
        "request_quote_page": {
            "meta_data": {
                "title": "Request a Quote",
                "description": "Request a Quote"
            },
            "top_text": {
                "title": "Request a Quote",
                "subtitle": "Complete the steps below to receive a tailored quote.",
                "heading_type": "h1"
            },
            "contact_methods": {
                "items": [
                    {
                        "icon": "mail",
                        "title": "Email",
                        "description": "New projects, product inquiries, and site visits",
                        "link": {
                            "text": `${process.env.SALES_EMAIL}`,
                            "url": `mailto:${process.env.SALES_EMAIL}`
                        }
                    },
                    {
                        "icon": "phone",
                        "title": "Call Sales",
                        "description": "Talk to an estimator now",
                        "link": {
                            "text": `${process.env.CONTACT_PHONE_NUMBER}`,
                            "url": `tel: ${process.env.CONTACT_PHONE_NUMBER}`
                        }
                    },
                    {
                        "icon": "location",
                        "title": "Office",
                        "description": `${process.env.COMPANY_NAME}`,
                        "link": {
                            "text": `${process.env.COMPANY_ADDRESS}, ${process.env.COMPANY_CITY}, ${process.env.COMPANY_STATE}, ${process.env.COMPANY_ZIP}`,
                            "target": "_blank",
                            "url": "https://maps.app.goo.gl/vwELP8qpm7vgDPk16"
                        }
                    }
                ]
            },
        },
        "contact_page": {
            "meta_data": {
                "title": "Contact",
                "description": "Contact"
            },
            "hero_section": {
                "title": "Contact Pacific Maritime Industries Corp.",
                "subtitle": "Serving the Pacific, Atlantic, and Gulf military fleets. Because all requests for quote are urgent, standard component quotes are provided the same day or the following day.",
                "full_width": true,
                "buttons": [
                    {
                        "text": "Call sales",
                        "link": `tel: ${process.env.CONTACT_PHONE_NUMBER}`,
                        "button_style": "btn btn-secondary btn-animation-two"
                    },
                    {
                        "text": "Request a quote",
                        "link": "/request-quote",
                        "button_style": "btn btn--primary btn-animation-four"
                    }
                ]
            },
            "contact_info_section": {
                "top_text": {
                    "small_title": "Departments",
                    "title": "Talk to a Specialist",
                    "subtitle": "Direct lines to the right team. No switchboard, no waiting."
                },
                "three_columns_with_icon": {
                    "items": [
                        {
                            "icon": "mail",
                            "title": "Email",
                            "description": "New projects, product inquiries, and site visits",
                            "link": {
                                "text": `${process.env.SALES_EMAIL}`,
                                "url": `mailto:${process.env.SALES_EMAIL}`
                            }
                        },
                        {
                            "icon": "phone",
                            "title": "Call Sales",
                            "description": "Talk to an estimator now",
                            "link": {
                                "text": `${process.env.CONTACT_PHONE_NUMBER}`,
                                "url": `tel: ${process.env.CONTACT_PHONE_NUMBER}`
                            }
                        },
                        {
                            "icon": "location",
                            "title": "Office",
                            "description": `${process.env.COMPANY_NAME}`,
                            "link": {
                                "text": `${process.env.COMPANY_ADDRESS}, ${process.env.COMPANY_CITY}, ${process.env.COMPANY_STATE}, ${process.env.COMPANY_ZIP}`,
                                "target": "_blank",
                                "url": "https://maps.app.goo.gl/vwELP8qpm7vgDPk16"
                            }
                        }
                    ]
                }
            },
            "send_a_message_section": {
                "top_text": {
                    "small_title": "Contact",
                    "title": "Send Us a Message",
                    "subtitle": "Select your inquiry type and we'll route it to the right team fast.",
                    "align_left": true
                }
            },
            "facility_section": {
                "top_text": {
                    "small_title": "Locations",
                    "title": "Our Facility",
                    "subtitle": "Based on San Diego's working waterfront. We proudly service the Pacific, Atlantic, and Gulf military fleets, alongside Coast Guard and commercial vessels.",
                    "align_left": true
                },
                "columns": [
                    {
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_768/v1785878814/pacific-maritime-industries-facility_vlhhyz.png",
                        "title": "Office",
                        "subtitle": "1790 Dornoch Court, San Diego, CA 92154",
                        "buttons": [
                            {
                                "text": "Get directions",
                                "link": "https://maps.app.goo.gl/vwELP8qpm7vgDPk16",
                                "button_style": "btn btn-secondary btn-animation-two",
                                "button_icon": "arrow-right"
                            }
                        ]
                    },
                    {
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_768/v1785878815/san-diego-panoramic-view_xbzkut.jpg",
                        "title": "Ports we serve",
                        "subtitle": "Delivering major West Coast and regional maritime support. Our operations span local naval adjacencies at the Port of San Diego, heavy-lift marine contracting in Long Beach and Los Angeles, and dedicated operational support across Seattle, Tacoma, and Portland."
                    }
                ]
            },
            "hours_section": {
                "top_text": {
                    "small_title": "Hours",
                    "title": "Hours and response times",
                    "subtitle": "Clear commitments. No ambiguity. This is how we work."
                }
            }
        },
        "quality_compliance_page": {
            "meta_data": {
                "title": "Quality & Compliance",
                "description": "Evidence-based documentation for NAVSEA, ABS, and NVR procurement requirements. Every material lot and manufacturing phase is digitally traceable through our centralized ERP software system to ensure strict MIL-SPEC compliance."
            },
            "hero_section": {
                "title": "Quality assurance & compliance",
                "subtitle": "Evidence-based documentation for NAVSEA, ABS, and NVR procurement requirements. Every material lot and manufacturing phase is digitally traceable through our centralized ERP software system to ensure strict MIL-SPEC compliance.",
                "center_text": true,
                "buttons": [
                    {
                        "text": "Request a quote",
                        "link": "/request-quote",
                        "button_style": "btn btn--primary btn-animation-four",
                    }
                ]
            },
            "certifications_section": {
                "top_text": {
                    "title": "Certifications and Standards",
                    "subtitle": "Current credentials for NAVSEA, ABS, and NVR procurement requirements"
                },
                "certifications_list": [
                    {
                        "top_text": {
                            "icon": "premium-prize",
                            "title": "ISO 9001:2015",
                            "subtitle": "Pacific Maritime Industries Corp. has been assessed and certified as meeting the strict quality management requirements of ISO 9001:2015. As a precision manufacturer of maritime interiors, heavy-duty platforms, ladders, and metal joiner doors, we ensure every component is built to exact Navy standards. Initial certification was issued on January 31, 2019. Expires on January 30, 2028.",
                            "heading_type": "h3",
                            "buttons": [
                                {
                                    "text": "View Certificate",
                                    "link": "https://res.cloudinary.com/irwujctd/image/upload/v1785420485/ISO-9001-2015_lpsmie.png",
                                    "target": "_blank",
                                    "button_style": "btn btn-secondary btn-animation-two"
                                }
                            ]
                        },
                        "bottom_image": "https://res.cloudinary.com/irwujctd/image/upload/w_500/v1785420485/ISO-9001-2015_lpsmie.png",
                        "bottom_image_alt": "ISO-9001-2015",
                        "bottom_image_width": "400"
                    },
                    {
                        "top_text": {
                            "icon": "verified",
                            "title": "CYBERSECURITY CMMC LEVEL 2",
                            "subtitle": "Pacific Maritime Industries Corp. meets the stringent Department of Defense requirements for Cybersecurity Maturity Model Certification (CMMC) Level 2. Because we manufacture MIL-SPEC shipboard interiors, doors, and platforms for the U.S. Navy, we are entrusted with sensitive project data and an extensive archive of standard Navy manufacturing drawings. Our centralized ERP software system and IT infrastructure are secured to protect all Controlled Unclassified Information (CUI) throughout your project's lifecycle.",
                            "heading_type": "h3"
                        },
                        "bottom_image": "",
                        "bottom_image_alt": "",
                        "bottom_image_width": "400"
                    }
                ]
            },
            "faqs_section": {
                "top_text": {
                    "title": "FAQs",
                    "subtitle": "Answers for contracting officers and compliance teams",
                    "align_left": true
                },
                "faqs_list": [
                    {
                        "question": "What are typical lead times?",
                        "answer": "Standard items take six to eight weeks. Complex assemblies require ten to fourteen weeks. Lead times are confirmed at RFQ stage and tracked in our revision-controlled schedule."
                    },
                    {
                        "question": "How are engineering revisions handled?",
                        "answer": "All revisions follow our engineering change order process. Customer approval is required before fabrication on any deviation from approved drawings."
                    },
                    {
                        "question": "What acceptance criteria apply?",
                        "answer": "NAVSEA Standard Item 009-32 governs visual and dimensional acceptance. AQL sampling per ANSI/ASQ Z1.4 applies unless one hundred percent inspection is specified."
                    },
                    {
                        "question": "Are materials DFARS compliant?",
                        "answer": "Yes. All steel and aluminum are sourced from DFARS 252.225-7014 compliant mills. Country of origin certificates are provided with every order."
                    }
                ],
                "call_to_action": {
                    "title": "Still have questions?",
                    "subtitle": "Contact our compliance team directly for specific requirements",
                    "align_left": true,
                    "buttons": [
                        {
                            "text": "Contact",
                            "link": "/contact",
                            "button_style": "btn btn-secondary btn-animation-two"
                        }
                    ]
                }
            }
        },
        "careers_page": {
            "meta_data": {
                "title": "Careers",
                "description": "Careers"
            },
            'hero_section': {
                "title": "Build your career with pacific maritime industries corp.",
                "subtitle": "Join a San Diego team that takes pride in every weld, every door, and every stateroom we deliver to the fleet.",
                "center_text": true
            },
            "job_openings_section": {
                "top_text": {
                    "small_title": "Openings",
                    "title": "Open positions",
                    "subtitle": "We are hiring for our San Diego facility. All positions are full-time, on-site, with competitive pay and benefits.",
                    "align_left": true
                }
            },
            "built_on_safety_section": {
                "top_text": {
                    "small_title": "Why Pacific Maritime Industries Corp.",
                    "title": "Built on safety and skill",
                    "subtitle": "A career where you go home safe and grow strong."
                },
                "columns": [
                    {
                        "icon": "engineering",
                        "title": "Safety first, always",
                        "subtitle": "OSHA-compliant shop, daily toolbox talks, and a TRIR well below industry average. We invest in your safety gear and training."
                    },
                    {
                        "icon": "drafting-compass",
                        "image": "",
                        "title": "Grow your skills here",
                        "subtitle": "Company-paid certifications: NAVSEA welding, NDT, crane operator. Cross-training and apprenticeship pathways available.",
                    },
                    {
                        "icon": "anchor",
                        "image": "",
                        "title": "Local and stable work",
                        "subtitle": "30 years serving the fleet. No out-of-state relocations. We hire locally and promote from within.",
                    },
                ]
            },
            "join_the_crew_section": {
                "top_text": {
                    "small_title": "Apply",
                    "title": "Join the crew",
                    "subtitle": "Fill out the form and our hiring manager will reach out within 2 business days."
                }
            }
        },
        "blog_page": {
            "meta_data": {
                "title": "Blog",
                "description": "Blog"
            },
            "hero_section": {
                "title": "Latest posts and updates",
                "subtitle": "Industry updates, product announcements, and project highlights from Pacific Maritime Industries Corporation. We are San Diego's shipboard interior specialists.",
                "center_text": true,
                "buttons": []
            },
            "latest_posts_from_pmi": {
                "top_text": {
                    "small_title": "Insights",
                    "title": "Latest from pacific maritime industries corp.",
                    "align_left": true
                }
            }
        }
    }
];


export default siteData;