import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { TaxonomyGrid } from "@/components/TaxonomyGrid";
import { JsonLd } from "@/components/SiteJsonLd";
import { categories, categoryBySlug, iconsInCategory } from "@/lib/taxonomy";
import { SITE_URL, absoluteUrl } from "@/lib/site";
import { humanizeName } from "@/lib/icon-copy";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const entry = categoryBySlug(category);
  if (!entry) return {};

  const label = humanizeName(entry.label);
  const title = `Animated ${label} icons for React`;
  const description = `${entry.count} animated ${label.toLowerCase()} icons for React, each with a hand-built physical animation. Free, open-source, tree-shakeable components.`;

  return {
    title,
    description,
    alternates: { canonical: `/icons/category/${entry.slug}` },
    openGraph: { title: `${title} — moticon`, description, url: absoluteUrl(`/icons/category/${entry.slug}`), type: "website" },
    twitter: { card: "summary_large_image", title: `${title} — moticon`, description },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const entry = categoryBySlug(category);
  if (!entry) notFound();

  const icons = iconsInCategory(entry.label);
  const label = humanizeName(entry.label);
  const url = absoluteUrl(`/icons/category/${entry.slug}`);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": `${url}#page`,
              url,
              name: `Animated ${label} icons for React`,
              isPartOf: { "@id": `${SITE_URL}/#website` },
              about: `${entry.count} animated ${label.toLowerCase()} React icons`,
              mainEntity: { "@id": `${url}#list` },
            },
            {
              "@type": "ItemList",
              "@id": `${url}#list`,
              numberOfItems: icons.length,
              itemListElement: icons.map((icon, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: absoluteUrl(`/icons/${icon.name}`),
                name: humanizeName(icon.name),
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Icons", item: `${SITE_URL}/icons` },
                { "@type": "ListItem", position: 3, name: entry.label, item: url },
              ],
            },
          ],
        }}
      />
      <main className="mx-auto w-full min-w-0 max-w-6xl px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Icons", href: "/icons" },
            { label: entry.label },
          ]}
        />
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
          {entry.count} icons
        </p>
        <h1 className="mb-4 text-2xl font-medium tracking-tight sm:text-3xl">
          Animated {label} icons for React
        </h1>
        <p className="mb-10 max-w-2xl text-sm leading-7 text-muted">
          Every {label.toLowerCase()} icon in moticon ships a hand-built
          animation matched to what it represents — no generic scale or fade.
          Import a component, drop it in, and it moves on {icons[0]?.trigger ?? "hover"}.
          Browse the {entry.count} icons below or see the{" "}
          <Link href="/icons" className="text-accent hover:underline">
            full set
          </Link>
          .
        </p>
        <TaxonomyGrid icons={icons} />
      </main>
      <Footer />
    </>
  );
}
