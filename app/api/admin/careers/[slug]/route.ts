import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { readPositions, writePositions } from "@/lib/positions-server";
import type { Position } from "@/app/careers/data";

type Props = { params: Promise<{ slug: string }> };

export async function GET(_: NextRequest, { params }: Props) {
  const { slug } = await params;
  const pos = readPositions().find((p) => p.slug === slug);
  if (!pos) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(pos);
}

export async function PUT(request: NextRequest, { params }: Props) {
  const { slug } = await params;
  const body: Position = await request.json();
  const positions = readPositions();
  const idx = positions.findIndex((p) => p.slug === slug);
  if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });

  positions[idx] = body;
  writePositions(positions);
  revalidatePath("/careers");
  revalidatePath(`/careers/${slug}`);

  return NextResponse.json({ ok: true });
}

export async function DELETE(_: NextRequest, { params }: Props) {
  const { slug } = await params;
  const positions = readPositions();
  const filtered = positions.filter((p) => p.slug !== slug);
  if (filtered.length === positions.length)
    return NextResponse.json({ error: "Not found" }, { status: 404 });

  writePositions(filtered);
  revalidatePath("/careers");

  return NextResponse.json({ ok: true });
}
