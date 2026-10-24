import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Download, Sparkles, ShieldCheck } from "lucide-react";
import { SmartphoneMockup } from "./SmartphoneMockup";

export function HeroSection() {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* Category Pill / Android Badge */}
        <div className="inline-flex items-center gap-2 mb-6">
          <Badge
            variant="outline"
            className="px-3 py-1 text-xs sm:text-sm font-medium border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1 text-emerald-500" />
            차세대 온디바이스 AI 모바일 에이전트
          </Badge>
          <Badge variant="secondary" className="px-2.5 py-1 text-xs font-normal">
            Android 전용
          </Badge>
        </div>

        {/* SEO-Optimized Primary Headline */}
        <h1 className="mx-auto max-w-4xl text-3xl sm:text-5xl lg:text-6xl tracking-tight mb-6 font-extrabold leading-tight break-keep">
          한 번의 명령으로 끝까지 자동 실행하는<br className="hidden sm:inline" />{" "}
          <span className="bg-gradient-to-r from-amber-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            AI 대리 비서, dori 21
          </span>
        </h1>

        {/* Clear Subtitle explaining value & intent */}
        <p className="mx-auto max-w-2xl text-base sm:text-xl text-muted-foreground mb-4 break-keep font-medium">
          "당신의 눈과 손이 되어드려요." 보이지 않아도, 터치가 서툴러도 괜찮습니다.
        </p>
        <p className="mx-auto max-w-2xl text-sm sm:text-base text-foreground/80 mb-10 break-keep leading-relaxed">
          토스 송금부터 택시 호출, 온라인 쇼핑, 등본 발급까지 — 원하는 작업을 한 번 명령하면 AI가 화면을 직접 보고 대신 터치해 자동으로 완료합니다.
        </p>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Button size="lg" className="w-full sm:w-auto font-medium gap-2 px-6 py-6 text-base shadow-md hover:shadow-lg transition-all">
            <Download className="h-5 w-5" />
            원스토어에서 다운로드
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto font-medium gap-2 px-6 py-6 text-base bg-background/80 hover:bg-muted transition-all">
            <Download className="h-5 w-5" />
            갤럭시 스토어에서 다운로드
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-12">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>온디바이스 보안 아키텍처 적용 · 개인정보 안전 보호</span>
        </div>

        {/* Hero Smartphone Showcase */}
        <SmartphoneMockup fadeColor="background" />
      </div>
    </section>
  );
}