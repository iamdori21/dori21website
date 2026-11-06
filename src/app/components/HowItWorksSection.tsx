import { useEffect, useState } from "react";
import { Zap, Eye, Touchpad } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "원하는 작업 한 번만 명령",
    description:
      '"토스로 엄마한테 5만원 송금해줘", "네이버스토어에서 바나나 한 송이 주문해줘" 등 필요한 작업을 한 번만 명령하세요. 앱을 일일이 찾거나 복잡한 메뉴를 헤맬 필요가 없습니다.',
    icon: Zap,
  },
  {
    step: "02",
    title: "실시간 AI 화면 인식 & 분석",
    description:
      "dori21이 해당 앱을 즉시 실행하고, AI 비전 모델을 통해 현재 화면의 버튼, 입력창, 메뉴 위치를 정확히 판별합니다. 앱 UI가 업데이트되어도 스스로 이해합니다.",
    icon: Eye,
  },
  {
    step: "03",
    title: "끝까지 스스로 자동 실행",
    description:
      "사람이 직접 손가락으로 누르는 것처럼 앱의 단계별 버튼을 눌러 작업을 완료합니다. 결제나 비밀번호 입력 같은 민감한 순간에는 안전하게 본인 승인을 거칩니다.",
    icon: Touchpad,
  },
];

const targetAudiences = [
  {
    title: "시각장애인 및 저시력자",
    desc: "작은 글씨나 복잡한 화면 구성을 볼 필요 없이 한 번의 명령만으로 스마트폰의 모든 기능을 스스로 실행할 수 있습니다.",
  },
  {
    title: "스마트폰 조작이 서툰 어르신",
    desc: "공공기관 증명서 발급, 모바일 뱅킹, 택시 호출 등 자녀에게 매번 부탁하기 미안했던 일을 스스로 해결합니다.",
  },
  {
    title: "바쁜 일상을 위한 대리 비서",
    desc: "번거로운 반복 터치와 앱 이동 과정을 AI에게 맡기고 더 중요한 일에 집중할 수 있습니다.",
  },
];

export function HowItWorksSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % targetAudiences.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-[#F4F3EF] border-t border-stone-200/70">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-3">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-neutral-900 mb-4 break-keep">
            어떻게 스마트폰을 대신 조작하나요?
          </h2>
          <p className="text-base text-neutral-500 break-keep leading-relaxed">
            복잡한 설정 없이 한 번만 말씀하세요. AI가 화면을 직접 보고 터치하여 끝까지 실행합니다.
          </p>
        </div>

        {/* 3 Steps Cards - Clean Monochrome Toss/Apple Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-24">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-neutral-200/80 p-7 sm:p-8 flex flex-col justify-between transition-colors hover:border-neutral-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-7">
                    <span className="text-xs font-semibold tracking-wider text-neutral-400">
                      STEP {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-neutral-100 text-neutral-800">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 mb-3 break-keep tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-neutral-500 leading-[1.7] break-keep">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Who is it for? - Borderless Rolling Text Ticker / Carousel */}
        <div className="max-w-2xl mx-auto text-center pt-4">
          <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-3">
            이런 분들께 도움이 됩니다
          </p>

          {/* Rolling Text Viewport */}
          <div className="relative h-36 sm:h-32 overflow-hidden flex items-center justify-center">
            {targetAudiences.map((target, idx) => {
              const offset = idx - activeIndex;
              const isActive = idx === activeIndex;
              const isPrev =
                idx === (activeIndex - 1 + targetAudiences.length) % targetAudiences.length;

              let transformClass = "translate-y-10 opacity-0 pointer-events-none";
              if (isActive) {
                transformClass = "translate-y-0 opacity-100";
              } else if (isPrev || offset < 0) {
                transformClass = "-translate-y-10 opacity-0 pointer-events-none";
              }

              return (
                <div
                  key={target.title}
                  aria-hidden={!isActive}
                  className={`absolute inset-x-0 flex flex-col items-center justify-center px-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${transformClass}`}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3 break-keep tracking-tight">
                    “{target.title}”
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-500 leading-relaxed break-keep max-w-lg">
                    {target.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Minimal Progress Dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {targetAudiences.map((target, idx) => (
              <button
                key={target.title}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={target.title}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? "w-6 bg-neutral-900"
                    : "w-1.5 bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
