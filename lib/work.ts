/**
 * Single source of truth for the work section and the case study pages.
 *
 * Rule for this file: every number here has a before and an after behind it.
 * Nothing gets a figure it cannot survive being asked about in an interview.
 */

export type Tech = { label: string; slug?: string };

export type Metric = {
  value: string;
  label: string;
  /** How it was measured. Shown on the case study, not on the card. */
  basis?: string;
};

export type Decision = {
  title: string;
  problem: string;
  decision: string;
  tradeoff: string;
  result: string;
};

export type Project = {
  slug: string;
  n: string;
  name: string;
  /** One line, under the title, on the card. */
  tagline: string;
  role: string;
  period: string;
  /** Set when the product is live, shown as a pulsing marker. */
  liveNote?: string;
  link?: { href: string; label: string };
  /** Why there is no repository link. */
  access: string;
  /** The card paragraph. Two sentences, no more. */
  summary: string;
  /** What this person personally owned. The single most useful thing on the page. */
  owned: string[];
  /** The engineering problem worth talking about. */
  hardPart: string;
  metrics: Metric[];
  stack: Tech[];
  /**
   * Drop a screenshot into /public and name it here to replace the diagram
   * on the card and at the top of the case study. e.g. "/work/tour-booking.png".
   */
  shot?: string;
  shotAlt?: string;
  study?: {
    problem: string[];
    responsibility: string;
    surfaces?: { name: string; body: string }[];
    decisions: Decision[];
    outcome: string[];
    /** Deliberate non-goals. Reads as judgement, not as a gap. */
    notBuilt?: string[];
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "tour-booking-marketplace",
    n: "01",
    name: "Tour Booking Marketplace",
    tagline: "Four role portals on one backend, live across Spain and Europe",
    role: "Lead full-stack engineer · Octogle Technologies",
    period: "Jul 2025 to now",
    liveNote: "Live in Spain and Europe",
    access: "Client codebase, not public",
    summary:
      "Production SaaS for booking walking tours, boat experiences and local activities. I took it from an empty repository to production and guided the three engineers building it with me.",
    owned: [
      "Architecture",
      "REST API",
      "Auth and RBAC",
      "Caching",
      "Background jobs",
      "Database schema",
      "Frontend",
      "CI/CD",
      "Team guidance",
    ],
    hardPart:
      "Four product surfaces — Customer, Guide, Tour Operator and Admin — had to run against one backend while each kept its own permissions, its own workflow and its own idea of what a booking means.",
    metrics: [
      {
        value: "~40%",
        label: "fewer redundant database queries",
        basis:
          "Query counts per booking request, sampled before and after the Redis read-through cache landed.",
      },
      {
        value: "~30%",
        label: "lower average page load",
        basis:
          "Average page load across the customer portal, same routes, before and after caching and query tuning.",
      },
      {
        value: "~60%",
        label: "fewer auth support issues",
        basis:
          "Auth-related support tickets per month, before and after replacing the third-party provider with the custom JWT and RBAC layer.",
      },
      {
        value: "< 10 min",
        label: "release, from hours of manual work",
        basis: "Wall-clock time from merge to deployed, on the Docker and Railway pipeline.",
      },
    ],
    stack: [
      { label: "React", slug: "react" },
      { label: "TypeScript", slug: "typescript" },
      { label: "Node.js", slug: "nodedotjs" },
      { label: "Express", slug: "express" },
      { label: "PostgreSQL", slug: "postgresql" },
      { label: "TypeORM", slug: "typeorm" },
      { label: "Redis", slug: "redis" },
      { label: "BullMQ" },
      { label: "Docker", slug: "docker" },
      { label: "Railway", slug: "railway" },
    ],
    study: {
      problem: [
        "Tour operators across Spain and Europe were running bookings through a mix of spreadsheets, email and phone calls. The business needed one marketplace where a customer books an experience, a guide sees their assigned schedule, an operator manages their listings and availability, and an internal admin can see and correct all of it.",
        "The catch is that those four groups do not want the same product. They share a booking, a calendar and a payment, and they agree on almost nothing else.",
      ],
      responsibility:
        "I owned the application architecture and led the build from an empty repository through to production, with a three-person team working to me and reporting to the CEO.",
      surfaces: [
        {
          name: "Customer",
          body: "Search, availability, booking and confirmation. The only surface tuned for people who have never seen the product before.",
        },
        {
          name: "Guide",
          body: "Assigned tours, schedule and headcount. Read-heavy, opened on a phone, often on bad signal.",
        },
        {
          name: "Tour Operator",
          body: "Listings, pricing, availability windows and the bookings against them. The surface that writes the most.",
        },
        {
          name: "Admin",
          body: "The full picture, plus the ability to correct any of it. Every action here is a privileged write.",
        },
      ],
      decisions: [
        {
          title: "Custom JWT and RBAC instead of the third-party auth provider",
          problem:
            "The hosted provider modelled users, not roles-within-a-tenant. Encoding four portals with different permissions on top of it meant a growing pile of workarounds, and auth confusion was the single largest source of support tickets.",
          decision:
            "Replace it with a JWT layer owned in the codebase, with role-based access control enforced at the API boundary rather than in the UI.",
          tradeoff:
            "Taking on token rotation, revocation and session handling that the provider had been doing. That is real work and real risk, accepted in exchange for permissions the product could actually express.",
          result:
            "Permission rules live in one place and are testable. Auth-related support issues fell by roughly 60%.",
        },
        {
          title: "Redis read-through cache in front of the booking reads",
          problem:
            "Availability, listing and pricing data were being read on nearly every request across four portals, and almost never changed between reads. The database was absorbing the same queries repeatedly.",
          decision:
            "Cache the high-read, low-volatility data in Redis, and invalidate on write from the operator surface rather than expiring on a timer alone.",
          tradeoff:
            "Invalidation complexity. A stale availability record is worse than a slow one, so the write paths had to be disciplined about eviction.",
          result:
            "Redundant database queries fell about 40%, and average page load about 30%.",
        },
        {
          title: "BullMQ queues instead of doing the work inside the request",
          problem:
            "Booking confirmations and notifications were being sent inside the request that created the booking. A slow or failing mail provider became a slow or failing booking.",
          decision:
            "Move notification and confirmation work onto BullMQ queues with retries, so the request commits the booking and returns.",
          tradeoff:
            "Introduces a worker process to run and monitor, and makes delivery eventual rather than immediate. The booking is the thing that must be synchronous. The email is not.",
          result:
            "A failing downstream provider retries instead of taking the booking path down with it.",
        },
        {
          title: "Role-specific frontends rather than one app with conditionals",
          problem:
            "A single app branching on role would have meant every screen carrying the logic of four products, and shipping a change to one audience risked all four.",
          decision:
            "Separate frontends per role against a shared, versioned API, with shared primitives extracted rather than shared screens.",
          tradeoff:
            "Some duplication across surfaces, and four things to deploy instead of one. Worth it for blast radius: a guide-portal change cannot break checkout.",
          result:
            "Each surface can be tuned for how it is actually used, and released without a four-way regression pass.",
        },
        {
          title: "Docker and Railway for releases",
          problem:
            "Releases were manual and took hours, which meant they happened rarely, which meant each one carried more change and more risk.",
          decision:
            "Containerise the services and put them behind a CI/CD pipeline anyone on the team can trigger.",
          tradeoff:
            "Managed infrastructure over self-hosted control, chosen deliberately for a three-person team with no platform engineer.",
          result: "Merge to deployed in under ten minutes, by any engineer on the team.",
        },
      ],
      outcome: [
        "Running in production across Spain and Europe with four role portals against one backend.",
        "Redundant database queries down about 40%, average page load down about 30%.",
        "Auth-related support issues down roughly 60%.",
        "Releases down from hours of manual work to under ten minutes.",
      ],
      notBuilt: [
        "No microservices. Three engineers and one product do not need a distributed system, and the operational cost would have landed on the same three people.",
        "No custom design system. Shared primitives only, extracted when a second surface actually needed them.",
        "No self-hosted infrastructure. Managed platform, so the team's time goes to the product.",
      ],
    },
  },
  {
    slug: "recruiter-marketplace",
    n: "02",
    name: "AI-Powered Recruiter Marketplace",
    tagline: "Four independent platforms, one commission-bearing permission model",
    role: "Full-stack engineer · Octogle Technologies",
    period: "2025",
    access: "Client codebase, not public",
    summary:
      "A talent marketplace where employers post vacancies, independent recruiters bid and refer candidates for commission, and an admin oversees the whole exchange. I built the permission hierarchies, the matching workflows and the candidate pipeline.",
    owned: [
      "Permission hierarchies",
      "Job-matching workflows",
      "Candidate pipeline",
      "REST API",
      "Frontend",
    ],
    hardPart:
      "Money changes what a permission means. A recruiter can see a candidate they referred, an employer can see candidates referred to their vacancy, and neither can see the other's book of business — all on shared records, with commission attached to who introduced whom.",
    metrics: [
      { value: "4", label: "independent platforms" },
      { value: "1", label: "shared permission model" },
    ],
    stack: [
      { label: "React", slug: "react" },
      { label: "Vite", slug: "vite" },
      { label: "TypeScript", slug: "typescript" },
      { label: "Node.js", slug: "nodedotjs" },
      { label: "PostgreSQL", slug: "postgresql" },
      { label: "JWT", slug: "jsonwebtokens" },
    ],
    study: {
      problem: [
        "Employers with vacancies and independent recruiters with candidate networks had no shared place to transact. The product opens that market: employers post vacancies, recruiters bid on them, refer candidates, and earn commission when a referral converts.",
        "That commission is what makes the data model hard. A candidate record is visible to different parties for different reasons, and the referral chain that determines who gets paid has to hold even as the candidate moves through the pipeline.",
      ],
      responsibility:
        "I implemented the permission hierarchies, the job-matching workflows and the candidate pipeline system across Employer, Recruiter, Candidate and Admin platforms.",
      surfaces: [
        { name: "Employer", body: "Post vacancies, review referred candidates, accept bids." },
        { name: "Recruiter", body: "Bid on vacancies, refer candidates, track commission." },
        { name: "Candidate", body: "Their own profile and their own applications, and nothing else." },
        { name: "Admin", body: "Oversight of the exchange, including disputes over attribution." },
      ],
      decisions: [
        {
          title: "Permissions derived from the referral relationship, not from a role alone",
          problem:
            "Role alone cannot answer whether a recruiter may see a candidate. Two recruiters have identical roles and must see completely different candidates.",
          decision:
            "Scope access by the relationship between the actor and the record — who referred whom, against which vacancy — and check it at the API boundary.",
          tradeoff:
            "Every read carries a relationship check rather than a simple role comparison, which is more expensive and more code. It is also the only version that is correct when commission is on the line.",
          result:
            "A recruiter's book of business stays theirs, and attribution survives the candidate moving through the pipeline.",
        },
        {
          title: "A pipeline with explicit states rather than a status string",
          problem:
            "A candidate moves through referral, review, interview and outcome, and several parties act on the same record. A free-form status field makes disputed transitions unanswerable.",
          decision:
            "Model the pipeline as explicit states with defined transitions, so who moved a candidate and when is a recorded fact.",
          tradeoff: "Less flexible than a string. That is the point.",
          result: "Attribution disputes become a question of reading history rather than of arguing.",
        },
      ],
      outcome: [
        "Four platforms running against one backend and one permission model.",
        "Commission attribution that holds across the full candidate pipeline.",
      ],
    },
  },
  {
    slug: "sendkart",
    n: "03",
    name: "Sendkart",
    tagline: "A no-code site builder for small businesses",
    role: "Solo build",
    period: "2025",
    link: { href: "https://sendkart.in", label: "sendkart.in" },
    access: "Solo project",
    summary:
      "A SaaS platform that lets a small business put a mini website together without writing code: drag-and-drop blocks, QR code integration and built-in feedback collection.",
    owned: ["Everything"],
    hardPart:
      "A builder is two products wearing one coat: an editor for someone who has never built a page, and a renderer whose output has to load fast on a phone in a shop.",
    metrics: [{ value: "Live", label: "at sendkart.in" }],
    stack: [
      { label: "Next.js", slug: "nextdotjs" },
      { label: "React", slug: "react" },
      { label: "TypeScript", slug: "typescript" },
      { label: "PostgreSQL", slug: "postgresql" },
    ],
  },
];

export function projectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

/** Cards on the homepage. Sendkart is real but small; it reads as a footnote. */
export const FEATURED = PROJECTS.filter((p) => p.study);
export const SIDE = PROJECTS.filter((p) => !p.study);
