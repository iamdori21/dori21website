import { Button } from "./ui/button";
import { Download, Hand, MessageCircle, ShieldCheck } from "lucide-react";
import { SmartphoneMockup } from "./SmartphoneMockup";

const points = [
  {
    icon: Hand,
    lead: "화면을 보거나 터치하기 어려워도 괜찮습니다.",
    body: "당신의 다정한 눈과 손이 되어 스마트폰 화면을 직접 보고 대신 터치해 드립니다.",
  },
  {
    icon: MessageCircle,
    lead: "어떤 앱이든 편하게 말씀만 하세요.",
    body: "휴대폰 요금 납부, 계좌이체, 쇼핑, 서류 발급까지 말 한마디면 알아서 척척 마칩니다.",
  },
  {
    icon: ShieldCheck,
    lead: "소중한 개인정보는 들여다보거나 보관하지 않습니다.",
    body: "본인 인증이나 결제 승인처럼 중요한 순간에는 먼저 알림을 드리고 조용히 기다립니다.",
  },
];

export function HeroSection() {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-[#FAFAF8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
          {/* Left Column: Headline, Clear Explanation, CTA */}
          <div className="lg:col-span-6 text-left space-y-8">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.025em] text-neutral-900 leading-[1.3] break-keep">
              dori21는 시각장애인을 위한 <span className="text-[#0F9D58]">안드로이드 앱 </span>입니다.
            </h1>

            {/* Explanation: bold lead sentence + soft supporting text, scannable list */}
            <ul className="space-y-5 max-w-xl pt-1">
              {points.map(({ icon: Icon, lead, body }) => (
                <li key={lead} className="flex gap-3.5">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white border border-stone-200/80 text-neutral-700">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <p className="break-keep leading-[1.7]">
                    <strong className="block text-[15px] sm:text-base font-semibold text-neutral-900 mb-0.5">
                      {lead}
                    </strong>
                    <span className="text-sm sm:text-[15px] text-neutral-500">{body}</span>
                  </p>
                </li>
              ))}
            </ul>

            {/* Direct Download CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto font-medium gap-2 px-6 py-6 text-sm rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition-all cursor-pointer shadow-none"
              >
                <a href="https://onesto.re/0001008686" target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" />
                  원스토어에서 다운로드
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto font-medium gap-2 px-6 py-6 text-sm rounded-xl border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-all cursor-pointer shadow-none"
              >
                <a href="#how-it-works">
                  <Download className="h-4 w-4 text-neutral-400" />
                  갤럭시 스토어에서 다운로드
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Smartphone Mockup */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <SmartphoneMockup size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}