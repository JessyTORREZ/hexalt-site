"use client";

import { useEffect, useRef } from "react";

interface CurveRevealProps {
  start: boolean;
  onComplete: () => void;
}

export default function CurveReveal({ onComplete, start }: CurveRevealProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const hasCompletedRef = useRef(false); // 🔐 bloque le 2e déclenchement

  useEffect(() => {
    if (!start || hasCompletedRef.current) return; 
    console.log("🌀 CurveReveal MONTÉ");

    let frame = 0;
    let animationId: number;

    const animate = () => {
      const path = pathRef.current;
      const wrapper = wrapperRef.current;
      if (!path || !wrapper) return;

      const width = window.innerWidth;
      const height = window.innerHeight;
      const progress = Math.min(frame / 30, 1);
      const offset = width * (1 - progress);

      const p1 = `M ${width},0`;
      const p2 = `L ${offset} 0 Q ${offset - 80} ${
        height / 2
      } ${offset} ${height} `;
      const p3 = `L ${width} ${height} Z`;

      path.setAttribute("d", `${p1} ${p2} ${p3}`);
      frame++;

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      } else if (!hasCompletedRef.current) {
        hasCompletedRef.current = true;
        console.log("✅ Animation terminée — onComplete()");
        onComplete();
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      console.log("❌ CurveReveal démonté");
      cancelAnimationFrame(animationId);
    };
  }, [start, onComplete]);

  return (
    <div
      ref={wrapperRef}
      className="fixed top-0 left-0 w-screen h-screen z-[50] pointer-events-none"
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${
          typeof window !== "undefined" ? window.innerWidth : 1440
        } ${typeof window !== "undefined" ? window.innerHeight : 900}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gradientId" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-secondary-dark)" />
            <stop offset="100%" stopColor="var(--color-secondary-lighter)" />
          </linearGradient>
        </defs>
        <path ref={pathRef} fill="url(#gradientId)" />
      </svg>
    </div>
  );
}
