import { Button } from "./ui/button";
import { Download } from "lucide-react";

export function PrivacySection() {
  return (
    <section id="privacy" className="py-24 lg:py-32 bg-[#F4F3EF] border-t border-stone-200/70">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-3">
          Privacy & Security
        </p>
        <h2 className="text-3xl md:text-4xl tracking-[-0.02em] text-neutral-900 mb-4 font-bold break-keep">
          개인정보 걱정 없이 사용할 수 있어요
        </h2>
        <p className="max-w-xl mx-auto text-base text-neutral-500 break-keep leading-relaxed mb-12">
          dori 21은 온디바이스 보안 아키텍처를 기반으로 설계되어, 사용자의 허락 없이는 어떠한 개인정보도 수집하거나 보관하지 않습니다.
        </p>

        {/* Minimal Monochrome Download Box */}
        <div className="relative mx-auto max-w-lg rounded-2xl border border-neutral-200/80 bg-white px-6 py-8 sm:px-8 sm:py-9">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3.5 py-0.5 rounded-full text-[11px] font-medium bg-white border border-neutral-200 text-neutral-600">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
            Android Only
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto font-medium gap-2 px-6 py-6 text-sm rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 shadow-none cursor-pointer"
            >
              <a href="https://onesto.re/0001008686" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                원스토어에서 다운로드
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto font-medium gap-2 px-6 py-6 text-sm rounded-xl border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 shadow-none"
            >
              <Download className="h-4 w-4 text-neutral-400" />
              갤럭시 스토어에서 다운로드
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
