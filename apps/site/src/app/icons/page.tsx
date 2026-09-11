import type { Metadata } from "next";
import { IconsBrowser } from "@/components/IconsBrowser";
import { absoluteUrl } from "@/lib/site";

const title = "Browse all animated React icons";
const description =
  "Search and filter the moticon set by name, category, animation mechanic and trigger. Every icon ships a hand-built physical animation for React.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/icons" },
  openGraph: {
    title: `${title} — moticon`,
    description,
    url: absoluteUrl("/icons"),
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `${title} — moticon`, description },
};

export default function IconsPage() {
  return <IconsBrowser />;
}
