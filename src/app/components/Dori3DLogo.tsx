import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * CSS-only 3D rendition of the "dori 21" logo.
 * Depth is faked by stacking slices along the Z axis (preserve-3d),
 * so the logo shows real thickness as it rotates.
 */

const TILE_DEPTH = 12; // px thickness of the dark tile
const TEXT_DEPTH = 5; // px extrusion of "dori"
const BADGE_DEPTH = 5; // px extrusion of the "21" badge
const TILE_SIZE = 168; // px width/height of the tile
const TILE_RADIUS = 34;

/** Renders `children` as stacked slices to form an extruded solid. */
function Extrude({
  depth,
  z = 0,
  sideColor,
  front,
  side,
  className = "",
  style,
}: {
  depth: number;
  z?: number;
  sideColor: string;
  front: ReactNode;
  side: (color: string) => ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{ transformStyle: "preserve-3d", ...style }}
    >
      {/* invisible sizing copy */}
      <div style={{ visibility: "hidden" }}>{front}</div>
      {Array.from({ length: depth }).map((_, i) => (
        <div
          key={i}
          aria-hidden
          className="absolute inset-0"
          style={{ transform: `translateZ(${z + i}px)` }}
        >
          {side(sideColor)}
        </div>
      ))}
      <div
        className="absolute inset-0"
        style={{ transform: `translateZ(${z + depth}px)` }}
      >
        {front}
      </div>
    </div>
  );
}

export function Dori3DLogo() {
  const rootRef = useRef<HTMLDivElement>(null);
  const objRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const obj = objRef.current;
    if (!root || !obj) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const r = root.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;
      const dy = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
      target.x = Math.max(-1, Math.min(1, dx * 2));
      target.y = Math.max(-1, Math.min(1, dy * 2));
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
    };

    const tick = () => {
      const t = performance.now() * 0.001;
      cur.x += (target.x - cur.x) * 0.06;
      cur.y += (target.y - cur.y) * 0.06;
      const idleY = reduce ? 0 : Math.sin(t * 0.8) * 22;
      const idleX = reduce ? 0 : Math.cos(t * 0.6) * 6;
      const bob = reduce ? 0 : Math.sin(t * 1.2) * 6;
      const ry = idleY + cur.x * 28;
      const rx = 12 + idleX - cur.y * 18;
      obj.style.transform = `translateY(${bob}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const wordStyle: CSSProperties = {
    fontFamily: "'Poppins', system-ui, sans-serif",
    fontWeight: 800,
    fontSize: 45,
    lineHeight: 1,
    letterSpacing: "-0.03em",
  };

  const word = (color: string) => (
    <span style={{ ...wordStyle, color, display: "block" }}>dori</span>
  );

  const badge = (bg: string, withText: boolean) => (
    <div
      className="flex items-center justify-center rounded-full"
      style={{
        width: 28,
        height: 28,
        background: bg,
        fontFamily: "'Poppins', system-ui, sans-serif",
        fontWeight: 800,
        fontSize: 13,
        color: "#5B3FE0",
        letterSpacing: "-0.02em",
      }}
    >
      {withText ? "21" : null}
    </div>
  );

  return (
    <div
      ref={rootRef}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      style={{ perspective: "900px" }}
      role="img"
      aria-label="dori 21 로고"
    >
      {/* ambient glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 220,
          height: 220,
          background:
            "radial-gradient(circle, rgba(255,200,61,0.28) 0%, rgba(91,63,224,0.18) 40%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />
      {/* floor shadow */}
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
        style={{
          top: "calc(100% + 20px)",
          width: 126,
          height: 16,
          background: "radial-gradient(ellipse, rgba(0,0,0,0.35), transparent 70%)",
          filter: "blur(6px)",
        }}
      />

      <div
        ref={objRef}
        className="relative will-change-transform"
        style={{ transformStyle: "preserve-3d", width: TILE_SIZE, height: TILE_SIZE }}
      >
        {/* Tile body: stacked slices for thickness */}
        {Array.from({ length: TILE_DEPTH }).map((_, i) => (
          <div
            key={i}
            aria-hidden
            className="absolute inset-0"
            style={{
              borderRadius: TILE_RADIUS,
              background: i === 0 ? "#08080a" : "#121216",
              transform: `translateZ(${i - TILE_DEPTH}px)`,
              boxShadow: i === 0 ? "0 30px 60px -10px rgba(0,0,0,0.55)" : undefined,
            }}
          />
        ))}
        {/* Tile front face */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            borderRadius: TILE_RADIUS,
            background: "linear-gradient(145deg, #26262c 0%, #1b1b1f 45%, #141417 100%)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.6)",
            transform: "translateZ(0px)",
          }}
        >
          {/* glossy highlight */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 40%)",
            }}
          />
        </div>

        {/* Logo mark */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="flex items-center"
            style={{ transformStyle: "preserve-3d", gap: 3 }}
          >
            <Extrude
              depth={TEXT_DEPTH}
              z={1}
              sideColor="#9a9aa6"
              side={(c) => word(c)}
              front={
                <span
                  style={{
                    ...wordStyle,
                    display: "block",
                    color: "#ffffff",
                    textShadow: "0 0 18px rgba(255,255,255,0.25)",
                  }}
                >
                  dori
                </span>
              }
            />
            <Extrude
              depth={BADGE_DEPTH}
              z={1}
              sideColor="#c98f00"
              style={{ marginTop: 10 }}
              side={(c) => badge(c, false)}
              front={badge("radial-gradient(circle at 35% 30%, #FFE08A 0%, #FFC83D 45%, #F4B400 100%)", true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
