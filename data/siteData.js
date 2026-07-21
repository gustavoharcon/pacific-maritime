const siteData = [
    {
        "site_name": "Pacific Maritime Industries Corp.",
        "tagline": "Heavy-Duty Marine Fabrication & NAVSEA-Compliant Shipboard Furniture.",
        "site_url": "http://www.pacmaritime.com/",
        // "site_logo": "/assets/images/Pacific_Maritime_Industries_Corp_logo.png",
        "site_logo": "/assets/images/placeholder-logo.png",
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
            "email_2": "",
            "email_3": "",
            "sales_email": "sales@pacmaritime.com",
            "phone_number_1": "(619) 423-5544",
            "address_line_1": "1790 Dornoch Court",
            "address_line_2": "San Diego, CA 92154"
        }
    },
    {
        "main_menu": [
            {
                "menu_name": "About",
                "menu_url": "/about"
            },
            {
                "menu_name": "Products",
                "menu_url": "/products"
            },
            {
                "menu_name": "Catalogs",
                "menu_url": "/catalogs"
            },
            {
                "menu_name": "Blog",
                "menu_url": "/blog"
            },
            {
                "menu_name": "Contact",
                "menu_url": "/contact",
                "button_style": "secondary"
            }
        ]
    },
    {
        "bottom_credits": {
            "menu": [
                {
                    "text": "Privacy policy",
                    "link": "/privacy-policy"
                },
                {
                    "text": "Terms of service",
                    "link": "/terms-of-service"
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
                    },
                    {
                        "text": "Equipment List",
                        "link": "/about/equipment-list"
                    }
                ],
            },
            {
                "menu_name": "Products",
                "link": "/products",
                "sub_menu": [
                    {
                        "text": "Catalogs & Downloads",
                        "link": "/catalogs-and-downloads"
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
                "menu_name": "Blog & News",
                "link": "/blog"
            }
        ]
    },
    {
        "home_page": {
            "meta_data": {
                "title": "NAVSEA Shipboard Furniture",
                "description": "Pacific Maritime Industries Corp manufactures heavy-duty, NAVSEA-compliant marine furniture and custom seating for the U.S. Navy and commercial shipyards."
            },
            "hero_section": {
                "right_column_image": "https://res.cloudinary.com/irwujctd/image/upload/w_800,h_900,c_fill/v1784555981/Frame_1_wzzxdc.png",
                "title": "Built for the sea since 1979",
                "subtitle": "San Diego shipboard interiors manufacturer offering in-house engineering and comprehensive fabrication services for the Pacific Fleet.",
                "buttons": [
                    {
                        "text": "Request quote",
                        "url": "/request-quote",
                        "button_style": "primary"
                    },
                    {
                        "text": "View Products",
                        "url": "/products",
                        "button_style": "secondary"
                    }
                ],
            },
            "top_text_three_columns": {
                "top_text": {
                    "small_title": "Trust",
                    "title": "Built on Decades of Precision",
                    "subtitle": "45+ years serving the fleet",
                },
                "columns": [
                    {
                        "top_bg_image": "https://res.cloudinary.com/irwujctd/image/upload/h_300/v1784567190/serving-san-dieg-and-the-pacific-fleet_jbg4xy.png",
                        "small_title": "Facility",
                        "title": "Serving San Diego and the Pacific Fleet",

                        "buttons": [
                            {
                                "text": "Directions",
                                "link": "/contact",
                                "button_style": "btn-black-outline"
                            }
                        ]
                    },
                    {
                        "top_bg_image": "https://res.cloudinary.com/irwujctd/image/upload/h_300/v1784567190/NAVSEA_certified_and_specification_compliant_o3tfrg.png",
                        "small_title": "Certified",
                        "title": "NAVSEA certified and specification compliant",
                        "subtitle": "MIL-SPEC, ABS, NVR compliant",
                    },
                    {
                        "top_bg_image": "https://res.cloudinary.com/irwujctd/image/upload/h_300/v1784567190/Call_for_lead_times_and_RFQ_support_jg6z0c.png",
                        "small_title": "Contact",
                        "title": "Call for lead times and RFQ support",
                        "subtitle": "(619) 423-5544 ",
                    }
                ]
            },

            "capabilities_three_columns": {
                "top_text": {
                    "small_title": "Capabilities",
                    "title": "Precision manufacturing for the fleet",
                    "subtitle": "Three core disciplines, one standard of performance",
                },
                "columns": [
                    {
                        "top_bg_image": "https://res.cloudinary.com/irwujctd/image/upload/h_400/v1784583769/birthing-01_z0ngrs.png",
                        "small_title": "Interiors",
                        "title": "Shipboard interiors and berthing",
                        "subtitle": "Stateroom modules and crew berthing systems.",
                        "buttons": [
                            {
                                "text": "View Products",
                                "link": "/products",
                                "button_style": "btn-secondary btn-animation-two"
                            }
                        ]
                    },
                    {
                        "top_bg_image": "https://res.cloudinary.com/irwujctd/image/upload/h_400/v1784584007/modular-furniture_o66smf.png",
                        "title": "Modular furniture and doors",
                        "subtitle": "NAVY-grade metal joiner doors and frames. Dining, lounge and office furniture systems.",
                        "buttons": [
                            {
                                "text": "View Products",
                                "link": "/products",
                                "button_style": "btn-secondary btn-animation-two"
                            }
                        ]
                    },
                    {
                        "top_bg_image": "https://res.cloudinary.com/irwujctd/image/upload/h_400/v1784584387/shipyard-integration_iuvyw9.png",
                        "title": "SHIPYARD INTEGRATION ",
                        "subtitle": "Pre-assembled stateroom modules and hardware staged for rapid deployment. Palletized, secured, and ready. ",
                        "buttons": [
                            {
                                "text": "View Products",
                                "link": "",
                                "button_style": "btn-secondary btn-animation-two"
                            }
                        ]
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
                        "top_image": "https://res.cloudinary.com/irwujctd/image/upload/h_300/v1784649915/design_j6acgz.png",
                        "title": "DESIGN",
                        // "subtitle": "CAD modeling, material specs, revision control. Typical lead time is 2 to 4 weeks."
                        "subtitle": "CAD modeling, material specs, revision control."
                    },
                    {
                        "top_image": "https://res.cloudinary.com/irwujctd/image/upload/h_300/v1784649915/welding-frame_sazu6s.png",
                        "title": "FABRICATE",
                        // "subtitle": "CNC cutting, welding, and finishing in our San Diego facility. Typical lead time is 6 to 12 weeks."
                        "subtitle": "CNC cutting, welding, and finishing in our San Diego facility."
                    },
                    {
                        "top_image": "https://res.cloudinary.com/irwujctd/image/upload/h_300/v1784649915/forklift-lifting-pallet-in-the-port-area-of-san-diego_fz49oa.png",
                        "title": "DELIVER",
                        "subtitle": "Components are palletized, tightly wrapped, and staged for immediate freight dispatch."
                    }
                ]
            },
            "products_three_columns": {
                "top_text": {
                    "small_title": "Products",
                    "title": "Proven components, ready to specify",
                    "subtitle": "Standard models built to MIL-SPEC. Custom modifications available."
                },
                "columns": [
                    {
                        "top_image": "https://res.cloudinary.com/irwujctd/image/upload/h_250/v1784654304/naval-lockers-and-cabinets_dsaabp.png",
                        "top_image_description": "Naval Lockers & Cabinets",
                        "title": "Naval Lockers & Cabinets",
                        "subtitle": "Fabricated to conform to stringent U.S. Navy specifications. Configurations include ammo lockers, file cabinets, dressers, and specialized industrial stowage.",
                        "categories": [
                            "Steel",
                            "Shock Grade",
                            "MIL-SPEC"
                        ],
                        "buttons": [
                            {
                                "text": "Download CAD",
                                "link": "/catalogs-and-downloads",
                                "button_style": "btn-black-outline"
                            }
                        ]
                    },
                    {
                        "top_image": "https://res.cloudinary.com/irwujctd/image/upload/h_250/v1784654304/stateroom-and-berthing_y1mhou.png",
                        "top_image_description": "STATEROOM & BERTHING",
                        "title": "STATEROOM & BERTHING",
                        "subtitle": "Complete marine accommodations built with superior workmanship. Engineered to match marine standard drawings and your exact conceptual sketches.",
                        "categories": [
                            "Modular",
                            "Habitability",
                            "Integrated"
                        ],
                        "buttons": [
                            {
                                "text": "Download CAD",
                                "link": "/catalogs-and-downloads",
                                "button_style": "btn-black-outline"
                            }
                        ]
                    },
                    {
                        "top_image": "https://res.cloudinary.com/irwujctd/image/upload/h_250/v1784654304/metal-joiner-doors_toycqp.png",
                        "top_image_description": "Metal Joiner Doors",
                        "title": "Metal Joiner Doors",
                        "subtitle": "Custom manufactured shipboard doors designed to satisfy all marine environments. Supported by our dedicated technical catalog for rapid procurement.",
                        "categories": [
                            "Watertight",
                            "Joiner",
                            "Primed"
                        ],
                        "buttons": [
                            {
                                "text": "Download CAD",
                                "link": "/catalogs-and-downloads",
                                "button_style": "btn-black-outline"
                            }
                        ]
                    }
                ]
            },
            "video_section": {
                "video_id": "",
                "video_title": "NAVSEA-Compliant Shipboard Fabrication & Seating",
                "video_description": "Discover how we design and build heavy-duty marine furniture and custom seating for the U.S. Navy and commercial shipyards.",
            }
        }
    }
];


export default siteData;