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
            },
            {
                "menu_name": "Request Quote",
                "menu_url": "/request-quote",
                "button_style": "primary"
            }
        ]
    },
    {
        "footer_menu": [
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
                "menu_url": "/contact"
            },
            {
                "menu_name": "Request quote",
                "menu_url": "/request-quote"
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
                "background_image": "https://res.cloudinary.com/irwujctd/image/upload/v1783529228/pexels-kelly-37195596_j7tyau.jpg",
                // "background_image": "https://res.cloudinary.com/irwujctd/image/upload/v1783529911/pexels-hujason-32863928_gmu07z.jpg",
                "title": "Built for the sea since 1979",
                "subtitle": "San Diego shipboard interiors manufacturer offering in-house engineering and comprehensive fabrication services for the Pacific Fleet.",
                "buttons": [
                    {
                        "text": "Our work",
                        "url": "#our-work",
                        "button_style": "primary"
                    },
                    {
                        "text": "Request quote",
                        "url": "/request-quote",
                        "button_style": "secondary"
                    }
                ],
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