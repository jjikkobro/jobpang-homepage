import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { readIssues, writeIssues } from "@/lib/data-server";
import type { Issue } from "@/lib/data";

type Props = { params: Promise<{ id: string }> };

export async function GET(_: NextRequest, { params }: Props) {
  const { id } = await params;
  const issue = readIssues().find((i) => i.issueId === id);
  if (!issue) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(issue);
}

export async function PUT(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const body: Issue = await request.json();
  const issues = readIssues();
  const idx = issues.findIndex((i) => i.issueId === id);
  if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });

  issues[idx] = body;
  writeIssues(issues);
  revalidatePath("/archive");
  revalidatePath(`/archive/${id}`);
  revalidatePath("/hackathon");
  revalidatePath("/venture");
  revalidatePath("/networking");
  revalidatePath("/");

  return NextResponse.json({ ok: true });
}

export async function DELETE(_: NextRequest, { params }: Props) {
  const { id } = await params;
  const issues = readIssues();
  const filtered = issues.filter((i) => i.issueId !== id);
  if (filtered.length === issues.length)
    return NextResponse.json({ error: "Not found" }, { status: 404 });

  writeIssues(filtered);
  revalidatePath("/archive");
  revalidatePath("/hackathon");
  revalidatePath("/venture");
  revalidatePath("/");

  return NextResponse.json({ ok: true });
}
