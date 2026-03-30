import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { readPositions, writePositions } from "@/lib/positions-server";
import type { Position } from "@/app/careers/data";

export async function GET() {
  return NextResponse.json(readPositions());
}

export async function POST(request: NextRequest) {
  const body: Position = await request.json();
  const positions = readPositions();

  if (positions.find((p) => p.slug === body.slug)) {
    return NextResponse.json({ error: "이미 존재하는 slug입니다." }, { status: 400 });
  }

  writePositions([...positions, { ...body, active: body.active ?? true }]);
  revalidatePath("/careers");

  return NextResponse.json({ ok: true });
}
