"use client";

import { useState, useCallback } from "react";
import { FortuneWheel, PRIZES } from "./FortuneWheel";
import { PrizeModal } from "./PrizeModal";

interface WheelInteractiveProps {
  recaptchaSiteKey?: string;
}

export function WheelInteractive({ recaptchaSiteKey }: WheelInteractiveProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [wonPrize, setWonPrize] = useState("");

  const handleSpinComplete = useCallback((prize: string) => {
    setWonPrize(prize);
    setModalOpen(true);
  }, []);

  return (
    <>
      <section className="wheel-page" aria-labelledby="wheel-hero-title">
        <div className="container">
          <div className="wheel-hero">
            <div className="wheel-hero-copy">
              <span className="section-label">Exclusive Event</span>
              <h1 id="wheel-hero-title">
                Spin the wheel. <em>Win real prizes.</em>
              </h1>
              <p className="wheel-hero-sub">
                Scan, spin, and see what you win &mdash; from a free drone shoot to virtual staging credits. Every realtor wins something.
              </p>
            </div>

            <div className="wheel-hero-wheel">
              <FortuneWheel onSpinComplete={handleSpinComplete} />
            </div>
          </div>

          <div className="wheel-prizes-strip" aria-label="Possible prizes">
            <h2>What you can win</h2>
            <ul className="wheel-prizes-list">
              {PRIZES.map((prize) => (
                <li key={prize}>{prize}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PrizeModal
        open={modalOpen}
        prize={wonPrize}
        onClose={() => setModalOpen(false)}
        recaptchaSiteKey={recaptchaSiteKey}
      />
    </>
  );
}
