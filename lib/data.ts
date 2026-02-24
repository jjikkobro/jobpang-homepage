export type IssueStatus = "past" | "ongoing" | "upcoming";
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

export const issues: Issue[] = [
  {
    issueId: "venture-001",
    title: "제 1회 창업 스타트업 투자 경진대회",
    subtitle: "사업 진단부터 투자 상담, 네트워킹까지 한 번에",
    category: "venture",
    editionNumber: 1,
    status: "past",
    startDate: "2025-10-02",
    endDate: "2025-10-15",
    location: "구글 스타트업 캠퍼스(서울)",
    summary:
      "초기~시리즈A 단계의 스타트업/예비창업팀을 대상으로 IR 피칭과 투자자 관점 교육, 네트워킹을 제공하는 프로그램.",
    highlights: ["투자자 오픈토크", "비대면 IR 피칭", "최종 발표 및 협약"],
    referenceUrl: "https://irconcert-jobprize.netlify.app/",
    applyUrl: "",
    heroImage: "",
    galleryImages: [],
    attachments: [],
    seo: {
      metaTitle: "제 1회 창업 스타트업 투자 경진대회 | 취팡",
      metaDescription:
        "사업 진단부터 IR 피칭, 투자 상담, 네트워킹까지 연결하는 창업·투자 프로그램.",
    },
  },
  {
    issueId: "hackathon-001",
    title: "제 1회 취팡 해커톤",
    subtitle: "실제 서비스를 사용하고, 문제를 정의하고, 개선안을 제안하는 실전형 해커톤",
    category: "hackathon",
    editionNumber: 1,
    status: "ongoing",
    startDate: "2026-02-23",
    endDate: "2026-03-22",
    location: "온·오프라인 병행",
    summary:
      "PM/서비스기획/프로덕트 관심자를 대상으로, 실제 서비스의 문제를 발굴하고 개선안을 제안하는 실전형 해커톤.",
    highlights: [
      "실제 서비스 기반 문제 정의",
      "서비스 개선안 기획·발표",
      "실전 포트폴리오 완성",
    ],
    referenceUrl: "https://www.blaybus.com/activities/679/landing",
    applyUrl: "",
    heroImage: "",
    galleryImages: [],
    attachments: [],
    seo: {
      metaTitle: "제 1회 취팡 해커톤 | 취팡",
      metaDescription:
        "실제 서비스 문제를 정의하고 개선안을 제안하는 PM/서비스기획 실전형 해커톤.",
    },
  },
];

export function getIssuesByCategory(category: IssueCategory): Issue[] {
  return issues.filter((i) => i.category === category);
}

export function getIssueBySlug(slug: string): Issue | undefined {
  return issues.find((i) => i.issueId === slug);
}

export function getRecentIssues(limit = 3): Issue[] {
  return [...issues]
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
    .slice(0, limit);
}

export const STATUS_LABEL: Record<IssueStatus, string> = {
  ongoing: "진행중",
  upcoming: "예정",
  past: "종료",
};

export const CATEGORY_LABEL: Record<IssueCategory, string> = {
  venture: "창업/투자",
  hackathon: "해커톤",
  networking: "네트워킹",
};
