# AnimateIcons repo analizi və moticon üçün nəticələr

Mənbə: [github.com/Avijit07x/animateicons](https://github.com/Avijit07x/animateicons) (542 icon, 1.1k star, MIT, aktiv inkişafda)

## 1. Repo statistikası (fakt)

| Metrika | Dəyər |
|---|---|
| Stars | 1,087 |
| Forks | 56 |
| Open issues | 0 |
| Yaradılıb | 2025-07-29 |
| Son commit | 2026-08-22 (aktiv) |
| Release tag-lar | 8 (v0.3.2 → v0.4.3) |
| Repo ölçüsü | ~27 MB |
| Discussions | aktivdir |
| Topics | animated-icons, animation, framer-motion, icons, lucide-icons, lucide-react, motion, nextjs, svgicon |

## 2. Repo qovluq strukturu (monorepo, pnpm workspace)

```
animateicons/
├── .changeset/          — versiyalama/release qeydləri (Changesets aləti)
├── .githooks/           — git hook-lar (lint/format məcburiyyəti)
├── .github/             — CI workflow-ları, issue şablonları
├── actions/             — GitHub Actions custom action-ları
├── app/                 — sayt (Next.js)
├── cli/                 — `npx animateicons add` CLI aləti
├── components/          — saytın UI komponentləri
├── core/                — paylaşılan catalog/search məntiqi (CLI + MCP + sayt üçün ortaq)
├── data/                — icon registry data
├── eslint-rules/        — özəl ESLint qaydası (icon-structure lint)
├── hooks/               — useIconFilter, useIconAnimation (paylaşılan React hook-lar)
├── icons/
│   ├── lucide/          — 511 fayl (Lucide əsaslı)
│   └── huge/             — 33 fayl (Huge Icons əsaslı)
├── lib/                 — util funksiyalar
├── mcp/                 — @animateicons/mcp — AI agentlər üçün MCP server
├── npm/                 — @animateicons/react — əsl publish edilən npm paketi
│   ├── src/lib/
│   ├── __tests__/       — node:test ilə codegen + smoke testləri
│   ├── scripts/         — generate-exports, normalize-icon-names, check-icon-naming
│   ├── CHANGELOG.md
│   ├── NAMING_REPORT.md — adlandırma keyfiyyət hesabatı
│   └── package.json
├── public/
├── scripts/             — registry + catalog codegen, kod dəyişiklikləri (codemods)
├── tests/               — Vitest, React Testing Library (sayt üçün)
├── types/
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── registry.json        — mərkəzi icon registry
├── vitest.config.ts
└── ...config faylları
```

## 3. Icon komponentinin öz strukturu (BellIcon nümunəsi)

```tsx
"use client";
import { cn } from "@/lib/utils";
import type { Variants } from "motion/react";
import { LazyMotion, domMin, m, useAnimation, useReducedMotion } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface BellIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface BellIconProps extends Omit<HTMLAttributes<HTMLDivElement>, "color" | ...> {
  size?: number;
  duration?: number;
  isAnimated?: boolean;
  color?: string;
}

const BellIcon = forwardRef<BellIconHandle, BellIconProps>((props, ref) => {
  const controls = useAnimation();
  const reduced = useReducedMotion();          // faktiki OS reduced-motion yoxlanışı
  const isControlled = useRef(false);

  useImperativeHandle(ref, () => {              // proqramla animasiyanı idarə etmək
    isControlled.current = true;
    return {
      startAnimation: () => reduced ? controls.start("normal") : controls.start("animate"),
      stopAnimation: () => controls.start("normal"),
    };
  });

  // hover handler-lər `isControlled` yoxlayır — ref verilibsə, hover-i deaktiv edir
  // variants "times" massivi ilə dəqiq keyframe faizləri təyin edir
  // LazyMotion + domMin ilə bundle ölçüsü minimuma endirilir
});
```

## 4. Onlarda olan, bizdə (moticon) olmayan xüsusiyyətlər

| Xüsusiyyət | Nədir | Bizdə vəziyyət |
|---|---|---|
| `useImperativeHandle` + ref | `ref.current.startAnimation()` / `stopAnimation()` ilə animasiyanı koddan tetiklə | **yoxdur** — yalnız hover/tap |
| `isAnimated` prop | animasiyanı tam söndürmək | **yoxdur** |
| `duration` prop | animasiya sürətini vaxtında tənzimləmək | **yoxdur** — sabit sürətlər |
| `useReducedMotion()` real istifadə | OS-in "reduce motion" seçimini faktiki yoxlayır və animasiyanı ləğv edir | **yoxdur** — README-də iddia var idi, kodda yox idi (uyğunsuzluq, düzəldilməli) |
| `LazyMotion` + `domMin` | bundle ölçüsünü kəskin azaldır (yalnız lazımi motion feature-ları yüklənir) | **yoxdur** — tam `motion` import olunur |
| `forwardRef` | DOM node-a xarici çıxış | **yoxdur** |
| `times` array-i keyframe-lərdə | animasiyanın hər mərhələsinin faiz vaxtını dəqiq təyin etmək | qismən — bəzi icon-larda yoxdur |
| CLI (`npx animateicons add bell`) | shadcn-tərzi tək-tək icon əlavə etmə | **yoxdur** |
| MCP server | AI agentlərin icon kataloqunu sorğulaması | **yoxdur** |
| Ayrı `dist/lucide.js`, `dist/huge.js` bundle-ları | mənbəyə görə ayrı idxal yolu, daha yaxşı tree-shaking | **yoxdur** — tək bundle |
| `size-limit` CI yoxlaması | bundle ölçüsü limitini aşanda build uğursuz olur | **yoxdur** |
| Testlər (`node:test`, Vitest) | codegen + smoke + sayt testləri | **heç bir test yoxdur** |
| `.changeset/` versiyalama | strukturlaşdırılmış CHANGELOG + versiya idarəsi | **yoxdur** — əl ilə versiya |
| `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md` | icmaya açıqlıq siqnalı | **yoxdur** |
| `NAMING_REPORT.md` | adlandırma keyfiyyətinin avtomatik hesabatı | **yoxdur** |
| Node versiya tələbi (`engines`) | uyğunsuz Node ilə quraşdırmanın qarşısı | **yoxdur** |
| GitHub Sponsors düyməsi | maliyyələşmə kanalı | **yoxdur** |

## 5. Bizdə olan, onlarda (görünən formada) olmayan xüsusiyyətlər

| Xüsusiyyət | Təsvir |
|---|---|
| Hər icon-un öz ayrıca `.json` metadata faylı | Lucide-in əsl upstream formatına uyğun (`$schema`, `contributors`, `tags`, `categories`, `aliases`, `deprecated`) — onlarda tək mərkəzi `registry.json` var, bizdə fayl-fayl |
| `motion` spesifikası hər icon metadata-sında | `trigger`, `mechanic`, `duration`, `ease`, `stiffness` — animasiyanın "nəyə görə" belə olduğunu sənədləşdirir |
| Bütün animasiyalar əl ilə fiziki məntiqə görə yazılıb | generic scale/rotate/opacity pulse-lar təkrar-təkrar rədd edilib, hər icon üçün "əşya necə hərəkət edir" sualına uyğun unikal mexanika axtarılıb |

## 6. Prioritetli düzəliş siyahısı (əhəmiyyətinə görə)

1. **`useReducedMotion` real tətbiqi** — README-də "prefers-reduced-motion aware" yazılıb, kodda yoxdur. Bu, yalan sənəd sayılır, ən təcili düzəliş.
2. **`isAnimated` və `duration` prop-ları** — minimal əməklə böyük çeviklik qazandırır.
3. **`useImperativeHandle` + ref API** — proqramla tetiklənən animasiya, ciddi kitabxanaların standart gözləntisi.
4. **Testlər** (heç olmasa smoke test: hər icon render olunur, JSX xətası vermir).
5. **`LazyMotion` + `domMin`** — bundle ölçüsünü ciddi azaldar (hazırda 496 KB ESM, çox ağırdır).
6. **CLI** (uzun müddətli, `npx moticon add bell` formatında) — icmanın ən çox sevdiyi feature, amma böyük iş.
7. **`.changeset` və ya sadə əl ilə CHANGELOG.md** — versiya tarixçəsi şəffaflığı.
8. **CONTRIBUTING.md** — açıq mənbə statusuna keçmək niyyəti varsa lazımdır.
