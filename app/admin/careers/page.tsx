"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AdminShell from "../_components/AdminShell";
import { Plus, Pencil, Trash2, ChevronUp, ChevronDown } from "lucide-react";

const BRAND = "#E20871";

interface Position {
  slug: string;
  title: string;
  tagline: string;
  years: string;
  active?: boolean;
}

export default function AdminCareersPage() {
  const router = useRouter();
  const [positions, setPositions] = useState<Position[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    fetch("/api/admin/careers")
      .then((r) => r.json())
      .then((data) => {
        setPositions(data);
        setLoading(false);
      });
  };

  useEffect(load, []);

  const handleDelete = async (slug: string, title: string) => {
    if (!confirm(`"${title}" 포지션을 삭제할까요?`)) return;
    await fetch(`/api/admin/careers/${slug}`, { method: "DELETE" });
    load();
  };

  const handleToggleActive = async (pos: Position) => {
    await fetch(`/api/admin/careers/${pos.slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...pos, active: !pos.active }),
    });
    load();
  };

  const handleMove = async (idx: number, dir: -1 | 1) => {
    const next = [...positions];
    const target = idx + dir;
    if (target < 0 || target >= next.length) return;
    [next[idx], next[target]] = [next[target], next[idx]];
    // 전체 목록을 순서대로 각각 PUT
    for (const p of next) {
      await fetch(`/api/admin/careers/${p.slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(p),
      });
    }
    load();
  };

  return (
    <AdminShell title="채용공고 관리">
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray-500">
          비활성 포지션은 채용 페이지에 노출되지 않습니다.
        </p>
        <Link
          href="/admin/careers/new"
          className="flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold text-white"
          style={{ backgroundColor: BRAND }}
        >
          <Plus className="h-3.5 w-3.5" /> 포지션 추가
        </Link>
      </div>

      {loading ? (
        <p className="text-sm text-gray-400">불러오는 중…</p>
      ) : positions.length === 0 ? (
        <p className="text-sm text-gray-400">포지션이 없습니다.</p>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                <th className="px-5 py-3">포지션</th>
                <th className="px-4 py-3">우대 경력</th>
                <th className="px-4 py-3">노출</th>
                <th className="px-4 py-3">순서</th>
                <th className="px-4 py-3 text-right">액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {positions.map((pos, idx) => (
                <tr key={pos.slug} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3.5">
                    <p className="font-semibold text-gray-900">{pos.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{pos.tagline}</p>
                  </td>
                  <td className="px-4 py-3.5 text-xs text-gray-600">{pos.years}</td>
                  <td className="px-4 py-3.5">
                    <button
                      onClick={() => handleToggleActive(pos)}
                      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                        pos.active !== false ? "bg-green-500" : "bg-gray-200"
                      }`}
                    >
                      <span
                        className={`inline-block h-3.5 w-3.5 rounded-full bg-white shadow transition-transform ${
                          pos.active !== false ? "translate-x-4" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex gap-1">
                      <button
                        onClick={() => handleMove(idx, -1)}
                        disabled={idx === 0}
                        className="rounded p-1 text-gray-400 hover:bg-gray-100 disabled:opacity-30"
                      >
                        <ChevronUp className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => handleMove(idx, 1)}
                        disabled={idx === positions.length - 1}
                        className="rounded p-1 text-gray-400 hover:bg-gray-100 disabled:opacity-30"
                      >
                        <ChevronDown className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => router.push(`/admin/careers/${pos.slug}`)}
                        className="flex items-center gap-1 rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:border-gray-300"
                      >
                        <Pencil className="h-3 w-3" /> 수정
                      </button>
                      <button
                        onClick={() => handleDelete(pos.slug, pos.title)}
                        className="flex items-center gap-1 rounded-lg border border-red-200 px-2.5 py-1.5 text-xs font-medium text-red-500 hover:border-red-300"
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
