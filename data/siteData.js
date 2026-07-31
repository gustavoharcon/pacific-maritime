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
                // "sub_menu": [
                //     {
                //         "text": "Equipment List",
                //         "link": "/about/equipment-list"
                //     }
                // ],
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
            // {
            //     "menu_name": "Blog & News",
            //     "link": "/blog"
            // }
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
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/h_300/v1784567190/serving-san-dieg-and-the-pacific-fleet_jbg4xy.png",
                        "small_title": "Facility",
                        "title": "Serving San Diego and the Pacific Fleet",
                        "buttons": [
                            {
                                "text": "Directions",
                                "link": "/contact",
                                "button_style": "btn btn-black-outline btn-animation-two",
                                "icon": "arrow-right"
                            }
                        ]
                    },
                    {
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/h_300/v1784567190/NAVSEA_certified_and_specification_compliant_o3tfrg.png",
                        "small_title": "Certified",
                        "title": "NAVSEA certified and specification compliant",
                        "subtitle": "MIL-SPEC, ABS, NVR compliant",
                    },
                    {
                        "image": "https://res.cloudinary.com/irwujctd/image/upload/h_300/v1784567190/Call_for_lead_times_and_RFQ_support_jg6z0c.png",
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
                        "image": "",
                        "small_title": "Interiors",
                        "title": "Shipboard interiors and berthing",
                        "subtitle": "Stateroom modules and crew berthing systems.",
                    },
                    {
                        "image": "",
                        "title": "Modular furniture and doors",
                        "subtitle": "NAVY-grade metal joiner doors and frames. Dining, lounge and office furniture systems.",
                    },
                    {
                        "image": "",
                        "title": "SHIPYARD INTEGRATION ",
                        "subtitle": "Pre-assembled stateroom modules and hardware staged for rapid deployment. Palletized, secured, and ready. ",
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
                        "top_image": "",
                        "title": "DESIGN",
                        "subtitle": "CAD modeling, material specs, revision control."
                    },
                    {
                        "top_image": "",
                        "title": "FABRICATE",
                        "subtitle": "CNC cutting, welding, and finishing in our San Diego facility."
                    },
                    {
                        "top_image": "",
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
                        "image": "",
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
                        "image": "",
                        "image_description": "STATEROOM & BERTHING",
                        "title": "STATEROOM & BERTHING",
                        "subtitle": "Complete marine accommodations built with superior workmanship. Engineered to match marine standard drawings and your exact conceptual sketches.",
                        "with_border": true,
                        "categories": [
                            "Modular",
                            "Habitability",
                            "Integrated"
                        ]
                    },
                    {
                        "image": "",
                        "image_description": "Metal Joiner Doors",
                        "title": "Metal Joiner Doors",
                        "subtitle": "Custom manufactured shipboard doors designed to satisfy all marine environments. Supported by our dedicated technical catalog for rapid procurement.",
                        "with_border": true,
                        "categories": [
                            "Watertight",
                            "Joiner",
                            "Primed"
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
                "max_width": "768",
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
                "max_width": "768",
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
                        "top_background_image": "",
                        "title": "Design and engineering",
                        "description": "SolidWorks modeling, BOM generation, and a full manufacturability feedback loop before the first cut."
                    },
                    {
                        "top_background_image": "",
                        "title": "Quote and planning",
                        "description": "RFQ response within 24 hours. Lead time and schedule aligned directly to your project milestones."
                    },
                    {
                        "top_background_image": "",
                        "title": "Fabrication and QC",
                        "description": "Laser, waterjet, CNC, forming, welding, and finishing with in-process inspection using MIE Trak tracking software."
                    },
                    {
                        "top_background_image": "",
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
                    },
                    {
                        "small_title": "Waterjet",
                        "title": "Omax 55100",
                        "subtitle": "Abrasive waterjet for complex profiles and composite materials. Closed‑loop digital drives.",
                    },
                    {
                        "small_title": "Punch",
                        "title": "Amada Vipro 255",
                        "subtitle": "CNC punching for high‑volume sheet metal parts with quick tool change.",
                    },
                    {
                        "small_title": "Bend",
                        "title": "Amada RG series",
                        "subtitle": "CNC bending and press brake for accurate forming of enclosures and frames."
                    },
                    {
                        "small_title": "Shear",
                        "title": "Amada shears",
                        "subtitle": "CNC shearing for clean, square cuts on sheet stock up to 10 gauge."
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
            "hero_section": {
                "title": "Catalogs & downloads",
                "subtitle": "Access the complete Naval Shipboard Furniture Catalog, Metal Joiner Door Catalog, and individual product datasheets. Download CAD files, DWGs, and technical PDFs.",
                "center_text": true
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
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Enlisted Berthing Spaces",
                        "item": "Lockers, Crew, Type B-2, Clothes",
                        "file_link": "B-2B-9",
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Enlisted Berthing Spaces",
                        "item": "Locker, Clothes, Marine",
                        "file_link": "B-2B-10",
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Enlisted Berthing Spaces",
                        "item": "Locker, Clothes, Troop",
                        "file_link": "B-2B-11",
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Enlisted Berthing Spaces",
                        "item": "Locker, Clothes, Troop",
                        "file_link": "B-2B-12",
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Enlisted Berthing Spaces",
                        "item": "Locker, Clothing",
                        "file_link": "B-2B-13-1",
                    },
                    {
                        "category": "Furnishings - Staterooms and Berthing Spaces",
                        "section_title": "Enlisted Berthing Spaces",
                        "item": "Locker Clothing",
                        "file_link": "B-2B-13-2",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-1",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-2",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-3",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-4",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-5",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-6",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-7",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-8",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-9",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-10",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-11",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofa, Corner Unit",
                        "file_link": "B-3A-12",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofa Sectional",
                        "file_link": "B-3A-13",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofa, Corner Unit",
                        "file_link": "B-3A-15",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Chair, Lounge, Swivel",
                        "file_link": "B-3A-16",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Chair, Lounge, Reclining",
                        "file_link": "B-3A-17",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Sofas and Chair, Lounge",
                        "file_link": "B-3A-18",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Sofas, Chairs and Transoms",
                        "item": "Transom Seats, Type I Through VI, Crew Submarine",
                        "file_link": "B-3A-19",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Arm Chairs and Side Chairs",
                        "item": "Chair, Arm",
                        "file_link": "B-3B-1",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Arm Chairs and Side Chairs",
                        "item": "Chair, Arm, Type 1, Class 1 & 2, Style A",
                        "file_link": "B-3B-2",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Arm Chairs and Side Chairs",
                        "item": "Chair, without Arms, Type 1, Class 1 & 2, Style B",
                        "file_link": "B-3B-3",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Arm Chairs and Side Chairs",
                        "item": "Chair, without Arms, Oval Back",
                        "file_link": "B-3B-4",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Arm Chairs and Side Chairs",
                        "item": "Chair, without Arms",
                        "file_link": "B-3B-5",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Arm Chairs and Side Chairs",
                        "item": "Chair, with Arms",
                        "file_link": "B-3B-6",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Stacking and Folding Chairs",
                        "item": "Chair, Stacking, Cast Aluminum Seat",
                        "file_link": "B-3C-1",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Stacking and Folding Chairs",
                        "item": "Chair, Folding, with Table Arm",
                        "file_link": "B-3C-2",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Stacking and Folding Chairs",
                        "item": "Chair, Folding",
                        "file_link": "B-3C-3",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Stacking and Folding Chairs",
                        "item": "Chair, Stacking, Upholstered Seat",
                        "file_link": "B-3C-4",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Desk Chairs, Swivel, Tilt",
                        "item": "Chair, Desk Swivel, Tilt",
                        "file_link": "B-3D-1",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Desk Chairs, Swivel, Tilt",
                        "item": "Chair, Desk, Swivel, Tilt",
                        "file_link": "B-3D-2",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Desk Chairs, Swivel, Tilt",
                        "item": "Chair, Desk Secretarial Swivel, Tilt",
                        "file_link": "B-3D-3",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Desk Chairs, Swivel, Tilt",
                        "item": "Chair, Computer",
                        "file_link": "B-3D-4",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Desk Chairs, Swivel, Tilt",
                        "item": "Chair, Computer",
                        "file_link": "B-3D-5",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Booths and Mess Seats",
                        "item": "Booths, Mess, Single & Double",
                        "file_link": "B-3E-1",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Booths and Mess Seats",
                        "item": "Chair, Dining",
                        "file_link": "B-3E-2",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Booths and Mess Seats",
                        "item": "Chair, Arm, Dining",
                        "file_link": "B-3E-3",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Stools and Benches",
                        "item": "Bench with Stowage Under",
                        "file_link": "B-3F-1",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Stools and Benches",
                        "item": "Benches with Stowage Under, Padded",
                        "file_link": "B-3F-2",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Stools and Benches",
                        "item": "Stools, Revolving, Types V & VA",
                        "file_link": "B-3F-3",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Chair with Writing Tablet",
                        "file_link": "B-3G-1",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Chair, Primary Fly Control",
                        "file_link": "B-3G-2",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Chair, Operator's Special-Purpose, Non-Magnetic",
                        "file_link": "B-3G-3",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Chair, Bridge Wing, Shock Mounted, Non-Magnetic",
                        "file_link": "B-3G-4",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Chair, Bridge Wing",
                        "file_link": "B-3G-5",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Chair, Helmsman",
                        "file_link": "B-3G-6",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Chair, Operators",
                        "file_link": "B-3G-7",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Chair, Operators",
                        "file_link": "B-3G-8",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Chair, Bridge Wing- High Back",
                        "file_link": "B-3G-9",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Chair, Bridge Wing-Low Back",
                        "file_link": "B-3G-10",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Chair and Foot Rest, Pilot House Folding",
                        "file_link": "B-3G-11",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Seat, Surface Lookout",
                        "file_link": "B-3G-12",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Stool, Spring-Loaded",
                        "file_link": "B-3G-13",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Seat, Folding, Bulkhead Mounted",
                        "file_link": "B-3G-14",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Seat, Folding, with Arms, Bulkhead Mounted",
                        "file_link": "B-3G-15",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Child, Bulkhead Mounted, Folding, Non Magnetic",
                        "file_link": "B-3G-16",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Chair, Aviator Ready Room",
                        "file_link": "B-3G-17",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Seating, Training and Lecture Room",
                        "file_link": "B-3G-18",
                    },
                    {
                        "category": "Seating",
                        "section_title": "Special Purpose Seating",
                        "item": "Barber Chair",
                        "file_link": "B-3G-19",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Dining and Serving Tables (Officer)",
                        "item": "Sideboards and Serving Tables, Modular",
                        "file_link": "B-4A-1",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Dining and Serving Tables (Officer)",
                        "item": "Table, Dining, Round top",
                        "file_link": "B-4A-2",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Dining and Serving Tables (Officer)",
                        "item": "Table, Dining, Portable",
                        "file_link": "B-4A-3",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Dining and Serving Tables (Officer)",
                        "item": "Table, Dining/Coffee, Adjustable Height",
                        "file_link": "B-4A-4",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Mess Tables (Enlisted Personnel)",
                        "item": "Tables, Mess, Portable Lightweight, Crew",
                        "file_link": "B-4B-1",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Mess Tables (Enlisted Personnel)",
                        "item": "Table, Mess, Crew",
                        "file_link": "B-4B-2",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Mess Tables (Enlisted Personnel)",
                        "item": "Table, Portable",
                        "file_link": "B-4B-3",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Mess Tables (Enlisted Personnel)",
                        "item": "Mess Table w/Swivel Seats",
                        "file_link": "B-4B-4",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Mess Tables (Enlisted Personnel)",
                        "item": "Stack Table, Dining",
                        "file_link": "B-4B-5",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Lounge and Recreation Tables",
                        "item": "Table ,End",
                        "file_link": "B-4C-1",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Lounge and Recreation Tables",
                        "item": "Tables, Lounge",
                        "file_link": "B-4C-2",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Lounge and Recreation Tables",
                        "item": "Tables, Lounge",
                        "file_link": "B-4C-3",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Lounge and Recreation Tables",
                        "item": "Tables, Lounge",
                        "file_link": "B-4C-4",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Lounge and Recreation Tables",
                        "item": "Tables, Lounge",
                        "file_link": "B-4C-5",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Lounge and Recreation Tables",
                        "item": "Tables, Lounge",
                        "file_link": "B-4C-6",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Lounge and Recreation Tables",
                        "item": "Table, Coffee",
                        "file_link": "B-4C-7",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Lounge and Recreation Tables",
                        "item": "Tables, Coffee",
                        "file_link": "B-4C-8",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Lounge and Recreation Tables",
                        "item": "Table, Card, Folding",
                        "file_link": "B-4C-9",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Lounge and Recreation Tables",
                        "item": "Tables, Recreation, Types 1 & 11",
                        "file_link": "B-4C-10",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Lounge and Recreation Tables",
                        "item": "Tables, Lounge",
                        "file_link": "B-4C-11",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Work, Writing and Special Purpose Tables",
                        "item": "Table, Solid Top",
                        "file_link": "B-4D-1",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Work, Writing and Special Purpose Tables",
                        "item": "Table, Folding",
                        "file_link": "B-4D-2",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Work, Writing and Special Purpose Tables",
                        "item": "Table, Solid Top",
                        "file_link": "B-4D-3",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Work, Writing and Special Purpose Tables",
                        "item": "Table, Writing, with Drawer",
                        "file_link": "B-4D-4",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Work, Writing and Special Purpose Tables",
                        "item": "Table, Writing, Bulkhead-mounted",
                        "file_link": "B-4D-5",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Work, Writing and Special Purpose Tables",
                        "item": "Tables, Chart, Modular",
                        "file_link": "B-4D-6",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Work, Writing and Special Purpose Tables",
                        "item": "Study Carrel",
                        "file_link": "B-4D-7",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Workstations and Computer Furniture",
                        "item": "Terminal and Printer Stand",
                        "file_link": "B-4E-1",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Workstations and Computer Furniture",
                        "item": "Multimedia Stowage Cabinets",
                        "file_link": "B-4E-2",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Workstations and Computer Furniture",
                        "item": "P.C. Cabinet",
                        "file_link": "B-4E-3",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Workstations and Computer Furniture",
                        "item": "Computer Cabinet",
                        "file_link": "B-4E-4",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Workstations and Computer Furniture",
                        "item": "Computer Cabinets",
                        "file_link": "B-4E-5",
                    },
                    {
                        "category": "Tables",
                        "section_title": "Workstations and Computer Furniture",
                        "item": "Desk,",
                        "file_link": "B-4E-6",
                    },
                    {
                        "category": "Desks",
                        "section_title": "Desks, Flat Top",
                        "item": "Desk, Flat Top, Double Pedestal",
                        "file_link": "B-5A-1",
                    },
                    {
                        "category": "Desks",
                        "section_title": "Desks, Flat Top",
                        "item": "Desk, Flat Top, Single Pedestal",
                        "file_link": "B-5A-2",
                    },
                    {
                        "category": "Desks",
                        "section_title": "Desks, Log and Special Purpose",
                        "item": "Desk, Standing, Types A & B",
                        "file_link": "B-5B-1",
                    },
                    {
                        "category": "Desks",
                        "section_title": "Desks, Log and Special Purpose",
                        "item": "Desk, Log, with Hinged Top",
                        "file_link": "B-5B-2",
                    },
                    {
                        "category": "Desks",
                        "section_title": "Desks, Log and Special Purpose",
                        "item": "Desk, Log, with Drawer",
                        "file_link": "B-5B-3",
                    },
                    {
                        "category": "Desks",
                        "section_title": "Desks, Log and Special Purpose",
                        "item": "Desk, Log, Drop Leaf",
                        "file_link": "B-5B-4",
                    },
                    {
                        "category": "Desks",
                        "section_title": "Desks, Log and Special Purpose",
                        "item": "Booth, Telephone, and Integral Log Desk",
                        "file_link": "B-5B-5",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Locker, Cleaning Gear or Battle Dressing Stowage",
                        "file_link": "B-6A-1",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Cabinet, Plan",
                        "file_link": "B-6A-2",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Cabinet, Form",
                        "file_link": "B-6A-3",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Cabinet, Stationery",
                        "file_link": "B-6A-4",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Cabinet, Key, Type A",
                        "file_link": "B-6A-5",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Cabinet, Key, Type E",
                        "file_link": "B-6A-6",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Cabinet, Liberty Card",
                        "file_link": "B-6A-7",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Bookcase, 48\"",
                        "file_link": "B-6A-8",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Bookcases, Sectional, Types A ,B & C",
                        "file_link": "B-6A-9",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Cabinet, Filling, Types II & IV",
                        "file_link": "B-6A-10",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Cabinet, Filing, with Combination Lock",
                        "file_link": "B-6A-11",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Cabinet, Napkin (Capacity 30 to 50)",
                        "file_link": "B-6A-12",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Cabinets, Napkin (Capacity 100 to 130)",
                        "file_link": "B-6A-13",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Lockers, Chronometer, types A, B & C",
                        "file_link": "B-6A-14",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "TV/Stereo Cabinet and Bookcase",
                        "file_link": "B-6A-15",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Cabinet, Corner",
                        "file_link": "B-6A-16",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Key Cabinet, Wall, High Security",
                        "file_link": "B-6A-17",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Cabinets, Cases and Lockers",
                        "item": "Cabinet, Class 6- Special Size, 2 Dwr",
                        "file_link": "B-6A-18",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Racks and Shelving",
                        "item": "Bookracks, Types I & II",
                        "file_link": "B-6B-1",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Racks and Shelving",
                        "item": "Bookracks, Types A, B & C",
                        "file_link": "B-6B-2",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Racks and Shelving",
                        "item": "Racks, Magazine, types A & B",
                        "file_link": "B-6B-3",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Racks and Shelving",
                        "item": "Shelf for Chain-Dex Book",
                        "file_link": "B-6B-4",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Racks and Shelving",
                        "item": "Shelving, Library",
                        "file_link": "B-6B-5",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Safes and Safe Lockers",
                        "item": "Safes, Burglar-resisting, TL-30 & TL-15",
                        "file_link": "B-6C-1",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Safes and Safe Lockers",
                        "item": "Money Safe",
                        "file_link": "B-6C-2",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Safes and Safe Lockers",
                        "item": "Safe, Class 6, Plan File",
                        "file_link": "B-6C-3",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Safes and Safe Lockers",
                        "item": "Locker, Safe, Type No.3",
                        "file_link": "B-6C-4",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Safes and Safe Lockers",
                        "item": "Locker, Safe, Type No.4",
                        "file_link": "B-6C-5",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Safes and Safe Lockers",
                        "item": "Safe, Class 6, Special Size, 1-Drawer",
                        "file_link": "B-6C-6",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Safes and Safe Lockers",
                        "item": "Safe, Class 5, Plan File",
                        "file_link": "B-6C-7",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Safes and Safe Lockers",
                        "item": "Locker, Safe, Type No.8",
                        "file_link": "B-6C-8",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Safes and Safe Lockers",
                        "item": "Locker, Safe, Type No. 10",
                        "file_link": "B-6C-9",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Safes and Safe Lockers",
                        "item": "Safe, Class 6, Special Size- Millimeters, W/Interior Locks",
                        "file_link": "B-6C-10",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Safes and Safe Lockers",
                        "item": "Safe, Locker, Class 6, Special Size- Millimeters, and TL-15",
                        "file_link": "B-6C-11",
                    },
                    {
                        "category": "Stowage, General",
                        "section_title": "Safes and Safe Lockers",
                        "item": "Safe, General Purpose Cabinet, Class 5",
                        "file_link": "B-6C-12",
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Medical and Dental",
                        "item": "Cabinet and Locker for Operating Room and Surgical Dressing Room",
                        "file_link": "B-7A-1",
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Medical and Dental",
                        "item": "Cabinet, Medical, with Narcotics Locker",
                        "file_link": "B-7A-2",
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Medical and Dental",
                        "item": "Cabinet, Bacteriological Laboratory",
                        "file_link": "B-7A-3",
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Medical and Dental",
                        "item": "Cabinet, Oral Surgical",
                        "file_link": "B-7A-4",
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Medical and Dental",
                        "item": "Cabinet, Medical Supply or Poison Antidote",
                        "file_link": "B-7A-5",
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Medical and Dental",
                        "item": "Locker, Medicine",
                        "file_link": "B-7A-6",
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Medical and Dental",
                        "item": "Locker, Medical, Portable",
                        "file_link": "B-7A-7",
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Medical and Dental",
                        "item": "Rack, Clinical Chart Holder",
                        "file_link": "B-7A-8",
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Medical and Dental",
                        "item": "Box, First Aid",
                        "file_link": "B-7A-9",
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Medical and Dental",
                        "item": "Locker, Hospital Berth",
                        "file_link": "B-7A-10",
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Post Office",
                        "item": "Cabinets, Post Office, Units Type A & D",
                        "file_link": "B-7B-1",
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Post Office",
                        "item": "Cabinet, Post Office, Unit Type C",
                        "file_link": "B-7B-2",
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Post Office",
                        "item": "Mailbox",
                        "file_link": "B-7B-3",
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Post Office",
                        "item": "Counter, Post Office",
                        "file_link": "B-7B-4",
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Barber Shop",
                        "item": "Locker, Supply Barber",
                        "file_link": "B-7C-1",
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Barber Shop",
                        "item": "Barber, Back Bar",
                        "file_link": "B-7C-2",
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Display and Bulletin Boards",
                        "item": "Boards, Bulletin, Type A & B",
                        "file_link": "B-7D-1",
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Display and Bulletin Boards",
                        "item": "Dry Erase Board",
                        "file_link": "B-7D-2",
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Religious Furnishings",
                        "item": "Pulpit, Portable",
                        "file_link": "B-7E-1",
                    },
                    {
                        "category": "Furnishings, Special Purpose",
                        "section_title": "Religious Furnishings",
                        "item": "Locker, Religious Literature",
                        "file_link": "B-7E-2",
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
                    "icon": "location",
                    "title": "Office",
                    "subtitle": `${process.env.COMPANY_NAME}`,
                    "value": `${process.env.COMPANY_ADDRESS}<br>${process.env.COMPANY_CITY}, ${process.env.COMPANY_STATE}, ${process.env.COMPANY_ZIP}`
                }
            ]
        },
        "contact_page": {
            "meta_data": {
                "title": "Contact",
                "description": "Contact"
            },
            "hero_section": {
                "title": "Contact Pacific Maritime Industries",
                "subtitle": "Serving the Pacific Fleet from our San Diego facility. Standard component quotes are provided within 24 hours. Complex stateroom, berthing, and galley retrofits are quoted within 5 to 7 business days.",
                "center_text": true,
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
                    "subtitle": "Based on San Diego's working waterfront. We serve the entire Pacific Fleet.",
                    "align_left": true
                },
                "columns": [
                    {
                        "image": "",
                        "title": "Office",
                        "subtitle": "1790 Dornoch Court, San Diego, CA 92154",
                        "buttons": [
                            {
                                "text": "Get directions",
                                "link": "https://maps.app.goo.gl/vwELP8qpm7vgDPk16",
                                "button_style": "btn btn-black-outline btn-animation-two",
                                "button_icon": "arrow-right"
                            }
                        ]
                    },
                    {
                        "image": "",
                        "title": "Ports we serve",
                        "subtitle": "We deploy installation teams to Pacific Fleet homeports including Pearl Harbor, Yokosuka, and Guam. Contact us for mobilization details."
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
                "description": "Quality & Compliance"
            },
            "hero_section": {
                "title": "Quality assurance & compliance",
                "subtitle": "Evidence‑based documentation for NAVSEA, ABS, and NVR procurement requirements. Every material lot traceable to its mill cert.",
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
                    "small_title": "Certifications",
                    "title": "Certifications and Standards",
                    "subtitle": "Current credentials for NAVSEA, ABS, and NVR procurement requirements"
                },
                "certifications_list": [
                    {
                        "small_title": "ISO",
                        "title": "ISO 9001:2015",
                        "subtitle": "Pacific Maritime Industries Corp. has been assessed and certified as meeting the requirements of ISO 9001:2015. Manufacturer of Sheet Metal Products. Initial certification was issued on January 31, 2019. Expires on January 30, 2028.",
                        "buttons": [
                            {
                                "text": "View Certificate",
                                "link": "https://res.cloudinary.com/irwujctd/image/upload/v1785420485/ISO-9001-2015_lpsmie.png",
                                "target": "_blank",
                                "button_style": "btn btn-black-outline btn-animation-two"
                            }
                        ],
                        "bottom_image": "https://res.cloudinary.com/irwujctd/image/upload/w_500/v1785420485/ISO-9001-2015_lpsmie.png",
                        "bottom_image_alt": "ISO-9001-2015",
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
                            "button_style": "btn btn-black-outline btn-animation-two"
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
                    "small_title": "Why Harcon",
                    "title": "Built on safety and skill",
                    "subtitle": "A career where you go home safe and grow strong."
                },
                "columns": [
                    {
                        "image": "",
                        "small_title": "Safety",
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
                        "subtitle": "45+ years in San Diego. No out-of-state relocations. We hire locally and promote from within.",
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