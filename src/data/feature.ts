export interface FeatureTab {
    id: string;
    title: string;
    img: string;
    desc: string;
    subPoints: { title: string; desc: string }[];
}

export const FeatureTabItems: FeatureTab[] = [
    {
        id: "strategyInsights",
        title: "Strategy & Insights",
        img: "Strategy & Insights.webp",
        desc: "Understand your audience and outpace competitors with AI-powered intelligence.",
        subPoints: [
            { title: "Brand Tone & Voice", desc: "Define and maintain consistency everywhere." },
            { title: "Competitor Intelligence", desc: "Spot what’s working for others and stay ahead." },
            { title: "Market Segmentation & Gaps", desc: "Identify untapped opportunities and audience clusters." },
        ],
    },
    {
        id: "contentSEO",
        title: "Content & SEO",
        img: "Content & SEO.webp",
        desc: "Create, optimize, and dominate every channel with intelligent automation.",
        subPoints: [
            { title: "AI-Powered Content", desc: "Blogs, ads, and captions created 10x faster." },
            { title: "SEO & Discoverability", desc: "Automated audits and AI-driven keyword strategies." },
            { title: "Blogs & Newsletters", desc: "Build authority with long-form content that converts." },
        ],
    },
    {
        id: "campaignsPerformance",
        title: "Campaigns & Performance",
        img: "Campaigns & Performance.webp",
        desc: "Plan, execute, and scale marketing campaigns without manual effort.",
        subPoints: [
            { title: "Performance Marketing", desc: "Optimize campaigns automatically for higher ROI." },
            { title: "Affiliate & UGC Marketing", desc: "Manage creators and scale collaborations seamlessly." },
            {
                title: "Offline & Cross-Channel Marketing", desc: "Integrate digital and traditional campaigns for impact everywhere."
            },
        ],
    },
    {
        id: "leadGeneration",
        title: "Lead Generation & Outreach",
        img: "Lead Generation & Outreach.webp",
        desc: "Turn data into customers with smarter targeting and automation.",
        subPoints: [
            { title: "Lead Enrichment", desc: "Verified profiles ready to convert." },
            { title: "Email Outreach & Automation", desc: "Define and maintain consistency everywhere." },
        ],
    },
    {
        id: "socialScheduling",
        title: "Social & Scheduling",
        img: "Social & Scheduling.webp",
        desc: "Stay consistent, relevant, and ahead of trends across all platforms.",
        subPoints: [
            { title: "Social Media Calendar ", desc: "Plan, schedule, and publish effortlessly." },
        ],
    },
];
