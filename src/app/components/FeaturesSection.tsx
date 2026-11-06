import { LogoNetworkMap } from "./LogoNetworkMap";

const features = [
  {
    title: "토스로 계좌이체 해줘",
    description: "토스 앱을 직접 실행하고 계좌이체 버튼을 선택해 이체를 완료합니다.",
    badge: "금융 · 이체"
  },
  {
    title: "네이버스토어에서 바나나 주문해줘",
    description: "네이버 앱을 직접 실행하고 상품 검색과 구매 버튼을 선택해 주문을 완료합니다.",
    badge: "쇼핑 · 커머스"
  },
  {
    title: "주민등록 등본 발급해줘",
    description: "정부24 앱을 직접 실행하고 등본 신청 메뉴를 선택해 발급을 완료합니다.",
    badge: "공공 · 행정"
  },
  {
    title: "숙소 예약해줘",
    description: "숙박 앱을 직접 실행하고 최적의 객실과 예약 버튼을 선택해 예약을 완료합니다.",
    badge: "여행 · 숙박"
  },
  {
    title: "카카오택시 집으로 불러줘",
    description: "카카오 T 앱을 직접 실행하고 목적지 설정 후 호출 버튼을 눌러 배차를 완료합니다.",
    badge: "모빌리티"
  },
  {
    title: "병원 진료 예약해줘",
    description: "병원 접수 앱을 직접 실행하고 진료 순번 접수 버튼을 선택해 예약을 완료합니다.",
    badge: "의료 · 생활"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-[#FAFAF8] border-t border-stone-200/70 overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-3">
            Connected Ecosystem
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-neutral-900 mb-4 break-keep">
            어떤 앱이든 직접 실행합니다
          </h2>
          <p className="max-w-xl mx-auto text-base text-neutral-500 break-keep leading-relaxed">
            카카오톡, 네이버, 토스, 정부24부터 일상 서비스까지 AI가 복잡한 화면을 대신 조작합니다.
          </p>
        </div>

        {/* 3D dori21 Logo & Connected App Ecosystem Map */}
        <LogoNetworkMap className="mb-14 sm:mb-18" />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white border border-stone-200/70 p-6 transition-colors hover:border-stone-300"
              >
                <span className="block text-[11px] font-medium text-neutral-400 mb-2">
                  {feature.badge}
                </span>
                <h3 className="text-[15px] sm:text-base font-bold tracking-tight text-neutral-900 mb-2 break-keep leading-snug">
                  “{feature.title}”
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-500 leading-relaxed break-keep">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}