import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://wallaceogundo.co.ke";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wallace Ogundo — Marketing & Business Development Strategist | Operations Leader",
    template: "%s | Wallace Ogundo",
  },
  description:
    "Official executive portfolio of Wallace Ogundo: Marketing & Business Development Strategist, Operations Leader, and Commercial Growth Architect based in Nairobi, Kenya.",
  keywords: [
    "Wallace Ogundo",
    "Wallace Ogundo Kenya",
    "Wallace Ogundo Nairobi",
    "Wallace Ogundo Portfolio",
    "Wallace Ogundo Marketing",
    "Wallace Ogundo Operations",
    "Marketing Strategist Kenya",
    "Business Development Leader Nairobi",
    "Commercial Operations Director East Africa",
    "B2B Enterprise Growth Kenya",
  ],
  authors: [{ name: "Wallace Ogundo", url: siteUrl }],
  creator: "Wallace Ogundo",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Wallace Ogundo — Marketing & Business Development Strategist",
    description:
      "Executive portfolio of Wallace Ogundo: Architecting high-conversion market expansion, enterprise B2B partnerships, and agile commercial operations across East Africa.",
    url: siteUrl,
    siteName: "Wallace Ogundo Executive Portfolio",
    locale: "en_KE",
    type: "profile",
    images: [
      {
        url: "/wallace-avatar.png",
        width: 800,
        height: 800,
        alt: "Wallace Ogundo — Executive Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wallace Ogundo — Marketing & Business Development Strategist",
    description:
      "Senior Marketing & Business Development Strategist and Operations Leader based in Nairobi, Kenya.",
    images: ["/wallace-avatar.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Wallace Ogundo",
        givenName: "Wallace",
        familyName: "Ogundo",
        url: siteUrl,
        image: `${siteUrl}/wallace-avatar.png`,
        jobTitle: "Marketing & Business Development Strategist / Operations Leader",
        description:
          "Senior Marketing & Business Development Strategist, Operations Leader, and Enterprise Commercial Growth Architect based in Nairobi, Kenya.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nairobi",
          addressCountry: "KE",
        },
        sameAs: [
          "https://www.linkedin.com",
          "https://twitter.com",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Wallace Ogundo — Official Executive Portfolio",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/wallace-avatar.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-obsidian-950 text-neutral-100 antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
