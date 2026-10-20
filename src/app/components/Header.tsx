import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { DoriLogo } from "./DoriLogo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto relative flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center transition-opacity hover:opacity-90 z-10">
          <DoriLogo size="md" showIcon={false} />
        </a>
        <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            기능
          </a>
          <a href="#privacy" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            개인정보
          </a>
        </nav>
        <div className="flex items-center space-x-4 z-10">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}