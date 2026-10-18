/**
 * ==============================================================================
 * WALLACE OGUNDO / MOBILE-FIRST MARKETING & BUSINESS DEVELOPMENT PORTFOLIO DATA
 * ==============================================================================
 */

export interface MetricItem {
  value: string;
  label: string;
  sub: string;
}

export interface CaseStudy {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  mandateRole: string;
  image: string;
  period: string;
  location: string;
  metrics: { label: string; value: string }[];
  challenge: string; // 1-sentence Context
  solution: string; // 1-sentence Strategic Action
  impactSummary: string; // 1-sentence Verified Outcome
  results: string[];
}

export interface DisciplineItem {
  index: string;
  title: string;
  summary: string;
  vectors: string[];
}

export interface AcademicCredential {
  degree: string;
  institution: string;
  summaryLine: string;
}

export interface MediaItem {
  id: string;
  type: "video" | "image";
  title: string;
  category: string;
  thumbnail: string;
  videoUrl?: string;
  duration?: string;
  date: string;
  description: string;
  metrics?: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    firstName: string;
    lastName: string;
    monogram: string;
    role: string;
    shortRole: string;
    location: string;
    regionBadge: string;
    email: string;
    phone: string;
    whatsApp: string;
    linkedIn: string;
    twitterX: string;
    avatarImage: string;
    portraitImage: string;
    monolithImage: string;
    logoImage: string;
    verifiedBadgeText: string;
    statusBadgeText: string;
  };
  hero: {
    eyebrow: string;
    headlineLines: [string, string, string];
    supportingThesis: string;
    ctaPrimaryText: string;
    ctaSecondaryText: string;
    whatsAppPrefill: string;
    metrics: MetricItem[];
  };
  expertise: {
    sectionIndex: string;
    headlineLines: [string, string];
    subheadline: string;
    disciplines: DisciplineItem[];
  };
  projects: CaseStudy[];
  media: MediaItem[];
  credentials: {
    sectionIndex: string;
    headlineLines: [string, string];
    shortBio: string;
    degrees: AcademicCredential[];
  };
  contact: {
    sectionIndex: string;
    rightTag: string;
    headlineLines: [string, string, string];
    subheadline: string;
    availabilityNote: string;
    officeHours: string;
    objectives: {
      id: string;
      label: string;
      scope: string;
    }[];
  };
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Wallace Ogundo",
    firstName: "Wallace",
    lastName: "Ogundo",
    monogram: "WO",
    role: "Marketing & Business Development Strategist",
    shortRole: "MARKETING & B2B GROWTH PRACTICE",
    location: "Nairobi, Kenya",
    regionBadge: "Kenya / East Africa",
    email: "info@wallaceogundo.co.ke",
    phone: "",
    whatsApp: "254722604247",
    linkedIn: "https://www.linkedin.com",
    twitterX: "https://twitter.com",
    avatarImage: "/wallace-avatar.png",
    portraitImage: "/wallace-avatar.png",
    monolithImage: "/images/rock-monolith.jpg",
    logoImage: "/images/logo.png",
    verifiedBadgeText: "Verified Commercial Practice",
    statusBadgeText: "Open for Commercial & B2B Mandates",
  },

  hero: {
    eyebrow: "WO / MARKETING & BUSINESS DEVELOPMENT STRATEGIST",
    headlineLines: [
      "Building High-Velocity",
      "Commercial Engines",
      "in East Africa.",
    ],
    supportingThesis:
      "Helping industrial leaders and regional brands scale B2B distribution, strategic partnerships, and sustainable market expansion.",
    ctaPrimaryText: "Chat on WhatsApp",
    ctaSecondaryText: "View Track Record",
    whatsAppPrefill:
      "Hello Wallace, I visited wallaceogundo.co.ke and would like to discuss a Marketing & Business Development mandate.",
    metrics: [
      {
        value: "15+ Yrs",
        label: "Commercial Leadership",
        sub: "Marketing, B2B & Operations",
      },
      {
        value: "KES 180M+",
        label: "B2B Pipeline",
        sub: "Industrial & Corporate Deals",
      },
      {
        value: "650+",
        label: "Trade Accounts",
        sub: "Active Distributor Network",
      },
      {
        value: "EAC Wide",
        label: "Market Footprint",
        sub: "Kenya, Uganda, Tanzania & Rwanda",
      },
    ],
  },

  expertise: {
    sectionIndex: "01 / WHAT I DO",
    headlineLines: ["Three commercial pillars.", "One growth engine."],
    subheadline:
      "Focused Marketing and Business Development leadership for industrial, manufacturing, and regional B2B enterprises.",
    disciplines: [
      {
        index: "01",
        title: "B2B Route-to-Market & Distributor Scaling",
        summary:
          "Designing high-yield territory architectures, distributor SLA frameworks, and numeric distribution engines across East Africa.",
        vectors: ["Territory Design", "Distributor SLAs", "Channel Incentives"],
      },
      {
        index: "02",
        title: "Enterprise Deal Structuring & Key Accounts",
        summary:
          "Forging multi-year corporate supply alliances, industrial key-account partnerships, and high-conversion institutional bids.",
        vectors: ["B2B Alliances", "Key Account Growth", "Commercial Bidding"],
      },
      {
        index: "03",
        title: "Go-To-Market Strategy & Revenue Turnaround",
        summary:
          "Launching and repositioning product lines with empirical pricing architecture, sales-force telemetry, and margin discipline.",
        vectors: ["GTM Playbooks", "Pricing Strategy", "Sales Enablement"],
      },
    ],
  },

  projects: [
    {
      id: "ziyawall-b2b-expansion",
      index: "01",
      title: "Ziyawall Limited",
      subtitle: "Industrial B2B Growth & Corporate Supply Alliances",
      category: "INDUSTRIAL B2B / COMMERCIAL EXPANSION",
      mandateRole: "Managing Director & Commercial Lead",
      image: "/images/rock-monolith.jpg",
      period: "2016 - Present",
      location: "Nairobi & Nationwide, Kenya",
      metrics: [
        { label: "Contract Volume", value: "KES 180M+" },
        { label: "Gross Margin Lift", value: "+22%" },
        { label: "Client Retention", value: "94%" },
      ],
      challenge:
        "Industrial buyers and corporate developers faced fragmented vendor supply chains and unpredictable contract pricing across Kenya.",
      solution:
        "Repositioned the commercial offering around multi-year B2B supply agreements, key-account SLAs, and direct factory-gate sourcing.",
      impactSummary:
        "Scaled annual commercial contract volume from KES 45M to KES 180M+ while lifting gross margins by 22% across repeat corporate accounts.",
      results: [
        "Grew active corporate pipeline to KES 180M+ across industrial and institutional accounts.",
        "Protected 22% in gross margin through direct vendor framework agreements.",
      ],
    },
    {
      id: "fmcg-rtm-transformation",
      index: "02",
      title: "Wrigley East Africa & Formula One Kenya",
      subtitle: "Regional Route-to-Market & Channel Transformation",
      category: "FMCG & COMMERCIAL / ROUTE-TO-MARKET",
      mandateRole: "Regional Commercial & Territory Leadership",
      image: "/images/rock-monolith.jpg",
      period: "Regional Tenure",
      location: "Kenya & East African Corridor",
      metrics: [
        { label: "Active Accounts", value: "650+" },
        { label: "Sell-Through Lift", value: "+38%" },
        { label: "Fulfillment Cycle", value: "4 Days" },
      ],
      challenge:
        "Distributor churn and 14-day fulfillment lags slowed sell-through velocity between urban wholesalers and regional retail stockists.",
      solution:
        "Restructured 14 primary distribution territories, introduced tier-based volume rebates, and deployed daily field-sales telemetry.",
      impactSummary:
        "Expanded active commercial stockists to 650+ accounts, lifting territory sell-through by 38% and cutting replenishment to 4 days.",
      results: [
        "Scaled active wholesale and retail distribution network to 650+ verified outlets.",
        "Cut order-to-delivery turnaround from 14 days to 4 days across regional hubs.",
      ],
    },
    {
      id: "enterprise-b2b-pipeline",
      index: "03",
      title: "Enterprise B2B Partnerships & Market Entry",
      subtitle: "Institutional Deal Structuring & Go-To-Market Execution",
      category: "B2B STRATEGY / KEY ACCOUNT ACQUISITION",
      mandateRole: "Commercial Growth & GTM Advisor",
      image: "/images/rock-monolith.jpg",
      period: "Multi-Market Advisory",
      location: "Kenya, Uganda & Tanzania",
      metrics: [
        { label: "Closing Cycle", value: "45 Days" },
        { label: "CAC Reduction", value: "-24%" },
        { label: "Regional Footprint", value: "4 Markets" },
      ],
      challenge:
        "Regional industrial and B2B brands struggled with 6-month institutional sales cycles and high customer acquisition overhead.",
      solution:
        "Engineered modular B2B partnership playbooks, C-suite decision-maker outreach, and risk-shared distributor onboarding.",
      impactSummary:
        "Compressed average enterprise deal closing cycles from 6 months to 45 days while lowering customer acquisition cost by 24%.",
      results: [
        "Reduced enterprise closing cycle from 6 months to 45 days across Tier-1 accounts.",
        "Lowered blended B2B customer acquisition cost by 24% across 4 East African markets.",
      ],
    },
  ],

  media: [],

  credentials: {
    sectionIndex: "03 / ABOUT WALLACE",
    headlineLines: ["Commercial strategy.", "Grounded execution."],
    shortBio:
      "I'm Wallace Ogundo, a Nairobi-based Marketing and Business Development Strategist. I help industrial enterprises and regional brands build high-velocity B2B pipelines, scalable distributor networks, and profitable commercial partnerships across East Africa.",
    degrees: [
      {
        degree: "BSc Construction Management",
        institution: "Dedan Kimathi University (DeKUT)",
        summaryLine:
          "Commercial feasibility, industrial project economics, and contract governance.",
      },
      {
        degree: "BSc Computer Science",
        institution: "University of Nairobi (UoN)",
        summaryLine:
          "CRM systems, sales-force telemetry, and data-driven pipeline analytics.",
      },
      {
        degree: "BA Public Relations",
        institution: "JKUAT",
        summaryLine:
          "High-stakes B2B negotiation, brand positioning, and stakeholder alignment.",
      },
    ],
  },

  contact: {
    sectionIndex: "04 / LET'S TALK",
    rightTag: "DIRECT COMMERCIAL & B2B ADVISORY",
    headlineLines: ["Let's scale", "your market", "footprint."],
    subheadline:
      "Tap your primary objective below, then connect immediately via WhatsApp, direct call, or email. Zero forms required.",
    availabilityNote: "Nairobi, Kenya / East Africa",
    officeHours: "Direct Principal Response Within 24h",
    objectives: [
      {
        id: "rtm-scaling",
        label: "B2B Route-to-Market & Distributor Scaling",
        scope: "Territory expansion, stockist networks & channel velocity",
      },
      {
        id: "enterprise-deals",
        label: "Enterprise Partnerships & Key Accounts",
        scope: "Corporate supply alliances, B2B deal structuring & bidding",
      },
      {
        id: "gtm-strategy",
        label: "Go-To-Market Strategy & Brand Positioning",
        scope: "Market entry playbooks, pricing models & product launches",
      },
      {
        id: "commercial-turnaround",
        label: "Commercial Operations & Sales Turnaround",
        scope: "Sales team enablement, SLA governance & margin growth",
      },
    ],
  },
};
