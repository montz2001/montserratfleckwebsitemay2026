"use client";

import Link from "next/link";
import "./resume.css";

export default function ResumePage() {
  return (
    <>
      <div className="resume-actions no-print">
        <Link href="/" className="resume-back">
          ← Back to portfolio
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="resume-print-btn"
        >
          Save as PDF
        </button>
      </div>

      <article className="resume-doc">
        <header className="resume-header">
          <h1>Montserrat Fleck</h1>
          <p className="resume-contact">
            (425) 877-MONTI &nbsp;·&nbsp; monti@flexgames.com &nbsp;·&nbsp;{" "}
            <a href="https://www.linkedin.com/in/montserratfleck">LinkedIn</a>
          </p>
        </header>

        <section>
          <h2>Experience</h2>

          <div className="job">
            <div className="job-header">
              <span>
                <em>Social Coordinator, Franchises Team</em>,{" "}
                <strong>Paramount TV Marketing</strong>
              </span>
              <span>Nov 2025 – Present</span>
            </div>
            <ul>
              <li>
                Built and run the Threads playbook end-to-end for @garfield,
                @spongebob, @tmnt, @startrek, and @avatarlegends. Strategy,
                per-brand voice, copy, and community. @garfield: 3.8M views
                and +218K new followers in 90 days, no paid spend.
              </li>
              <li>
                Hands-on for the bulk of the Marshals premiere social rollout:
                500+ posts across Marshals, CBS, Paramount+ International, and
                Paramount Support handles. Totals: 200M+ views, 4M+
                engagements.
              </li>
              <li>
                Owned the IG Collab approval workflow across four talent and
                account teams during the Marshals launch (Luke Grimes,
                Yellowstone, CBS, Paramount+). Collab posts averaged ~42K
                engagements vs. ~6K on non-collab.
              </li>
              <li>
                Partnered with a senior IP marketing manager on the 68th
                GRAMMYs and the CBS fall schedule rollout. Wrote live captions
                and paid-promo dark posts under partner brief for 6+ paid
                partnerships including Allstate (Olivia Dean, Best New
                Artist), IBM watsonx (Teddy Swims red carpet, GRAMMY IQ), and
                Ulta Beauty (Addison Rae).
              </li>
              <li>
                Cover international publishing across 9 markets (AU, CA, UK,
                FR, DE, BR, AR, MX, IT) plus English publishing across every
                Nickelodeon handle. No missed slots.
              </li>
              <li>
                Run brand voice, strategy, asset ideation, community
                management, and growth strategy for Nickelodeon, Nickelodeon
                Family, CBS, SpongeBob, Star Trek, Garfield, TMNT, Avatar, and
                PAW Patrol. Co-leading the PAW Patrol Dino release with
                Spinmaster.
              </li>
              <li>
                Manage moderation and brand safety across the kid-facing
                portfolio under COPPA. Worked alongside enterprise vendors
                including ZeroFox on impersonation monitoring, harmful-content
                flags, and takedown queues.
              </li>
            </ul>
          </div>

          <div className="job">
            <div className="job-header">
              <span>
                <em>Social Media Manager</em>,{" "}
                <strong>Two Tomatoes Records · Laurie Berkner Band</strong>
              </span>
              <span>Jul 2024 – Oct 2025</span>
            </div>
            <ul>
              <li>
                Doubled the band&apos;s following across Facebook, Instagram,
                and TikTok, reaching nearly 300K followers and 2M+ video views
                in the first quarter.
              </li>
              <li>
                Created and led viral campaigns (Berkner Breaks After Dark,
                The Berkner Bracket, Let&apos;s Write a Song) driving
                multi-generational engagement from millennial parents to Gen
                Alpha kids.
              </li>
              <li>
                Directed creative partnerships with Tonies, Kidz Bop, Bjorem
                Speech, Yoto Cards, and YouTube Kids; activated TikTok Shop
                and supported Shopify DTC sales with targeted IG Story boosts.
              </li>
              <li>
                Increased ad performance 25 to 30 percent through Meta Ads
                Manager, ManyChat flows, and audience-driven campaign testing.
                Handled hand moderation and community management across all
                platforms under COPPA.
              </li>
            </ul>
          </div>

          <div className="job">
            <div className="job-header">
              <span>
                <em>Volunteer Leadership (Coordinator → Manager)</em>,{" "}
                <strong>Children&apos;s Media Association</strong>
              </span>
              <span>Jan 2023 – Feb 2026</span>
            </div>
            <ul>
              <li>
                Three years of volunteer leadership at the industry
                organization for kids and family media. Promoted twice across
                social, ops, and email.
              </li>
              <li>
                Started as Global Engagement Coordinator, owning a weekly
                cross-channel social cadence across LinkedIn, Instagram,
                TikTok, Facebook, and Twitter as the point person for
                CMA&apos;s digital channels.
              </li>
              <li>
                Promoted to Global Engagement Manager, then to Global
                Operations Coordinator &amp; Email Manager. Owned the
                WordPress backend, member support and renewals, NYC Storytime
                event logistics two years running, and the internal systems
                (Airtable, Google Drive, Sheets) the org ran on through
                significant membership growth.
              </li>
            </ul>
          </div>

          <div className="job">
            <div className="job-header">
              <span>
                <em>TV Development / Current Series Intern</em>,{" "}
                <strong>DreamWorks Animation</strong>
              </span>
              <span>Jun 2022 – Sept 2022</span>
            </div>
            <ul>
              <li>
                Selected as Intern Ambassador for the Summer 2022 cohort,
                leading comms between Early Careers leadership, intern
                managers, and the 30 interns. Designed cohort flyers, ran the
                group chat, and partnered with Early Careers on cohort
                programming.
              </li>
              <li>
                Built a 200+ artist database and covered EA duties for Vanessa
                Taylor Sands across calls, scheduling, and admin.
              </li>
            </ul>
          </div>

          <div className="job">
            <div className="job-header">
              <span>
                <em>Development Intern</em>, <strong>Milojo Productions</strong>
              </span>
              <span>Jan 2022 – May 2022</span>
            </div>
            <ul>
              <li>
                Presented coverage reports on project viability to Kelly Ripa
                and Mark Consuelos&apos; production company. Ran the
                company&apos;s Meta (IG, FB) and TikTok accounts and supported
                clients with podcast editing and social management.
              </li>
            </ul>
          </div>

          <div className="job">
            <div className="job-header">
              <span>
                <em>Creative Careers Marketing Cohort</em>,{" "}
                <strong>Warner Bros. Discovery</strong>
              </span>
              <span>Mar 2022 – May 2022</span>
            </div>
            <ul>
              <li>
                Synthesized interviewer feedback, executive briefings, and
                market research into a Gen Z target customer profile and SWOT
                analysis. Built a social-led go-to-market strategy for
                discovery+ that fed into the Max + discovery+ integration
                pitch.
              </li>
            </ul>
          </div>

          <div className="job">
            <div className="job-header">
              <span>
                <em>Pre-Production Intern</em>,{" "}
                <strong>Inner Child Productions</strong>
              </span>
              <span>Sept 2021 – Jan 2022</span>
            </div>
            <ul>
              <li>
                Pre-production on 20+ feature films and TV series supervised
                by producer Debbie Liebling (South Park, PEN15). Covered
                pilots and screenplays weekly.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Education</h2>
          <p className="resume-line">
            <strong>New York University</strong> · New York, NY &nbsp;&nbsp;
            Tisch School of the Arts | BFA, Dramatic Writing
            <br />
            Honors: <em>magna cum laude</em> &nbsp;&nbsp; Minors: Comedy
            Writing, Child &amp; Adolescent Mental Health Studies
          </p>
        </section>

        <section>
          <h2>Skills</h2>
          <p className="resume-line">
            <strong>Tools:</strong> Final Draft, Final Cut, Adobe Creative
            Suite, Microsoft 365, Google Workspace, Airtable, Shopify, Shotgrid
          </p>
          <p className="resume-line">
            <strong>Social:</strong> Sprinklr, Hootsuite, ManyChat, Meta
            Business Suite, Meta Ads Manager, ClickUp, Monday, Canva
          </p>
          <p className="resume-line">
            <strong>Brand safety:</strong> COPPA-compliant moderation,
            enterprise vendor experience (ZeroFox-tier), formal Gen Alpha
            training (YouTube Kids creator-track)
          </p>
        </section>

        <section>
          <h2>Passions</h2>
          <p className="resume-line">
            Arts &amp; Crafts, Chameleons, Cornish Rexes, Interior Design,
            Kaiju, LEGO, Spreadsheeting Everything
          </p>
        </section>
      </article>
    </>
  );
}
