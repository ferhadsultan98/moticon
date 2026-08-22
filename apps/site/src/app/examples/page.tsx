import type { Metadata } from "next";
import Link from "next/link";
import { ExampleGallery } from "@/components/ExampleGallery";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Examples",
  description: "Practical interface patterns built with moticon animated icons.",
};

export default function ExamplesPage() {
  return (
    <>
      <main className="mx-auto w-full max-w-6xl px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Examples" }]}
        />
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
            interface patterns
          </p>
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Motion belongs in the interface.
          </h1>
          <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
            Practical patterns for actions, status, navigation and feedback.
            Hover or tap the icons to see how motion supports meaning.
          </p>
        </div>

        <ExampleGallery />

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/playground"
            className="rounded-md bg-accent px-4 py-2.5 font-mono text-xs font-medium text-[#07130d]"
          >
            Build your own →
          </Link>
          <Link
            href="/docs"
            className="rounded-md border border-border bg-surface px-4 py-2.5 font-mono text-xs text-muted hover:text-foreground"
          >
            Read the docs
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
