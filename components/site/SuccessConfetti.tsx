"use client";

import { useCallback, useEffect, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import type {
  TCanvasConfettiAnimationOptions,
  TCanvasConfettiInstance,
} from "react-canvas-confetti/dist/types";

const COLORS = ["#cb4154", "#47b39c", "#f4b740", "#131d3b"];

export function SuccessConfetti() {
  const confettiRef = useRef<TCanvasConfettiInstance | null>(null);

  const getInstance = useCallback(
    ({ confetti }: { confetti: TCanvasConfettiInstance }) => {
      confettiRef.current = confetti;
    },
    []
  );

  const makeShot = useCallback(
    (particleRatio: number, options: TCanvasConfettiAnimationOptions) => {
      confettiRef.current?.({
        ...options,
        colors: COLORS,
        origin: { y: 0.7 },
        particleCount: Math.floor(180 * particleRatio),
      });
    },
    []
  );

  const fire = useCallback(() => {
    makeShot(0.25, { spread: 26, startVelocity: 55 });
    makeShot(0.2, { spread: 60 });
    makeShot(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    makeShot(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    makeShot(0.1, { spread: 120, startVelocity: 45 });
  }, [makeShot]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timeoutId = window.setTimeout(fire, 150);
    return () => window.clearTimeout(timeoutId);
  }, [fire]);

  return (
    <ReactCanvasConfetti
      onInit={getInstance}
      style={{
        position: "fixed",
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 20,
      }}
    />
  );
}