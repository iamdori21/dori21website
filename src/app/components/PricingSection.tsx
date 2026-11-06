import { Button } from "./ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "스타터",
    price: "무료",
    description: "개인 사용자 및 일상적인 스마트폰 작업에 적합",
    features: [
      "기본 음성 및 텍스트 명령 실행",
      "주요 일상 앱 자동 조작 지원",
      "실시간 AI 화면 인식 및 안내",
      "온디바이스 개인정보 보호",
      "기본 고객 지원"
    ],
    cta: "무료로 시작하기",
    popular: false
  },
  {
    name: "프로",
    price: "₩9,900",
    description: "더 빠르고 제한 없는 AI 비서가 필요한 분들을 위한 플랜",
    features: [
      "무제한 AI 명령 및 앱 자동 실행",
      "고속 AI 화면 인식 모델 우선 적용",
      "금융·쇼핑·공공앱 복합 작업 수행",
      "자주 쓰는 명령어 즐겨찾기",
      "가족 및 보호자 알림 연동",
      "우선 고객 지원",
      "신규 기능 먼저 체험"
    ],
    cta: "무료 체험 시작하기",
    popular: true
  },
  {
    name: "엔터프라이즈",
    price: "별도 문의",
    description: "복지기관, 지자체 및 기업 맞춤형 도입 플랜",
    features: [
      "이용자 수 무제한 지원",
      "기관 맞춤형 보안 및 관리 정책",
      "전용 앱 및 사내 시스템 연동",
      "전담 기술 매니저 배정",
      "SLA(서비스 수준 협약) 보장",
      "맞춤형 사용자 교육 지원",
      "기관 전용 브랜딩 옵션"
    ],
    cta: "도입 문의하기",
    popular: false
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-[#F4F3EF] border-t border-stone-200/70">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-neutral-900 mb-4 break-keep">
            합리적이고 투명한 요금제
          </h2>
          <p className="max-w-xl mx-auto text-base text-neutral-500 break-keep leading-relaxed">
            필요에 맞는 요금제를 선택하세요. 무료로 시작하고 언제든 업그레이드할 수 있습니다.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl bg-white p-7 sm:p-8 flex flex-col justify-between transition-all ${
                plan.popular
                  ? "border-2 border-neutral-900 shadow-sm"
                  : "border border-neutral-200/80"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[11px] font-semibold bg-neutral-900 text-white">
                  인기 요금제
                </span>
              )}
              <div>
                <div className="mb-7">
                  <h3 className="text-base font-bold text-neutral-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold tracking-tight text-neutral-900">
                      {plan.price}
                    </span>
                    {plan.price !== "무료" && plan.price !== "별도 문의" && (
                      <span className="text-sm text-neutral-400">/월</span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-500 break-keep leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 border-t border-neutral-100 pt-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-4 w-4 text-neutral-900 mr-2.5 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-600 break-keep">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                className={`w-full rounded-xl py-5 text-sm font-medium shadow-none ${
                  plan.popular
                    ? "bg-neutral-900 text-white hover:bg-neutral-800"
                    : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}