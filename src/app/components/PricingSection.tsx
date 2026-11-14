import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { Check, CheckCircle2, Loader2, Send } from "lucide-react";

const DISCORD_WEBHOOK_URL =
  "https://discord.com/api/webhooks/1568549996209381459/A8oRFfgx9OWgCgP54Cq3n_HWjK_lVQUmzPZblgNfPD125m4LveqCqVo_VqO0p278e9EI";
const DOWNLOAD_URL = "https://m.onestore.co.kr/v2/ko-kr/app/0001008686?scYn=Y";

const plans = [
  {
    badge: "개인 사용자",
    name: "무료로 사용해 보세요",
    price: "무료",
    description: "누구나 디지털 혜택을 누릴 수 있도록 일상 스마트폰 자동 실행 기능을 무료로 제공합니다.",
    features: [
      "텍스트 한 줄 명령으로 앱 자동 실행",
      "금융 · 쇼핑 · 공공 · 택시 등 일상 앱 조작 지원",
      "실시간 AI 화면 인식 및 단계별 대리 터치",
      "온디바이스 보안 및 민감 결제 본인 승인 보호"
    ],
    cta: "원스토어에서 무료 다운로드",
    popular: true,
    isContact: false
  },
  {
    badge: "복지기관 · 지자체 · 기업",
    name: "기관 및 기업 맞춤형 도입",
    price: "별도 문의",
    description: "다수의 이용자를 지원하는 복지관, 지자체 및 기업을 위한 맞춤형 플랜입니다.",
    features: [

      "기관 전용 앱 및 내부 서비스 맞춤형 연동",
      "기관 보안 정책 준수 및 전담 기술 지원",
      "현장 사용자 맞춤형 안내 및 교육 지원"
    ],
    cta: "도입 문의하기",
    popular: false,
    isContact: true
  }
];

const EMAIL_DOMAINS = [
  "naver.com",
  "gmail.com",
  "daum.net",
  "kakao.com",
  "korea.kr",
  "직접 입력",
];

function formatPhoneNumber(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.startsWith("02")) {
    if (digits.length <= 2) return digits;
    if (digits.length <= 5) return `${digits.slice(0, 2)}-${digits.slice(2)}`;
    if (digits.length <= 9)
      return `${digits.slice(0, 2)}-${digits.slice(2, 5)}-${digits.slice(5)}`;
    return `${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6, 10)}`;
  }
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
}

export function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [organization, setOrganization] = useState("");
  const [phone, setPhone] = useState("");
  const [emailId, setEmailId] = useState("");
  const [emailDomainSelect, setEmailDomainSelect] = useState("naver.com");
  const [customDomain, setCustomDomain] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const fullEmail = emailId.trim()
    ? `${emailId.trim()}@${emailDomainSelect === "직접 입력" ? customDomain.trim() : emailDomainSelect
    }`
    : "";

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setStatus("idle");
      setErrorMessage("");
    }, 200);
  };

  const handleSubmitInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    const phoneDigits = phone.replace(/\D/g, "");

    if (!organization.trim()) {
      setErrorMessage("기관/기업명 및 성함을 입력해 주세요.");
      return;
    }

    if (phoneDigits.length < 9) {
      setErrorMessage("연락처 전화번호를 정확히 입력해 주세요. (예: 010-1234-5678)");
      return;
    }

    const domainToCheck =
      emailDomainSelect === "직접 입력" ? customDomain.trim() : emailDomainSelect;
    if (!emailId.trim() || !domainToCheck || !domainToCheck.includes(".")) {
      setErrorMessage("회신받을 이메일 주소를 정확히 입력해 주세요.");
      return;
    }

    if (!message.trim()) {
      setErrorMessage("문의 내용을 입력해 주세요.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "dori 21 도입 문의 알림",
          embeds: [
            {
              title: "📩 새로운 엔터프라이즈 도입 문의가 접수되었습니다",
              color: 0x171717,
              fields: [
                {
                  name: "기관 / 기업명 및 성함",
                  value: organization.trim(),
                  inline: false,
                },
                {
                  name: "전화번호",
                  value: phone.trim(),
                  inline: true,
                },
                {
                  name: "이메일",
                  value: fullEmail,
                  inline: true,
                },
                {
                  name: "문의 내용",
                  value: message.trim(),
                  inline: false,
                },
              ],
              timestamp: new Date().toISOString(),
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Webhook request failed");
      }

      setStatus("success");
      setOrganization("");
      setPhone("");
      setEmailId("");
      setCustomDomain("");
      setMessage("");
      toast.success("도입 문의가 정상적으로 접수되었습니다.");
    } catch {
      setStatus("error");
      setErrorMessage("전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
      toast.error("전송 중 오류가 발생했습니다.");
    }
  };

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-[#F4F3EF] border-t border-stone-200/70">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-neutral-900 break-keep">
            부담 없이 시작하세요
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl bg-white p-8 sm:p-9 flex flex-col justify-between transition-all ${plan.popular
                ? "border-2 border-neutral-900 shadow-xs"
                : "border border-stone-200/80"
                }`}
            >
              <div>
                <div className="mb-7">
                  <span className="inline-block text-xs font-semibold text-neutral-400 mb-2">
                    {plan.badge}
                  </span>
                  <div className="flex items-baseline justify-between gap-2 mb-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 break-keep">
                      {plan.price}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-500 break-keep leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 border-t border-neutral-100 pt-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-4 w-4 text-neutral-900 mr-2.5 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-600 break-keep">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {plan.isContact ? (
                <Button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full rounded-xl py-5 text-sm font-medium shadow-none border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 cursor-pointer"
                  variant="outline"
                >
                  {plan.cta}
                </Button>
              ) : (
                <Button
                  asChild
                  className={`w-full rounded-xl py-5 text-sm font-medium shadow-none cursor-pointer ${plan.popular
                    ? "bg-neutral-900 text-white hover:bg-neutral-800"
                    : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
                    }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                    {plan.cta}
                  </a>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Discord Webhook Inquiry Modal (shadcn/ui Dialog + Select + Input) */}
      <Dialog
        open={isModalOpen}
        onOpenChange={(open) => {
          if (!open) handleCloseModal();
          else setIsModalOpen(true);
        }}
      >
        <DialogContent className="rounded-2xl bg-white border-stone-200 p-6 sm:p-8 shadow-2xl sm:max-w-lg">
          <DialogHeader className="text-left mb-2">
            <DialogTitle className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
              엔터프라이즈 도입 문의
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm text-neutral-500">
              남겨주신 연락처로 담당자가 빠르게 회신드립니다.
            </DialogDescription>
          </DialogHeader>

          {status === "success" ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-neutral-100 text-neutral-900 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-lg font-bold text-neutral-900">
                  문의가 정상적으로 접수되었습니다
                </h4>
                <p className="text-sm text-neutral-500 break-keep">
                  확인 후 남겨주신 연락처로 빠르게 안내드리겠습니다.
                </p>
              </div>
              <div className="pt-2">
                <Button
                  type="button"
                  onClick={handleCloseModal}
                  className="rounded-xl px-8 py-5 text-sm font-medium bg-neutral-900 text-white hover:bg-neutral-800 cursor-pointer shadow-none"
                >
                  확인
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitInquiry} className="space-y-4">
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-neutral-500">
                  기관 / 기업명 및 담당자 성함
                </Label>
                <Input
                  type="text"
                  required
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="예: OO시각장애인복지관 홍길동"
                  className="h-10 rounded-xl border-neutral-200 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus-visible:ring-neutral-900/20 focus-visible:border-neutral-900"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-neutral-500">
                  회신받을 전화번호{" "}
                  <span className="font-normal text-neutral-400">
                    (숫자만 입력해도 자동 완성)
                  </span>
                </Label>
                <Input
                  type="tel"
                  inputMode="numeric"
                  required
                  value={phone}
                  onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
                  placeholder="010-1234-5678"
                  className="h-10 rounded-xl border-neutral-200 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus-visible:ring-neutral-900/20 focus-visible:border-neutral-900"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-neutral-500">
                  회신받을 이메일
                </Label>
                <div className="flex items-center gap-1.5">
                  <Input
                    type="text"
                    required
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value.replace(/\s/g, ""))}
                    placeholder="이메일 아이디"
                    className="h-10 min-w-0 flex-1 rounded-xl border-neutral-200 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus-visible:ring-neutral-900/20 focus-visible:border-neutral-900"
                  />
                  <span className="text-neutral-400 font-medium text-sm select-none">
                    @
                  </span>
                  {emailDomainSelect === "직접 입력" ? (
                    <Input
                      type="text"
                      required
                      value={customDomain}
                      onChange={(e) =>
                        setCustomDomain(e.target.value.replace(/\s/g, ""))
                      }
                      placeholder="org.kr"
                      className="h-10 w-28 sm:w-32 rounded-xl border-neutral-200 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus-visible:ring-neutral-900/20 focus-visible:border-neutral-900"
                    />
                  ) : null}
                  <Select
                    value={emailDomainSelect}
                    onValueChange={setEmailDomainSelect}
                  >
                    <SelectTrigger className="h-10 w-[130px] rounded-xl border-neutral-200 bg-white text-sm text-neutral-800 cursor-pointer">
                      <SelectValue placeholder="도메인 선택" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl bg-white border-stone-200">
                      {EMAIL_DOMAINS.map((domain) => (
                        <SelectItem
                          key={domain}
                          value={domain}
                          className="cursor-pointer text-sm"
                        >
                          {domain}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-neutral-500">
                  문의 내용
                </Label>
                <Textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="예상 이용 인원, 도입 희망 시기, 궁금하신 점 등을 자유롭게 적어주세요."
                  className="rounded-xl border-neutral-200 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus-visible:ring-neutral-900/20 focus-visible:border-neutral-900 resize-none"
                />
              </div>

              {errorMessage && (
                <p className="text-xs text-red-600 font-medium">{errorMessage}</p>
              )}

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-xl py-5 text-sm font-medium bg-neutral-900 text-white hover:bg-neutral-800 gap-2 cursor-pointer shadow-none"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      접수 중...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      문의 접수하기
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}