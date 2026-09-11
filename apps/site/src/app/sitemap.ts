import type { MetadataRoute } from "next";
import { iconMeta } from "@/lib/icons";
import { SITE_URL } from "@/lib/site";
import { categories, mechanics } from "@/lib/taxonomy";
import { DOC_PAGES } from "@/lib/docs";

/**
 * The site is fully static and generated from icon metadata — there is no CMS
 * and no per-page edit timestamp. Rather than stamp every URL with the build
 * time (which tells crawlers "everything changed" on every deploy, and is
 * simply not true), `lastModified` is omitted. `changeFrequency` / `priority`
 * are advisory hints only and Google largely ignores them, but they cost
 * nothing and describe the real update cadence.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/icons`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/docs`, changeFrequency: "monthly", priority: 0.8 },
    ...DOC_PAGES.map((d) => ({
      url: `${SITE_URL}/docs/${d.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    { url: `${SITE_URL}/examples`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/playground`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/changelog`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${SITE_URL}/icons/category/${c.slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Only mechanics shared by 2+ icons get an indexable page (matches the
  // page's own generateStaticParams filter).
  const mechanicPages: MetadataRoute.Sitemap = mechanics
    .filter((m) => m.count >= 2)
    .map((m) => ({
      url: `${SITE_URL}/icons/motion/${m.slug}`,
      changeFrequency: "weekly",
      priority: 0.7,
    }));

  const iconPages: MetadataRoute.Sitemap = iconMeta.map((icon) => ({
    url: `${SITE_URL}/icons/${icon.name}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages, ...mechanicPages, ...iconPages];
}
