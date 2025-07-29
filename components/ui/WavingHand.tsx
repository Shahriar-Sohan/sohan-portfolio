"use client";

import { useEffect, useRef } from "react";

export default function WavingHand() {
  const handRef = useRef<HTMLSpanElement>(null);

  function triggerWave() {
    if (!handRef.current) return;
    handRef.current.classList.remove("wave-animate");
    // Trigger reflow to restart animation
    void handRef.current.offsetWidth;
    handRef.current.classList.add("wave-animate");
  }

  useEffect(() => {
    triggerWave();
  }, []);

  return (
    <>
      <style>{`
        @keyframes wave {
          0% { transform: rotate(0deg) scale(1); }
          10% { transform: rotate(25deg) scale(1.5); }
          20% { transform: rotate(-20deg) scale(1.3); }
          30% { transform: rotate(25deg) scale(1.5); }
          40% { transform: rotate(-15deg) scale(1.3); }
          50% { transform: rotate(20deg) scale(1.4); }
          60% { transform: rotate(0deg) scale(1); }
          100% { transform: rotate(0deg) scale(1); }
        }
        .waving-hand {
          display: inline-block;
          transform-origin: 70% 70%;
          cursor: pointer;
          user-select: none;
        }
        .wave-animate {
          animation: wave 1.5s forwards;
        }
      `}</style>
      <span
        ref={handRef}
        onClick={triggerWave}
        onMouseEnter={triggerWave}
        role="button"
        tabIndex={0}
        aria-label="Wave hand"
        onKeyDown={(e) => e.key === "Enter" && triggerWave()}
        className="waving-hand"
      >
        👋
      </span>
    </>
  );
}