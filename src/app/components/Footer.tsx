import { ChevronUp } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { toast } from "sonner";

const footerColumns = [
  {
    title: "서비스",
    links: [
      { label: "작동 원리", href: "#how-it-works" },
      { label: "주요 기능", href: "#features" },
      { label: "요금제", href: "#pricing" },
      { label: "자주 묻는 질문", href: "#faq" },
    ],
  },
  {
    title: "다운로드",
    links: [
      {
        label: "원스토어 (ONE store)",
        href: "https://m.onestore.co.kr/v2/ko-kr/app/0001008686?scYn=Y",
        external: true,
      },
      // TODO: 갤럭시 스토어 등록 후 주석 해제
      // { label: "갤럭시 스토어", href: "#how-it-works" },
      { label: "안드로이드 전용 안내", href: "#faq" },
    ],
  },
  {
    title: "비즈니스 및 문의",
    links: [
      { label: "기관 · 기업 도입 문의", href: "#pricing" },
      { label: "contact@dori21.com", href: "mailto:contact@dori21.com" },
    ],
  },
  {
    title: "법적 고지",
    links: [
      { label: "개인정보처리방침", href: "/privacy.html", external: true },
      { label: "서비스 이용약관", href: "/terms.html", external: true },
    ],
  },
];

export function Footer() {
  const handleCopyContactEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText("contact@dori21.com").catch(() => {});
    }
    toast.success("이메일 주소(contact@dori21.com)가 복사되었습니다.");
  };

  return (
    <footer className="bg-[#191918] text-neutral-300 pt-14 pb-10 sm:pt-16 sm:pb-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Multi-column Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 mb-14 sm:mb-16">
          {footerColumns.map((col) => (
            <div key={col.title} className="space-y-3.5">
              <h4 className="text-xs font-bold text-white tracking-wide">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      onClick={
                        link.href === "mailto:contact@dori21.com"
                          ? handleCopyContactEmail
                          : undefined
                      }
                      className="text-xs sm:text-[13px] text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar with shadcn/ui Popover & Contact Email */}
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="group inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer outline-none"
              >
                <span>© 2026 dori 21</span>
                <ChevronUp className="w-3.5 h-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </button>
            </PopoverTrigger>
            <PopoverContent
              side="top"
              align="start"
              sideOffset={10}
              className="w-72 sm:w-80 rounded-xl bg-white text-neutral-700 p-4 shadow-xl border border-neutral-200 text-xs space-y-1.5 leading-relaxed"
            >
              <p>서비스명: dori 21 (도리 21)</p>
              <p>팀/운영: DDACrew</p>
              <p>문의 및 제휴: contact@dori21.com</p>
            </PopoverContent>
          </Popover>

          <button
            type="button"
            onClick={handleCopyContactEmail}
            className="text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            문의하기 - contact@dori21.com
          </button>
        </div>
      </div>
    </footer>
  );
}