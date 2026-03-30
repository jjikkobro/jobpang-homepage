"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AdminShell from "../_components/AdminShell";
import { Plus, Pencil, Trash2 } from "lucide-react";

const BRAND = "#E20871";

const STATUS_LABEL: Record<string, string> = {
  ongoing: "진행중",
  recruiting: "모집중",
  upcoming: "예정",
  past: "종료",
};
const STATUS_COLOR: Record<string, string> = {
  ongoing: "bg-blue-100 text-blue-700",
  recruiting: "bg-green-100 text-green-700",
  upcoming: "bg-yellow-100 text-yellow-700",
  past: "bg-gray-100 text-gray-500",
};
const CATEGORY_LABEL: Record<string, string> = {
  venture: "창업/투자",
  hackathon: "해커톤",
  networking: "네트워킹",
};

interface Issue {
  issueId: string;
  title: string;
  category: string;
  status: string;
  startDate: string;
  endDate: string;
}

export default function AdminEventsPage() {
  const router = useRouter();
  const [events, setEvents] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  const load = () => {
    setLoading(true);
    fetch("/api/admin/events")
      .then((r) => r.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      });
  };

  useEffect(load, []);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`"${title}" 행사를 삭제할까요?`)) return;
    await fetch(`/api/admin/events/${id}`, { method: "DELETE" });
    load();
  };

  const filtered =
    filter === "all" ? events : events.filter((e) => e.category === filter);

  return (
    <AdminShell title="행사 관리">
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          {["all", "venture", "hackathon", "networking"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                filter === f
                  ? "text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              style={filter === f ? { backgroundColor: BRAND } : {}}
            >
              {f === "all"
                ? "전체"
                : f === "venture"
                ? "창업/투자"
                : f === "hackathon"
                ? "해커톤"
                : "네트워킹"}
            </button>
          ))}
        </div>
        <Link
          href="/admin/events/new"
          className="flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold text-white"
          style={{ backgroundColor: BRAND }}
        >
          <Plus className="h-3.5 w-3.5" /> 행사 추가
        </Link>
      </div>

      {loading ? (
        <p className="text-sm text-gray-400">불러오는 중…</p>
      ) : filtered.length === 0 ? (
        <p className="text-sm text-gray-400">행사가 없습니다.</p>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                <th className="px-5 py-3">행사명</th>
                <th className="px-4 py-3">카테고리</th>
                <th className="px-4 py-3">상태</th>
                <th className="px-4 py-3">기간</th>
                <th className="px-4 py-3 text-right">액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((ev) => (
                <tr key={ev.issueId} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3.5">
                    <p className="font-semibold text-gray-900">{ev.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{ev.issueId}</p>
                  </td>
                  <td className="px-4 py-3.5 text-gray-600">
                    {CATEGORY_LABEL[ev.category] ?? ev.category}
                  </td>
                  <td className="px-4 py-3.5">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${STATUS_COLOR[ev.status] ?? "bg-gray-100 text-gray-500"}`}
                    >
                      {STATUS_LABEL[ev.status] ?? ev.status}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-xs text-gray-500">
                    {ev.startDate} ~ {ev.endDate}
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => router.push(`/admin/events/${ev.issueId}`)}
                        className="flex items-center gap-1 rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:border-gray-300 hover:text-gray-900"
                      >
                        <Pencil className="h-3 w-3" /> 수정
                      </button>
                      <button
                        onClick={() => handleDelete(ev.issueId, ev.title)}
                        className="flex items-center gap-1 rounded-lg border border-red-200 px-2.5 py-1.5 text-xs font-medium text-red-500 hover:border-red-300 hover:text-red-700"
                      >
                        <Trash2 className="h-3 w-3" /> 삭제
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminShell>
  );
}
