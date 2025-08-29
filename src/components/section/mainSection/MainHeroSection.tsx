"use client";
import { assitantsAiItems } from "@/src/data/assitantsAi";
import { useEffect, useState } from "react";

export function MainHeroSection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prev) => (prev + 1) % assitantsAiItems.length);
        }, 2500);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="sect-main">
                <div className="container">
                    <div className="sect-title wow fadeInUp">
                        <h1 className="s-title font-3">
                            Replace Your Entire Marketing Team.
                            <br />With One AI.
                            {/* <div className="text-change_wrap">
                                {assitantsAiItems.map((item, idx) => (
                                    <div key={idx} className={`text-change_rotating  ${idx === index ? "active" : ""}`}>
                                        With One AI.
                                        <span className={`icon ${item.icon}`}></span>
                                        {item.name}
                                    </div>
                                ))}
                            </div> */}
                        </h1>
                        <p className="s-sub_title">
                            MARIO isn&apos;t a tool. It&apos;s your full fledged marketing team — <br className="d-none d-sm-block" />
                            ideating, executing, optimizing across every channel — <br className="d-none d-sm-block" />at half the cost, ten times the speed.
                        </p>
                    </div>
                </div>
                <span className="br-line"></span>
                <div className="container">
                    <div className="sect-content position-relative">
                        <BoxAskWrap />
                    </div>
                </div>
            </div>
        </>
    );
}

export function BoxAskWrap() {
    return (
        <>
            <div className="box-ask-wrap">
                <div className="box-ask">
                    <AskForm />
                </div>
                <span className="hafl-plus pst-left_bot item_bot wow bounceInScale"></span>
                <span className="hafl-plus pst-right_bot item_bot wow bounceInScale"></span>
                <span className="hafl-plus pst-left_top item_top wow bounceInScale"></span>
                <span className="hafl-plus pst-right_top item_top wow bounceInScale"></span>
            </div>
        </>
    );
}

export const AskForm: React.FC = () => {
    return (
        <form className="form-ask wow fadeInUp">
            <div className="form-content">
                <input className="style-2" type="text" placeholder="Market with Mario (Enter your brand URL)..." />

                <fieldset className="field-bottom">
                    <div className="field_left">
                        <button type="button" className="btn-ip type-circle ip-add">
                            <i className="icon icon-plus" />
                        </button>

                        <button type="button" className="btn-ip ip-modern text-body-3">
                            <i className="icon icon-arrow-circle" />
                            GPT-4.1
                            <i className="icon icon-arrow-caret-down fs-8" />
                        </button>
                    </div>

                    <div className="field_right">
                        <button type="button" className="btn-ip type-transparent ip-voice">
                            <i className="icon icon-micro" />
                        </button>

                        <button type="submit" className="btn-submit btn-ip type-circle">
                            <i className="icon icon-arrow-top" />
                        </button>
                    </div>
                </fieldset>
            </div>
        </form>
    );
};
