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

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  description: string;
}

export interface ServicePillar {
  code: string;
  pillarTitle: string;
  pillarSubtitle: string;
  services: ServiceItem[];
}

export interface StoryAct {
  actNumber: string;
  period: string;
  title: string;
  focus: string;
  narrative: string;
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
    intro: string;
    summary: string;
    targetClients: string;
    pillars: ServicePillar[];
    disciplines: DisciplineItem[];
  };
  projects: CaseStudy[];
  media: MediaItem[];
  credentials: {
    sectionIndex: string;
    headlineLines: [string, string];
    shortBio: string;
    pullQuote: string;
    storyActs: StoryAct[];
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
    role: "Managing Director & Commercial Strategy Executive",
    shortRole: "MANAGING DIRECTOR & COMMERCIAL STRATEGY EXECUTIVE",
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
    statusBadgeText: "Open for Executive & Commercial Mandates",
  },

  hero: {
    eyebrow: "WO / MANAGING DIRECTOR & COMMERCIAL STRATEGY EXECUTIVE",
    headlineLines: [
      "Building High-Velocity",
      "Commercial & Capital Engines",
      "in East Africa.",
    ],
    supportingThesis:
      "Executive leadership uniting capital infrastructure delivery with high-velocity commercial route-to-market execution across Kenya and East Africa.",
    ctaPrimaryText: "Chat on WhatsApp",
    ctaSecondaryText: "View Track Record",
    whatsAppPrefill:
      "Hello Wallace, I visited wallaceogundo.co.ke and would like to discuss an Executive Commercial or Infrastructure mandate.",
    metrics: [
      {
        value: "17+ Yrs",
        label: "Executive Leadership",
        sub: "FMCG, Infrastructure & B2B",
      },
      {
        value: "6 Divisions",
        label: "Ziyawall Enterprise",
        sub: "Construction, Supplies & Agency",
      },
      {
        value: "KES 180M+",
        label: "Commercial Pipeline",
        sub: "Industrial & Corporate Deals",
      },
      {
        value: "EAC Wide",
        label: "Regional Footprint",
        sub: "Kenya, Uganda, Tanzania & Rwanda",
      },
    ],
  },

  expertise: {
    sectionIndex: "01 / WHAT I DO",
    headlineLines: ["Twelve Core Capabilities.", "Three Strategic Pillars."],
    subheadline:
      "Executive oversight bridging capital infrastructure, industrial procurement, and commercial route-to-market execution.",
    intro:
      "Wallace Ogundo is an experienced business leader, commercial strategist and project management professional with over 17 years of experience across FMCG, marketing, sales, construction, engineering, procurement and business development.",
    summary:
      "He can help businesses develop growth strategies, increase sales, expand market reach, build strategic partnerships, manage projects, source supplies, coordinate engineering and mechanical works, prepare tenders, improve operational efficiency and strengthen customer relationships.",
    targetClients:
      "Wallace combines strategic leadership with practical commercial experience to help organisations solve business challenges, identify opportunities, improve performance and achieve sustainable growth. He can work with manufacturers, FMCG companies, distributors, retailers, construction firms, industrial operators, property developers, government institutions and other corporate organisations.",
    pillars: [
      {
        code: "01",
        pillarTitle: "Commercial Strategy & Route-to-Market",
        pillarSubtitle:
          "Revenue velocity, distributor expansion, and brand positioning.",
        services: [
          {
            id: "biz-consultancy",
            index: "01",
            title: "Business Consultancy",
            description:
              "Business planning, strategic management, market entry frameworks, and corporate growth roadmaps.",
          },
          {
            id: "sales-b2b",
            index: "02",
            title: "Sales & Business Development",
            description:
              "Customer acquisition pipelines, B2B enterprise sales, key account management, and commercial negotiations.",
          },
          {
            id: "marketing-brand",
            index: "03",
            title: "Marketing & Brand Management",
            description:
              "Trade marketing, brand activation, experiential roadshows, digital marketing, merchandising, and product launches.",
          },
          {
            id: "fmcg-distrib",
            index: "04",
            title: "FMCG & Distribution",
            description:
              "Route-to-market strategy, distributor network development, retail expansion, and sales performance improvement.",
          },
        ],
      },
      {
        code: "02",
        pillarTitle: "Capital Infrastructure & Project Engineering",
        pillarSubtitle:
          "Civil project management, mechanical systems, tenders, and cost governance.",
        services: [
          {
            id: "const-pm",
            index: "05",
            title: "Construction Project Management",
            description:
              "Project coordination, scheduling, materials procurement, contractor supervision, and progress monitoring.",
          },
          {
            id: "eng-mechanical",
            index: "06",
            title: "Engineering & Mechanical Services",
            description:
              "Coordination of machinery maintenance, hydraulic and pneumatic repairs, equipment sourcing, and technical delivery.",
          },
          {
            id: "tender-contract",
            index: "07",
            title: "Tender & Contract Management",
            description:
              "Tender identification, technical and commercial bid preparation, BQ review, and contract administration.",
          },
          {
            id: "commercial-ops",
            index: "08",
            title: "Commercial & Operational Management",
            description:
              "Operational budgeting support, cost control, margin protection, performance monitoring, and process improvement.",
          },
        ],
      },
      {
        code: "03",
        pillarTitle: "Enterprise Value Chain & Organizational Growth",
        pillarSubtitle:
          "Industrial sourcing, market intelligence, strategic partnerships, and capacity.",
        services: [
          {
            id: "procurement-supplies",
            index: "09",
            title: "Procurement & General Supplies",
            description:
              "Sourcing and bulk supply of construction materials, industrial equipment, mechanical spare parts, and institutional goods.",
          },
          {
            id: "market-research",
            index: "10",
            title: "Market Research & Business Intelligence",
            description:
              "Market analysis, competitor research, sales reporting, and identification of emerging sector opportunities.",
          },
          {
            id: "strategic-partnerships",
            index: "11",
            title: "Strategic Partnerships",
            description:
              "Connecting businesses with suitable clients, manufacturers, suppliers, distributors, and specialist service providers.",
          },
          {
            id: "training-capacity",
            index: "12",
            title: "Training & Capacity Building",
            description:
              "Sales training, leadership development, customer service coaching, and team performance improvement.",
          },
        ],
      },
    ],
    disciplines: [
      {
        index: "01",
        title: "Commercial Strategy & FMCG Route-to-Market",
        summary:
          "Designing high-yield territory architectures, distributor network expansion, and numeric distribution engines across East Africa.",
        vectors: ["Territory Design", "Distributor Development", "Channel Incentives"],
      },
      {
        index: "02",
        title: "Capital Infrastructure & Mechanical Engineering",
        summary:
          "Directing civil construction, mechanical installations, bills of quantities (BQ), and contractor consortiums across industrial projects.",
        vectors: ["Civil Infrastructure", "Mechanical Systems", "BQ & Cost Control"],
      },
      {
        index: "03",
        title: "Enterprise Procurement & Value Chain Control",
        summary:
          "Structuring multi-year institutional supply agreements, bulk industrial sourcing, and commercial framework governance.",
        vectors: ["Industrial Supplies", "Tender Bidding", "Margin Governance"],
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
    headlineLines: ["A Dual-Engine Moat.", "Infrastructure & Commerce."],
    shortBio:
      "Wallace Ogundo is an experienced business leader, commercial strategist, and project management executive with over 17 years of leadership uniting capital infrastructure delivery with high-velocity FMCG and B2B route-to-market execution across Kenya and East Africa.",
    pullQuote:
      "Industrial growth requires two synchronized engines: the technical capability to build and supply physical infrastructure, and the commercial capability to drive market offtake and revenue velocity. Wallace Ogundo operates at the exact intersection of both.",
    storyActs: [
      {
        actNumber: "01",
        period: "2008 - 2018",
        title: "The Commercial Frontline: Route-to-Market Mastery",
        focus: "Colgate-Palmolive, Manji Foods & Wrigley East Africa",
        narrative:
          "Wallace cut his teeth directly on the commercial trade frontline across East Africa's leading FMCG conglomerates. Implementing Supervised Route Distribution Effectiveness (SRDE), he architected territory structures, secured prime retail shelf placement, and negotiated commercial distributor agreements that drove double-digit volume expansion across both general trade and modern supermarket chains.",
      },
      {
        actNumber: "02",
        period: "2010 - 2021",
        title: "The Technical Convergence: Engineering, PR & Computing",
        focus: "DeKUT Construction Management, UoN Computer Science & JKUAT PR",
        narrative:
          "Recognizing that sustainable enterprise scale demands rigorous technical discipline, Wallace grounded his commercial instinct with three formal academic foundations: Construction Management (BSc, Dedan Kimathi University of Technology), Computer Science (BSc, University of Nairobi), and Public Relations (BA, JKUAT). This multidisciplinary convergence enables him to review bills of quantities (BQ) and mechanical schematics with the same analytical precision he brings to software pipelines, corporate governance, and C-suite negotiations.",
      },
      {
        actNumber: "03",
        period: "2019 - Present",
        title: "Executive Directorship at Ziyawall Limited",
        focus: "6 Operating Divisions, Board Governance & Infrastructure Delivery",
        narrative:
          "As Company Director of Ziyawall Limited, Wallace provides full board governance, strategic direction, and operational oversight across six high-value operating divisions: Construction, Engineering & Mechanical Works, General Supplies, Construction Consultancy, Marketing Agency, and FMCG Services. He unites civil infrastructure delivery, bulk industrial procurement, and corporate marketing campaigns under one accountable executive umbrella, delivering measurable enterprise ROI for developers, manufacturers, and institutional clients.",
      },
    ],
    degrees: [
      {
        degree: "BSc Construction Management",
        institution: "Dedan Kimathi University of Technology (DeKUT)",
        summaryLine:
          "Commercial feasibility, industrial project economics, and contract governance.",
      },
      {
        degree: "BSc Computer Science",
        institution: "University of Nairobi (UoN)",
        summaryLine:
          "Enterprise systems, sales-force telemetry, and data-driven pipeline analytics.",
      },
      {
        degree: "BA Public Relations",
        institution: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
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
