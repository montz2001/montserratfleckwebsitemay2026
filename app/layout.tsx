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

const TITLE = "Montserrat Fleck · Paramount social, Threads, brand voice";
const DESCRIPTION =
  "Social Coordinator at Paramount running brand voice, live event copy, and the Threads playbook across the franchise roster. 200M+ views on the Marshals launch, +218K @garfield followers in 90 days, paid partnerships live at the 68th GRAMMYs. NYC, brand-side preferred.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Montserrat Fleck",
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

const personId = `${SITE_URL}/#person`;
const websiteId = `${SITE_URL}/#website`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: "Montserrat Fleck",
      givenName: "Montserrat",
      familyName: "Fleck",
      alternateName: "Monti Fleck",
      url: SITE_URL,
      image: {
        "@type": "ImageObject",
        url: `${SITE_URL}/webphotos/oscars.webp`,
        width: 260,
        height: 350,
      },
      jobTitle: "Social Media Coordinator",
      description: DESCRIPTION,
      email: "mailto:monti@flexgames.com",
      worksFor: {
        "@type": "Organization",
        name: "Paramount TV Marketing",
        url: "https://www.paramount.com",
        parentOrganization: {
          "@type": "Organization",
          name: "Paramount Global",
          sameAs: "https://www.wikidata.org/wiki/Q22074011",
        },
      },
      hasOccupation: {
        "@type": "Occupation",
        name: "Social Media Manager",
        occupationLocation: {
          "@type": "City",
          name: "New York, NY",
        },
        skills:
          "Brand voice, Threads strategy, live event coverage, paid social, community management, COPPA-compliant moderation",
      },
      seeks: {
        "@type": "Demand",
        itemOffered: {
          "@type": "Occupation",
          name: "Social Media Manager",
          alternateName: [
            "Social Strategy Manager",
            "Brand Marketing Manager (Social)",
          ],
          occupationLocation: {
            "@type": "City",
            name: "New York, NY",
          },
        },
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
        "Paid social partnerships",
        "Globalization",
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: "Montserrat Fleck",
      description: DESCRIPTION,
      inLanguage: "en-US",
      publisher: { "@id": personId },
      about: { "@id": personId },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "CreativeWork",
      "@id": `${SITE_URL}/#work-marshals`,
      name: "Marshals premiere social rollout",
      headline:
        "Marshals (CBS) premiere social rollout — 500+ posts, 200M+ views, 4M+ engagements",
      url: `${SITE_URL}/#work`,
      creator: { "@id": personId },
      about: "Marshals (CBS) series premiere social media launch",
      datePublished: "2025-11",
      keywords:
        "Marshals, CBS, Paramount+, Luke Grimes, Yellowstone, IG Collab, series premiere",
      interactionStatistic: [
        {
          "@type": "InteractionCounter",
          interactionType: "https://schema.org/WatchAction",
          userInteractionCount: 200000000,
          description: "Total views across Marshals, CBS, Paramount+ International, and Paramount Support handles",
        },
        {
          "@type": "InteractionCounter",
          interactionType: "https://schema.org/InteractAction",
          userInteractionCount: 4000000,
          description: "Total engagements across the premiere rollout",
        },
      ],
    },
    {
      "@type": "CreativeWork",
      "@id": `${SITE_URL}/#work-garfield`,
      name: "@garfield Threads playbook",
      headline:
        "@garfield Threads growth — +218K followers in 90 days, no paid spend",
      url: `${SITE_URL}/#threads`,
      creator: { "@id": personId },
      about: "Brand-voice and growth playbook for @garfield on Threads",
      datePublished: "2026-01",
      keywords: "Threads, Garfield, brand voice, organic growth",
      interactionStatistic: [
        {
          "@type": "InteractionCounter",
          interactionType: "https://schema.org/FollowAction",
          userInteractionCount: 218000,
          description: "New @garfield followers in 90 days, no paid spend",
        },
        {
          "@type": "InteractionCounter",
          interactionType: "https://schema.org/WatchAction",
          userInteractionCount: 3800000,
          description: "Total Threads views over the 90-day period",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is Montserrat Fleck?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Montserrat Fleck is a Social Coordinator on the Franchises team at Paramount TV Marketing in New York. She runs brand voice, live event copy, paid partnerships, and the Threads playbook across Paramount's franchise portfolio.",
          },
        },
        {
          "@type": "Question",
          name: "Which brands does she run social for at Paramount?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "She works on Nickelodeon, Nickelodeon Family, CBS, SpongeBob, Star Trek, Garfield, TMNT, Avatar, and PAW Patrol, covering brand voice, strategy, asset ideation, community management, and growth.",
          },
        },
        {
          "@type": "Question",
          name: "What is her Threads track record?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "She built and runs the Threads playbook end-to-end for @garfield, @spongebob, @tmnt, @startrek, and @avatarlegends. @garfield grew +218K new followers and 3.8M views in 90 days with no paid spend.",
          },
        },
        {
          "@type": "Question",
          name: "What major launches has she worked on?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "She was hands-on for the bulk of the Marshals (CBS) premiere social rollout: 500+ posts across Marshals, CBS, Paramount+ International, and Paramount Support handles, totaling 200M+ views and 4M+ engagements. She also worked the 68th GRAMMYs and CBS fall schedule rollout, writing live captions and paid-promo dark posts for 6+ paid partnerships including Allstate, IBM watsonx, and Ulta Beauty.",
          },
        },
        {
          "@type": "Question",
          name: "Does she handle moderation and brand safety?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. She manages moderation and brand safety across Paramount's kid-facing portfolio under COPPA, and has worked alongside enterprise vendors including ZeroFox on impersonation monitoring, harmful-content flags, and takedown queues.",
          },
        },
        {
          "@type": "Question",
          name: "Where is she based and what roles is she looking for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "She's based in New York, NY and is open to Social Media Manager, Social Strategy Manager, and Brand Marketing (Social) roles, brand-side.",
          },
        },
      ],
    },
    {
      "@type": "CreativeWork",
      "@id": `${SITE_URL}/#work-tonys`,
      name: "2026 Tony Awards live coverage",
      headline:
        "78th Tony Awards live coverage — 137+ posts in 24 hours, 20M+ views, captions written and shipped from the room",
      url: `${SITE_URL}/#paid`,
      creator: { "@id": personId },
      about: "Live event coverage of the 2026 Tony Awards (CBS broadcast)",
      datePublished: "2026-06",
      keywords:
        "Tony Awards 2026, 78th Tony Awards, CBS, live event coverage, Broadway, social media live coverage",
      interactionStatistic: [
        {
          "@type": "InteractionCounter",
          interactionType: "https://schema.org/WatchAction",
          userInteractionCount: 20000000,
          description: "Total views across the 2026 Tony Awards live coverage rollout",
        },
      ],
    },
    {
      "@type": "CreativeWork",
      "@id": `${SITE_URL}/#work-grammys`,
      name: "68th GRAMMYs paid partnerships",
      headline:
        "68th GRAMMYs live coverage and 6+ paid partnerships (Allstate, IBM watsonx, Ulta Beauty)",
      url: `${SITE_URL}/#paid`,
      creator: { "@id": personId },
      about: "Live event coverage and paid-promo dark posts under partner brief at the 68th GRAMMY Awards",
      datePublished: "2026-02",
      keywords:
        "GRAMMYs, paid partnerships, Allstate, IBM watsonx, Ulta Beauty, Olivia Dean, Teddy Swims, Addison Rae, CBS",
    },
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
