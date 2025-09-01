import type { Metadata } from "next";
import "swiper/css";
import "swiper/css/autoplay";
import "bootstrap/dist/css/bootstrap.min.css";
import "@assets/css/odometer.min.css";
import "@assets/icon/style.css";
import "@assets/css/animate.css";
import "@assets/scss/app.scss";

import localFont from "next/font/local";

const mono = localFont({
    src: "../fonts/DepartureMono-Regular.otf",
    display: "swap",
    variable: "--font-mono",
});

const geist = localFont({
    src: [
        { path: "../fonts/Geist-Regular.woff2", weight: "400", style: "normal" },
        { path: "../fonts/Geist-Bold.woff2", weight: "700", style: "normal" },
    ],
    variable: "--font-geist",
    display: "swap",
});

const grotesk = localFont({
    src: [
        { path: "../fonts/OverusedGrotesk-Book.otf", weight: "400" },
        { path: "../fonts/OverusedGrotesk-Medium.otf", weight: "500" },
    ],
    display: "swap",
    variable: "--font-grotesk",
});

export const metadata: Metadata = {
    title: "Mario AI",
    description: "Mario AI ",
    keywords: ["Mario AI"],
    robots: "index, follow",
    icons: {
        icon: "/assets/images/Mario/favicon_dark.svg",
        shortcut: "/assets/images/Mario/favicon_dark.svg",
        apple: "/assets/images/Mario/favicon_dark.svg",
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geist.className} ${mono.variable} ${grotesk.variable}`}
        >
            <head></head>
            <body>{children}</body>
        </html>
    );
}
