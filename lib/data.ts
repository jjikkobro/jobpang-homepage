export type IssueStatus = "past" | "ongoing" | "upcoming" | "recruiting";
export type IssueCategory = "venture" | "hackathon" | "networking";

export interface Issue {
  issueId: string;
  title: string;
  subtitle: string;
  category: IssueCategory;
  editionNumber: number;
  status: IssueStatus;
  startDate: string;
  endDate: string;
  location: string;
  summary: string;
  highlights: string[];
  participantsCount?: number;
  teamsCount?: number;
  partners?: string[];
  applyUrl?: string;
  referenceUrl?: string;
  heroImage?: string;
  galleryImages?: string[];
  attachments?: { label: string; url: string }[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    ogImage?: string;
  };
}

// 데이터는 data/issues.json 에서 관리됩니다.
// 서버 사이드 읽기/쓰기는 lib/data-server.ts 를 사용하세요.

export const STATUS_LABEL: Record<IssueStatus, string> = {
  ongoing: "진행중",
  upcoming: "예정",
  past: "종료",
  recruiting: "모집중",
};

export const CATEGORY_LABEL: Record<IssueCategory, string> = {
  venture: "창업/투자",
  hackathon: "해커톤",
  networking: "네트워킹",
};

export const galleryImages = [
  { src: "/gallery/networking/networking-001.webp", alt: "networking" },
  { src: "/gallery/networking/networking-002.webp", alt: "networking" },
  { src: "/gallery/networking/networking-003.webp", alt: "networking" },
  { src: "/gallery/networking/networking-004.webp", alt: "networking" },
  { src: "/gallery/networking/networking-005.webp", alt: "networking" },
  { src: "/gallery/networking/networking-006.webp", alt: "networking" },
  { src: "/gallery/networking/networking-007.webp", alt: "networking" },
  { src: "/gallery/networking/networking-008.webp", alt: "networking" },
  { src: "/gallery/networking/networking-009.webp", alt: "networking" },
  { src: "/gallery/networking/networking-010.webp", alt: "networking" },
  { src: "/gallery/networking/networking-011.webp", alt: "networking" },
  { src: "/gallery/networking/networking-012.webp", alt: "networking" },
  { src: "/gallery/networking/networking-013.webp", alt: "networking" },
  { src: "/gallery/networking/networking-014.webp", alt: "networking" },
];