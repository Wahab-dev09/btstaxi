"use client";
import React from "react";

type Props = {
  items?: string[];
  duration?: number;
  reverse?: boolean;
  className?: string;
  fadesr?: string;
  fadesl?: string;

  /** Badge styles */
  itemBg?: string;
  itemText?: string;

  /** Icon controls */
  showIcon?: boolean;
  Icon?: React.ReactNode;
};

type MarqueeStyle = React.CSSProperties & {
  ["--marquee-duration"]?: string;
  ["--marquee-direction"]?: "normal" | "reverse";
};

export default function MarqueeServices({
  items = [
    "Licensed & Professional Drivers",
    "On-Time Pickup Guarantee",
    "Fixed Pricing",
    "24/7 Availability",
    "Serving Major UK Airports",
    "5 Star Review Rating",
    "No Hidden Charges",
    "10+ Years Experience",
  ],
  duration = 10,
  reverse = false,
  className = "",
  fadesr = "bg-gradient-to-r from-neutral-900 to-transparent",
  fadesl = "bg-gradient-to-l from-neutral-900 to-transparent",

  // ✅ New Props (safe defaults → your old instance unchanged)
  itemBg = "",
  itemText = "text-neutral-800/95",
  showIcon = false,
  Icon,
}: Props) {
  const doubled = [...items, ...items];

  const marqueeStyle: MarqueeStyle = {
    "--marquee-duration": `${duration}s`,
    "--marquee-direction": reverse ? "reverse" : "normal",
  };

  return (
    <div
      className={`overflow-hidden w-full max-w-125 select-none mt-2 ${className}`}
      aria-label="Scrolling list"
    >
      <div className="relative marquee" style={marqueeStyle}>
        {/* fades */}
        <div className={`absolute left-0 w-25 h-full z-30 ${fadesr}  pointer-events-none`} />
        <div className={`absolute right-0 w-25 h-full z-30 ${fadesl} pointer-events-none`} />

        <div className="relative inline-flex items-center gap-6 whitespace-nowrap marquee-track">
          {doubled.map((txt, i) => (
            <React.Fragment key={`${txt}-${i}`}>
              <div
                className={`flex items-center gap-2 px-5 py-2 rounded-full ${itemBg}`}
              >
                <span
                  className={`text-sm lg:text-base text-white font-inter-tight font-normal ${itemText}`}
                >
                  {txt}
                </span>

                {showIcon && Icon}
              </div>

              {i !== doubled.length - 1 && (
                <span className="inline-block w-2 h-2 bg-yellow rounded-full" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee-move var(--marquee-duration) linear infinite;
          animation-direction: var(--marquee-direction);
          will-change: transform;
        }

        @keyframes marquee-move {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
