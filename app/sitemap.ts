import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://montserratfleck.com");

// Hardcoded so lastmod only changes when the page content meaningfully changes,
// not on every build. Bump these dates when you ship a real content update.
const HOME_LAST_MOD = "2026-06-08";
const RESUME_LAST_MOD = "2026-06-08";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: HOME_LAST_MOD,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/resume/`,
      lastModified: RESUME_LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
