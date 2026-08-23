import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { SearchCommand } from "@/components/SearchCommand";
import { fetchStars } from "@/lib/github/stars";
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: "moticon — animated icons that move with intent",
    template: "%s — moticon",
  },
  description:
    "328 open-source icons, each with a hand-built physical animation. No generic scale/rotate pulses — real mechanics: swing, drip, unfurl, snap.",
  openGraph: {
    title: "moticon — animated icons that move with intent",
    description:
      "328 open-source React icons with hand-built physical animations.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "moticon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "moticon — animated icons that move with intent",
    description:
      "328 open-source React icons with hand-built physical animations.",
    images: ["/og.png"],
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
        <Header stars={stars} />
        <SearchCommand />
        <div
          aria-hidden="true"
          className="moticon-watermark"
        >
          moticon
        </div>
        {children}
      </body>
    </html>
  );
}
