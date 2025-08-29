interface stepItem {
    id: string;
    number: string;
    title: string;
    desc: string;
    image: string;
}

export const stepItems: stepItem[] = [
    {
        id: "step1",
        number: "STEP 01",
        title: "Brief",
        desc: "Share your brand's URL or idea with MARIO.",
        image: "step-1.webp",
    },
    {
        id: "step2",
        number: "STEP 02",
        title: "Think",
        desc: "MARIO analyzes everything: gaps, opportunities, tone of voice, audience, positioning, competitors, and the best course of action for your brand.",
        image: "step-2.webp",
    },
    {
        id: "step3",
        number: "STEP 03",
        title: "Plan",
        desc: "Define your goals, and MARIO builds a complete multi-channel strategy tailored to meet them.",
        image: "step-3.webp",
    },
    {
        id: "step4",
        number: "STEP 04",
        title: "Create",
        desc: "Instantly generate campaign-ready content across channels, including ads, emails, influencer collaborations, and more. Everything goes live in minutes.",
        image: "step-4.webp",
    },
    {
        id: "step5",
        number: "STEP 05",
        title: "Execute",
        desc: "MARIO launches your campaigns seamlessly using third-party integrations and saves hours of manual work.",
        image: "step-5.webp",
    },
    {
        id: "step6",
        number: "STEP 06",
        title: "Optimize",
        desc: "Get real-time ROI insights with continuous, automatic improvements that keep your campaigns performing at their peak.",
        image: "step-6.webp",
    },
];
