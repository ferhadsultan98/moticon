import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @moticon/react's entry is a 343-icon barrel. Let Next rewrite
  // `import { Bell } from "@moticon/react"` to the deep path so a page that
  // uses two icons doesn't pull the whole set. `@/lib/icons` still does a
  // namespace import for the browser grid — that page genuinely needs all of
  // them — but detail pages, the header and the footer now stay lean.
  experimental: {
    optimizePackageImports: ["@moticon/react"],
  },

  async headers() {
    return [
      {
        // The shadcn registry files under /r/*.json are machine endpoints for
        // `npx shadcn add`, not landing pages. This header is the load-bearing
        // signal that keeps them out of search results — robots.txt does NOT
        // disallow the path, so a crawler can fetch the URL and read this.
        source: "/r/:path*.json",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
};

export default nextConfig;
