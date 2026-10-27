import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Download } from "lucide-react";

export function PrivacySection() {
  return (
    <section id="privacy" className="py-20 lg:py-28 bg-muted/40 border-t border-border/40">
      <div className="container mx-auto px-4 text-center">
        <Badge variant="outline" className="mb-4">개인정보 & 보안</Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 font-bold">
          개인정보 걱정 없이 사용할 수 있어요
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground break-keep mb-10">
          dori 21은 온디바이스 보안 아키텍처를 기반으로 설계되어, 사용자의 허락 없이는 어떠한 개인정보도 사용하지 않습니다.
        </p>

        {/* 4-sided Green Border Box with Top Border-overlapping Badge */}
        <div className="relative mx-auto max-w-xl rounded-2xl border border-emerald-500/50 bg-transparent px-6 py-7 sm:px-8 sm:py-8 shadow-xs">
          {/* Overlapping Badge on the Top Border */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3.5 py-0.5 rounded-full text-xs font-semibold bg-background border border-emerald-500/50 text-emerald-600 dark:text-emerald-400 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Android Only
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto font-medium gap-2 cursor-pointer">
              <a href="https://onesto.re/0001008686" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                원스토어에서 다운로드
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto font-medium gap-2 bg-background hover:bg-muted">
              <Download className="h-4 w-4" />
              갤럭시 스토어에서 다운로드
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
