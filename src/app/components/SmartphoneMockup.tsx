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
      {/* Subtle Monochromatic Ambient Halo */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[310px] h-[320px] sm:h-[390px] rounded-full bg-stone-200/60 blur-3xl pointer-events-none select-none z-0"
        aria-hidden
      />

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
