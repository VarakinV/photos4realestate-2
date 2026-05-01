"use client";

import { useState } from "react";
import { BeforeAfter } from "@/components/bits/BeforeAfter";

type TabData = {
  id: string;
  label: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  ariaLabel: string;
};

type Props = {
  tabs: TabData[];
};

export function VirtualStagingTabs({ tabs }: Props) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <>
      <div className="room-tabs" role="tablist" aria-label="Room examples">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`room-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-panels">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`room-panel ${activeTab === tab.id ? "active" : ""}`}
            role="tabpanel"
            aria-label={tab.ariaLabel}
            style={{ display: activeTab === tab.id ? "block" : "none" }}
          >
            <div className="ba-slider-wrap" style={{ maxWidth: "860px", margin: "0 auto", position: "relative" }}>
              <div
                className="ba-slider"
                role="img"
                aria-label={tab.ariaLabel}
                style={{ borderRadius: "var(--radius)", overflow: "hidden", position: "relative", aspectRatio: "4/3" }}
              >
                <BeforeAfter
                  beforeSrc={tab.beforeSrc}
                  afterSrc={tab.afterSrc}
                  beforeAlt={tab.beforeAlt}
                  afterAlt={tab.afterAlt}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
