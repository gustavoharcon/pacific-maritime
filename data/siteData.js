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
                "menu_url": "/about",
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
                "menu_name": "Catalogs",
                "menu_url": "/catalogs-and-downloads"
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
                    }
                ],
            },
            {
                "menu_name": "Catalogs & Downloads",
                "link": "/catalogs-and-downloads",
                "sub_menu": [
                    {
                        "text": "Equipment List",
                        "link": "/equipment-list"
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
                "title": "Shipboard interiors built to NAVY standards",
                "subtitle": "San Diego shipboard interiors manufacturer offering in-house engineering and comprehensive fabrication services for the Pacific Fleet.",
                "buttons": [
                    {
                        "text": "Request quote",
                        "link": "/request-quote",
                        "button_style": "btn btn--primary btn-animation-four"
                    },
                    {
                        "text": "View products",
                        "link": "/products",
                        "button_style": "btn btn-secondary btn-animation-two"
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
                                "button_style": "btn btn-black-outline btn-animation-two"
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
                                "button_style": "btn btn-black-outline btn-animation-two"
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
                                "button_style": "btn btn-black-outline btn-animation-two"
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
                                "button_style": "btn btn-black-outline btn-animation-two"
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
        },
        "about_page": {
            "meta_data": {
                "title": "About",
                "description": "About"
            },
            "hero_section": {
                "title": "Built for the sea since 1979",
                "subtitle": "San Diego shipboard interiors manufacturer offering in-house engineering and comprehensive fabrication services for the Pacific Fleet.",
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
                    "small_title": "Capabilities",
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
                                "button_style": "btn btn-black-outline btn-animation-two"
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
                                "button_style": "btn btn-black-outline btn-animation-two"
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
                                "button_style": "btn btn-black-outline btn-animation-two"
                            }
                        ]
                    },
                ]
            },
            "our_team_section": {
                "top_text": {
                    "small_title": "Leadership",
                    "title": "Our team",
                    "subtitle": "Decades of experience in maritime manufacturing, engineering, and quality control. These are the people who deliver on every contract.",
                    "buttons": [
                        {
                            "text": "Open positions",
                            "link": "/careers",
                            "button_style": "btn btn-black-outline btn-animation-two"
                        }
                    ]
                },
                "team_members": [
                    {
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/v1784913543/team-member-placeholder_wpiqzi.png",
                        "name": "John Atkinson",
                        "position": "President",
                        "description": "35 years in maritime manufacturing. Former NASSCO production engineer. Founded PMI in 1979. He oversees all contract execution.",
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
                        "title": "Design and quote",
                        "description": "We receive your ship specs and develop 3D models with a firm-fixed-price proposal within 5 to 7 business days."
                    },
                    {
                        "icon": "engineering",
                        "title": "Engineering Submittal",
                        "description": "We submit shop drawings, material certifications, and finish samples for approval."
                    },
                    {
                        "icon": "fabrication",
                        "title": "Fabrication and QC",
                        "description": "Production runs with in-process inspection. Final dimensional and coating checks meet all contract requirements."
                    },
                    {
                        "icon": "logistics",
                        "title": "Stage and Dispatch",
                        "description": "Components are meticulously wrapped, palletized, and securely staged at our San Diego facility for seamless load-out and transport by logistics teams."
                    },
                ],
                "buttons": [
                    {
                        "text": "Contact",
                        "link": "/contact",
                        "button_style": "btn btn-black-outline btn-animation-two"
                    },
                    {
                        "text": "Careers",
                        "link": "/careers",
                        "button_style": "btn btn-black-outline btn-animation-two"
                    }
                ]
            },
            "contracts_section": {
                "top_text": {
                    "small_title": "References",
                    "title": "Contracts that Prove the Work"
                },
                "contracts_text": {
                    "description": "A record of on-time, on-budget delivery for the U.S. Navy and prime contractors. Contact us for past performance references.",
                    "title": "Notable contracts",
                    "contracts": [
                        {
                            "description": "The Fleet & Industrial Supply Center has awarded an Indefinite Delivery Order IDTC Habitability Contract to Pacific Maritime Industries.",
                            "number": "N00244-02-D-0039",
                            "contact_info_title": "FISC Contact Information",
                            "contact_name": "Pat Walsh",
                            "contact_phone": "(619) 556-2116",
                            "contact_email": "patrick.walsh@navy.mil"
                        }
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
                            "button_style": "btn btn-secondary btn-animation-two"
                        }
                    ]
                },
                "buttons": [
                    {
                        "text": "Contact",
                        "link": "/contact",
                        "button_style": "btn btn-white-background"
                    },
                    {
                        "text": "Request a quote",
                        "link": "/request-quote",
                        "button_style": "btn btn-white-background"
                    }
                ]
            },
        },
        "manufacturing_capabilities_page": {
            "meta_data": {
                "title": "Manufacturing Capabilities and Equipment",
                "description": "Precision fabrication and comprehensive staging from our San Diego facility. We turn Navy-grade specifications into ready-to-deploy shipboard interiors."
            },
            "hero_section": {
                "right_column_image": "https://res.cloudinary.com/irwujctd/image/upload/h_810/v1785167914/computer-screen-with-cad-design_sgv7su.png",
                "title": "Manufacturing Capabilities and Equipment",
                "subtitle": "Precision fabrication and comprehensive staging from our San Diego facility. We turn Navy-grade specifications into ready-to-deploy shipboard interiors.",
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
                        "top_background_image": "https://res.cloudinary.com/irwujctd/image/upload/h_160/v1785174339/cad-design-on-computer-screen_aspait.png",
                        "title": "Design and engineering",
                        "description": "SolidWorks modeling, BOM generation, and a full manufacturability feedback loop before the first cut."
                    },
                    {
                        "top_background_image": "https://res.cloudinary.com/irwujctd/image/upload/h_160/v1785174338/man-on-laptop-typing-in-spreadsheet-file-coffee-mug-nearby_if952n.png",
                        "title": "Quote and planning",
                        "description": "RFQ response within 24 hours. Lead time and schedule aligned directly to your project milestones."
                    },
                    {
                        "top_background_image": "https://res.cloudinary.com/irwujctd/image/upload/h_160/v1785174338/welding_tuqmor.png",
                        "title": "Fabrication and QC",
                        "description": "Laser, waterjet, CNC, forming, welding, and finishing with in-process inspection using MIE Trak tracking software."
                    },
                    {
                        "top_background_image": "https://res.cloudinary.com/irwujctd/image/upload/h_160/v1785174338/wrapped-pallets_yc0uk6.png",
                        "title": "Stage and Dispatch",
                        "description": "We mobilize the crew, complete final acceptance testing, and deliver the full documentation package."
                    },
                ],
                "buttons": [
                    {
                        "text": "Request a quote",
                        "link": "/request-quote",
                        "button_style": "btn btn-black-outline btn-animation-two"
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
                        "small_title": "Laser",
                        "title": "Mazak Hyper Turbo-X",
                        "subtitle": "High-precision 2D laser with auto load and unload system. Ideal for precision sheet metal parts.",
                        "buttons": [
                            {
                                "text": "Learn more",
                                "link": "/about/equipment-list/#laser-and-waterjet-cutting",
                                "button_style": "btn btn-black-outline btn-animation-two"
                            }
                        ],
                        "bottom_image": "https://res.cloudinary.com/irwujctd/image/upload/v1785175376/Mazak-Hyper-Turbo_X_hu2xer.png"
                    },
                    {
                        "small_title": "Waterjet",
                        "title": "Omax 55100",
                        "subtitle": "Abrasive waterjet for complex profiles and composite materials. Closed‑loop digital drives.",
                        "buttons": [
                            {
                                "text": "Learn more",
                                "link": "/about/equipment-list/#laser-and-waterjet-cutting",
                                "button_style": "btn btn-black-outline btn-animation-two"
                            }
                        ],
                        "bottom_image": "https://res.cloudinary.com/irwujctd/image/upload/h_171/v1785178784/Omax-55100_vm597j.png"
                    },
                    {
                        "small_title": "Punch",
                        "title": "Amada Vipro 255",
                        "subtitle": "CNC punching for high‑volume sheet metal parts with quick tool change.",
                        "buttons": [
                            {
                                "text": "Learn more",
                                "link": "/about/equipment-list/#cnc-punching",
                                "button_style": "btn btn-black-outline btn-animation-two"
                            }
                        ],
                        "bottom_image": "https://res.cloudinary.com/irwujctd/image/upload/h_171/v1785178783/Amada-Vipro-255_irfvbw.png"
                    },
                    {
                        "small_title": "Bend",
                        "title": "Amada RG series",
                        "subtitle": "CNC bending and press brake for accurate forming of enclosures and frames.",
                        "buttons": [
                            {
                                "text": "Learn more",
                                "link": "/about/equipment-list/#cnc-punching",
                                "button_style": "btn btn-black-outline btn-animation-two"
                            }
                        ],
                        "bottom_image": "https://res.cloudinary.com/irwujctd/image/upload/h_171/v1785178784/Amada-RG-Series_eyvolc.png"
                    },
                    {
                        "small_title": "Shear",
                        "title": "Amada shears",
                        "subtitle": "CNC shearing for clean, square cuts on sheet stock up to 10 gauge.",
                        "buttons": [
                            {
                                "text": "Learn more",
                                "link": "/about/equipment-list/#cnc-shearing",
                                "button_style": "btn btn-black-outline btn-animation-two"
                            }
                        ],
                        "bottom_image": "https://res.cloudinary.com/irwujctd/image/upload/h_171/v1785178784/Amada-Shears_p2huhr.png"
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
                "subtitle": "45,000 sq. ft. San Diego facility with in-house fabrication, finishing, and assembly resources."
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
                "description": "Access the complete Naval Shipboard Furniture Catalog, Metal Joiner Door Catalog, and individual product datasheets."
            },
            "hero_section": {
                "title": "Technical catalogs & downloads",
                "subtitle": "Access the complete Naval Shipboard Furniture Catalog, Metal Joiner Door Catalog, and individual product datasheets. Download CAD files, DWGs, and technical PDFs."
            },
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
                        "url": "#"
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Officer Staterooms",
                        "item": "Case, Toilet Article",
                        "file_link": "B-2A-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1784747872/B-1A-1_h1chds.jpg",
                        "url": "#"
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1784747872/B-1A-1_h1chds.jpg",
                        "url": "#"
                    },
                    {
                        "category": "Tables",
                        "section_title": "Dining and Serving Tables (Officer)",
                        "item": "Sideboards and Serving Tables, Modular",
                        "file_link": "B-4A-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1784747872/B-1A-1_h1chds.jpg",
                        "url": "#"
                    },
                    {
                        "category": "Desks",
                        "section_title": "Desks, Flat Top",
                        "item": "Desk, Flat Top, Double Pedestal",
                        "file_link": "B-5A-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1784747872/B-1A-1_h1chds.jpg",
                        "url": "#"
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Locker, Cleaning Gear or Battle Dressing Stowage",
                        "file_link": "B-6A-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1784747872/B-1A-1_h1chds.jpg",
                        "url": "#"
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Barber Shop",
                        "item": "Locker, Supply Barber",
                        "file_link": "B-7C-1",
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/w_200/v1784747872/B-1A-1_h1chds.jpg",
                        "url": "#"
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
                "small_title": "Start",
                "title": "Request a Quote",
                "subtitle": "Complete the steps below to receive a tailored quote.",
                "heading_type": "h1"
            },
            "contact_methods": [
                {
                    "icon": "phone",
                    "title": "Phone",
                    "subtitle": "Call for urgent technical requests.",
                    "value": `<a class="phone-number" href='tel:${process.env.CONTACT_PHONE_NUMBER}'>${process.env.CONTACT_PHONE_NUMBER}</a>`
                },
                {
                    "icon": "office",
                    "title": "Office",
                    "subtitle": `${process.env.COMPANY_NAME}`,
                    "value": `${process.env.COMPANY_ADDRESS}<br>${process.env.COMPANY_CITY}, ${process.env.COMPANY_STATE}, ${process.env.COMPANY_ZIP}`
                }
            ]
        }
    }
];


export default siteData;