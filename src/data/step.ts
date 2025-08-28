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
        desc: "Tell MARIO your brand's URL or your idea.",
        image: "step-1.webp",
    },
    {
        id: "step2",
        number: "STEP 02",
        title: "Think",
        desc: "MARIO figures out the gaps, opportunities, tone of voice, brand audience, brand positioning, competitor analysis and the optimum course of action for your brand.",
        image: "step-2.webp",
    },
    {
        id: "step3",
        number: "STEP 03",
        title: "Plan",
        desc: "MARIO asks you for your goals and then formulates a multi channel strategy as per the goal",
        image: "step-3.webp",
    },
    {
        id: "step4",
        number: "STEP 04",
        title: "Create",
        desc: "Create content for the marketing campaigns selected for the channels Content, ads, emails, influencers go live.",
        image: "step-4.webp",
    },
    {
        id: "step5",
        number: "STEP 05",
        title: "Execute",
        desc: "MARIO will execute the campaigns through multiple third party integrations within minutes.",
        image: "step-5.webp",
    },
    {
        id: "step6",
        number: "STEP 06",
        title: "Optimize",
        desc: "Real-time ROI insights + automatic improvements.",
        image: "step-6.webp",
    },
];
