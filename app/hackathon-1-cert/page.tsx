"use client";

import { useRef, useState } from "react";

const BRAND = "#E20871";
const FONT_CDN =
  "https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/variable/woff2/PretendardVariable.woff2";

type Step = "form" | "result";
type ParticipantType = "individual" | "team";

export default function HackathonCertPage() {
  const [step, setStep] = useState<Step>("form");
  const [name, setName] = useState("");
  const [participantType, setParticipantType] =
    useState<ParticipantType>("individual");
  const [teamName, setTeamName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [certDataUrl, setCertDataUrl] = useState("");

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmedName = name.trim();
    const trimmedTeam = teamName.trim();

    if (!trimmedName) {
      setError("이름을 입력해주세요.");
      return;
    }
    if (participantType === "team" && !trimmedTeam) {
      setError("팀명을 입력해주세요.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/participants.json");
      const participants: string[] = await res.json();

      if (!participants.includes(trimmedName)) {
        setError(
          "명단에서 이름을 찾을 수 없습니다. help@jobpang.co.kr으로 문의바랍니다."
        );
        setLoading(false);
        return;
      }

      const dataUrl = await generateCertificate(
        trimmedName,
        participantType === "team" ? trimmedTeam : null
      );
      setCertDataUrl(dataUrl);
      setStep("result");
    } catch {
      setError("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  const generateCertificate = async (
    certName: string,
    team: string | null
  ): Promise<string> => {
    // Load Pretendard via FontFace API
    try {
      if (!document.fonts.check("600 68px Pretendard")) {
        const font = new FontFace("Pretendard", `url(${FONT_CDN})`, {
          weight: "100 900",
        });
        await font.load();
        document.fonts.add(font);
      }
    } catch {
      // fallback to system sans-serif
    }

    // Load certificate template
    const img = new Image();
    img.src = "/certificate.png";
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error("이미지 로드 실패"));
    });

    const canvas = canvasRef.current!;
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(img, 0, 0);

    // Draw name
    ctx.save();
    ctx.font = '600 68px "Pretendard", "Apple SD Gothic Neo", sans-serif';
    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(certName, 411, 240);
    ctx.restore();

    // Draw team name
    if (team) {
      ctx.save();
      ctx.font = '600 18px "Pretendard", "Apple SD Gothic Neo", sans-serif';
      ctx.fillStyle = "#000000";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(team, 411, 320);
      ctx.restore();
    }

    return canvas.toDataURL("image/png");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = `취팡_해커톤1기_참가확인서_${name}.png`;
    link.href = certDataUrl;
    link.click();
  };

  const handleReset = () => {
    setStep("form");
    setName("");
    setTeamName("");
    setParticipantType("individual");
    setError("");
    setCertDataUrl("");
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-4">
      {/* Canvas: always mounted, hidden — used for drawing */}
      <canvas ref={canvasRef} className="hidden" />

      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-bold mb-4"
            style={{ backgroundColor: `${BRAND}15`, color: BRAND }}
          >
            제 1회 취팡 서비스기획 공모전
          </span>
          <h1 className="text-2xl font-extrabold text-gray-900">
            참가확인서 발급
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            참가자 명단 조회 후 확인서를 즉시 발급해드립니다.
          </p>
        </div>

        {/* ── FORM ── */}
        {step === "form" && (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-gray-200 p-8 space-y-6 shadow-sm"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                이름
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="실명을 입력하세요"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition-shadow focus:border-[#E20871] focus:ring-2 focus:ring-[#E20871]/20"
              />
            </div>

            {/* Type radio */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                참가 구분
              </label>
              <div className="flex gap-6">
                {(
                  [
                    { value: "individual", label: "개인" },
                    { value: "team", label: "팀" },
                  ] as const
                ).map(({ value, label }) => (
                  <label
                    key={value}
                    className="flex items-center gap-2.5 cursor-pointer"
                  >
                    <div
                      className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                        participantType === value
                          ? "border-[#E20871]"
                          : "border-gray-300"
                      }`}
                      onClick={() => setParticipantType(value)}
                    >
                      {participantType === value && (
                        <div
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ backgroundColor: BRAND }}
                        />
                      )}
                    </div>
                    <span
                      className="text-sm font-medium text-gray-700"
                      onClick={() => setParticipantType(value)}
                    >
                      {label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Team name (conditional) */}
            {participantType === "team" && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  팀명
                </label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="팀명을 입력하세요"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition-shadow focus:border-[#E20871] focus:ring-2 focus:ring-[#E20871]/20"
                />
              </div>
            )}

            {/* Error */}
            {error && (
              <p className="text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3 border border-red-100">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              style={{ backgroundColor: BRAND }}
            >
              {loading ? "조회 중…" : "확인서 발급하기"}
            </button>
          </form>
        )}

        {/* ── RESULT ── */}
        {step === "result" && (
          <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-6 shadow-sm">
            {/* Success message */}
            <div className="text-center">
              <div
                className="inline-flex items-center justify-center h-12 w-12 rounded-full mb-4"
                style={{ backgroundColor: `${BRAND}15` }}
              >
                <svg
                  className="h-6 w-6"
                  style={{ color: BRAND }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-extrabold text-gray-900">
                참가확인서가 준비됐습니다
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                {name}님의 확인서를 아래에서 다운로드하세요.
              </p>
            </div>

            {/* Preview */}
            <div className="rounded-xl overflow-hidden border border-gray-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={certDataUrl}
                alt="참가확인서 미리보기"
                className="w-full h-auto block"
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleDownload}
                className="w-full rounded-full py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: BRAND }}
              >
                PNG 다운로드
              </button>
              <button
                onClick={handleReset}
                className="w-full rounded-full py-3 text-sm font-semibold text-gray-600 border border-gray-300 hover:border-gray-400 transition-colors"
              >
                다시 발급하기
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
