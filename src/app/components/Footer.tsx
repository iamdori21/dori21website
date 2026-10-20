import { DoriLogo } from "./DoriLogo";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-6 bg-muted/20">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          <DoriLogo size="sm" />
          <span>© 2026 dori 21. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            개인정보처리방침
          </a>
          <a href="/terms.html" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            이용약관
          </a>
          {/* <a href="mailto:sonchisang@gmail.com" className="hover:text-foreground transition-colors">
            문의하기
          </a> */}
        </div>
      </div>
    </footer>
  );
}