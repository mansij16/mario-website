import { SectHeader } from "@/src/components/section/SectHeader";
import { SectTagline } from "@/src/components/section/SectTagline";
import { SectBottom } from "@/src/components/section/SectBottom";
import { faqItems } from "@data/faq";
import { Fragment } from "react";

export default function FaqSection() {
    return (
        <>
            <section className="section-faq" id="FAQs">
                <SectHeader value={7} label={"FAQS"} />
                <span className="br-line"></span>
                <SectTagline name={"ANSWERS TO YOUR COMMON QUESTIONS."} />
                <span className="br-line"></span>
                <MainFaqSection />
                <span className="br-line"></span>
                <SectBottom />
                <span className="br-line"></span>
            </section>
        </>
    );
}

export function MainFaqSection() {
    return (
        <>
            <div className="sect-main">
                <div className="container">
                    <div className="sect-title wow fadeInUp">
                        <h2 className="s-title font-3 m-0">
                            Got questions? <br />
                            We&apos;ve got answers.
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 offset-lg-1 col-lg-5 offset-xl-2 col-xl-4">
                            <div className="faq-list">
                                {faqItems
                                    .filter((_, idx) => idx % 2 == 0)
                                    .map((item, idx) => (
                                        <Fragment key={idx}>
                                            <div className="faq-item wow fadeInLeft">
                                                <h3 className="text-body-2 faq_title text-main-2">{item.title}</h3>
                                                <p className="text-body-3 faq_label">{item.label}</p>
                                            </div>
                                            <span className="br-line has-dot"></span>
                                        </Fragment>
                                    ))}
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-5 col-xl-4">
                            <div className="faq-list">
                                {faqItems
                                    .filter((_, idx) => idx % 2 !== 0)
                                    .map((item, idx) => (
                                        <Fragment key={idx}>
                                            <div className="faq-item wow fadeInRight">
                                                <h3 className="text-body-2 faq_title text-main-2">{item.title}</h3>
                                                <p className="text-body-3 faq_label">{item.label}</p>
                                            </div>
                                            <span className="br-line has-dot"></span>
                                        </Fragment>
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className="position-relative has-hafl_plus">
                        <span className="hafl-plus pst-left_bot item_bot wow bounceInScale"></span>
                        <span className="hafl-plus pst-right_bot item_bot wow bounceInScale"></span>
                    </div>
                </div>
            </div>
        </>
    );
}
