import { Button } from "./ui/button";
import { Download, Menu } from "lucide-react";
import { DoriLogo } from "./DoriLogo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center transition-opacity hover:opacity-90">
          <DoriLogo size="md" showIcon={false} />
        </a>
        <nav className="hidden md:flex items-center space-x-7">
          <a
            href="#how-it-works"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            작동 원리
          </a>
          <a
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            주요 기능
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            자주 묻는 질문
          </a>
          <a
            href="#privacy"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            개인정보 보호
          </a>
        </nav>
        <div className="flex items-center space-x-3">
          <a href="#privacy">
            <Button size="sm" className="hidden sm:inline-flex gap-1.5 font-medium rounded-full px-4 bg-foreground text-background hover:bg-foreground/90">
              <Download className="h-3.5 w-3.5" />
              앱 다운로드
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}