import React from "react";

interface SmartphoneMockupProps {
  className?: string;
  fadeColor?: "background" | "muted";
}

export function SmartphoneMockup({
  className = "",
  fadeColor = "background",
}: SmartphoneMockupProps) {
  const fadeGradientClass =
    fadeColor === "muted"
      ? "from-muted/95 via-muted/40 to-transparent"
      : "from-background via-background/60 to-transparent";

  return (
    <div className={`relative mx-auto flex justify-center ${className}`}>
      {/* Ambient Glow */}
      <div
        className="absolute -top-12 left-1/2 -translate-x-1/2 w-[340px] sm:w-[460px] h-[360px] rounded-full bg-gradient-to-tr from-primary/10 via-[#FFC83D]/20 to-[#5B3FE0]/25 blur-3xl opacity-80 pointer-events-none"
        aria-hidden
      />

      {/* Ultra-thin Bezel Mobile Frame */}
      <div className="relative z-10 w-[280px] sm:w-[320px] md:w-[350px] h-[480px] sm:h-[530px] md:h-[570px] overflow-hidden rounded-t-[34px] sm:rounded-t-[38px] border-t-[3px] border-x-[3px] sm:border-t-[4px] sm:border-x-[4px] border-[#181820] bg-[#181820] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.08)]">
        {/* Ultra-slim Top Speaker Slit */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-none">
          <div className="w-8 h-[2px] bg-[#3A3A46] rounded-full" />
        </div>

        {/* Inner Screen Area with Max Screen-to-Body Ratio */}
        <div className="relative w-full h-full rounded-t-[30px] sm:rounded-t-[34px] overflow-hidden bg-[#24242A]">
          {/* Minimal Camera Punch-hole on the screen */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 w-3 h-3 rounded-full bg-black border border-white/10 flex items-center justify-center pointer-events-none shadow-xs">
            <div className="w-1 h-1 rounded-full bg-[#182030]" />
          </div>

          <img
            src="/dori-app-screenshot.jpg"
            alt="dori 21 앱 작업 실행 화면"
            className="w-full h-auto object-cover object-top select-none pointer-events-none"
            loading="eager"
          />

          {/* Subtle Screen Gloss */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/3 to-white/8 pointer-events-none"
            aria-hidden
          />
        </div>

        {/* Subtle Bottom Fade to smoothly cut off the frame */}
        <div
          className={`absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t ${fadeGradientClass} pointer-events-none z-20`}
          aria-hidden
        />
      </div>
    </div>
  );
}
