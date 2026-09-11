/**
 * Docs navigation model. Each page is a real route under /docs/[slug] with its
 * own metadata and TechArticle JSON-LD; this list drives the sidebar, the
 * /docs index, prev/next links and the sitemap.
 */
export interface DocPage {
  slug: string;
  title: string;
  /** Sidebar label (shorter than the page <title>). */
  nav: string;
  description: string;
}

export const DOC_PAGES: DocPage[] = [
  {
    slug: "installation",
    title: "Install moticon",
    nav: "Installation",
    description:
      "Install @moticon/react with npm, pnpm, yarn or bun, add the motion peer dependency, and render your first animated icon.",
  },
  {
    slug: "react",
    title: "Using moticon in React",
    nav: "React usage",
    description:
      "Import animated icons by name, pass size, color and strokeWidth props, and trigger animations on hover or tap.",
  },
  {
    slug: "nextjs",
    title: "Using moticon in Next.js",
    nav: "Next.js",
    description:
      "Add animated icons to the Next.js App Router: client component boundaries, Server Components, and streaming.",
  },
  {
    slug: "styling",
    title: "Styling animated icons",
    nav: "Styling",
    description:
      "Control size, stroke width and color, inherit currentColor, and style moticon icons with CSS or Tailwind.",
  },
  {
    slug: "server-components",
    title: "Server Components & SSR",
    nav: "Server & SSR",
    description:
      "How moticon icons render on the server, why they need a client boundary, and how to keep pages fast.",
  },
  {
    slug: "tree-shaking",
    title: "Tree-shaking & bundle size",
    nav: "Bundle size",
    description:
      "moticon is fully tree-shakeable: importing one icon bundles one icon. How it works and how to verify it.",
  },
  {
    slug: "typescript",
    title: "TypeScript support",
    nav: "TypeScript",
    description:
      "Every moticon icon shares the typed MoticonIconProps shape. Types, optional props and editor autocomplete.",
  },
  {
    slug: "accessibility",
    title: "Accessible animated icons",
    nav: "Accessibility",
    description:
      "Label interactive controls, hide decorative icons from assistive tech, and rely on built-in prefers-reduced-motion support.",
  },
];

export function docBySlug(slug: string) {
  return DOC_PAGES.find((d) => d.slug === slug);
}

export function docNeighbors(slug: string) {
  const i = DOC_PAGES.findIndex((d) => d.slug === slug);
  return {
    prev: i > 0 ? DOC_PAGES[i - 1] : null,
    next: i >= 0 && i < DOC_PAGES.length - 1 ? DOC_PAGES[i + 1] : null,
  };
}
