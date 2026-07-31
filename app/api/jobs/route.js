import { NextResponse } from 'next/server';

function stripHtml(html) {
    if (!html) return '';
    return html
        .replace(/<[^>]+>/g, '') // Remove HTML tags
        .replace(/&nbsp;/g, ' ') // Replace non-breaking spaces
        .replace(/&#39;/g, "'") // Replace HTML entity quotes
        .replace(/&amp;/g, "&")
        .replace(/&bull;/g, "•") // Clean bullet points
        .replace(/\s+/g, ' ') // Normalize spaces
        .trim();
}

function extractDescription(html) {
    if (!html) return '';

    let cleanedHtml = html;

    // Remove ADP "About Company" boilerplate section if present
    const companyTextEnd = html.indexOf("contributes to our quality reputation.</p>");
    if (companyTextEnd !== -1) {
        cleanedHtml = html.substring(companyTextEnd + "contributes to our quality reputation.</p>".length);
    }

    // Try to extract text under "Position Summary", "Job Summary", "Job description", or "About the Role"
    const summaryMatch = cleanedHtml.match(/(?:Skills|Position Summary|Job Summary|Job description|About the Role|About Us)(?:<\/h[234]>|[:\-\n]|\s*<\/strong>)\s*(?:<p[^>]*>)?([\s\S]+?)(?:<\/p>|<h[234]|$)/i);
    // extract only the first sentence that is found
    if (summaryMatch) {
        let result = stripHtml(summaryMatch[1]);

        result = result.split('.')[0] + '.';

        if (result.length > 50) {
            return result;
        }
    }

    // Fallback: strip tags and truncate
    const text = stripHtml(cleanedHtml);
    if (text.length > 300) {
        return text.substring(0, 300) + '...';
    }
    return text;
}

export async function GET() {
    try {
        const listUrl = 'https://workforcenow.cloud.adp.com/mascsr/default/careercenter/public/events/staffing/v1/job-requisitions?cid=956bb2e1-0435-4211-ae80-2d83002ae0aa&ccId=19000101_000001&lang=en_US';

        const response = await fetch(listUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'application/json, text/plain, */*'
            },
            next: { revalidate: 3600 } // cache for 1 hour
        });

        if (response.ok) {
            const listData = await response.json();
            const requisitions = listData.jobRequisitions || [];

            if (requisitions.length > 0) {
                const jobs = await Promise.all(requisitions.map(async (req) => {
                    const detailUrl = `https://workforcenow.cloud.adp.com/mascsr/default/careercenter/public/events/staffing/v1/job-requisitions/${req.itemID}?cid=956bb2e1-0435-4211-ae80-2d83002ae0aa`;
                    try {
                        const detailRes = await fetch(detailUrl, {
                            headers: {
                                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                                'Accept': 'application/json, text/plain, */*'
                            },
                            next: { revalidate: 3600 }
                        });

                        if (detailRes.ok) {
                            const detail = await detailRes.json();

                            const externalJobId = req.customFieldGroup?.stringFields?.find(f => f.nameCode?.codeValue === 'ExternalJobID')?.stringValue || '';
                            const link = `https://workforcenow.cloud.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=956bb2e1-0435-4211-ae80-2d83002ae0aa&ccId=19000101_000001&jobId=${externalJobId}&source=IN&lang=en_US`;

                            // const salaryRange = req.customFieldGroup?.stringFields?.find(f => f.nameCode?.codeValue === 'SalaryRange')?.stringValue || '';
                            // const workLevel = req.workLevelCode?.shortName || 'Full Time';
                            // const location = req.requisitionLocations?.[0]?.nameCode?.shortName?.trim() || 'San Diego, CA, US';

                            // const description = extractDescription(detail.requisitionDescription);

                            // const icons = [
                            //     { icon: 'location', description: location },
                            //     { icon: 'briefcase', description: workLevel }
                            // ];

                            // if (salaryRange) {
                            //     // Clean up salary text slightly (e.g. trim whitespace)
                            //     const cleanSalary = salaryRange.trim().replace(/\s+/g, ' ');
                            //     icons.push({ icon: 'dollar', description: cleanSalary });
                            // }

                            return {
                                title: req.requisitionTitle,
                                description: description,
                                link: link,
                                icons: icons
                            };
                        }
                    } catch (e) {
                        console.error(`Failed to fetch details for job ${req.requisitionTitle}:`, e);
                    }
                    return null;
                }));

                const validJobs = jobs.filter(j => j !== null);
                if (validJobs.length > 0) {
                    return NextResponse.json(validJobs);
                }
            }
        }
    } catch (e) {
        console.error("ADP Scraper Error:", e);
    }

    // High fidelity Fallback data based on Harcon's live jobs
    const fallbackJobs = [
        {
            title: "CNC Lathe Machinist",
            description: "The CNC Lathe Machinist is responsible for setting up, operating, and maintaining CNC lathe equipment to produce precision components according to engineering drawings and customer specifications. This role ensures parts meet dimensional accuracy, quality standards, and production timelines while maintaining a safe and organized work environment.",
            link: "https://workforcenow.cloud.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=956bb2e1-0435-4211-ae80-2d83002ae0aa&ccId=19000101_000001&jobId=18326&source=IN&lang=en_US",
            icons: [
                { icon: "location", description: "San Diego, CA, US" },
                { icon: "briefcase", description: "Full Time" },
            ]
        },
        {
            title: "Janitor",
            description: "The Manufacturing Shop Janitor is responsible for maintaining cleanliness and order in the manufacturing facility. This role involves performing various cleaning tasks to ensure a safe and sanitary environment for all employees.",
            link: "https://workforcenow.cloud.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=956bb2e1-0435-4211-ae80-2d83002ae0aa&ccId=19000101_000001&jobId=18307&source=IN&lang=en_US",
            icons: [
                { icon: "location", description: "San Diego, CA, US" },
                { icon: "briefcase", description: "Full Time" },
            ]
        },
        {
            title: "Press Break Operator",
            description: "About the Role: The Press Brake Operator plays a critical role in the manufacturing process by precisely bending and shaping metal sheets according to detailed specifications. This position requires a strong understanding of machine operation, safety protocols, and quality control to ensure that each bend is accurate.",
            link: "https://workforcenow.cloud.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=956bb2e1-0435-4211-ae80-2d83002ae0aa&ccId=19000101_000001&jobId=17530&source=IN&lang=en_US",
            icons: [
                { icon: "location", description: "San Diego, CA, US" },
                { icon: "briefcase", description: "Full Time" },
            ]
        },
        {
            title: "Laser Programmer – AMADA Software",
            description: "The Punch/Laser Programmer is responsible for creating accurate, efficient CNC programs for AMADA punch and laser machines. This role supports production by converting engineering drawings into machine-ready programs, optimizing tooling paths, and ensuring high-quality, cost-effective manufacturing of sheet metal components.",
            link: "https://workforcenow.cloud.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=956bb2e1-0435-4211-ae80-2d83002ae0aa&ccId=19000101_000001&jobId=17194&source=IN&lang=en_US",
            icons: [
                { icon: "location", description: "San Diego, CA, US" },
                { icon: "briefcase", description: "Full Time" },
            ]
        },
        {
            title: "Welder",
            description: "Welder/Fabricator Job Description: Repairs and fabricates various sheet metal items and equipment using cutting, burning, and welding techniques (TIG/MIG). Monitors the welding, burning, and fitting process to ensure parts are not overheated or damaged by warping, distortion, expansion, or shrinkage.",
            link: "https://workforcenow.cloud.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=956bb2e1-0435-4211-ae80-2d83002ae0aa&ccId=19000101_000001&jobId=15255&source=IN&lang=en_US",
            icons: [
                { icon: "location", description: "San Diego, CA, US" },
                { icon: "briefcase", description: "Full Time" },
            ]
        },
        {
            title: "Production Supervisor",
            description: "The Assembly Supervisor oversees daily operations in the Assembly department, ensuring production goals are met safely, accurately, and on schedule. This role is responsible for leading assemblers, coordinating workflow, maintaining quality standards, and ensuring all employees follow company procedures, safety rules, and MIE Track system requirements.",
            link: "https://workforcenow.cloud.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=956bb2e1-0435-4211-ae80-2d83002ae0aa&ccId=19000101_000001&jobId=14509&source=IN&lang=en_US",
            icons: [
                { icon: "location", description: "San Diego, CA, US" },
                { icon: "briefcase", description: "Full Time" },
            ]
        },
        {
            title: "Inventory Control",
            description: "The Inventory Control Specialist is responsible for managing and optimizing inventory across two physical locations, ensuring accuracy, efficiency, and compliance with industry standards. This role requires proficiency in MIE Trak inventory management software and a strong understanding of supply chain operations within a manufacturing environment.",
            link: "https://workforcenow.cloud.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=956bb2e1-0435-4211-ae80-2d83002ae0aa&ccId=19000101_000001&jobId=11741&source=IN&lang=en_US",
            icons: [
                { icon: "location", description: "San Diego, CA, US" },
                { icon: "briefcase", description: "Full Time" },
            ]
        },
        {
            title: "Assembly",
            description: "About the Role: The Assembly role is critical in ensuring the accurate and efficient construction of products or components according to specified guidelines and quality standards. This position involves working closely with production teams to assemble parts, subassemblies, or finished products.",
            link: "https://workforcenow.cloud.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=956bb2e1-0435-4211-ae80-2d83002ae0aa&ccId=19000101_000001&jobId=11161&source=IN&lang=en_US",
            icons: [
                { icon: "location", description: "San Diego, CA, US" },
                { icon: "briefcase", description: "Full Time" },
            ]
        },
        {
            title: "General Labor",
            description: "About the Role: The General Labor position is essential for supporting various operational tasks across multiple departments, ensuring that daily workflows proceed efficiently and safely. This role involves performing physically demanding tasks that contribute to production.",
            link: "https://workforcenow.cloud.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=956bb2e1-0435-4211-ae80-2d83002ae0aa&ccId=19000101_000001&jobId=11160&source=IN&lang=en_US",
            icons: [
                { icon: "location", description: "San Diego, CA, US" },
                { icon: "briefcase", description: "Full Time" },
            ]
        }
    ];

    return NextResponse.json(fallbackJobs);
}
