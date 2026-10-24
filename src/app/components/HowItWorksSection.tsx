import { Zap, Eye, Touchpad, CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const steps = [
  {
    step: "STEP 01",
    title: "원하는 작업 한 번만 명령",
    description:
      '"토스로 엄마한테 5만원 송금해줘", "네이버스토어에서 바나나 한 손 주문해줘" 등 필요한 작업을 한 번만 명령하세요.',
    icon: Zap,
    highlight: "앱을 일일이 찾거나 복잡한 메뉴를 헤맬 필요가 없습니다.",
    color: "from-amber-500/20 to-orange-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
  },
  {
    step: "STEP 02",
    title: "실시간 AI 화면 인식 & 분석",
    description:
      "dori21이 해당 앱을 즉시 실행하고, Google Gemini AI 비전 모델을 통해 현재 화면의 버튼, 입력창, 메뉴 위치를 정확히 판별합니다.",
    icon: Eye,
    highlight: "UI가 바뀌어도 스스로 이해합니다.",
    color: "from-purple-500/20 to-indigo-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30",
  },
  {
    step: "STEP 03",
    title: "끝까지 스스로 자동 실행 & 대리 터치",
    description:
      "사람이 직접 손가락으로 누르는 것처럼 앱의 단계별 버튼을 눌러 작업을 완료합니다. 결제나 비밀번호 등 민감 구간은 본인 승인을 거칩니다.",
    icon: Touchpad,
    highlight: "한 번의 명령으로 전 과정을 안전하게 자동 완료",
    color: "from-emerald-500/20 to-teal-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  },
];

const targetAudiences = [
  {
    badge: "접근성 지원",
    title: "시각장애인 및 저시력자",
    desc: "작은 글씨나 복잡한 화면 구성을 볼 필요 없이 한 번의 명령만으로 스마트폰의 모든 기능을 스스로 실행할 수 있습니다.",
  },
  {
    badge: "효도 비서",
    title: "스마트폰 조작이 서툰 어르신",
    desc: "공공기관 증명서 발급, 모바일 뱅킹, 택시 호출 등 자녀에게 매번 부탁하기 미안했던 일을 스스로 해결합니다.",
  },
  {
    badge: "스마트 자동화",
    title: "바쁜 현대인을 위한 대리 비서",
    desc: "번거로운 반복 터치와 앱 이동 과정을 AI에게 맡기고 중요한 일에 집중할 수 있습니다.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-muted/20 border-t border-border/40">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            3단계 작동 원리
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 break-keep">
            dori 21은 어떻게 스마트폰을 대신 조작할까요?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground break-keep leading-relaxed">
            별도의 복잡한 절차 없이, 한 번 명령하면 AI가 화면을 직접 보고 터치하여 끝까지 자동 실행합니다.
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card
                key={idx}
                className="relative bg-card/80 backdrop-blur-xs border border-border/70 hover:border-primary/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <CardContent className="p-6 sm:p-7 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold tracking-wider text-muted-foreground">
                      {item.step}
                    </span>
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br border ${item.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 break-keep">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed break-keep mb-6 flex-grow">
                    {item.description}
                  </p>

                  <div className="pt-4 border-t border-border/50 flex items-center gap-2 text-xs font-medium text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="break-keep">{item.highlight}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Who is it for? */}
        <div className="max-w-5xl mx-auto bg-card rounded-2xl border border-border/80 p-6 sm:p-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 break-keep">
              이런 분들께 dori 21이 큰 힘이 되어드립니다
            </h3>
            <p className="text-sm text-muted-foreground break-keep">
              디지털 격차 없이 누구나 자유롭게 스마트폰을 누릴 수 있는 세상을 만듭니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {targetAudiences.map((target, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-muted/40 border border-border/50 space-y-2.5"
              >
                <span className="inline-block text-[11px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                  {target.badge}
                </span>
                <h4 className="text-base font-bold text-foreground break-keep">
                  {target.title}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed break-keep">
                  {target.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
