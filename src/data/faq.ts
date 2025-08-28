interface faqItem {
    title: string;
    label: string;
}

export const faqItems: faqItem[] = [
    {
        title: "What can I use Qore for?",
        label: "You can generate taglines, short descriptions, ideas for visuals, social posts, and more in seconds.",
    },
    {
        title: "Is Qore free to use?",
        label: "Qore offers a free tier with limited generations. Paid plans unlock more features and outputs.",
    },
    {
        title: "Can I use Qore for commercial projects?",
        label: "Yes — all generated content can be used for both personal and commercial purposes.",
    },
    {
        title: "How accurate are the outputs?",
        label: "Results are context-aware and high quality, but we recommend reviewing and refining for best use.",
    },
    {
        title: "What if I don’t like the result?",
        label: "You can regenerate as many times as needed, or edit outputs directly to suit your needs.",
    },
];
