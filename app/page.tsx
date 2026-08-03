import Link from "next/link";
import Image from "next/image";
import HoverVideo from "./HoverVideo";
import type { ReactNode } from "react";
import { existsSync, statSync } from "fs";
import { join } from "path";

const EMAIL = "monti@flexgames.com";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Role for Montserrat: let's chat",
)}`;

const publicPath = (src: string) =>
  join(process.cwd(), "public", decodeURIComponent(src.replace(/^\//, "")));

// Append the file's mtime as a query param so browsers refetch on swap.
// Safe because this is a Server Component — fs runs at server render time.
const bust = (src: string): string => {
  try {
    const mtime = statSync(publicPath(src)).mtimeMs;
    return `${src}?v=${Math.floor(mtime)}`;
  } catch {
    return src;
  }
};

const assetExists = (src: string): boolean => {
  try {
    return existsSync(publicPath(src));
  } catch {
    return false;
  }
};

const threadsUrl = (handle: string) =>
  `https://www.threads.net/@${handle.replace(/^@/, "")}`;

// Social platform icon set — inline SVG keeps it dependency-free
const IGIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);
const FBIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const TTIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);
const ThIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291 1.07-.061 2.07-.014 2.991.139-.124-.74-.376-1.328-.749-1.752-.513-.586-1.308-.883-2.359-.89H12.16c-.847 0-1.998.234-2.733 1.327L7.74 7.846c.984-1.463 2.582-2.268 4.488-2.268h.029c3.184.019 5.082 1.974 5.271 5.376.108.045.216.094.32.143 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.84 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"/>
  </svg>
);
const YTIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

// Per-brand overrides where the handle differs across platforms.
// Key by the IG/voice handle; values are the platform-specific handles (no @).
const handleOverrides: Record<string, Partial<Record<"facebook" | "tiktok" | "threads" | "youtube", string>>> = {
  cbstv: { facebook: "CBS", tiktok: "cbs" },
};

const SocialIcons = ({ handle, includeYouTube }: { handle: string; includeYouTube?: boolean }) => {
  const override = handleOverrides[handle] ?? {};
  const fb = override.facebook ?? handle;
  const tt = override.tiktok ?? handle;
  const th = override.threads ?? handle;
  const yt = override.youtube ?? handle;
  const links = [
    { url: `https://www.instagram.com/${handle}/`, label: "Instagram", icon: <IGIcon /> },
    { url: `https://www.facebook.com/${fb}`, label: "Facebook", icon: <FBIcon /> },
    { url: `https://www.tiktok.com/@${tt}`, label: "TikTok", icon: <TTIcon /> },
    { url: `https://www.threads.net/@${th}`, label: "Threads", icon: <ThIcon /> },
    ...(includeYouTube ? [{ url: `https://www.youtube.com/@${yt}`, label: "YouTube", icon: <YTIcon /> }] : []),
  ];
  return (
    <div className="flex items-center gap-2.5 mt-1.5">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.label}
          className="text-[var(--foreground)]/80 hover:text-[var(--accent)] transition-colors"
        >
          {l.icon}
        </a>
      ))}
    </div>
  );
};

const ThreadsLink = ({ handle }: { handle: string }) => (
  <a
    href={threadsUrl(handle)}
    target="_blank"
    rel="noopener noreferrer"
    className="underline decoration-[var(--accent)]/40 underline-offset-4 hover:decoration-[var(--accent)] hover:text-[var(--accent)] transition-colors"
  >
    {handle.startsWith("@") ? handle : `@${handle}`}
  </a>
);

const stats: { value: string; label: ReactNode; context?: string }[] = [
  {
    value: "200M+",
    label: "Views on the Marshals launch. I ran the publishing, copy, QC, and collab approvals.",
    context: "Well above the typical owned-social pull for a network midseason drama.",
  },
  {
    value: "24.7M",
    label: "Views across Instagram & Facebook in my first month running @thebradybunch solo",
    context: "Strategy, copy, image and carousel design, publishing, and video direction — all mine.",
  },
  {
    value: "4M+",
    label: "Engagements across owned social during the Marshals campaign window",
    context: "Above the typical engagement range for a launch this size.",
  },
  {
    value: "5.3M",
    label: <><ThreadsLink handle="spongebob" /> Threads views in 90 days. Strategy, copy, and community: all mine.</>,
    context: "Well past the quarterly view ceiling for a verified brand account.",
  },
  {
    value: "+218K",
    label: <>New <ThreadsLink handle="garfield" /> Threads followers in 90 days</>,
    context: "All organic growth.",
  },
  {
    value: "7×",
    label: "Higher engagement on IG Collab posts vs. non-collab content I executed",
    context: "The right talent and cross-account setup pushed it well past the typical Collab lift.",
  },
];

const threads = {
  intro:
    "I run the Threads playbook for Paramount's brand portfolio: strategy, writing, content, community. That's how I caught Cheesecake Gate, the \"date canceled\" wave, and \"and for the lady, perhaps…\" early enough to post them in character across the roster. Two of my favorites below.",
  alsoRunning: ["@spongebob", "@garfield", "@tmnt", "@startrek", "@avatarlegends"],
  brands: [
    {
      handle: "garfield",
      name: "@garfield on Threads",
      tag: "Strategy · Copy · Community",
      stats: [
        { v: "3.8M", l: "Views (90 days)" },
        { v: "240K+", l: "Interactions" },
        { v: "+218K", l: "New followers" },
        { v: "366K", l: "Top post views" },
      ],
      notes: [
        "Audience splits evenly across adult age brackets: ~23% 18–24, ~25% 25–34, ~24% 35–44, ~18% 45–54.",
        "Jumped on Cheesecake Gate in character (\"lasagna is a cheesecake that never…\") and rode the \"date canceled\" trend into one of the account's top posts of the quarter.",
        "Top posts came mostly off the home feed, organic.",
      ],
    },
    {
      handle: "spongebob",
      name: "@spongebob on Threads",
      tag: "Strategy · Copy · Community",
      stats: [
        { v: "5.3M", l: "Views (90 days)" },
        { v: "321K", l: "Interactions" },
        { v: "708K", l: "Followers" },
        { v: "255K", l: "Top post views" },
      ],
      notes: [
        "\"you're allowed to be excited about small things. that's actually the whole point\" · 52.9K likes · 9.2K reposts · 423 replies · 684 quotes. Wholesome SpongeBob voice, broad-audience numbers.",
        "\"some days feel like Squidward days and that's okay\" · 255K views, 15K likes.",
        "Caught the bigger cross-platform trends fast: \"and for the lady, perhaps…\" (178K views) and the \"date canceled\" wave, both written as SpongeBob.",
        "I reply in character. The comments do as much work as the post.",
      ],
    },
  ],
};

const marshals = {
  headline: "500+ posts. 200M+ views. 4M+ engagements.",
  blurb:
    "Marshals was a coordinated Paramount One launch across Marshals, CBS, Paramount+ International, and Paramount Support handles. The window ran from the November teaser trailer through the March linear premiere, across nine international markets. I sent most of the posts in those numbers, owning the scheduling, copy, QC, cross-account coordination, and IG collab approvals.",
  amplification: [
    { account: "Marshals", posts: "260+", views: "130M+", eng: "2.5M+" },
    { account: "Paramount+ International (9 markets)", posts: "220+", views: "45M+", eng: "700K+" },
    { account: "CBS", posts: "15+", views: "25M+", eng: "430K+" },
    { account: "Paramount Support (News)", posts: "30+", views: "6M+", eng: "135K+" },
    { account: "Paramount Support (Brands)", posts: "10+", views: "2M+", eng: "70K+" },
    { account: "Paramount Support (Titles)", posts: "15+", views: "1M+", eng: "20K+" },
  ],
  wins: [
    {
      title: "Spanned every emotion the show pulls",
      body:
        "Played the lighter beats for a younger crowd (Riley Green BTS, the \"Female viewership just went up by 3000%\" UGC post) and sat with the heavier ones when the show earned it: Tate at Monica's grave, the memorial on the reservation. Both ends went viral.",
    },
    {
      title: "IG Collabs drove 7× the engagement",
      body:
        "Collab posts with Luke Grimes, Yellowstone, CBS, and Paramount+ averaged ~42K engagements. Non-collab posts averaged ~6K. I owned the approval workflow across all four talent and account teams.",
    },
    {
      title: "Press wave: 500K+ views across placements",
      body:
        "Coordinated red-carpet press across Entertainment Tonight, MTV, CMT, CBS Mornings, and Allegedly Speaking. ET led the averages at ~12K per post, with one TikTok peaking at ~34K. Aggregated across every placement, the press wave cleared 500K+ views.",
    },
  ],
};

const bradyBunch = {
  headline: "24.7M views. 18.6M reach. 593K+ engagements.",
  blurb:
    "Paramount handed me @thebradybunch to turn the show's organic resurgence into an owned social presence, and this one is entirely mine. I run the strategy, write every caption and text post, design every image and carousel myself, own publishing and the cross-platform calendar, and direct the video edits shot-by-shot from notes and a shot list. The one thing I don't touch personally is the video cut itself. In my first month on the account (July 2026), Instagram and Facebook combined for the numbers above across 20 pieces of content.",
  wins: [
    {
      title: "One reel hit 4.44M views combined",
      body:
        "“Mike has some fatherly advice: the best personality is your own” pulled 2.03M views on Instagram and 2.4M on Facebook — 4.44M combined off a single clip I wrote the caption for and directed the edit on.",
    },
    {
      title: "Reads the news, not just the rerun",
      body:
        "Caught a guest star from the \"oh my nose\" episode who went on to play a different Spider-Man, and timed the reveal to Spider-Man: Brand New Day's premiere weekend — 3.27M views on Facebook and 992K on Instagram, 4.26M combined, off 50-year-old footage. Same instinct on the Fourth of July: paired a Brady fireworks clip with the holiday and the guest actress's original run on Little House on the Prairie to ride its Netflix revival — 3.46M combined views of its own.",
    },
    {
      title: "11 reels directed, 9 posts designed solo",
      body:
        "Of 20 Instagram posts, 11 were reels I storyboarded and directed — the designer executed the cut from my notes. The other 9 (carousels and images) I designed myself, start to finish.",
    },
  ],
  amplification: [
    { account: "Instagram", posts: "20", views: "11.2M", eng: "456K+" },
    { account: "Facebook", posts: "19", views: "13.53M", eng: "137K+" },
  ],
};

const voice: {
  brand: string;
  handle: string;
  platform: "instagram" | "threads";
  note: string;
  posts: { caption: string; url: string; sub?: string; thumb?: string; commentsShot?: string }[];
}[] = [
  {
    brand: "SpongeBob",
    handle: "spongebob",
    platform: "instagram",
    note: "SpongeBob is online too much. He's fine with it. He'll do a nostalgia post or jump on whatever meme broke that morning.",
    posts: [
      {
        caption: "\"when you have a PhD in binge watching\"",
        sub: "Squidward · trending medical show meme",
        url: "https://www.instagram.com/p/DYS9VmtEyn1/",
        thumb: "/voice/spongebob-phd-binge-watching.jpg",
      },
      {
        caption: "\"If Jeff Probst was in SpongeBob\"",
        sub: "Survivor crossover · co-promo w/ @survivorcbs & @paramountplus",
        url: "https://www.instagram.com/p/DVJ9JJUkZZC/",
        thumb: "/voice/spongebob-jeff-probst.jpg",
      },
      {
        caption: "\"definitely forgetting the Diet Dr. Kelp\"",
        sub: "Squidward weather-and-work meme",
        url: "https://www.instagram.com/p/DT-ZVYckl4B/",
        thumb: "/voice/spongebob-diet-dr-kelp.webp",
      },
      {
        caption: "\"the fandom has been cooking\"",
        sub: "Fan-art showcase · community amplification",
        url: "https://www.instagram.com/p/DXhXTOXFvaG/",
        thumb: "/voice/spongebob-fandom-cooking.jpg",
      },
      {
        caption: "\"POV: how the trip feels like when you left your cat back home\"",
        sub: "Gary moment · relatable POV",
        url: "https://www.instagram.com/p/DWH5oNrjFou/",
        thumb: "/voice/spongebob-pov-trip.jpg",
      },
    ],
  },
  {
    brand: "Star Trek",
    handle: "startrek",
    platform: "instagram",
    note: "Picard fans and Pike fans want different things. The account talks to both at once. It's also the home for the Star Trek 60 campaign.",
    posts: [
      {
        caption: "\"let's see your crew in the comments!\"",
        sub: "Build Your Crew · community prompt",
        url: "https://www.instagram.com/p/DYUlhuZE7s5/",
        thumb: "/voice/startrek-build-your-crew.webp",
      },
      {
        caption: "\"Your star sign is your Star Trek character\"",
        sub: "Aries = Worf · zodiac matchup",
        url: "https://www.instagram.com/p/DV1XqyDlDwx/?img_index=1",
        thumb: "/voice/startrek-star-sign.jpg",
      },
      {
        caption: "\"If only we could have this level of decisiveness.\"",
        sub: "ONE MORE EPISODE THEN BED · 4 HOURS LATER…",
        url: "https://www.instagram.com/p/DWl7akijdQY/",
        thumb: "/voice/startrek-decisiveness.jpg",
      },
      {
        caption: "\"Captain's log: Stardate Pet Day. Morale is high. Treat supply is low.\"",
        sub: "Star Trek 60 · pet-day prompt",
        url: "https://www.instagram.com/p/DXFB294Do9G/",
        thumb: "/voice/startrek-pet-day.jpg",
      },
      {
        caption: "\"Celebrating the brilliance, courage, and legacy of the women who boldly go.\"",
        sub: "Fan-art carousel · women-of-Trek",
        url: "https://www.instagram.com/p/DV1ehxKj9WY/",
        thumb: "/voice/startrek-women-of-trek.webp",
      },
    ],
  },
  {
    brand: "Garfield",
    handle: "garfield",
    platform: "threads",
    note: "Garfield is the one writing the posts. Threads is the right format for him. A sentence is about the length of a strip.",
    posts: [
      {
        caption: "\"if you think about it, lasagna is a cheesecake that never disappoints.\"",
        sub: "Threads · 3.5K likes · Cheesecake Gate",
        url: "https://www.threads.net/@garfield",
        thumb: "/voice/garfield-cheesecake.jpg",
      },
      {
        caption: "\"the people who get you — truly get you — are worth keeping. even if they are Jon.\"",
        sub: "Threads · 1.1K likes",
        url: "https://www.threads.net/@garfield",
        thumb: "/voice/garfield-people-who-get-you.jpg",
      },
      {
        caption: "\"the afternoon nap is the most civilized invention in the history of daily living.\"",
        sub: "Threads · 1.4K likes",
        url: "https://www.threads.net/@garfield",
        thumb: "/voice/garfield-afternoon-nap.jpg",
      },
      {
        caption: "\"you wouldn't deny him lasagna, would you?\"",
        sub: "Threads · birthday post",
        url: "https://www.instagram.com/p/DYiDH2ZE3lJ/",
        thumb: "/voice/garfield-birthday-lasagna.jpg",
      },
      {
        caption: "\"providing for the family\"",
        sub: "Instagram · classic strip",
        url: "https://www.instagram.com/p/DVhGF0glCSB/",
        thumb: "/voice/garfield-providing-family.jpg",
      },
    ],
  },
  {
    brand: "TMNT",
    handle: "tmnt",
    platform: "instagram",
    note: "Loud and online. Half the audience is Gen Z meeting the turtles for the first time. The other half can name the '87 voice cast. The copy has to work for both.",
    posts: [
      {
        caption: "\"guess?\"",
        sub: "\"We let one of the Turtles edit this video…\"",
        url: "https://www.instagram.com/p/DVurXGAD9o9/",
        thumb: "/voice/tmnt-guess.jpg",
      },
      {
        caption: "\"define AURA\"",
        sub: "2007 Donnie · auramaxxing",
        url: "https://www.instagram.com/p/DYkUGsggvtu/",
        thumb: "/voice/tmnt-define-aura.jpg",
      },
      {
        caption: "\"fan art that makes the turtles' namesakes go 😩\"",
        sub: "Fan-art carousel · co-credit w/ @nerdoutparamount",
        url: "https://www.instagram.com/p/DU_qGgzEiFh/?img_index=1",
        thumb: "/voice/tmnt-namesakes.jpg",
      },
    ],
  },
  {
    brand: "Nickelodeon",
    handle: "nickelodeon",
    platform: "instagram",
    note: "Cross-platform Paramount+ tie-ins, live-event coverage, and pop-culture sync.",
    posts: [
      {
        caption: "\"our comments are open for discussion\"",
        sub: "Zutara · Tandré · multi-fandom ship debate carousel driving Victorious / Avatar / TMNT / Danger Force streaming on @ParamountPlus",
        url: "https://www.instagram.com/p/DXDzooeFZ9R/",
        thumb: "/voice/nickelodeon-comments-open.jpg",
      },
      {
        caption: "\"from Hollywood Arts to the #GRAMMYs… rewatch your favorite episodes of Victorious on @ParamountPlus!\"",
        sub: "Grammys live-event tie-in",
        url: "https://www.instagram.com/p/DUPMKBfmA1z/",
        thumb: "/voice/nickelodeon-hollywood-arts.jpg",
      },
    ],
  },
  {
    brand: "PAW Patrol",
    handle: "pawpatrol",
    platform: "instagram",
    note: "Concepts, captions, and crossovers across the Nick Family handles. The PAW Patrol team handles community management. I write the co-posts.",
    posts: [
      {
        caption: "\"it's PAW-ndemonium!\" → Rocky's Cat-astrophe special",
        sub: "Co-post w/ @nickelodeonfamily · ideated and written by me",
        url: "https://www.instagram.com/p/DUD257iDE2C/",
        thumb: "/voice/pawpatrol-pawndemonium.jpg",
      },
      {
        caption: "\"being an adult is the biggest cat-astrophe there is\"",
        sub: "PAW Patrol meme repurposed for the Nick Family voice",
        url: "https://www.instagram.com/p/DUJARJ-AGGZ/",
        thumb: "/voice/pawpatrol-cat-astrophe.jpg",
      },
    ],
  },
  {
    brand: "CBS: Live & Sponsored Coverage",
    handle: "cbstv",
    platform: "instagram",
    note: "Cross-team work with a senior IP marketing manager. Live event copy written while the show was running: the 2026 Tony Awards (137+ posts, 20M+ views, captions written and shipped from the room), paid partnerships during the 68th GRAMMYs including Allstate, IBM, and Ulta, plus the CBS fall schedule rollout. I wrote the live captions and the paid-promo dark posts. Senior strategy and partner relationships went through my counterpart.",
    posts: [
      {
        caption: "\"You can only win Best New Artist once and we couldn't be more proud! #GRAMMYs\"",
        sub: "Live · Olivia Dean Best New Artist win · paid partnership w/ Allstate",
        url: "https://www.instagram.com/p/DUPSn28DNBN/",
        thumb: "/voice/cbs-best-new-artist.jpg",
      },
      {
        caption: "\"We wish we knew how to quit you.\"",
        sub: "Live · Teddy Swims red carpet · GRAMMY IQ built with watsonx · paid partnership w/ IBM",
        url: "https://www.instagram.com/p/DUPNJbiEe0Z/",
        thumb: "/voice/cbs-teddy-swims.jpg",
      },
      {
        caption: "\"WE can't stop smiling because Addison gives that red carpet glow\"",
        sub: "Live · Addison Rae red carpet · paid partnership w/ Ulta Beauty",
        url: "https://www.instagram.com/p/DUPIxcgD7pU/",
        thumb: "/voice/cbs-addison.jpg",
      },
      {
        caption: "\"The tribe has spoken! Here's a look at your CBS Fall 2026 schedule that's worth watchin' for 🔥\"",
        sub: "Brainstorm-to-post · Survivor-style tribal placard reveal w/ Jeff Probst · co-posted across @cbstv, @survivorcbs, @marshalscbs, @firesheriffcbs, @trackercbs & @paramountplus",
        url: "https://www.instagram.com/p/DXKlR3vEhPb/",
        thumb: "/voice/cbs-fall-schedule.webp",
      },
    ],
  },
  {
    brand: "Marshals (CBS)",
    handle: "marshalscbs",
    platform: "instagram",
    note: "Premiere strategy through ongoing publishing. I write the captions for the fans first. The post should feel like it belongs sitting next to the show.",
    posts: [
      {
        caption: "\"it's exciting\"",
        sub: "Riley Green BTS · \"Just when you start to figure him out… everything changes.\"",
        url: "https://www.instagram.com/p/DYH4Us-hdBv/",
        thumb: "/voice/marshals-its-exciting.jpg",
      },
      {
        caption: "\"Female viewership just went up by 3000%\"",
        sub: "Fan UGC repost · turned a comment into a post",
        url: "https://www.instagram.com/p/DXM2eT2ji-u/",
        thumb: "/voice/marshals-female-viewership.jpg",
      },
      {
        caption: "\"Let's go manhunting!\"",
        sub: "Cal pep talk meme",
        url: "https://www.instagram.com/p/DWG26oQFXmO/",
        thumb: "/voice/marshals-manhunting.jpg",
      },
      {
        caption: "\"Grief, regret, and the need to make things right. This one hurts.\"",
        sub: "Sneak peek · emotional cut",
        url: "https://www.instagram.com/p/DWuFx4YhksS/",
        thumb: "/voice/marshals-grief-regret.jpg",
      },
      {
        caption: "\"A ceremony of honor, of grief, of love that never fades.\"",
        sub: "Highlight reel",
        url: "https://www.instagram.com/p/DW4a-eOmUDw/",
        thumb: "/voice/marshals-ceremony.jpg",
      },
    ],
  },
  {
    brand: "Avatar Legends",
    handle: "avatarlegends",
    platform: "instagram",
    note: "Avatar fans take the show seriously. The account does too. I want each post to read like the friend in your group chat who's also watching.",
    posts: [
      {
        caption: "\"Your Month = Your Avatar Animal\"",
        sub: "Zodiac-style fandom prompt",
        url: "https://www.instagram.com/p/DXwncubEXVu/",
        thumb: "/voice/avatar-your-month.jpg",
      },
      {
        caption: "\"sound off in the comments\"",
        sub: "Ask a question as if you live in the Avatar Universe · reply-in-character",
        url: "https://www.instagram.com/p/DVufbaNjnyJ/",
        thumb: "/voice/avatar-sound-off.jpg",
      },
      {
        caption: "\"you are right where you're supposed to be\"",
        sub: "Calm, in-voice quote post",
        url: "https://www.instagram.com/p/DYSJ4a_kcgR/",
        thumb: "/voice/avatar-right-where.jpg",
      },
      {
        caption: "\"the gaang ate and left no crumbs (neither did these artists)\"",
        sub: "Fan-art showcase",
        url: "https://www.instagram.com/p/DYXTeapEf93/",
        thumb: "/voice/avatar-gaang-ate.jpg",
      },
    ],
  },
  {
    brand: "Nickelodeon Family",
    handle: "nickelodeonfamily",
    platform: "instagram",
    note: "The kid is watching the show. The parent is watching the kid watch the show. I write for the parent.",
    posts: [
      {
        caption: "\"it's the thought that counts! peppa pig season 10 is now streaming\"",
        sub: "The Productivity Pipeline · w/ @paramountplus",
        url: "https://www.facebook.com/NickelodeonFamily/posts/its-the-thought-that-counts-peppa-pig-season-10-is-now-streaming-on-paramountplu/1328219526012063/",
        thumb: "/voice/nickelodeonfamily-peppa.jpg",
      },
    ],
  },

];

const work: {
  org: string;
  role: string;
  dates: string;
  blurb: ReactNode;
  tags: string[];
  accent: string;
}[] = [
  {
    org: "Paramount TV Marketing (PTVM)",
    role: "Social Coordinator, Franchises Team",
    dates: "Nov 2025 – Present",
    blurb: (
      <>
        <p>
          I came in to publish Polish and German for Paramount&apos;s globalization
          team, and quickly took on more. By the holidays I was covering
          almost every globalized market, English publishing across every
          Nickelodeon handle, and the Fire Country / Sheriff Country accounts.
        </p>
        <p className="mt-4">
          Picking up that much in a short window got me noticed by a senior
          IP marketing manager. I&apos;ve partnered with her on the major CBS
          tentpoles since: Grammys live-event work first (copywriting and
          paid-promo dark posts across three teams I hadn&apos;t worked with
          before), then{" "}
          <a
            href="https://www.instagram.com/marshalscbs/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[var(--accent)]/40 underline-offset-4 hover:decoration-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            @marshalscbs
          </a>{" "}
          premiere strategy in January, the CBS fall schedule rollout, and
          live coverage of the 2026 Tony Awards (137+ posts in 24 hours,
          20M+ views, written and published from the room). That&apos;s one
          side of my week.
        </p>
        <p className="mt-4">
          On the other side, I joined the Franchises team as Social
          Coordinator. That covers publishing, social strategy, asset
          ideation (and occasional creation), community management and
          growth strategy for Nickelodeon, Nickelodeon Family, CBS, TMNT,
          Avatar: The Last Airbender, SpongeBob, Garfield, Star Trek, and{" "}
          <a
            href="https://www.instagram.com/thebradybunch/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[var(--accent)]/40 underline-offset-4 hover:decoration-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            @thebradybunch
          </a>{" "}
          (mine solo: strategy, copy, image and carousel design, publishing,
          and video direction — 24.7M views in my first month, more{" "}
          <a
            href="#work-brady"
            className="underline decoration-[var(--accent)]/40 underline-offset-4 hover:decoration-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            below
          </a>
          ).
        </p>
        <p className="mt-4">
          Threads I run on my own. That&apos;s the strategy, the per-brand voice,
          the copy, and the community across <ThreadsLink handle="garfield" />,{" "}
          <ThreadsLink handle="spongebob" />, <ThreadsLink handle="tmnt" />,{" "}
          <ThreadsLink handle="startrek" />, and{" "}
          <ThreadsLink handle="avatarlegends" />.
        </p>
        <p className="mt-4">
          Between the two teams, I work on most of Paramount&apos;s major IP.
        </p>
      </>
    ),
    tags: [
      "Publishing",
      "Social strategy",
      "Asset ideation",
      "Community management",
      "Growth strategy",
      "Threads",
      "Live events",
      "Paid promo",
      "Globalization",
    ],
    accent: "from-pink-500 to-fuchsia-500",
  },
  {
    org: "Two Tomatoes Records · Laurie Berkner Band",
    role: "Social Media Manager",
    dates: "Jul 2024 – Oct 2025",
    blurb: (
      <>
        <p>
          Doubled the Laurie Berkner Band’s following across Facebook,
          Instagram, and TikTok, expanding the total community from ~150K to
          nearly 300K followers. Led the major campaigns behind that growth,
          including Berkner Breaks After Dark, The Berkner Bracket, and
          Let’s Write a Song, which drove cross-generational engagement
          from nostalgic millennial fans to Gen Alpha audiences.
        </p>
        <p className="mt-4">
          Directed creative partnerships with Tonies, Kidz Bop, Bjorem
          Speech, Yoto Cards, and YouTube Kids, owning approvals, asset
          alignment, and joint posting schedules. Also collaborated with
          platform partners and creator-led organizations (including
          educator and speech-language professional communities) on
          promotional campaigns, social-commerce efforts, and discovery
          initiatives across Instagram and TikTok, including TikTok Shop
          activations.
        </p>
        <p className="mt-4">
          Became the internal “content shop” for vertical video, crafting
          Gen Alpha-focused Shorts and crafting/sensory-driven content.
          Pushed total video views past 2 million in the first quarter by
          testing platform-specific formats, hooks, and timing strategies.
        </p>
        <p className="mt-4">
          Rebuilt backend organizational systems and analytics tracking
          across Meta Business Suite, ManyChat, Shopify, Airtable, and
          Drive to streamline workflow, improving ad performance by
          25–30%. Managed integrated organic and paid social initiatives
          supporting direct-to-consumer sales on the Laurie Berkner Band
          Shopify shop through optimized Instagram Stories, targeted
          boosts, and audience-driven campaign testing, and oversaw
          campaign reporting, growth analytics, and community management
          across every platform.
        </p>
        <p className="mt-4">
          Recognized for combining creative storytelling with data-driven
          growth, helping evolve Laurie Berkner’s brand into a
          multi-generational music and media community.
        </p>
      </>
    ),
    tags: ["2× growth", "+25–30% ads", "Multi-gen audience"],
    accent: "from-violet-500 to-indigo-500",
  },
  {
    org: "Children's Media Association",
    role: "Volunteer leadership, promoted twice",
    dates: "Jan 2023 – Feb 2026 (3+ yrs)",
    blurb: (
      <>
        <p>
          Three years of volunteer leadership at the industry organization
          for kids and family media. Promoted twice across social, ops and
          email.
        </p>
        <p className="mt-4">
          Started as <strong>Global Engagement Coordinator</strong>, owning
          a weekly cross-channel social cadence across LinkedIn, Instagram,
          TikTok, Facebook and Twitter as the point person for CMA&apos;s digital
          channels: content, community, and live-event coverage.
        </p>
        <p className="mt-4">
          Promoted to <strong>Global Engagement Manager</strong>, then to{" "}
          <strong>Global Operations Coordinator &amp; Email Manager</strong>.
          That role covered the WordPress backend, member support and
          renewals, NYC event logistics for Storytime two years running,
          and the internal systems (Airtable, Google Drive, Sheets) the
          org ran on while membership was growing fast.
        </p>
      </>
    ),
    tags: [
      "3+ years",
      "Promoted 2×",
      "5-channel social",
      "Manager title",
      "Ops & systems",
      "Event logistics",
    ],
    accent: "from-purple-400 to-fuchsia-500",
  },
  {
    org: "DreamWorks Animation",
    role: "TV Development / Current Series Intern",
    dates: "Jun 2022 – Sept 2022",
    blurb: (
      <>
        <p>
          This is where my copywriting muscle really started. Sitting
          with TV Development and Current Series, I wrote in-depth
          script coverage on DreamWorks shows, learning how to read a
          story for hook, audience, and what actually sells. The same
          instinct now shows up in every caption, brand voice and
          asset brief I touch.
        </p>
        <p className="mt-4">
          I worked on the marketing story behind the development slate
          itself: helping shape pitch materials for streamer-facing
          development, building a 200+ artist database the team used to
          attach talent to projects, and reorganizing Current’s files
          so the story of each show was easy to pull and present. I
          also covered EA duties for Vanessa Taylor Sands across calls,
          scheduling and admin.
        </p>
        <p className="mt-4">
          For my culmination, I built and delivered a pitch to the
          DreamWorks development and production team on the future of
          neurodivergent representation in kids animation: audience
          framing, market gap, creative direction. It was my first
          real development pitch deck to a streamer-scale buyer, and
          the format I’ve been refining into brand decks ever since.
        </p>
        <p className="mt-4">
          On top of the desk role I was selected as Intern Ambassador
          for the Summer 2022 cohort, leading comms between Early
          Careers leadership, the intern managers, and the 30 interns.
          I designed cohort flyers, ran the group chat, and partnered
          with Early Careers on cohort programming.
        </p>
      </>
    ),
    tags: ["Artist database", "Intern Ambassador"],
    accent: "from-amber-400 to-orange-500",
  },
  {
    org: "Warner Bros. Discovery",
    role: "Creative Careers Marketing Cohort",
    dates: "Mar 2022 – May 2022",
    blurb: (
      <>
        <p>
          Selected for the Spring 2022 Creative Careers Accelerator, a
          six-week experiential program pairing NYU undergrads from across
          the arts with an industry partner to solve a real-world brief.
          I was placed on Warner Bros. Discovery on a team of five.
        </p>
        <p className="mt-4">
          The brief was Gen Z growth for discovery+. We synthesized
          executive briefings, interviewer feedback and market research
          into a Gen Z target customer profile, a SWOT and a competitive
          analysis of the general-entertainment market, then built
          marketing-technique ideation aimed at Gen Z subscribers. The
          work fed into thinking around the Max + discovery+ integration.
        </p>
        <p className="mt-4">
          Alongside the team brief, I ran a career-readiness track:
          chats with Warner Bros. Discovery marketing and development
          leads, a Creative Career Design workbook, and coaching
          touchpoints with a Wasserman career coach and an alumni
          partner. The cohort closed with our final pitch in front of an
          industry audience and a networking mixer.
        </p>
      </>
    ),
    tags: ["Gen Z strategy", "SWOT", "Max integration pitch"],
    accent: "from-sky-400 to-cyan-500",
  },
];

const brands: { name: string; src: string }[] = [
  { name: "Paramount", src: "/brands/paramount.png" },
  { name: "SpongeBob", src: "/brands/spongebob.png" },
  { name: "CBS", src: "/brands/cbs.png" },
  { name: "Garfield", src: "/brands/garfield.png" },
  { name: "Nickelodeon", src: "/brands/nickelodeon.png" },
  { name: "Star Trek", src: "/brands/star%20trek.png" },
  { name: "Marshals", src: "/brands/marshals.png" },
  { name: "TMNT", src: "/brands/tmnt.png" },
  { name: "Nickelodeon Family", src: "/brands/nick%20family.png" },
  { name: "Avatar: The Last Airbender", src: "/brands/atla.png" },
  { name: "GRAMMYs", src: "/brands/grammys.png" },
  { name: "Tony Awards", src: "/brands/tony.png" },
  { name: "The Brady Bunch", src: "/brands/brady.png" },
  { name: "SpongeBob: Search for SquarePants", src: "/brands/sb%20s4sp.png" },
  { name: "DreamWorks", src: "/brands/dreamworks.png" },
  { name: "Laurie Berkner Band", src: "/brands/berkner.png" },
  { name: "Warner Bros. Discovery", src: "/brands/wbd.png" },
  { name: "Children's Media Association", src: "/brands/cma.png" },
];

export default function Home() {
  return (
    <main id="main" className="flex flex-col flex-1">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[var(--background)]/70 border-b border-[var(--rule)] no-print">
        <nav
          aria-label="Primary"
          className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between gap-3"
        >
          <Link href="/" className="font-serif text-xl whitespace-nowrap">
            Montserrat Fleck
          </Link>
          <ul className="hidden sm:flex gap-6 text-sm">
            <li><a href="#stats" className="hover:text-[var(--accent)]">Receipts</a></li>
            <li><a href="#paid" className="hover:text-[var(--accent)]">Paid</a></li>
            <li><a href="#voice" className="hover:text-[var(--accent)]">Voice</a></li>
            <li><a href="#work" className="hover:text-[var(--accent)]">Work</a></li>
            <li><a href="#about" className="hover:text-[var(--accent)]">About</a></li>
            <li><a href="#contact" className="hover:text-[var(--accent)]">Contact</a></li>
          </ul>
          <div className="flex items-center gap-2">
            <a
              href={MAILTO}
              className="rounded-full bg-[var(--foreground)] text-[var(--background)] px-4 py-1.5 text-sm hover:bg-[var(--accent)] transition-colors whitespace-nowrap"
            >
              Let&apos;s talk
            </a>
            {/* Mobile menu toggle (CSS-only via <details>) */}
            <details className="mobile-menu sm:hidden relative">
              <summary
                aria-label="Open navigation menu"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--rule)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-5 h-5 menu-open">
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-5 h-5 menu-close">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </svg>
              </summary>
              <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-[var(--rule)] bg-[var(--background)] shadow-xl p-2">
                <ul className="flex flex-col text-sm">
                  {[
                    { href: "#stats", label: "Receipts" },
                    { href: "#paid", label: "Paid" },
                    { href: "#voice", label: "Voice" },
                    { href: "#work", label: "Work" },
                    { href: "#about", label: "About" },
                    { href: "#contact", label: "Contact" },
                  ].map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="block px-4 py-2.5 rounded-xl hover:bg-[var(--foreground)]/5 hover:text-[var(--accent)] transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                  <li className="border-t border-[var(--rule)] mt-1 pt-1">
                    <a
                      href="/resume"
                      className="block px-4 py-2.5 rounded-xl hover:bg-[var(--foreground)]/5 hover:text-[var(--accent)] transition-colors"
                    >
                      Résumé
                    </a>
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 pt-12 pb-20 sm:pt-16 sm:pb-24">
        <h1 className="sr-only">
          Montserrat Fleck · Social Media Manager (NYC) · Paramount TV Marketing
        </h1>
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[var(--accent-2)] mb-5">
          Paramount social · Tony Awards · GRAMMYs · CBS · Nickelodeon · SpongeBob · Star Trek
        </p>
        <h2 className="font-serif text-[2.25rem] sm:text-6xl md:text-7xl leading-[1.05] tracking-tight max-w-5xl">
          I write the post, send the post, and{" "}
          <span className="gradient-text">live in the comments.</span>{" "}
          Not in a healthy way.
        </h2>
        <p className="mt-7 max-w-xl text-base sm:text-lg text-[var(--foreground)]/80 leading-relaxed">
          I&apos;m a social strategist and writer at{" "}
          <strong>Paramount</strong>, deciding how Nickelodeon, CBS, SpongeBob,
          Star Trek, Garfield, TMNT, and Avatar sound online. I built the
          Threads playbook across the franchise portfolio. Also: I&apos;m the
          demo your algorithm is optimizing for.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="rounded-full bg-[var(--foreground)] text-[var(--background)] px-6 py-3 text-sm font-medium hover:bg-[var(--accent)] transition-colors"
          >
            See the work →
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[var(--foreground)]/20 px-6 py-3 text-sm font-medium hover:border-[var(--foreground)] transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* BRAND MARQUEE */}
      {/* Preload every logo so the marquee never reveals an empty slot */}
      {brands.map((b) => (
        <link
          key={b.src}
          rel="preload"
          as="image"
          href={bust(b.src)}
          fetchPriority="high"
        />
      ))}
      <section
        aria-label="Brands I've worked with"
        className="border-y border-[var(--rule)] py-8 overflow-hidden no-print"
      >
        <div className="marquee whitespace-nowrap" aria-hidden="true">
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="flex items-center gap-12 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={bust(b.src)}
                alt=""
                width={500}
                height={233}
                loading="eager"
                fetchPriority="high"
                className="h-16 sm:h-30 w-auto object-contain brand-logo"
              />
              <span
                aria-hidden="true"
                className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--foreground)]/30"
              />
            </span>
          ))}
        </div>
        <ul className="sr-only">
          {brands.map((b) => (
            <li key={b.name}>{b.name}</li>
          ))}
        </ul>
      </section>

      {/* STATS / RECEIPTS */}
      <section id="stats" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow">By the numbers</span>
          <h2 className="font-serif text-4xl sm:text-5xl">The receipts.</h2>
          <p className="mt-3 text-sm text-[var(--foreground)]/80">
            All pulled from real campaigns. Sources: client analytics,
            in-platform insights, Meta Ads Manager.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div
              key={s.value}
              className="rounded-3xl border border-[var(--rule)] bg-[var(--background)] p-5 sm:p-7 hover:border-[var(--accent)] transition-colors"
            >
              <div className="font-serif text-5xl sm:text-6xl text-[var(--accent)]">
                {s.value}
              </div>
              <p className="mt-3 text-sm text-[var(--foreground)]/80 leading-snug">{s.label}</p>
              {s.context && (
                <p className="mt-3 pt-3 border-t border-[var(--rule)] text-xs italic text-[var(--foreground)]/80 leading-relaxed">
                  {s.context}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* BRADY BUNCH CASE STUDY */}
      <section id="work-brady" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="border-t-2 border-b-2 border-[var(--foreground)] py-10 sm:py-14">
          <div className="mb-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent-ink)]">
              Solo campaign — strategy through publishing, mine start to finish
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl leading-[1.05] mb-6">
            {bradyBunch.headline}
          </h2>
          <p className="text-[var(--foreground)]/80 text-lg max-w-3xl leading-relaxed">
            {bradyBunch.blurb}
          </p>

          {/* Wins */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[var(--rule)]">
            {bradyBunch.wins.map((w, i) => (
              <div
                key={w.title}
                className={`py-6 md:py-8 md:px-6 ${i > 0 ? "md:border-l border-[var(--rule)] border-t md:border-t-0" : ""}`}
              >
                <h3 className="font-serif text-xl text-[var(--accent)] mb-2">
                  {w.title}
                </h3>
                <p className="text-sm text-[var(--foreground)]/80 leading-relaxed">
                  {w.body}
                </p>
              </div>
            ))}
          </div>

          {/* Where it ran */}
          <div className="mt-12">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[var(--foreground)]/80 mb-5">
              Where it ran
            </h3>
            <ul className="flex flex-wrap gap-3">
              {bradyBunch.amplification.map((row) => (
                <li
                  key={row.account}
                  className="text-sm px-3 py-1.5 rounded-full bg-[var(--foreground)]/5 border border-black/5 font-serif"
                >
                  {row.account}: {row.posts} posts · {row.views} views · {row.eng} engagements
                </li>
              ))}
            </ul>
            <p className="text-xs text-[var(--foreground)]/80 mt-4 italic">
              First month on the account (July 2026).
            </p>
          </div>
        </div>
      </section>

      {/* MARSHALS CASE STUDY */}
      <section id="work-marshals" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="border-t-2 border-b-2 border-[var(--foreground)] py-10 sm:py-14">
          <div className="mb-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent-ink)]">
              Featured campaign
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl leading-[1.05] mb-6">
            {marshals.headline}
          </h2>
          <p className="text-[var(--foreground)]/80 text-lg max-w-3xl leading-relaxed">
            {marshals.blurb}
          </p>

          {/* Wins */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[var(--rule)]">
            {marshals.wins.map((w, i) => (
              <div
                key={w.title}
                className={`py-6 md:py-8 md:px-6 ${i > 0 ? "md:border-l border-[var(--rule)] border-t md:border-t-0" : ""}`}
              >
                <h3 className="font-serif text-xl text-[var(--accent)] mb-2">
                  {w.title}
                </h3>
                <p className="text-sm text-[var(--foreground)]/80 leading-relaxed">
                  {w.body}
                </p>
              </div>
            ))}
          </div>

          {/* Where it ran */}
          <div className="mt-12">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[var(--foreground)]/80 mb-5">
              Where it ran
            </h3>
            <ul className="flex flex-wrap gap-2">
              {marshals.amplification.map((row) => (
                <li
                  key={row.account}
                  className="text-sm px-3 py-1.5 rounded-full bg-[var(--foreground)]/5 border border-black/5 font-serif"
                >
                  {row.account}
                </li>
              ))}
            </ul>
            <p className="text-xs text-[var(--foreground)]/80 mt-4 italic">
              Aggregate figures above. Per-account specifics aren&apos;t mine to share.
            </p>
          </div>
        </div>
      </section>

      {/* THREADS CASE STUDY */}
      <section id="threads" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="mb-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent-2)]">
            Featured platform
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl mt-2">Threads, my way.</h2>
        </div>
        <p className="text-[var(--foreground)]/80 mb-5 max-w-3xl text-lg">
          {threads.intro}
        </p>
        <p className="text-[var(--foreground)]/80 mb-10 max-w-3xl text-lg">
          The format is built for legacy IP: short text, in-character voice,
          decades of iconic quotes to draw from. Replying to my own comments
          in character lifts engagement another ~42%.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {threads.brands.map((b) => (
            <article
              key={b.name}
              className="rounded-3xl border border-[var(--rule)] bg-[var(--background)] p-7 sm:p-9"
            >
              <div className="flex items-baseline justify-between gap-4 flex-wrap mb-1">
                <h3 className="font-serif text-3xl">
                  <a
                    href={threadsUrl(b.handle)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--accent)] transition-colors"
                  >
                    {b.name} ↗
                  </a>
                </h3>
              </div>
              <p className="text-xs uppercase tracking-wider text-[var(--accent-2)] mb-6">
                {b.tag}
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {b.stats.map((s) => (
                  <div
                    key={s.l}
                    className="rounded-2xl bg-[var(--foreground)]/[0.04] p-4 border border-black/5"
                  >
                    <div className="font-serif text-2xl gradient-text leading-none">
                      {s.v}
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.04em] text-[var(--foreground)]/80 mt-2 leading-snug">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
              <ul className="space-y-2 text-sm text-[var(--foreground)]/80 leading-relaxed">
                {b.notes.map((n) => (
                  <li key={n} className="flex gap-2">
                    <span className="text-[var(--accent)] mt-1">▸</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-dashed border-black/15 p-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent-2)]">
            Full Threads roster
          </span>
          <div className="flex flex-wrap gap-2">
            {threads.alsoRunning.map((handle) => (
              <a
                key={handle}
                href={threadsUrl(handle)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-3 py-1 rounded-full bg-[var(--foreground)]/5 border border-black/5 font-serif hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                {handle} ↗
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PAID + PROMO */}
      <section id="paid" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow">Paid + Promo</span>
          <h2 className="font-serif text-4xl sm:text-5xl">Both sides of paid.</h2>
          <p className="mt-3 text-[var(--foreground)]/80">
            I&apos;ve worked the partner side and the performance side. Live,
            brief-driven paid placements at Paramount on one end; ad
            performance, DTC, and shop support at the Laurie Berkner Band on
            the other.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <article className="rounded-3xl border border-[var(--rule)] bg-[var(--background)] p-7 sm:p-9">
            <h3 className="font-serif text-2xl mb-1">Brand partnerships</h3>
            <p className="text-xs uppercase tracking-wider text-[var(--accent-2)] mb-6">
              Paramount · 68th GRAMMYs
            </p>
            <ul className="space-y-2 text-sm text-[var(--foreground)]/80 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-[var(--accent)] mt-1">▸</span>
                <span>
                  6+ paid partnerships executed live at the GRAMMYs,
                  including Allstate (Olivia Dean, Best New Artist), IBM
                  watsonx (Teddy Swims red carpet, GRAMMY IQ), and Ulta Beauty
                  (Addison Rae).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--accent)] mt-1">▸</span>
                <span>
                  Wrote paid-promo dark posts across three teams I hadn&apos;t
                  worked with before, under partner brief, while the show was
                  running.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--accent)] mt-1">▸</span>
                <span>
                  Partnered with a senior IP marketing manager on the live
                  workflow: senior strategy and partner relationships went
                  through her; I owned the live captions and the dark-post
                  copy.
                </span>
              </li>
            </ul>
          </article>

          <article className="rounded-3xl border border-[var(--rule)] bg-[var(--background)] p-7 sm:p-9">
            <h3 className="font-serif text-2xl mb-1">Performance + DTC</h3>
            <p className="text-xs uppercase tracking-wider text-[var(--accent-2)] mb-6">
              Laurie Berkner Band
            </p>
            <ul className="space-y-2 text-sm text-[var(--foreground)]/80 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-[var(--accent)] mt-1">▸</span>
                <span>
                  Lifted ad performance 25–30% through audience-driven testing
                  on Meta.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--accent)] mt-1">▸</span>
                <span>
                  Supported direct-to-consumer sales on Shopify with targeted
                  IG Story boosts and campaign testing.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--accent)] mt-1">▸</span>
                <span>
                  Activated TikTok Shop and partnered with creator-led
                  communities on discovery and social-commerce campaigns.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--accent)] mt-1">▸</span>
                <span>
                  Rebuilt the backend analytics stack: Meta Business Suite,
                  ManyChat, Shopify, Airtable, Drive.
                </span>
              </li>
            </ul>
          </article>
        </div>

        <p className="mt-6 text-xs text-[var(--foreground)]/80 italic">
          Paid toolbelt: Meta Ads Manager · Meta Business Suite · ManyChat ·
          Shopify · Sprinklr · Hootsuite
        </p>
      </section>

      {/* BRAND VOICE SAMPLES */}
      <section id="voice" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow">Currently · In their voice</span>
          <h2 className="font-serif text-4xl sm:text-5xl">
            Ten brands, many voices, one writer.
          </h2>
          <p className="mt-4 text-[var(--foreground)]/80">
            This is my <strong>current roster</strong>{" "}at Paramount: what I&apos;m
            writing, posting and replying to right now. It&apos;s where most of
            the receipts above come from, and why the work below goes deeper
            than my earlier roles at the Laurie Berkner Band, CMA or in
            internships. Each post was written, scheduled and (mostly) replied
            to by me. Tap any caption to expand.
          </p>
        </div>

        <div className="border-t-2 border-[var(--foreground)]">
          {voice.map((b) => {
            const pfpSrc = `/pfps/${b.handle}.jpg`;
            const hasPfp = assetExists(pfpSrc);
            return (
            <div
              key={b.brand}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-10 py-8 border-b border-[var(--rule)]"
            >
              <div>
                <div className="flex items-center gap-3 mb-1">
                  {hasPfp ? (
                    <Image
                      src={bust(pfpSrc)}
                      alt={`${b.brand} (@${b.handle}) profile photo`}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover bg-[var(--foreground)]/5 border border-[var(--rule)] shrink-0"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="w-12 h-12 rounded-full bg-[var(--foreground)]/5 border border-[var(--rule)] shrink-0 flex items-center justify-center font-serif text-base text-[var(--accent)]"
                    >
                      {b.brand.slice(0, 1)}
                    </span>
                  )}
                  <div className="min-w-0">
                    <h3 className="font-serif text-2xl leading-tight">{b.brand}</h3>
                    <p className="text-xs uppercase tracking-wider text-[var(--accent-ink)]">
                      @{b.handle}
                    </p>
                    <SocialIcons handle={b.handle} includeYouTube={b.handle === "startrek"} />
                  </div>
                </div>
                <p className="mt-3 text-sm text-[var(--foreground)]/80 leading-relaxed">
                  {b.note}
                </p>
              </div>
              <div className="divide-y divide-[var(--rule)]">
                {b.posts.map((p, i) => {
                  const thumb = p.thumb && assetExists(p.thumb) ? p.thumb : undefined;
                  const videoCandidate = thumb
                    ? thumb.replace(/\.(jpe?g|png|webp)$/i, ".mp4")
                    : undefined;
                  const video =
                    videoCandidate && videoCandidate !== thumb && assetExists(videoCandidate)
                      ? videoCandidate
                      : undefined;
                  const commentsShot =
                    p.commentsShot && assetExists(p.commentsShot) ? p.commentsShot : undefined;
                  return (
                  <details
                    key={p.url + p.caption}
                    open={i === 0}
                    className="voice-post group py-3 first:pt-0 last:pb-0"
                  >
                    <summary className="block cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                      <span className="block text-[var(--foreground)] leading-snug group-hover:text-[var(--accent)] transition-colors">
                        {p.caption}{" "}
                        <span className="voice-chevron inline-block text-[var(--foreground)]/30 group-hover:text-[var(--accent)]/70 transition-transform">
                          ▾
                        </span>
                      </span>
                      {p.sub && (
                        <span className="block text-xs text-[var(--foreground)]/80 mt-1">
                          {p.sub}
                        </span>
                      )}
                    </summary>
                    {thumb && (
                      <div className="voice-post-body pt-4">
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open on ${p.url.includes('threads') ? 'Threads' : p.url.includes('facebook') ? 'Facebook' : 'Instagram'}: ${p.caption}`}
                          className="block space-y-3"
                        >
                          {video && thumb ? (
                            <HoverVideo
                              src={bust(video)}
                              poster={bust(thumb)}
                              className="block w-full max-w-sm"
                            />
                          ) : (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                              src={bust(thumb)}
                              alt={`${b.brand} post: ${p.caption}`}
                              loading="lazy"
                              decoding="async"
                              width={1080}
                              height={1350}
                              className="block w-full max-w-sm h-auto rounded-md border border-[var(--rule)]"
                            />
                          )}
                          {commentsShot && (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                              src={bust(commentsShot)}
                              alt={`Audience replies to ${b.brand}: ${p.caption}`}
                              loading="lazy"
                              decoding="async"
                              width={1080}
                              height={1350}
                              className="block w-full max-w-sm h-auto rounded-md border border-[var(--rule)]"
                            />
                          )}
                          <span className="block text-xs text-[var(--foreground)]/80 underline decoration-[var(--accent)]/40 underline-offset-4">
                            Open the post ↗
                          </span>
                        </a>
                      </div>
                    )}
                  </details>
                  );
                })}
              </div>
            </div>
            );
          })}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <span className="eyebrow">Experience</span>
        <h2 className="font-serif text-4xl sm:text-5xl mb-2">Selected work.</h2>
        <p className="text-[var(--foreground)]/80 mb-10">
          Five years of building audiences, running launches, and shipping content
          across kids, comedy, primetime &amp; streaming.
        </p>
        <div className="border-t-2 border-[var(--foreground)]">
          {work.map((w) => (
            <article
              key={w.org}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-10 py-8 border-b border-[var(--rule)]"
            >
              <div>
                <h3 className="font-serif text-2xl">{w.org}</h3>
                <p className="text-xs uppercase tracking-wider text-[var(--accent-ink)] mt-1">
                  {w.role}
                </p>
                <p className="text-xs uppercase tracking-wider text-[var(--foreground)]/80 mt-1">
                  {w.dates}
                </p>
              </div>
              <div>
                <div className="text-[var(--foreground)]/80 leading-relaxed [&>p:first-child]:mt-0">
                  {w.blurb}
                </div>
                <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-xs uppercase tracking-wider text-[var(--foreground)]/80">
                  {w.tags.map((t, i) => (
                    <li key={t} className="flex items-center gap-3">
                      {i > 0 && <span className="text-[var(--foreground)]/30">·</span>}
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="grid md:grid-cols-[260px_1fr] gap-10 items-start mb-12">
          <Image
            src={bust("/webphotos/oscars.webp")}
            alt="Montserrat Fleck at the Oscars"
            width={260}
            height={350}
            sizes="(max-width: 768px) 60vw, 260px"
            className="w-2/3 max-w-[240px] md:w-full md:max-w-none h-auto border border-[var(--rule)]"
          />
          <div>
            <span className="eyebrow">Who I am</span>
            <h2 className="font-serif text-4xl sm:text-5xl mb-6">About me.</h2>
            <div className="space-y-5 text-lg text-[var(--foreground)]/85 leading-relaxed">
              <p>
                I shape social strategy and brand voice across Paramount&apos;s
                franchise portfolio: how SpongeBob, Garfield, Star Trek, TMNT,
                Avatar, Nickelodeon, and CBS show up online (voice, strategy,
                copy). Officially I&apos;m Social Coordinator on the Franchises
                team at Paramount TV Marketing.
              </p>
              <p>
                Most weeks I&apos;m replying as a cartoon. I went to Tisch
                for screenwriting. It helps.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="border border-[var(--rule)] bg-[var(--background)] p-6">
            <h3 className="text-xs uppercase tracking-wider text-[var(--accent-ink)] mb-3">
              Toolbelt
            </h3>
            <p className="text-sm leading-relaxed">
              Final Draft · Final Cut · Adobe Creative Suite · Microsoft 365 ·
              Google Workspace · Shotgrid · Airtable · ManyChat · Sprinklr ·
              Hootsuite · ClickUp · Monday · Canva
            </p>
          </div>
          <div className="border border-[var(--rule)] bg-[var(--background)] p-6">
            <h3 className="text-xs uppercase tracking-wider text-[var(--accent-ink)] mb-3">
              Brand safety
            </h3>
            <p className="text-sm leading-relaxed">
              Enterprise vendor work (ZeroFox-tier) at Paramount scale.
              COPPA-compliant on the kids/family side. Formal Gen Alpha
              training (incl. YouTube Kids creator-track).
            </p>
          </div>
          <div className="border border-[var(--rule)] bg-[var(--background)] p-6">
            <h3 className="text-xs uppercase tracking-wider text-[var(--accent-ink)] mb-3">
              Passions
            </h3>
            <p className="text-sm leading-relaxed">
              Arts &amp; crafts (too many) · chameleons · cornish rexes ·
              interior design · kaiju (minus King Kong) · LEGO · pescetarian
              food · YouTube trivia (non-AI) · karaoke (Bohemian Rhapsody on
              Rock Band expert mode) · spreadsheeting everything.
            </p>
          </div>
          <div className="border border-[var(--soft)]/60 bg-[var(--soft)]/[0.12] p-6">
            <h3 className="text-xs uppercase tracking-wider text-[var(--accent-2)] mb-3">
              Education
            </h3>
            <p className="text-sm leading-relaxed">
              <strong>NYU Tisch School of the Arts</strong>
              <br />
              BFA, Dramatic Writing · <em>magna cum laude</em>
              <br />
              Minors: Comedy Writing · Child &amp; Adolescent Mental Health
              Studies
            </p>
          </div>
        </div>
      </section>

      {/* MODERATION & BRAND SAFETY */}
      <section className="mx-auto max-w-5xl px-6 pb-8 sm:pb-12">
        <div className="rounded-3xl border border-[var(--rule)] bg-[var(--background)] p-7 sm:p-9">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent-ink)]">
            Moderation &amp; brand safety
          </span>
          <p className="mt-5 text-[var(--foreground)]/85 leading-relaxed">
            Brand safety scales with the audience. I&apos;ve worked at both
            ends: enterprise vendor tooling on adult and broad-audience IP at
            Paramount scale, and hands-on,{" "}
            <strong>COPPA</strong>-compliant moderation on the kids-and-family
            side. On the kids work, the posts talk to the parent but the
            material is for the kid. A lot of the job is walking that line.
            Formal Gen Alpha training (YouTube Kids creator-track seminars
            among others) sits in the toolkit when a brand needs it.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-x-10 gap-y-5 text-[var(--foreground)]/85 leading-relaxed border-t border-[var(--rule)] pt-6">
            <p>
              At Berkner the moderation work was by hand: keeping the comments
              productive, clearing out anyone being mean for no reason.
            </p>
            <p>
              On accounts at Paramount scale, that work runs on vendor
              tooling. I&apos;ve worked with enterprise vendors including
              ZeroFox on impersonation monitoring, harmful-content flags, and
              takedown queues. I can set the same up from scratch if a team
              doesn&apos;t already have it.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-5xl px-6 py-16 sm:py-24 border-t border-[var(--foreground)]"
      >
        <p className="uppercase tracking-[0.25em] text-xs text-[var(--accent-ink)] mb-4">
          Available
        </p>
        <h2 className="font-serif text-5xl sm:text-7xl mb-6 leading-[1.05] max-w-3xl">
          I&apos;d write your copy, too.
        </h2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 mb-10 max-w-2xl text-base">
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-[var(--foreground)]/80 mb-1">Currently</dt>
            <dd>Social Coordinator, Paramount TV Marketing</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-[var(--foreground)]/80 mb-1">Looking for</dt>
            <dd><strong>Social Media Manager</strong>, <strong>Social Strategy Manager</strong>, or <strong>Brand Marketing Manager (Social)</strong>. Brand-side preferred, agency open.</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-[var(--foreground)]/80 mb-1">Based in</dt>
            <dd>New York, NY · open to hybrid or remote</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-[var(--foreground)]/80 mb-1">Notice</dt>
            <dd>2–4 weeks</dd>
          </div>
        </dl>
        <div className="flex flex-wrap gap-3 items-stretch">
          <a
            href={`mailto:${EMAIL}`}
            className="bg-[var(--foreground)] text-[var(--background)] px-6 py-3 text-sm font-medium hover:bg-[var(--accent)] transition-colors inline-flex items-center"
          >
            {EMAIL}
          </a>
          <a
            href="/resume"
            className="border border-[var(--foreground)] px-6 py-3 text-sm font-medium hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors inline-flex items-center"
          >
            Résumé
          </a>
          <a
            href="https://www.linkedin.com/in/montserratfleck"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--foreground)] px-6 py-3 text-sm font-medium hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors inline-flex items-center"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://instagram.com/montserratfleck"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--foreground)] px-6 py-3 text-sm font-medium hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors inline-flex items-center"
          >
            @montserratfleck ↗
          </a>
        </div>
      </section>

      <footer className="mx-auto max-w-5xl w-full px-6 py-10 text-sm text-[var(--foreground)]/80 border-t border-[var(--rule)] flex flex-wrap items-center justify-between gap-3">
        <span>© 2026 Montserrat Fleck · New York, NY</span>
        <a href="#main" className="hover:text-[var(--accent)] transition-colors no-print">
          Back to top ↑
        </a>
      </footer>
    </main>
  );
}
