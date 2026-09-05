import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const SITE = "https://prasannawagh.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Prasanna Wagh · Full-Stack Engineer",
  description:
    "Full-stack engineer in Pune, open to hybrid roles. React, Node.js, TypeScript and PostgreSQL. Currently leading a tour booking marketplace running across Spain and Europe.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Pune",
  ],
  authors: [{ name: "Prasanna Wagh" }],
  openGraph: {
    type: "website",
    url: SITE,
    title: "Prasanna Wagh · Full-Stack Engineer",
    description:
      "Open to full-stack engineering roles, hybrid in Pune. I build multi-role SaaS end to end, with production platforms running across Spain and Europe.",
    siteName: "Prasanna Wagh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prasanna Wagh · Full-Stack Engineer",
    description:
      "Open to full-stack roles in Pune. I build multi-role SaaS end to end with React, Node.js, TypeScript and PostgreSQL.",
  },
  alternates: { canonical: SITE },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0763a8",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Prasanna Wagh",
  jobTitle: "Full-Stack Engineer",
  email: "mailto:prasannawagh146@gmail.com",
  telephone: "+91-7798701635",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/prasanna-wagh27",
    "https://www.linkedin.com/in/prasanna-wagh27",
  ],
  seeks: {
    "@type": "Demand",
    name: "Full-stack engineering roles, Pune, hybrid",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "Docker",
    "System Design",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
