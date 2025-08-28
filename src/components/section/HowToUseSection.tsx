import { SectHeader } from "@components/section/SectHeader";
import { SectTagline } from "@components/section/SectTagline";
import { SectBottom } from "@components/section/SectBottom";
import MainHowSection from "./mainSection/MainHowSection";

export default function HowToUseSection() {
    return (
        <>
            <section className="section-how-to" id="howItWorks">
                <SectHeader value={4} label="HOW IT WORKS" />
                <span className="br-line"></span>
                <SectTagline name={"HOW MARIO SCALES"} />
                <span className="br-line"></span>
                <MainHowSection />
                <span className="br-line"></span>
                <SectBottom />
                <span className="br-line"></span>
            </section>
        </>
    );
}
