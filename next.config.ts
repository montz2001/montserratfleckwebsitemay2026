import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
