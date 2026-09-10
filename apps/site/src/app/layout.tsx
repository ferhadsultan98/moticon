import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/Header";
import { SearchCommandLazy } from "@/components/SearchCommandLazy";
import { fetchStars } from "@/lib/github/stars";
import { SITE_URL, SITE_DESCRIPTION, absoluteUrl } from "@/lib/site";
import { SiteJsonLd } from "@/components/SiteJsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "moticon — animated icons that move with intent",
    template: "%s — moticon",
  },
  description: SITE_DESCRIPTION,
  applicationName: "moticon",
  keywords: [
    "animated react icons",
    "animated svg icons",
    "react icon library",
    "motion react icons",
    "framer motion icons",
    "micro-interactions",
    "animated icons",
    "react icons",
    "svg animation",
    "typescript icons",
  ],
  authors: [{ name: "Farhad Sultanov", url: "https://www.linkedin.com/in/farhadsultan/" }],
  creator: "Farhad Sultanov",
  alternates: { canonical: "/" },
  openGraph: {
    title: "moticon — animated icons that move with intent",
    description:
      "Open-source React icons with hand-built physical animations.",
    url: absoluteUrl("/"),
    siteName: "moticon",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "moticon — animated icons that move with intent",
    description:
      "Open-source React icons with hand-built physical animations.",
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const stars = await fetchStars();
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("moticon-theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.dataset.theme=t}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteJsonLd />
        <Header stars={stars} />
        <SearchCommandLazy />
        <div
          aria-hidden="true"
          className="moticon-watermark"
        >
          moticon
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
