import React from "react";
import doriAppScreenshot from "../../assets/dori-app-screenshot.jpg";

interface SmartphoneMockupProps {
  className?: string;
  fadeColor?: "background" | "muted" | "neutral-50/50" | string;
  showBottomFade?: boolean;
  size?: "sm" | "md" | "lg";
}

export function SmartphoneMockup({
  className = "",
  fadeColor = "background",
  showBottomFade = false,
  size = "md",
}: SmartphoneMockupProps) {
  let fadeGradientClass = "from-background via-background/60 to-transparent";
  if (fadeColor === "muted") {
    fadeGradientClass = "from-muted/95 via-muted/40 to-transparent";
  } else if (fadeColor === "neutral-50/50" || fadeColor === "neutral") {
    fadeGradientClass = "from-neutral-50/95 via-neutral-50/60 to-transparent";
  }

  // Compact & petite size presets: 'md' reduced to ~235px desktop
  const widthClasses =
    size === "sm"
      ? "w-[175px] sm:w-[195px] md:w-[215px]"
      : size === "lg"
      ? "w-[235px] sm:w-[255px] md:w-[270px]"
      : "w-[190px] sm:w-[215px] md:w-[235px]";

  return (
    <div className={`relative mx-auto flex justify-center ${className}`}>
      {/* Soft Studio Radial Backlight Halo for pristine background separation */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[270px] sm:w-[330px] h-[330px] sm:h-[410px] rounded-full bg-gradient-to-tr from-slate-200/60 via-slate-100/80 to-indigo-100/40 blur-2xl pointer-events-none select-none z-0"
        aria-hidden
      />

      {/* Decorative Wave Ribbon behind the phone */}
      <svg
        className="absolute -left-12 sm:-left-20 top-1/2 -translate-y-1/2 w-[360px] sm:w-[440px] h-[205px] pointer-events-none select-none z-0 opacity-85"
        viewBox="0 0 680 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 200 C 120 280, 220 80, 390 160 C 510 220, 580 130, 680 140"
          stroke="url(#wave-ribbon-1)"
          strokeWidth="42"
          strokeLinecap="round"
          className="blur-[1.5px]"
        />
        <path
          d="M20 215 C 135 295, 235 95, 405 175 C 520 230, 590 145, 690 155"
          stroke="url(#wave-ribbon-2)"
          strokeWidth="20"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="wave-ribbon-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f1f5f9" stopOpacity="0.1" />
            <stop offset="35%" stopColor="#cbd5e1" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#94a3b8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f1f5f9" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="wave-ribbon-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.1" />
            <stop offset="40%" stopColor="#94a3b8" stopOpacity="0.6" />
            <stop offset="75%" stopColor="#cbd5e1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f8fafc" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>

      {/* Dot Grid Matrix on Upper Right behind phone */}
      <div
        className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 w-16 sm:w-20 h-20 sm:h-24 pointer-events-none select-none z-0 opacity-60"
        aria-hidden
      >
        <svg className="w-full h-full text-neutral-400" fill="currentColor">
          <pattern id="hero-dot-grid" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.3" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-dot-grid)" />
        </svg>
      </div>

      {/* Sleek Floating Device Frame */}
      <div className="relative z-10 flex flex-col items-center">
        <div className={`relative ${widthClasses}`}>
          {/* Subtle Side Hardware Buttons (Left: Volume, Right: Power) */}
          <div className="absolute -left-[2.5px] top-16 w-[2.5px] h-6 bg-neutral-700/90 rounded-l-xs shadow-xs" aria-hidden />
          <div className="absolute -left-[2.5px] top-24 w-[2.5px] h-6 bg-neutral-700/90 rounded-l-xs shadow-xs" aria-hidden />
          <div className="absolute -right-[2.5px] top-19 w-[2.5px] h-9 bg-neutral-700/90 rounded-r-xs shadow-xs" aria-hidden />

          {/* Premium Multi-layer Titanium Outer Rim with Deep Atmospheric Elevation Shadow */}
          <div className="p-[2px] sm:p-[2.5px] rounded-[30px] sm:rounded-[36px] bg-gradient-to-b from-neutral-500/70 via-neutral-900 to-neutral-700/80 shadow-[0_28px_55px_-12px_rgba(15,23,42,0.3),0_12px_24px_-6px_rgba(15,23,42,0.18),0_4px_10px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.2)]">
            {/* Inner Black Bezel with Specular Precision Rim */}
            <div className="p-[1px] sm:p-[1.5px] bg-[#0c0c0e] rounded-[28px] sm:rounded-[34px] border border-white/10">
              {/* Screen Display Container */}
              <div className="relative w-full rounded-[27px] sm:rounded-[32px] overflow-hidden bg-[#24242A]">
                <img
                  src={doriAppScreenshot}
                  alt="dori 21 앱 작업 실행 화면"
                  className="w-full h-auto object-cover object-top select-none pointer-events-none block"
                  loading="eager"
                />

                {/* Delicate Diagonal Glass Sheen */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none"
                  aria-hidden
                />
              </div>
            </div>
          </div>

          {/* Optional Bottom Fade */}
          {showBottomFade && (
            <div
              className={`absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t ${fadeGradientClass} pointer-events-none z-20`}
              aria-hidden
            />
          )}
        </div>

        {/* Dual-layer Soft Floating Ground Shadow */}
        <div className="relative w-full flex flex-col items-center pointer-events-none select-none">
          <div
            className="w-[82%] h-4 bg-slate-950/20 blur-lg rounded-full -mt-1.5"
            aria-hidden
          />
          <div
            className="w-[60%] h-2 bg-slate-950/26 blur-xs rounded-full -mt-2.5"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}
