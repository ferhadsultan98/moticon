import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { TaxonomyGrid } from "@/components/TaxonomyGrid";
import { JsonLd } from "@/components/SiteJsonLd";
import { mechanics, mechanicBySlug, iconsWithMechanic } from "@/lib/taxonomy";
import { SITE_URL, absoluteUrl } from "@/lib/site";
import { humanizeName } from "@/lib/icon-copy";

export const dynamicParams = false;

/**
 * Only mechanics shared by 2+ icons get their own page — a mechanic used by a
 * single icon would be a near-duplicate of that icon's page (thin content /
 * cannibalization). Those still appear on the icon page itself.
 */
export function generateStaticParams() {
  return mechanics.filter((m) => m.count >= 2).map((m) => ({ mechanic: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ mechanic: string }>;
}): Promise<Metadata> {
  const { mechanic } = await params;
  const entry = mechanicBySlug(mechanic);
  if (!entry || entry.count < 2) return {};

  const label = entry.label;
  const title = `${label[0].toUpperCase()}${label.slice(1)} animated React icons`;
  const description = `${entry.count} React icons with a ${label} animation — physical motion, not a generic tween. Free, open-source, tree-shakeable components.`;

  return {
    title,
    description,
    alternates: { canonical: `/icons/motion/${entry.slug}` },
    openGraph: { title: `${title} — moticon`, description, url: absoluteUrl(`/icons/motion/${entry.slug}`), type: "website" },
    twitter: { card: "summary_large_image", title: `${title} — moticon`, description },
  };
}

export default async function MechanicPage({
  params,
}: {
  params: Promise<{ mechanic: string }>;
}) {
  const { mechanic } = await params;
  const entry = mechanicBySlug(mechanic);
  if (!entry || entry.count < 2) notFound();

  const icons = iconsWithMechanic(entry.label);
  const label = entry.label;
  const Label = `${label[0].toUpperCase()}${label.slice(1)}`;
  const url = absoluteUrl(`/icons/motion/${entry.slug}`);

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
              name: `${Label} animated React icons`,
              isPartOf: { "@id": `${SITE_URL}/#website` },
              about: `${entry.count} React icons animated with a ${label} motion`,
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
                { "@type": "ListItem", position: 3, name: `${label} motion`, item: url },
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
            { label: `${label} motion` },
          ]}
        />
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
          {entry.count} icons · {label}
        </p>
        <h1 className="mb-4 text-2xl font-medium tracking-tight sm:text-3xl">
          {Label} animated React icons
        </h1>
        <p className="mb-10 max-w-2xl text-sm leading-7 text-muted">
          These {entry.count} moticon icons share a <strong>{label}</strong>{" "}
          animation — the movement is modeled on the physical action the icon
          depicts rather than a uniform scale or rotate. Each links to its own
          component and code. See every mechanic on the{" "}
          <Link href="/icons" className="text-accent hover:underline">
            icons page
          </Link>
          .
        </p>
        <TaxonomyGrid icons={icons} />
      </main>
      <Footer />
    </>
  );
}
