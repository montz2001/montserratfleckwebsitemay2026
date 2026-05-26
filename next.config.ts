import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — output goes to `out/`, served by nginx in production.
  // No Node.js runtime needed on the server.
  output: "export",
  // nginx redirects /resume -> /resume/, so emit /resume/index.html
  // rather than /resume.html.
  trailingSlash: true,
  images: {
    // next/image optimization requires a server; use unoptimized for static export.
    unoptimized: true,
    // Allow next/image to optimize local assets with the cache-bust ?v= query string.
    // Omitting `search` permits any query value — fine here since these are first-party paths.
    localPatterns: [
      { pathname: "/pfps/**" },
      { pathname: "/webphotos/**" },
      { pathname: "/brands/**" },
      { pathname: "/voice/**" },
    ],
  },
};

export default nextConfig;
