import { LogoNetworkMap } from "./LogoNetworkMap";

const row1Commands = [
  { tag: "금융", text: "토스로 계좌이체 해줘" },
  { tag: "쇼핑", text: "네이버스토어에서 바나나 주문해줘" },
  { tag: "공공", text: "주민등록 등본 발급해줘" },
  { tag: "모빌리티", text: "카카오택시 집으로 불러줘" },
  { tag: "메시지", text: "카카오톡으로 딸에게 도착했다고 보내줘" },
  { tag: "요금", text: "이번 달 휴대폰 요금 납부해줘" },
];

const row2Commands = [
  { tag: "의료", text: "동네 내과 진료 예약해줘" },
  { tag: "숙박", text: "강릉 가족 여행 숙소 예약해줘" },
  { tag: "배달", text: "자주 시키는 설렁탕집에서 포장 주문해줘" },
  { tag: "미디어", text: "유튜브에서 잔잔한 클래식 틀어줘" },
  { tag: "생활", text: "당근마켓에 올라온 새 글 읽어줘" },
  { tag: "금융", text: "이번 달 카드 결제 예정 금액 확인해줘" },
];

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: { tag: string; text: string }[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="flex overflow-hidden select-none group">
      <div
        className={`flex shrink-0 items-center gap-3 py-1.5 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white border border-stone-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] whitespace-nowrap transition-colors hover:border-neutral-400"
          >
            <span className="text-[11px] font-semibold text-neutral-400">
              {item.tag}
            </span>
            <span className="h-3 w-[1px] bg-stone-200" aria-hidden />
            <span className="text-sm sm:text-[15px] font-medium text-neutral-800 tracking-tight">
              “{item.text}”
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-[#FAFAF8] border-t border-stone-200/70 overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-3">
            Connected Ecosystem
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-neutral-900 break-keep">
            어떤 앱이든 직접 실행합니다
          </h2>
        </div>

        {/* 3D dori21 Logo & Connected App Ecosystem Map */}
        <LogoNetworkMap className="mb-12 sm:mb-14" />

        {/* Flowing Command Pills Marquee with Left/Right Soft Fade */}
        <div className="relative max-w-5xl mx-auto space-y-3">
          {/* Left & Right Gradient Masks */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAFAF8] to-transparent z-10"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAFAF8] to-transparent z-10"
            aria-hidden
          />

          <MarqueeRow items={row1Commands} />
          <MarqueeRow items={row2Commands} reverse />

          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marquee-reverse {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0%); }
            }
            .animate-marquee {
              animation: marquee 38s linear infinite;
            }
            .animate-marquee-reverse {
              animation: marquee-reverse 42s linear infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .animate-marquee, .animate-marquee-reverse {
                animation: none;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}