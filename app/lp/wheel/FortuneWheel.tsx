"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export const PRIZES = [
  "3,500 Loyalty Points",
  "Free Drone Photos",
  "5,000 Loyalty Points",
  "3 Free Virtual Staging Images",
  "Free Virtual Twilight",
  "Free Style Shots",
  "25% Off First Order",
  "Marketing Kit",
];

const COLORS = ["#131d3b", "#cb4154", "#1e2d5a", "#a8303f", "#131d3b", "#cb4154", "#1e2d5a", "#a8303f"];
const TEXT_COLORS: string[] = ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"];

interface FortuneWheelProps {
  onSpinComplete: (prize: string, index: number) => void;
}

export function FortuneWheel({ onSpinComplete }: FortuneWheelProps) {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef<SVGSVGElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  const segmentCount = PRIZES.length;
  const segmentAngle = 360 / segmentCount;

  const playTick = useCallback(() => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
      }
      const ctx = audioContextRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {}
  }, []);

  const spin = useCallback(() => {
    if (spinning) return;

    const winnerIndex = Math.floor(Math.random() * segmentCount);
    const extraSpins = 5 + Math.floor(Math.random() * 5);
    const baseDeg = extraSpins * 360;
    const targetDeg = 360 - winnerIndex * segmentAngle - segmentAngle / 2;
    const totalRotation = rotation + baseDeg + targetDeg - (rotation % 360);

    setSpinning(true);
    if (wheelRef.current) {
      wheelRef.current.style.transition = `transform ${6 + Math.random() * 2}s cubic-bezier(0.17, 0.67, 0.12, 0.99)`;
      wheelRef.current.style.transform = `rotate(${totalRotation}deg)`;
    }

    let tickInterval: number;
    let lastTickAngle = rotation;
    const checkTick = () => {
      if (!spinning) {
        window.clearInterval(tickInterval);
        return;
      }
      tickInterval = window.setInterval(() => {
        playTick();
      }, 120);
    };
    checkTick();

    window.setTimeout(() => {
      window.clearInterval(tickInterval);
      setSpinning(false);
      setRotation(totalRotation);
      onSpinComplete(PRIZES[winnerIndex], winnerIndex);
    }, 8000);

    window.setTimeout(() => {
      window.clearInterval(tickInterval);
    }, 7900);
  }, [spinning, rotation, segmentAngle, segmentCount, onSpinComplete, playTick]);

  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const polarToCartesian = (cx: number, cy: number, r: number, angleInDegrees: number) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: cx + r * Math.cos(angleInRadians),
      y: cy + r * Math.sin(angleInRadians),
    };
  };

  const describeArc = (cx: number, cy: number, r: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y} Z`;
  };

  const cx = 200;
  const cy = 200;
  const r = 180;

  return (
    <div className="fortune-wheel-container">
      <div className="fortune-wheel-wrapper">
        <div className="fortune-wheel-knob" aria-hidden="true">
          <svg width="32" height="48" viewBox="0 0 32 48" fill="none">
            <path d="M16 0L32 48L0 48L16 0Z" fill="#cb4154" stroke="#131d3b" strokeWidth="2" />
          </svg>
        </div>

        <svg
          ref={wheelRef}
          className="fortune-wheel-svg"
          width="100%"
          height="100%"
          viewBox="0 0 400 400"
          onClick={spin}
          style={{ transform: `rotate(${rotation}deg)`, transition: "none", cursor: "pointer" }}
        >
          {PRIZES.map((prize, i) => {
            const startAngle = i * segmentAngle;
            const endAngle = startAngle + segmentAngle;
            const midAngle = startAngle + segmentAngle / 2;
            const textPos = polarToCartesian(cx, cy, r * 0.65, midAngle);
            const textRotation = midAngle;

            const words = prize.split(" ");
            const lines: string[] = [];
            if (words.length <= 2) {
              lines.push(prize);
            } else {
              const mid = Math.ceil(words.length / 2);
              lines.push(words.slice(0, mid).join(" "));
              lines.push(words.slice(mid).join(" "));
            }

            return (
              <g key={i}>
                <path d={describeArc(cx, cy, r, startAngle, endAngle)} fill={COLORS[i]} stroke="#f9f8f6" strokeWidth="1.5" />
                <text
                  x={textPos.x}
                  y={textPos.y}
                  fill={TEXT_COLORS[i]}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={prize.length > 18 ? "11" : "13"}
                  fontWeight="600"
                  fontFamily="var(--font-display)"
                  transform={`rotate(${textRotation}, ${textPos.x}, ${textPos.y})`}
                >
                  {lines.map((line, li) => (
                    <tspan key={li} x={textPos.x} dy={li === 0 ? 0 : "1.2em"}>
                      {line}
                    </tspan>
                  ))}
                </text>
              </g>
            );
          })}

          <circle cx={cx} cy={cy} r="30" fill="#131d3b" stroke="#cb4154" strokeWidth="3" />
          <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central" fill="#ffffff" fontSize="10" fontWeight="700" fontFamily="var(--font-display)">
            SPIN
          </text>
        </svg>

        <div className="fortune-wheel-outer-ring" aria-hidden="true" />
      </div>

      <button
        className={`fortune-wheel-spin-btn${spinning ? " is-disabled" : ""}`}
        onClick={spin}
        disabled={spinning}
        aria-label="Spin the wheel"
      >
        {spinning ? "Spinning..." : "SPIN TO WIN"}
      </button>
    </div>
  );
}
