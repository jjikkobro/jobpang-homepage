import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { readIssues, writeIssues } from "@/lib/data-server";
import type { Issue } from "@/lib/data";

export async function GET() {
  const issues = readIssues();
  return NextResponse.json(issues);
}

export async function POST(request: NextRequest) {
  const body: Issue = await request.json();
  const issues = readIssues();

  if (issues.find((i) => i.issueId === body.issueId)) {
    return NextResponse.json({ error: "이미 존재하는 ID입니다." }, { status: 400 });
  }

  writeIssues([...issues, body]);
  revalidatePath("/archive");
  revalidatePath("/hackathon");
  revalidatePath("/venture");
  revalidatePath("/networking");
  revalidatePath("/");

  return NextResponse.json({ ok: true });
}
