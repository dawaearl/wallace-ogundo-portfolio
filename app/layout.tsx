import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://www.wallaceogundo.co.ke";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wallace Ogundo | Marketing & Business Development Strategist",
    template: "%s | Wallace Ogundo",
  },
  description:
    "Executive portfolio of Wallace Ogundo: Marketing & Business Development Strategist helping industrial companies and regional brands scale B2B distribution, strategic partnerships, and market expansion across East Africa.",
  keywords: [
    "Wallace Ogundo",
    "Wallace Ogundo Kenya",
    "Marketing & Business Development Strategist Kenya",
    "B2B Commercial Director Nairobi",
    "Route to Market Strategy East Africa",
    "Industrial Business Development Kenya",
    "Ziyawall Limited",
    "Go-to-Market Strategist Nairobi",
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
    title: "Wallace Ogundo | Marketing & Business Development Strategist",
    description:
      "Building High-Velocity Commercial Engines in East Africa. Scaling B2B distribution, strategic partnerships, and sustainable market expansion.",
    url: siteUrl,
    siteName: "Wallace Ogundo Executive Portfolio",
    locale: "en_KE",
    type: "profile",
    images: [
      {
        url: "/wallace-avatar.png",
        width: 800,
        height: 800,
        alt: "Wallace Ogundo - Marketing & Business Development Strategist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wallace Ogundo | Marketing & Business Development Strategist",
    description:
      "Helping industrial leaders and regional brands scale B2B distribution, strategic partnerships, and sustainable market expansion across East Africa.",
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
        jobTitle: "Marketing & Business Development Strategist",
        description:
          "Marketing and Business Development Strategist based in Nairobi, Kenya, specializing in B2B route-to-market scaling, enterprise deal structuring, and industrial commercial growth across East Africa.",
        email: "mailto:info@wallaceogundo.co.ke",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nairobi",
          addressCountry: "KE",
        },
        worksFor: {
          "@type": "Organization",
          name: "Ziyawall Limited",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nairobi",
            addressCountry: "KE",
          },
        },
        alumniOf: [
          {
            "@type": "CollegeOrUniversity",
            name: "Dedan Kimathi University of Technology",
            department: "BSc Construction Management",
          },
          {
            "@type": "CollegeOrUniversity",
            name: "University of Nairobi",
            department: "BSc Computer Science",
          },
          {
            "@type": "CollegeOrUniversity",
            name: "Jomo Kenyatta University of Agriculture and Technology",
            department: "BA Public Relations",
          },
        ],
        knowsAbout: [
          "B2B Route-to-Market Strategy",
          "Enterprise Business Development",
          "Go-To-Market Execution",
          "Distributor Network Scaling",
          "Industrial B2B Sales & Key Accounts",
          "Commercial Operations & Margin Growth",
        ],
        sameAs: ["https://www.linkedin.com"],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#practice`,
        name: "Wallace Ogundo Marketing & B2B Growth Practice",
        url: siteUrl,
        image: `${siteUrl}/images/logo.png`,
        email: "info@wallaceogundo.co.ke",
        priceRange: "$$$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nairobi",
          addressRegion: "Nairobi County",
          addressCountry: "KE",
        },
        areaServed: [
          { "@type": "Country", name: "Kenya" },
          { "@type": "Country", name: "Uganda" },
          { "@type": "Country", name: "Tanzania" },
          { "@type": "Country", name: "Rwanda" },
        ],
        founder: {
          "@id": `${siteUrl}/#person`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Wallace Ogundo | Marketing & Business Development Strategist",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`dark ${jakarta.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-[100dvh] bg-obsidian-950 text-bone antialiased">
        {children}
      </body>
    </html>
  );
}
