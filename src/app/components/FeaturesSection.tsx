import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { LogoNetworkMap } from "./LogoNetworkMap";

const features = [
  {
    title: "토스로 계좌이체 해줘",
    description: "토스 앱을 직접 실행하고 계좌이체 버튼을 선택해 이체를 완료합니다.",
    badge: "금융 / 이체"
  },
  {
    title: "네이버스토어에서 바나나 주문해줘",
    description: "네이버 앱을 직접 실행하고 상품 검색과 구매 버튼을 선택해 주문을 완료합니다.",
    badge: "쇼핑 / 커머스"
  },
  {
    title: "주민등록 등본 발급해줘",
    description: "정부24 앱을 직접 실행하고 등본 신청 메뉴를 선택해 발급을 완료합니다.",
    badge: "공공 / 행정"
  },
  {
    title: "숙소 예약해줘",
    description: "숙박 앱을 직접 실행하고 최적의 객실과 예약 버튼을 선택해 예약을 완료합니다.",
    badge: "여행 / 숙박"
  },
  {
    title: "카카오택시 집으로 불러줘",
    description: "카카오 T 앱을 직접 실행하고 목적지 설정 후 호출 버튼을 눌러 배차를 완료합니다.",
    badge: "모빌리티"
  },
  {
    title: "병원 진료 예약해줘",
    description: "병원 접수 앱을 직접 실행하고 진료 순번 접수 버튼을 선택해 예약을 완료합니다.",
    badge: "의료 / 생활"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4">자유로운 앱 연동 생태계</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 font-bold">
            어떤 앱이든 직접 실행합니다.
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground break-keep">
            카카오톡, 네이버, 토스, 유튜브부터 일상 서비스까지 AI가 복잡한 화면을 조작합니다.
          </p>
        </div>

        {/* 3D dori21 Logo & Connected App Ecosystem Map */}
        <LogoNetworkMap className="mb-16 sm:mb-20" />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/40 group bg-card border-border/70"
              >
                <CardHeader className="p-3.5 sm:p-5 pb-1.5 sm:pb-2.5 space-y-1.5 sm:space-y-2.5">
                  <div className="flex items-center justify-start">
                    <Badge variant="secondary" className="text-[10px] sm:text-[11px] font-medium px-1.5 sm:px-2 py-0.5">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xs sm:text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors break-keep leading-snug">
                    "{feature.title}"
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3.5 sm:p-5 pt-0">
                  <CardDescription className="text-[11px] sm:text-[13px] text-muted-foreground leading-relaxed break-keep min-h-0 sm:min-h-[48px]">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}