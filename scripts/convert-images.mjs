/**
 * convert-images.mjs
 *
 * 사용법:
 *   node scripts/convert-images.mjs <입력폴더> [옵션]
 *
 * 예시:
 *   node scripts/convert-images.mjs ~/Downloads/venture-photos
 *   node scripts/convert-images.mjs ~/Downloads/hack --prefix hackathon --quality 90
 *   node scripts/convert-images.mjs ~/Downloads/hack --out public/gallery/hackathon
 *
 * 옵션:
 *   --prefix   출력 파일명 접두사 (기본값: 입력폴더 basename)
 *   --quality  WebP 품질 1~100 (기본값: 85)
 *   --out      출력 폴더 (기본값: public/gallery/<prefix>)
 *   --keep     원본 파일 유지 (기본값: 원본 보존)
 */

import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import { resolve, basename, extname, join } from "path";
import { existsSync } from "fs";

// ── 인자 파싱 ──────────────────────────────────────────────────────────────
const args = process.argv.slice(2);

if (!args.length || args[0].startsWith("--")) {
  console.error("사용법: node scripts/convert-images.mjs <입력폴더> [옵션]");
  process.exit(1);
}

const inputDir = resolve(args[0]);

function getArg(flag, defaultVal) {
  const idx = args.indexOf(flag);
  return idx !== -1 && args[idx + 1] ? args[idx + 1] : defaultVal;
}

const prefix  = getArg("--prefix",  basename(inputDir));
const quality = parseInt(getArg("--quality", "85"), 10);

// 기본 출력 폴더: 프로젝트 루트의 public/gallery/<prefix>
const projectRoot = resolve(import.meta.dirname, "..");
const outDir = resolve(getArg("--out", join(projectRoot, "public", "gallery", prefix)));

// ── 지원 확장자 ────────────────────────────────────────────────────────────
const SUPPORTED = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp", ".tiff", ".tif"]);

// ── 메인 ──────────────────────────────────────────────────────────────────
if (!existsSync(inputDir)) {
  console.error(`❌  입력 폴더를 찾을 수 없습니다: ${inputDir}`);
  process.exit(1);
}

const allFiles = await readdir(inputDir);
const images = allFiles
  .filter((f) => SUPPORTED.has(extname(f).toLowerCase()))
  .sort(); // 파일명 기준 오름차순 정렬

if (!images.length) {
  console.error(`❌  이미지 파일이 없습니다 (지원 형식: ${[...SUPPORTED].join(", ")})`);
  process.exit(1);
}

await mkdir(outDir, { recursive: true });

console.log(`\n📂  입력 폴더  : ${inputDir}`);
console.log(`📂  출력 폴더  : ${outDir}`);
console.log(`🏷   접두사    : ${prefix}`);
console.log(`🎨  품질       : ${quality}`);
console.log(`🖼   이미지 수  : ${images.length}장\n`);

let success = 0;
let fail = 0;
const results = [];

for (let i = 0; i < images.length; i++) {
  const seq = String(i + 1).padStart(3, "0");   // 001, 002, ...
  const outName = `${prefix}-${seq}.webp`;
  const inPath  = join(inputDir, images[i]);
  const outPath = join(outDir, outName);

  try {
    const meta = await sharp(inPath)
      .webp({ quality })
      .toFile(outPath);

    const inSize  = (await import("fs")).statSync(inPath).size;
    const outSize = meta.size;
    const saved   = Math.round((1 - outSize / inSize) * 100);

    console.log(
      `  ✅  ${images[i].padEnd(35)} →  ${outName}  (${fmt(inSize)} → ${fmt(outSize)}, -${saved}%)`
    );
    results.push({ outName, outPath });
    success++;
  } catch (err) {
    console.error(`  ❌  ${images[i]} : ${err.message}`);
    fail++;
  }
}

// ── 요약 ──────────────────────────────────────────────────────────────────
console.log(`\n✨  완료 — 성공 ${success}장 / 실패 ${fail}장`);
console.log(`\n📋  lib/data.ts에 붙여넣을 galleryImages 배열:\n`);

const relBase = outDir.startsWith(join(projectRoot, "public"))
  ? outDir.replace(join(projectRoot, "public"), "")
  : outDir;

const arrayCode = [
  `const galleryImages = [`,
  ...results.map(
    (r) => `  { src: "${join(relBase, r.outName).replace(/\\/g, "/")}", alt: "${prefix}" },`
  ),
  `];`,
].join("\n");

console.log(arrayCode);
console.log();

// ── 유틸 ──────────────────────────────────────────────────────────────────
function fmt(bytes) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)}MB`;
}
