"use client";
import { FeatureTabItems } from "@/src/data/feature";
import Image from "next/image";
import { useState } from "react";

export default function MainFeatureSection() {
    const [activeTab, setActiveTab] = useState("strategyInsights");

    return (
        <>
            <div className="sect-main flat-animate-tab">
                <div className="s-img_item wow bounceInScale">
                    <Image src="/assets/images/section/smoke-blue.webp" alt="Item" width={1296} height={606} />
                </div>
                <div className="container">
                    <div className="sect-title wow fadeInUp">
                        <h2 className="s-title font-3">Everything You Need to Market Smarter <br />In One Platform</h2>
                        <p className="s-sub_title">
                            Your always-on AI marketer plans, creates, executes, and optimizes campaigns without pause.  <br className="d-none d-lg-block" />
                            No silos. No delays. Just results.
                        </p>
                    </div>
                    <div className="container mb-5">
                        <div className="position-relative">
                            <ul className="tab-can_do position-relative mx-1" role="tablist">
                                {FeatureTabItems.map((item) => (
                                    <li key={item.id} className={`nav-tab-item ${activeTab === item.id ? "active" : ""}`} role="presentation">
                                        <button
                                            onClick={() => setActiveTab(item.id)}
                                            className={`btn_tab tf-btn style-transparent text-body-3 animate-btn ${activeTab === item.id ? "active" : ""
                                                }`}
                                            role="tab"
                                        >
                                            {item.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <span className="hafl-plus pst-left_bot item_bot wow bounceInScale"></span>
                            <span className="hafl-plus pst-right_bot item_bot wow bounceInScale"></span>
                        </div>
                    </div>
                    <div className="tab-content">
                        {FeatureTabItems.map((item) => (
                            <div key={item.id} id={item.id} className={`tab-pane ${activeTab === item.id ? "active show" : ""}`} role="tabpanel">
                                <div className="image-with-text">
                                    <Image src={`/assets/images/section/${item.img}`} alt={item.title} loading="lazy" width={1617} height={909} />
                                    <div className="sect-title box-text">
                                        <h4 className="s-title">{item.title}</h4>
                                        <p className="s-sub_title text-body-3">
                                            {item.desc.split(" — ")[0]}
                                            <br className="d-none d-lg-block" />— {item.desc.split(" — ")[1]}
                                        </p>
                                    </div>

                                    <div className="sect-box-text-wrapper">
                                        {
                                            item.subPoints.map((subPoint, idx) => (
                                                <div key={idx} className="sect-box-text">
                                                    <span className="box-title-text">{subPoint.title}</span>
                                                    <span className="box-desc-text">{subPoint.desc}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <span className="br-line"></span>
                {/* <div className="container">
                    <div className="position-relative">
                        <ul className="tab-can_do position-relative mx-1" role="tablist">
                            {FeatureTabItems.map((item) => (
                                <li key={item.id} className={`nav-tab-item ${activeTab === item.id ? "active" : ""}`} role="presentation">
                                    <button
                                        onClick={() => setActiveTab(item.id)}
                                        className={`btn_tab tf-btn style-transparent text-body-3 animate-btn ${activeTab === item.id ? "active" : ""
                                            }`}
                                        role="tab"
                                    >
                                        {item.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <span className="hafl-plus pst-left_bot item_bot wow bounceInScale"></span>
                        <span className="hafl-plus pst-right_bot item_bot wow bounceInScale"></span>
                    </div>
                </div> */}
            </div>
        </>
    );
}
