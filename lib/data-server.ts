import "server-only";
import fs from "fs";
import path from "path";
import type { Issue, IssueCategory } from "./data";

const ISSUES_PATH = path.join(process.cwd(), "data", "issues.json");

export function readIssues(): Issue[] {
  const raw = fs.readFileSync(ISSUES_PATH, "utf-8");
  return JSON.parse(raw) as Issue[];
}

export function writeIssues(issues: Issue[]): void {
  fs.writeFileSync(ISSUES_PATH, JSON.stringify(issues, null, 2), "utf-8");
}

export function getIssuesByCategory(category: IssueCategory): Issue[] {
  return readIssues().filter((i) => i.category === category);
}

export function getIssueBySlug(slug: string): Issue | undefined {
  return readIssues().find((i) => i.issueId === slug);
}

export function getRecentIssues(limit = 3): Issue[] {
  return [...readIssues()]
    .sort(
      (a, b) =>
        new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    )
    .slice(0, limit);
}
