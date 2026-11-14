const ONESTORE_APP_URL =
  "https://m.onestore.co.kr/v2/ko-kr/app/0001008686?scYn=Y";
// ecc=H enables 30% Reed-Solomon error correction so the center dino icon scans reliably
const QR_SRC = `https://api.qrserver.com/v1/create-qr-code/?format=svg&size=320x320&margin=6&ecc=H&color=111111&bgcolor=ffffff&data=${encodeURIComponent(
  ONESTORE_APP_URL
)}`;

export function OneStoreQrButton() {
  return (
    <a
      href={ONESTORE_APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="원스토어 dori21 다운로드 QR 코드"
      className="relative w-28 h-28 shrink-0 rounded-2xl border border-stone-200/90 bg-white p-2 flex items-center justify-center shadow-xs hover:border-neutral-400 transition-colors"
    >
      <img
        src={QR_SRC}
        alt="dori21 - 디지털 자립을 돕는 배리어프리 AI - 원스토어 QR 코드"
        width={112}
        height={112}
        className="w-full h-full object-contain select-none"
      />
      {/* Chrome QR style center pixel dino badge */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 m-auto flex h-7 w-7 items-center justify-center rounded-sm bg-white p-0.5"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-full w-full fill-[#111111]"
          shapeRendering="crispEdges"
        >
          {/* Classic Chrome Pixel T-Rex silhouette */}
          <path d="M11 2h9v1h1v5h-5v1h3v1h-4v2h2v2h-1v-1h-1v4h-1v2h-1v3h-2v-1h1v-2h-2v1h-1v2H7v-1h1v-2H6v-1H5v-1H4v-2H3V9h1v2h1v1h1v-1h2v-1h2V8h1V2zm3 2v1h1V4h-1z" />
        </svg>
      </span>
    </a>
  );
}
