import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { SmartphoneMockup } from "./SmartphoneMockup";

export function HeroSection() {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headline, Clear Explanation, CTA */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-7">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-neutral-900 leading-[1.26] break-keep">
              dori21은 시각장애인을 위한<br />
              안드로이드 전용 앱입니다.
            </h1>

            {/* Explanation - 3 lines with zero extra gap (natural line-height) */}
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed break-keep font-normal max-w-xl">
              화면을 보거나 터치하기 어려워도 괜찮습니다. 당신의 다정한 눈과 손이 되어 스마트폰 화면을 직접 보고 대신 터치해 드립니다.
              <br />
              스마트폰에 설치된 어떤 앱이든 편하게 말씀만 하세요. 휴대폰 요금을 납부할 때, 계좌이체가 필요할 때, 쇼핑할 때, 서류를 발급할 때처럼 말 한마디만 건네면 알아서 척척 마칩니다.
              <br />
              소중한 개인정보는 절대 들여다보거나 보관하지 않습니다. 본인 인증이나 결제 승인처럼 중요한 순간에는 먼저 알림을 드리고 조용히 기다립니다.
            </p>

            {/* Direct Download CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto font-medium gap-2 px-6 py-6 text-sm rounded-lg bg-black text-white hover:bg-neutral-800 transition-all cursor-pointer shadow-xs"
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
                className="w-full sm:w-auto font-medium gap-2 px-6 py-6 text-sm rounded-lg border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-50 transition-all cursor-pointer shadow-xs"
              >
                <a href="#how-it-works">
                  <Download className="h-4 w-4 text-neutral-500" />
                  갤럭시 스토어에서 다운로드
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Smartphone Mockup with Wave & Dot Grid */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <SmartphoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}