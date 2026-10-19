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
    default: "Wallace Ogundo | Managing Director & Commercial Strategy Executive",
    template: "%s | Wallace Ogundo",
  },
  description:
    "Executive portfolio of Wallace Ogundo: Managing Director and Commercial Strategy Executive uniting capital infrastructure delivery with regional FMCG route-to-market scaling, bulk procurement, and corporate governance across East Africa.",
  keywords: [
    "Wallace Ogundo",
    "Wallace Ogundo Kenya",
    "Managing Director Kenya",
    "Commercial Strategy Executive",
    "Construction Project Management Kenya",
    "B2B Route to Market East Africa",
    "Ziyawall Limited Director",
    "Industrial Procurement Nairobi",
    "Engineering & Mechanical Services Kenya",
    "Corporate Governance Nairobi",
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
    title: "Wallace Ogundo | Managing Director & Commercial Strategy Executive",
    description:
      "Executive leadership uniting capital infrastructure delivery with high-velocity commercial route-to-market execution across Kenya and East Africa.",
    url: siteUrl,
    siteName: "Wallace Ogundo Executive Portfolio",
    locale: "en_KE",
    type: "profile",
    images: [
      {
        url: "/wallace-avatar.png",
        width: 800,
        height: 800,
        alt: "Wallace Ogundo - Managing Director & Commercial Strategy Executive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wallace Ogundo | Managing Director & Commercial Strategy Executive",
    description:
      "Executive leadership uniting capital infrastructure delivery with high-velocity commercial route-to-market execution across Kenya and East Africa.",
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
        jobTitle: "Managing Director & Commercial Strategy Executive",
        description:
          "Managing Director and Commercial Strategy Executive based in Nairobi, Kenya, offering over 17 years of leadership uniting capital infrastructure delivery, engineering management, bulk industrial procurement, and FMCG route-to-market execution across East Africa.",
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
          "Commercial Strategy & Board Governance",
          "B2B Route-to-Market Strategy",
          "Capital Construction & Infrastructure Management",
          "Engineering & Mechanical Maintenance Coordination",
          "Industrial Procurement & Supply Chain",
          "Tender & Commercial Contract Bidding",
          "FMCG Distribution & Brand Growth",
        ],
        sameAs: ["https://www.linkedin.com"],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#practice`,
        name: "Wallace Ogundo Executive Practice",
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
        name: "Wallace Ogundo | Managing Director & Commercial Strategy Executive",
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
