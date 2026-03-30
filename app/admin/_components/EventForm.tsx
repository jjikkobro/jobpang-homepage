"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const BRAND = "#E20871";

interface Issue {
  issueId: string;
  title: string;
  subtitle: string;
  category: "venture" | "hackathon" | "networking";
  editionNumber: number;
  status: "past" | "ongoing" | "upcoming" | "recruiting";
  startDate: string;
  endDate: string;
  location: string;
  summary: string;
  highlights: string[];
  participantsCount?: number;
  teamsCount?: number;
  applyUrl?: string;
  referenceUrl?: string;
  heroImage?: string;
  seo: { metaTitle: string; metaDescription: string };
}

const EMPTY: Omit<Issue, "issueId"> = {
  title: "",
  subtitle: "",
  category: "hackathon",
  editionNumber: 1,
  status: "upcoming",
  startDate: "",
  endDate: "",
  location: "",
  summary: "",
  highlights: [],
  applyUrl: "",
  referenceUrl: "",
  heroImage: "",
  seo: { metaTitle: "", metaDescription: "" },
};

function generateIssueId(category: string, edition: number): string {
  return `${category}-${String(edition).padStart(3, "0")}`;
}

export default function EventForm({ editId }: { editId?: string }) {
  const router = useRouter();
  const isEdit = !!editId;

  const [form, setForm] = useState<Omit<Issue, "issueId">>({ ...EMPTY });
  const [highlightsText, setHighlightsText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (editId) {
      fetch(`/api/admin/events/${editId}`)
        .then((r) => r.json())
        .then((data: Issue) => {
          const { issueId: _, ...rest } = data;
          setForm(rest);
          setHighlightsText((rest.highlights ?? []).join("\n"));
        });
    }
  }, [editId]);

  const issueId = isEdit ? editId! : generateIssueId(form.category, form.editionNumber);

  const set = <K extends keyof typeof form>(key: K, val: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const payload: Issue = {
      ...form,
      issueId,
      highlights: highlightsText.split("\n").filter(Boolean),
      galleryImages: [],
      attachments: [],
    } as unknown as Issue;

    const url = isEdit ? `/api/admin/events/${editId}` : "/api/admin/events";
    const method = isEdit ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      router.push("/admin/events");
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
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="카테고리">
            <select
              value={form.category}
              onChange={(e) => set("category", e.target.value as Issue["category"])}
              className={inputCls}
            >
              <option value="hackathon">해커톤</option>
              <option value="venture">창업/투자</option>
              <option value="networking">네트워킹</option>
            </select>
          </Field>
          <Field label="회차 번호">
            <input
              type="number"
              min={1}
              value={form.editionNumber}
              onChange={(e) => set("editionNumber", Number(e.target.value))}
              className={inputCls}
            />
          </Field>
        </div>

        {!isEdit && (
          <p className="text-xs text-gray-400">
            행사 ID (자동생성):{" "}
            <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono">{issueId}</code>
          </p>
        )}

        <Field label="행사명">
          <input
            required
            value={form.title}
            onChange={(e) => set("title", e.target.value)}
            className={inputCls}
            placeholder="제 N회 취팡 해커톤"
          />
        </Field>
        <Field label="부제목">
          <input
            value={form.subtitle}
            onChange={(e) => set("subtitle", e.target.value)}
            className={inputCls}
          />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="상태">
            <select
              value={form.status}
              onChange={(e) => set("status", e.target.value as Issue["status"])}
              className={inputCls}
            >
              <option value="upcoming">예정</option>
              <option value="recruiting">모집중</option>
              <option value="ongoing">진행중</option>
              <option value="past">종료</option>
            </select>
          </Field>
          <Field label="장소">
            <input
              value={form.location}
              onChange={(e) => set("location", e.target.value)}
              className={inputCls}
              placeholder="온라인 / 서울 강남구"
            />
          </Field>
          <Field label="시작일">
            <input
              type="date"
              value={form.startDate}
              onChange={(e) => set("startDate", e.target.value)}
              className={inputCls}
            />
          </Field>
          <Field label="종료일">
            <input
              type="date"
              value={form.endDate}
              onChange={(e) => set("endDate", e.target.value)}
              className={inputCls}
            />
          </Field>
        </div>
      </Section>

      {/* 내용 */}
      <Section title="내용">
        <Field label="요약">
          <textarea
            rows={3}
            value={form.summary}
            onChange={(e) => set("summary", e.target.value)}
            className={inputCls}
          />
        </Field>
        <Field label="하이라이트 (줄바꿈으로 구분)">
          <textarea
            rows={4}
            value={highlightsText}
            onChange={(e) => setHighlightsText(e.target.value)}
            className={inputCls}
            placeholder={"대상 700만원\n팀빌딩 지원\n채용 우대"}
          />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="참가자 수 (선택)">
            <input
              type="number"
              value={form.participantsCount ?? ""}
              onChange={(e) =>
                set("participantsCount", e.target.value ? Number(e.target.value) : undefined)
              }
              className={inputCls}
            />
          </Field>
          <Field label="팀 수 (선택)">
            <input
              type="number"
              value={form.teamsCount ?? ""}
              onChange={(e) =>
                set("teamsCount", e.target.value ? Number(e.target.value) : undefined)
              }
              className={inputCls}
            />
          </Field>
        </div>
      </Section>

      {/* 링크 */}
      <Section title="링크">
        <Field label="신청 링크">
          <input
            type="url"
            value={form.applyUrl ?? ""}
            onChange={(e) => set("applyUrl", e.target.value)}
            className={inputCls}
            placeholder="https://"
          />
        </Field>
        <Field label="참조 링크">
          <input
            type="url"
            value={form.referenceUrl ?? ""}
            onChange={(e) => set("referenceUrl", e.target.value)}
            className={inputCls}
            placeholder="https://"
          />
        </Field>
      </Section>

      {/* SEO */}
      <Section title="SEO">
        <Field label="메타 제목">
          <input
            value={form.seo.metaTitle}
            onChange={(e) =>
              set("seo", { ...form.seo, metaTitle: e.target.value })
            }
            className={inputCls}
            placeholder="행사명 | 취팡"
          />
        </Field>
        <Field label="메타 설명">
          <textarea
            rows={2}
            value={form.seo.metaDescription}
            onChange={(e) =>
              set("seo", { ...form.seo, metaDescription: e.target.value })
            }
            className={inputCls}
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
          {loading ? "저장 중…" : isEdit ? "수정 완료" : "행사 추가"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/events")}
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
