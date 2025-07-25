"use client";

import { useState, useEffect } from "react";

export default function WavingHand() {
  const [animKey, setAnimKey] = useState(0);

  // Animate on mount by incrementing key once
  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, []);

  function handleClick() {
    setAnimKey((k) => k + 1);
  }

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
          animation: wave 1.5s forwards;
        }
      `}</style>
      <span
        key={animKey}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label="Wave hand"
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
        className="waving-hand"
      >
        👋
      </span>
    </>
  );
}