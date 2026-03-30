"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const BRAND = "#E20871";

interface Position {
  slug: string;
  title: string;
  tagline: string;
  years: string;
  tasks: string[];
  experience: string;
  whatYouDo?: string[];
  requirements?: string[];
  preferred?: string[];
  friendlyNote?: string;
  active?: boolean;
}

const EMPTY: Position = {
  slug: "",
  title: "",
  tagline: "",
  years: "신입 및 2년 이상",
  tasks: [],
  experience: "",
  whatYouDo: [],
  requirements: [],
  preferred: [],
  friendlyNote: "",
  active: true,
};

function toSlug(title: string): string {
  const map: Record<string, string> = {
    서비스: "service",
    운영: "ops",
    기획자: "planner",
    기획: "planner",
    마케터: "marketer",
    마케팅: "marketing",
    매니저: "manager",
    퍼포먼스: "performance",
    콘텐츠: "content",
    PM: "pm",
    PO: "po",
    디자인: "design",
    개발: "dev",
  };
  let s = title;
  for (const [k, v] of Object.entries(map)) s = s.replaceAll(k, v);
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || `pos-${Date.now()}`;
}

export default function CareerForm({ editSlug }: { editSlug?: string }) {
  const router = useRouter();
  const isEdit = !!editSlug;

  const [form, setForm] = useState<Position>({ ...EMPTY });
  const [tasksText, setTasksText] = useState("");
  const [whatYouDoText, setWhatYouDoText] = useState("");
  const [requirementsText, setRequirementsText] = useState("");
  const [preferredText, setPreferredText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (editSlug) {
      fetch(`/api/admin/careers/${editSlug}`)
        .then((r) => r.json())
        .then((data: Position) => {
          setForm(data);
          setTasksText((data.tasks ?? []).join("\n"));
          setWhatYouDoText((data.whatYouDo ?? []).join("\n"));
          setRequirementsText((data.requirements ?? []).join("\n"));
          setPreferredText((data.preferred ?? []).join("\n"));
        });
    }
  }, [editSlug]);

  const set = <K extends keyof Position>(key: K, val: Position[K]) =>
    setForm((f) => ({ ...f, [key]: val }));

  const handleTitleBlur = () => {
    if (!isEdit && !form.slug && form.title) {
      set("slug", toSlug(form.title));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const payload: Position = {
      ...form,
      tasks: tasksText.split("\n").filter(Boolean),
      whatYouDo: whatYouDoText.split("\n").filter(Boolean),
      requirements: requirementsText.split("\n").filter(Boolean),
      preferred: preferredText.split("\n").filter(Boolean),
    };

    const url = isEdit ? `/api/admin/careers/${editSlug}` : "/api/admin/careers";
    const method = isEdit ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      router.push("/admin/careers");
    } else {
      const data = await res.json();
      setError(data.error ?? "저장 실패");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 기본 정보 */}
      <Section title="기본 정보">
        <Field label="포지션명">
          <input
            required
            value={form.title}
            onChange={(e) => set("title", e.target.value)}
            onBlur={handleTitleBlur}
            className={inputCls}
            placeholder="서비스 운영 PM"
          />
        </Field>
        <Field label={`Slug (URL) ${!isEdit ? "— 제목 입력 후 자동생성, 직접 수정 가능" : ""}`}>
          <input
            required
            value={form.slug}
            onChange={(e) => set("slug", e.target.value)}
            className={inputCls}
            placeholder="service-pm"
            readOnly={isEdit}
          />
        </Field>
        <Field label="태그라인">
          <input
            value={form.tagline}
            onChange={(e) => set("tagline", e.target.value)}
            className={inputCls}
            placeholder="서비스 운영 관리와 프로젝트 흐름을 정리하는 역할"
          />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="우대 경력">
            <input
              value={form.years}
              onChange={(e) => set("years", e.target.value)}
              className={inputCls}
              placeholder="신입 및 4년 이상"
            />
          </Field>
          <Field label="유관 경험 (한 줄)">
            <input
              value={form.experience}
              onChange={(e) => set("experience", e.target.value)}
              className={inputCls}
              placeholder="서비스 운영 / PM·PO / 웹기획 경험"
            />
          </Field>
        </div>
        <Field label="주요 업무 키워드 (줄바꿈 구분, 목록 테이블에 표시)">
          <textarea
            rows={3}
            value={tasksText}
            onChange={(e) => setTasksText(e.target.value)}
            className={inputCls}
            placeholder={"서비스 운영 관리\n프로젝트 일정 관리\n개발사 협업"}
          />
        </Field>
        <label className="flex items-center gap-2.5 cursor-pointer">
          <div
            onClick={() => set("active", !form.active)}
            className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
              form.active !== false ? "bg-green-500" : "bg-gray-200"
            }`}
          >
            <span
              className={`inline-block h-3.5 w-3.5 rounded-full bg-white shadow transition-transform ${
                form.active !== false ? "translate-x-4" : "translate-x-1"
              }`}
            />
          </div>
          <span className="text-sm font-medium text-gray-700">
            채용 페이지에 노출
          </span>
        </label>
      </Section>

      {/* 상세 업무 */}
      <Section title="상세 업무">
        <Field label="이런 일을 합니다 (줄바꿈 구분)">
          <textarea
            rows={5}
            value={whatYouDoText}
            onChange={(e) => setWhatYouDoText(e.target.value)}
            className={inputCls}
            placeholder={"취팡 서비스 전반의 운영을 관리합니다.\n기능 개선사항을 정리하고 우선순위를 조율합니다."}
          />
        </Field>
        <Field label="이런 분을 찾습니다 (줄바꿈 구분)">
          <textarea
            rows={5}
            value={requirementsText}
            onChange={(e) => setRequirementsText(e.target.value)}
            className={inputCls}
            placeholder={"신입 또는 경력 4년 이상\n실행과 결과까지 챙기는 분"}
          />
        </Field>
        <Field label="이런 분이면 더 좋습니다 (줄바꿈 구분, 선택)">
          <textarea
            rows={4}
            value={preferredText}
            onChange={(e) => setPreferredText(e.target.value)}
            className={inputCls}
            placeholder={"스타트업 운영 경험\nNotion, Figma 활용 경험"}
          />
        </Field>
        <Field label="구직자 친화 안내 메시지 (선택)">
          <textarea
            rows={2}
            value={form.friendlyNote ?? ""}
            onChange={(e) => set("friendlyNote", e.target.value)}
            className={inputCls}
            placeholder="경력 연수보다 실제 경험을 더 중요하게 봅니다…"
          />
        </Field>
      </Section>

      {error && (
        <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={loading}
          className="rounded-full px-7 py-2.5 text-sm font-bold text-white disabled:opacity-50"
          style={{ backgroundColor: BRAND }}
        >
          {loading ? "저장 중…" : isEdit ? "수정 완료" : "포지션 추가"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/careers")}
          className="rounded-full border border-gray-300 px-7 py-2.5 text-sm font-semibold text-gray-600 hover:border-gray-400"
        >
          취소
        </button>
      </div>
    </form>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-4">
      <h3 className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-3">{title}</h3>
      {children}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 mb-1.5">{label}</label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-[#E20871] focus:bg-white focus:ring-2 focus:ring-[#E20871]/10 transition-colors";
