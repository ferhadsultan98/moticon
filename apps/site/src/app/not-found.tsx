import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";

// Next.js already emits `<meta name="robots" content="noindex">` for not-found
// responses, so we only need to fix the title and drop the inherited
// `canonical: "/"` from the root layout (a 404 has no canonical).
export const metadata: Metadata = {
  title: "Page not found",
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <>
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-6 py-32 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">404</p>
        <h1 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
          This page doesn&rsquo;t exist
        </h1>
        <p className="mt-3 text-sm leading-7 text-muted">
          The icon or page you were looking for isn&rsquo;t here. It may have been
          renamed, or the name is misspelled.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
          <Link
            href="/icons"
            className="rounded-lg border border-border px-4 py-2 text-foreground transition-colors hover:border-border-strong"
          >
            Browse all icons
          </Link>
          <Link
            href="/"
            className="rounded-lg border border-border px-4 py-2 text-muted transition-colors hover:border-border-strong hover:text-foreground"
          >
            Go home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
