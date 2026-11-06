import { useEffect, useRef } from "react";
import { Dori3DLogo } from "./Dori3DLogo";

type Brand = {
  name: string;
  bg: string;
  color: string;
  /** solid color used for the connection line */
  accent: string;
  symbol: string;
  pos: { left: string; top: string };
  delay: string;
};

const BRANDS: Brand[] = [
  { name: "KakaoTalk", bg: "#FEE500", color: "#191919", accent: "#d4d4d8", symbol: "K", pos: { left: "10%", top: "16%" }, delay: "0s" },
  { name: "Naver", bg: "#03C75A", color: "#fff", accent: "#d4d4d8", symbol: "N", pos: { left: "82%", top: "14%" }, delay: "0.6s" },
  { name: "Toss", bg: "#0064FF", color: "#fff", accent: "#d4d4d8", symbol: "T", pos: { left: "14%", top: "72%" }, delay: "1.2s" },
  { name: "YouTube", bg: "#FF0000", color: "#fff", accent: "#d4d4d8", symbol: "▶", pos: { left: "80%", top: "72%" }, delay: "1.8s" },
  { name: "Gov24", bg: "#003087", color: "#fff", accent: "#d4d4d8", symbol: "정", pos: { left: "48%", top: "6%" }, delay: "2.4s" },
  { name: "Kakao T", bg: "#191919", color: "#FFCD00", accent: "#d4d4d8", symbol: "T", pos: { left: "86%", top: "43%" }, delay: "3.0s" },
  { name: "Karrot", bg: "#FF6F0F", color: "#fff", accent: "#d4d4d8", symbol: "당", pos: { left: "48%", top: "84%" }, delay: "3.6s" },
  { name: "Shopping", bg: "#262626", color: "#fff", accent: "#d4d4d8", symbol: "🛍", pos: { left: "8%", top: "44%" }, delay: "4.2s" },
];

/** Calm monochrome connection lines */
const DORI_YELLOW = "#e4e4e7";

interface LogoNetworkMapProps {
  className?: string;
}

export function LogoNetworkMap({ className = "" }: LogoNetworkMapProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const flowRefs = useRef<(SVGPathElement | null)[]>([]);
  const gradRefs = useRef<(SVGLinearGradientElement | null)[]>([]);

  // Keep each connection line attached to its (floating) brand icon.
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    let raf = 0;

    const tick = () => {
      const s = scene.getBoundingClientRect();
      const cx = s.width / 2;
      const cy = s.height / 2;

      BRANDS.forEach((_, i) => {
        const icon = iconRefs.current[i];
        if (!icon) return;
        const r = icon.getBoundingClientRect();
        const ex = r.left + r.width / 2 - s.left;
        const ey = r.top + r.height / 2 - s.top;

        // gentle curve: control point offset perpendicular to the line
        const dx = ex - cx;
        const dy = ey - cy;
        const len = Math.hypot(dx, dy) || 1;
        const bend = (i % 2 === 0 ? 1 : -1) * len * 0.14;
        const qx = cx + dx / 2 + (-dy / len) * bend;
        const qy = cy + dy / 2 + (dx / len) * bend;
        const d = `M ${cx} ${cy} Q ${qx} ${qy} ${ex} ${ey}`;

        pathRefs.current[i]?.setAttribute("d", d);
        flowRefs.current[i]?.setAttribute("d", d);

        const g = gradRefs.current[i];
        if (g) {
          g.setAttribute("x1", String(cx));
          g.setAttribute("y1", String(cy));
          g.setAttribute("x2", String(ex));
          g.setAttribute("y2", String(ey));
        }
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className={`relative mx-auto max-w-5xl h-96 lg:h-[480px] ${className}`}>
      <div
        ref={sceneRef}
        className="relative w-full h-full"
        style={{ perspective: "1000px" }}
      >
        {/* Connection lines: dori logo -> each brand app */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          aria-hidden
        >
          <defs>
            {BRANDS.map((b, i) => (
              <linearGradient
                key={b.name}
                id={`network-link-${i}`}
                gradientUnits="userSpaceOnUse"
                ref={(el) => {
                  gradRefs.current[i] = el;
                }}
              >
                <stop offset="0%" stopColor={DORI_YELLOW} stopOpacity="0.9" />
                <stop offset="100%" stopColor={b.accent} stopOpacity="0.9" />
              </linearGradient>
            ))}
          </defs>
          {BRANDS.map((b, i) => (
            <g key={b.name}>
              {/* soft base line */}
              <path
                ref={(el) => {
                  pathRefs.current[i] = el;
                }}
                fill="none"
                stroke={`url(#network-link-${i})`}
                strokeWidth={1.5}
                strokeOpacity={0.35}
                strokeLinecap="round"
              />
              {/* flowing dashes */}
              <path
                ref={(el) => {
                  flowRefs.current[i] = el;
                }}
                className="network-link-flow"
                fill="none"
                stroke={`url(#network-link-${i})`}
                strokeWidth={1.5}
                strokeOpacity={0.55}
                strokeLinecap="round"
                strokeDasharray="2 10"
                style={{ animationDelay: `${-i * 0.3}s` }}
              />
            </g>
          ))}
        </svg>

        {/* Floating Brand Logo Cards */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {BRANDS.map((brand, i) => (
            <div
              key={brand.name}
              className="absolute flex flex-col items-center gap-1 animate-float"
              style={{
                ...brand.pos,
                animationDelay: brand.delay,
                animationDuration: "6s",
              }}
            >
              <div
                ref={(el) => {
                  iconRefs.current[i] = el;
                }}
                className="relative w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold border border-neutral-200/80"
                style={{
                  background: brand.bg,
                  color: brand.color,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.06), 0 0 0 3px #ffffff",
                }}
              >
                {brand.symbol}
              </div>
              <span className="text-[10px] font-medium text-neutral-400 tracking-wide">
                {brand.name}
              </span>
            </div>
          ))}
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); opacity: 0.85; }
              50% { transform: translateY(-6px); opacity: 1; }
            }
            .animate-float {
              animation: float 7s ease-in-out infinite;
            }
            @keyframes network-link-dash {
              to { stroke-dashoffset: -24; }
            }
            .network-link-flow {
              animation: network-link-dash 3s linear infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .animate-float, .network-link-flow { animation: none; }
            }
          `}</style>
        </div>

        {/* Central Hub: 3D dori 21 logo (on top of the lines) */}
        <Dori3DLogo />
      </div>
    </div>
  );
}
