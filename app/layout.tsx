import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// Override with NEXT_PUBLIC_SITE_URL on deploy (e.g. https://montserratfleck.com).
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://montserratfleck.com");

const TITLE = "Montserrat Fleck — Social Media Coordinator";
const DESCRIPTION =
  "Social Coordinator at Paramount running brand voice, live event copy, and the Threads playbook across the franchise roster. 200M+ views on the Marshals launch, +218K @garfield followers in 90 days, paid partnerships live at the 68th GRAMMYs. NYC, brand-side preferred.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Montserrat Fleck",
  },
  description: DESCRIPTION,
  applicationName: "Montserrat Fleck",
  authors: [{ name: "Montserrat Fleck", url: SITE_URL }],
  creator: "Montserrat Fleck",
  publisher: "Montserrat Fleck",
  keywords: [
    "Montserrat Fleck",
    "Monti Fleck",
    "social media coordinator",
    "social media manager",
    "Paramount",
    "Nickelodeon",
    "CBS",
    "SpongeBob",
    "Garfield",
    "Star Trek",
    "TMNT",
    "Threads",
    "brand voice",
    "Gen Z marketing",
    "social strategy",
    "New York",
  ],
  category: "Portfolio",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: "Montserrat Fleck",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    firstName: "Montserrat",
    lastName: "Fleck",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@montserratfleck",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1e8d8" },
    { media: "(prefers-color-scheme: dark)", color: "#f1e8d8" },
  ],
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Montserrat Fleck",
  givenName: "Montserrat",
  familyName: "Fleck",
  alternateName: "Monti Fleck",
  url: SITE_URL,
  jobTitle: "Social Media Coordinator",
  description: DESCRIPTION,
  email: "mailto:monti@flexgames.com",
  worksFor: {
    "@type": "Organization",
    name: "Paramount TV Marketing",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "NYU Tisch School of the Arts",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/in/montserratfleck",
    "https://instagram.com/montserratfleck",
  ],
  knowsAbout: [
    "Social media strategy",
    "Brand voice",
    "Community management",
    "Threads",
    "Instagram",
    "TikTok",
    "Live event coverage",
    "Globalization",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-[var(--foreground)] focus:text-[var(--background)] focus:px-4 focus:py-2 focus:text-sm focus:shadow-lg"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
