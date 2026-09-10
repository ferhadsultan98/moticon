import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { DocsShell } from "@/components/DocsShell";
import { CodeBlock } from "@/components/CodeBlock";
import { JsonLd } from "@/components/SiteJsonLd";
import { DOC_PAGES } from "@/lib/docs";
import { SITE_URL, absoluteUrl } from "@/lib/site";

const title = "Documentation";
const description =
  "Install @moticon/react and use animated icons in React and Next.js: props, styling, SSR, tree-shaking, TypeScript and accessibility.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/docs" },
  openGraph: { title: `${title} — moticon`, description, url: absoluteUrl("/docs"), type: "website" },
  twitter: { card: "summary_large_image", title: `${title} — moticon`, description },
};

const quickstart = `npm install @moticon/react motion`;
const firstIcon = `import { Bell } from "@moticon/react";

export function Notification() {
  return <Bell size={24} />;
}`;

export default function DocsIndexPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${SITE_URL}/docs#page`,
          url: `${SITE_URL}/docs`,
          name: "moticon documentation",
          description,
          isPartOf: { "@id": `${SITE_URL}/#website` },
          hasPart: DOC_PAGES.map((d) => ({
            "@type": "TechArticle",
            url: absoluteUrl(`/docs/${d.slug}`),
            name: d.title,
            abstract: d.description,
          })),
        }}
      />
      <DocsShell>
        <h1>Documentation</h1>
        <p className="lead">
          moticon is a set of animated React icons. Every icon ships a
          hand-built animation modeled on the physical action it depicts — no
          generic scale or fade. This section covers installation and every
          integration detail.
        </p>

        <h2>Quick start</h2>
        <p>Install the package and its one peer dependency:</p>
        <CodeBlock code={quickstart} lang="bash" />
        <p>Import any icon by name and render it:</p>
        <CodeBlock code={firstIcon} />
        <p>
          The animation triggers automatically on hover or tap. That&rsquo;s the
          whole setup — no provider, no config, no CSS import.
        </p>

        <h2>Guides</h2>
        <ul>
          {DOC_PAGES.map((page) => (
            <li key={page.slug}>
              <Link href={`/docs/${page.slug}`}>{page.title}</Link> — {page.description}
            </li>
          ))}
        </ul>

        <h2>Related</h2>
        <ul>
          <li>
            <Link href="/icons">Browse all icons</Link>
          </li>
          <li>
            <Link href="/playground">Playground — configure and copy any icon</Link>
          </li>
          <li>
            <Link href="/examples">Examples — animated icons in real UI patterns</Link>
          </li>
        </ul>
      </DocsShell>
      <Footer />
    </>
  );
}
