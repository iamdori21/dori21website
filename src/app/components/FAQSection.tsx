import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Badge } from "./ui/badge";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "브라우저 기반 AI 에이전트나 기존 스마트폰 비서와 무엇이 다른가요?",
    a: "최근 등장한 AI 에이전트들이 주로 PC 웹 브라우저 안에서의 작업을 돕는다면, dori 21은 일상의 중심인 스마트폰 네이티브 앱을 직접 움직이는 모바일 AI 에이전트입니다.\n\n송금, 배달 주문, 택시 호출, 쇼핑 등 우리가 매일 반복하는 일상은 대부분 스마트폰 앱에서 일어납니다. dori 21은 웹 환경에 갇히지 않고, 화면의 버튼과 입력창을 실시간으로 인식해 사람이 직접 손가락으로 누르는 것처럼 앱을 끝까지 조작하여 일상의 번거로움을 완전히 해결해 드립니다.",
  },
  {
    q: "금융 거래나 계좌이체 시 비밀번호와 개인정보는 안전한가요?",
    a: "네, 완벽히 보호됩니다. dori 21은 온디바이스 보안 원칙을 준수하며 화면 분석 데이터는 AI 분석 직후 즉시 파기되고 서버에 영구 보관되지 않습니다. 특히 계좌 비밀번호 입력이나 공인인증서 확인과 같은 금융 보안 최종 승인 단계는 사용자가 직접 입력하도록 안전 절차를 거치므로 안심하고 사용하실 수 있습니다.",
  },
  {
    q: "어떤 스마트폰 앱들을 대신 조작할 수 있나요?",
    a: "안드로이드에 설치된 대부분의 일상 앱을 조작할 수 있습니다. 토스·카카오페이 등 금융 앱, 네이버·쿠팡 등 쇼핑 앱, 카카오 T 등 교통 앱, 정부24·병원 접수 앱 등 화면에 버튼과 텍스트가 있는 앱이라면 AI가 화면 구조를 인식하여 대신 작업을 수행합니다.",
  },
  {
    q: "아이폰(iOS)은 왜 지원하지 않나요?",
    a: "애플의 iOS 정책상 앱 외부의 다른 앱 화면을 인식하거나 버튼을 대신 터치해 주는 '접근성 자동화 제어 권한'이 원천 차단되어 있습니다. dori 21은 안드로이드 공식 접근성 서비스 API(AccessibilityService API)를 기반으로 작동하므로 현재는 안드로이드 스마트폰 전용으로 제공됩니다.",
  },
  {
    q: "어디에서 다운로드받을 수 있고, 이용 요금은 얼마인가요?",
    a: "원스토어(ONE store)와 삼성 갤럭시 스토어(Galaxy Store)에서 'dori 21' 또는 '도리 21'을 검색하여 무료로 다운로드하실 수 있습니다. 누구나 디지털 혜택을 누릴 수 있도록 기본 기능을 무료로 제공하고 있습니다.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-background border-t border-border/40">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-14">
          <Badge variant="outline" className="mb-4">
            <HelpCircle className="w-3.5 h-3.5 mr-1 text-primary" />
            자주 묻는 질문
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 break-keep">
            궁금한 점이 있으신가요?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground break-keep">
            dori 21의 서비스 원리와 개인정보 보안, 사용법에 대해 자주 하시는 질문들을 모았습니다.
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div className="bg-card rounded-2xl border border-border/70 p-4 sm:p-8 shadow-xs">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/60 py-1">
                <AccordionTrigger className="text-left font-bold text-base sm:text-lg hover:no-underline hover:text-primary transition-colors py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed break-keep whitespace-pre-line pt-1 pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
