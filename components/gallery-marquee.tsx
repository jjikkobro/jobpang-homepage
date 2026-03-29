"use client";

import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryMarqueeProps {
  images: GalleryImage[];
  /** 이미지 높이(px), 기본 220 */
  height?: number;
  /** 가로:세로 비율, 기본 4/3 */
  aspectRatio?: number;
  /** 애니메이션 총 시간, 기본 "40s" */
  duration?: string;
  /** true면 오른쪽으로 이동 */
  reverse?: boolean;
}

/**
 * CSS-only 무한 마퀴 갤러리
 *
 * 최적화:
 * - Next.js <Image> → PNG 자동 WebP/AVIF 변환 (50~80% 용량 절감)
 * - 뷰포트 밖 이미지 lazy load (기본)
 * - 첫 4장만 eager → 초기 레이아웃 안정화
 * - will-change: transform → GPU 합성 레이어
 * - 호버 시 일시정지 (접근성)
 */
export function GalleryMarquee({
  images,
  height = 220,
  aspectRatio = 4 / 3,
  duration = "40s",
  reverse = false,
}: GalleryMarqueeProps) {
  if (!images.length) return null;

  // 이미지 수가 적으면 복사해서 끊김 없이 순환
  const track =
    images.length < 8
      ? [...images, ...images, ...images]
      : [...images, ...images];

  const imgWidth = Math.round(height * aspectRatio);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        className="flex w-max gap-3"
        style={{
          animationName: "marquee",
          animationDuration: duration,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDirection: reverse ? "reverse" : "normal",
          willChange: "transform",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.animationPlayState = "running")
        }
      >
        {track.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="relative shrink-0 overflow-hidden rounded-xl"
            style={{ width: imgWidth, height }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes={`${imgWidth}px`}
              className="object-cover"
              loading={i < 4 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
