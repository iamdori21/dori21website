import React from "react";

interface DoriLogoProps {
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  showText?: boolean;
  className?: string;
}

export function DoriLogo({
  size = "md",
  showIcon = true,
  showText = true,
  className = "",
}: DoriLogoProps) {
  // Dimensions based on size
  const iconSize = size === "sm" ? "h-7 w-7" : size === "lg" ? "h-11 w-11" : "h-8.5 w-8.5";
  const dSize = size === "sm" ? "text-sm" : size === "lg" ? "text-xl" : "text-base";
  const badgeSize = size === "sm" ? "w-3 h-3 text-[7px]" : size === "lg" ? "w-4.5 h-4.5 text-[10px]" : "w-3.5 h-3.5 text-[8px]";
  const textSize = size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl";
  const textBadgeSize = size === "sm" ? "w-4.5 h-4.5 text-[10px]" : size === "lg" ? "w-6 h-6 text-sm" : "w-5 h-5 text-[11px]";

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* 3D-styled Dark App Tile Icon */}
      {showIcon && (
        <div
          className={`relative ${iconSize} rounded-xl bg-gradient-to-b from-[#2A2A32] via-[#1B1B20] to-[#111114] flex items-center justify-center shadow-md border border-white/15 overflow-hidden transition-transform duration-200 hover:scale-105 shrink-0`}
          style={{
            boxShadow: "0 2px 8px -1px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        >
        {/* Subtle diagonal gloss */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%)",
          }}
        />

        {/* Icon Mark: 'd' + '21' Badge */}
        <div className="relative z-10 flex items-center justify-center">
          <span
            className={`font-black text-white leading-none ${dSize}`}
            style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
          >
            d
          </span>
          <span
            className={`${badgeSize} rounded-full bg-[#FFC83D] text-[#5B3FE0] font-black flex items-center justify-center leading-none -ml-0.5 -mt-1 shadow-xs`}
            style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
          >
            21
          </span>
        </div>
      </div>
      )}

      {/* Brand Text: "dori 21" */}
      {showText && (
        <div className="flex items-center gap-1.5 tracking-tight">
          <span
            className={`font-black text-foreground ${textSize}`}
            style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
          >
            dori
          </span>
          <span
            className={`${textBadgeSize} rounded-full bg-[#FFC83D] text-[#5B3FE0] font-black flex items-center justify-center leading-none shadow-xs`}
            style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
          >
            21
          </span>
        </div>
      )}
    </div>
  );
}
