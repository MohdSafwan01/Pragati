/**
 * PragatiLogo — 100% inline SVG + JSX brand mark.
 *
 * Arrow icon: a northeast-pointing chevron/arrowhead silhouette whose interior
 * is painted in three tricolor diagonal bands via clipPath.  No <img>, no
 * external file, no emblem, no bounding box around the lockup.
 *
 * Layout: [arrow icon] [gap] [प्रगति] [1px divider] [PRAGATI]
 *
 * Fonts:
 *   — PRAGATI / Latin text  → Plus Jakarta Sans (inherited from layout root)
 *   — प्रगति / Devanagari  → Noto Sans Devanagari (loaded here, applied locally)
 */

import { Noto_Sans_Devanagari } from 'next/font/google';

const devanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['700', '800'],
  display: 'swap',
});

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export type PragatiLogoVariant = 'compact' | 'full';

export interface PragatiLogoProps {
  variant?: PragatiLogoVariant;
  className?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Arrow icon — chevron silhouette with tricolor fill bands
// ─────────────────────────────────────────────────────────────────────────────
//
//  The arrow shape (clipPath):
//
//  A northeast-pointing arrowhead built from two pieces:
//   1. Shaft:  a parallelogram band going from lower-left to upper-right
//   2. Head:   a wider triangle flaring toward the upper-right tip
//
//  ViewBox: "0 0 24 22"
//
//  Key coordinates (all hand-traced, round numbers):
//
//    Shaft outline (parallelogram):
//      upper-left  (0, 12)
//      lower-left  (4, 16)
//      lower-right (18, 8)   ← shaft meets arrowhead base
//      upper-right (14, 4)
//
//    Arrowhead triangle (wider than shaft, tip at upper-right):
//      left wing upper  (11, 0)
//      left wing lower  (14, 4)   ← merges with shaft upper-right corner
//      lower wing       (22, 10)  ← merges with shaft lower-right corner (18,8)+flare
//      tip              (24, 4)   ← the actual arrow point
//
//  Combined silhouette (one polygon, clockwise):
//    (0,12) → (4,16) → (22,12) → (24,6) → (12,0) → (8,4)
//
//  The three color bands are diagonal rects that fill the bounding box;
//  clipPath clips them to the arrow silhouette.
//
//  Band orientation (northeast diagonal / 45°):
//    Green  → lower-left region   (band at the tail)
//    White  → middle band
//    Saffron → upper-right region  (band at the head / tip)
//
//  To cut diagonally, the rects are inside a <g transform="rotate(-42 12 11)">
//  so horizontal rects become diagonal within the clipped arrow.
// ─────────────────────────────────────────────────────────────────────────────

function ArrowIcon({ size }: { size: number }) {
  // Unique IDs per rendered instance (static string is fine — one logo per page)
  const clipId = 'pragati-arrow-clip';
  const aspect = 24 / 22; // viewBox width / height
  const w = Math.round(size * aspect);

  return (
    <svg
      width={w}
      height={size}
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/*
          Arrow silhouette:
            (0,14) → lower-left tail start
            (4,18) → lower-left tail end
            (20,12)→ arrowhead lower wing base
            (24,6) → TIP (upper-right)
            (14,0) → arrowhead upper wing
            (10,4) → upper-left tail edge
          This creates a clear pointed northeast arrow with a thick shaft.
        */}
        <clipPath id={clipId}>
          <polygon points="0,14 4,18 20,12 24,6 14,0 10,4" />
        </clipPath>
      </defs>

      {/*
        Diagonal color bands clipped to the arrow silhouette.
        We rotate the band group ~-42° around the arrow center so the
        horizontal rects become diagonal cuts (tricolor stripes top→bottom
        become green-tail → white-mid → saffron-tip along the arrow axis).
      */}
      <g clipPath={`url(#${clipId})`} transform="rotate(-42 12 9)">
        {/* India green — tail band (lower-left of rotated space) */}
        <rect x="-10" y="8"  width="44" height="8" fill="#138808" />
        {/* White/neutral — middle band */}
        <rect x="-10" y="0"  width="44" height="8" fill="#D4D4D4" />
        {/* India saffron — head band (upper-right of rotated space = tip) */}
        <rect x="-10" y="-8" width="44" height="8" fill="#FF9933" />
      </g>

      {/*
        Thin white hairlines between bands so they separate cleanly on
        both light and dark backgrounds.
      */}
      <g clipPath={`url(#${clipId})`} transform="rotate(-42 12 9)">
        <line x1="-10" y1="8"  x2="34" y2="8"  stroke="white" strokeWidth="0.8" opacity="0.7" />
        <line x1="-10" y1="0"  x2="34" y2="0"  stroke="white" strokeWidth="0.8" opacity="0.7" />
      </g>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PragatiLogo
// ─────────────────────────────────────────────────────────────────────────────

export default function PragatiLogo({ variant = 'full', className = '' }: PragatiLogoProps) {
  const compact = variant === 'compact';

  return (
    <span
      className={`inline-flex items-center select-none ${compact ? 'gap-1.5' : 'gap-2.5'} ${className}`}
    >
      {/* Tricolor arrow icon mark */}
      <ArrowIcon size={compact ? 22 : 38} />

      {/* Text lockup — all on one baseline line */}
      <span className={`inline-flex items-center ${compact ? 'gap-1.5' : 'gap-2'}`}>

        {/* Devanagari wordmark — Noto Sans Devanagari */}
        <span
          className={`${devanagari.className} font-bold leading-none text-slate-900 ${
            compact ? 'text-[1rem]' : 'text-[1.75rem]'
          }`}
        >
          प्रगति
        </span>

        {/* 1 px vertical divider — height matches the Devanagari cap-height */}
        <span
          className={`inline-block w-px shrink-0 bg-slate-300/80 ${
            compact ? 'h-[0.9rem]' : 'h-[1.5rem]'
          }`}
        />

        {/* Latin wordmark — Plus Jakarta Sans (inherited) */}
        <span
          className={`font-semibold uppercase tracking-[0.18em] leading-none text-slate-600 ${
            compact ? 'text-[0.575rem]' : 'text-[0.85rem]'
          }`}
        >
          PRAGATI
        </span>
      </span>
    </span>
  );
}
