import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          // NOTE: /r/*.json is deliberately NOT disallowed here. Those files
          // carry `X-Robots-Tag: noindex` (next.config.ts), and a crawler must
          // be allowed to fetch the URL to see that header. They are kept out
          // of the sitemap and the internal link graph instead.
          //
          // Faceted filter state would create near-duplicate URLs if it ever
          // moved into query params. Pre-empt it.
          "/icons?",
          "/*?category=",
          "/*?mechanic=",
          "/*?trigger=",
          "/*?sort=",
          "/*?query=",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
