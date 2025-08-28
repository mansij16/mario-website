import { SectHeader } from "@/src/components/section/SectHeader";
import { SectTagline } from "@/src/components/section/SectTagline";
import { SectBottom } from "@/src/components/section/SectBottom";
import { benefitItems } from "@data/benefit";
import Image from "next/image";
import MarketingIntelligenceOfficer from "../../assets/images/section/MARketing Intelligence Officer(BG remove).png";

export default function BenefitSection() {
    return (
        <>
            <section className="section-benefit">
                <SectHeader value={3} label="THE SOLUTION" />
                <span className="br-line"></span>
                <SectTagline name="MARKETING INTELLIGENCE OFFICER" />
                <span className="br-line"></span>
                <MainBenefitSection />
                <span className="br-line"></span>
                <SectBottom />
                <span className="br-line"></span>
            </section>
        </>
    );
}

export function MainBenefitSection() {
    return (
        <>
            <div className="sect-main">
                <div className="container">
                    <div className="place-video">
                        <div className="visual-object">
                            <div className="object_img wow bounceInScale">
                                <div className="image">
                                    <Image src={MarketingIntelligenceOfficer} alt="Image" width={636} height={636} />
                                </div>
                                <span className="hafl-plus start-0 top-0 rotate-top_left wow bounceInScale"></span>
                                <span className="hafl-plus end-0 top-0 rotate-top_right wow bounceInScale"></span>
                            </div>
                        </div>
                        <div className="sect-title wow fadeInUp">
                            <h2 className="s-title font-3">
                                Meet MARIO —  <br />
                                Your AI Marketer & Cofounder.
                            </h2>
                            <p className="s-sub_title">
                                MARIO does in minutes what teams take months to do: <br className="d-none d-lg-block" />— built for
                                speed, clarity, and control.
                            </p>
                        </div>
                    </div>
                    <div className="position-relative">
                        <div className="grid-box_icon tf-grid-layout sm-col-2 md-col-2">
                            {benefitItems.map((item, idx) => (
                                <div key={idx} className="box-icon-text wow fadeInUp">
                                    <div className="icon">
                                        <Image src={`/assets/images/section/${item.icon}`} width={78} height={78} alt="Icon" />
                                    </div>
                                    <div className="content">
                                        <p className="title text-main-2">{item.title}</p>
                                        <p className="sub-title text-body-3">{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <span className="hafl-plus pst-left_bot item_bot wow bounceInScale"></span>
                        <span className="hafl-plus pst-right_bot item_bot wow bounceInScale"></span>
                    </div>
                </div>
            </div>
        </>
    );
}
