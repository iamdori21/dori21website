import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Download } from "lucide-react";
import { SmartphoneMockup } from "./SmartphoneMockup";

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-6">
          안드로이드 전용 앱입니다. iOS 지원은 안되요😥
        </Badge>
        <h1 className="mx-auto max-w-4xl text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6 font-bold">
          당신의 눈과 손이 되어드려요
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
          보이지 않아도, 터치가 서툴러도 괜찮아요. 복잡한 스마트폰 작업을 대신 처리해 드립니다.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Button size="lg" className="w-full sm:w-auto font-medium gap-2">
            <Download className="h-4 w-4" />
            원스토어에서 다운로드
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto font-medium gap-2">
            <Download className="h-4 w-4" />
            갤럭시 스토어에서 다운로드
          </Button>
        </div>

        {/* Hero Smartphone Showcase */}
        <SmartphoneMockup fadeColor="background" />
      </div>
    </section>
  );
}