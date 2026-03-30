import "server-only";
import fs from "fs";
import path from "path";
import type { Position } from "@/app/careers/data";

const POSITIONS_PATH = path.join(process.cwd(), "data", "positions.json");

export function readPositions(): Position[] {
  const raw = fs.readFileSync(POSITIONS_PATH, "utf-8");
  return JSON.parse(raw) as Position[];
}

export function writePositions(positions: Position[]): void {
  fs.writeFileSync(
    POSITIONS_PATH,
    JSON.stringify(positions, null, 2),
    "utf-8"
  );
}

export function getPositionBySlug(slug: string): Position | undefined {
  return readPositions().find((p) => p.slug === slug);
}

export function getActivePositions(): Position[] {
  return readPositions().filter((p) => p.active !== false);
}
