import { SectHeader } from "@/src/components/section/SectHeader";
import { SectTagline } from "@/src/components/section/SectTagline";
import { SectBottom } from "@/src/components/section/SectBottom";
import SlideBrand from "@components/common/SlideBrand";
import { MainHeroSection } from "./mainSection/MainHeroSection";

export default function HeroSection() {
    return (
        <>
            <section className="section-hero">
                <SectHeader value={1} label={"OVERVIEW"} />
                <span className="br-line"></span>
                <SectTagline name={"The Future of Marketing"} />
                <span className="br-line"></span>
                <MainHeroSection />
                <span className="br-line"></span>
                <SlideBrand />
                <span className="br-line"></span>
                <SectBottom />
                <span className="br-line"></span>
            </section>
        </>
    );
}
