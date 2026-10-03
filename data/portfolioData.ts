/**
 * ==============================================================================
 * WALLACE OGUNDO — PORTFOLIO CONTENT & MEDIA CONFIGURATION
 * ==============================================================================
 * This file centralizes ALL content, media, photos, videos, case studies,
 * and contact coordinates for the website.
 *
 * HOW TO UPDATE:
 * 1. Photos: You can use local paths (e.g., "/wallace-avatar.png", "/images/my-photo.jpg")
 *    OR external URLs (e.g. Unsplash, Cloudinary, Imgur).
 * 2. Videos: You can paste ANY normal YouTube link (e.g. "https://www.youtube.com/watch?v=...",
 *    "https://youtu.be/..."), Vimeo link ("https://vimeo.com/..."), or direct MP4 URL.
 *    The website will automatically format and stream it cleanly.
 * ==============================================================================
 */

export interface MetricItem {
  value: string;
  label: string;
  sub: string;
}

export interface StrategicPillar {
  title: string;
  desc: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  period: string;
  location: string;
  metrics: { label: string; value: string }[];
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface MediaItem {
  id: string;
  type: "video" | "image";
  title: string;
  category: string;
  thumbnail: string;
  videoUrl?: string; // Supports any YouTube, Vimeo, or MP4 URL
  duration?: string;
  date: string;
  description: string;
  metrics?: string;
}

export interface CareerExperience {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface CompetencyGroup {
  category: string;
  items: string[];
}

export interface PortfolioData {
  profile: {
    name: string;
    firstName: string;
    lastName: string;
    monogram: string;
    role: string;
    location: string;
    regionBadge: string;
    email: string;
    phone: string;
    whatsApp: string;
    linkedIn: string;
    twitterX: string;
    avatarImage: string;
    portraitImage: string;
    verifiedBadgeText: string;
    statusBadgeText: string;
  };
  hero: {
    preTitle: string;
    tagline: string;
    ctaPrimaryText: string;
    ctaSecondaryText: string;
    metrics: MetricItem[];
  };
  about: {
    sectionTag: string;
    sectionTitle: string;
    headline: string;
    subheadline: string;
    narrative: string[];
    pillars: StrategicPillar[];
  };
  projects: CaseStudy[];
  media: MediaItem[];
  experience: {
    sectionTag: string;
    sectionTitle: string;
    timeline: CareerExperience[];
    competencies: CompetencyGroup[];
  };
  contact: {
    sectionTag: string;
    sectionTitle: string;
    headline: string;
    subheadline: string;
    availabilityNote: string;
    officeHours: string;
  };
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Wallace Ogundo",
    firstName: "WALLACE",
    lastName: "OGUNDO",
    monogram: "WO",
    role: "Marketing & Business Development Strategist / Operations Leader",
    location: "Nairobi, Kenya",
    regionBadge: "EAC / Pan-Africa / Global",
    email: "info@wallaceogundo.co.ke",
    phone: "+254 722 604 247",
    whatsApp: "+254722604247",
    linkedIn: "https://www.linkedin.com",
    twitterX: "https://twitter.com",
    // Avatar used in navigation and quick header badge
    avatarImage: "/wallace-avatar.png",
    // High-resolution portrait used in the About section
    portraitImage: "/wallace-avatar.png",
    verifiedBadgeText: "Verified Executive Profile",
    statusBadgeText: "Open to Advisory & Executive Roles",
  },

  hero: {
    preTitle: "HELLO, I AM",
    tagline:
      "Architecting high-conversion market expansion, enterprise B2B partnerships, and agile commercial operations across East Africa and emerging frontiers.",
    ctaPrimaryText: "View Case Studies",
    ctaSecondaryText: "Contact Wallace",
    metrics: [
      {
        value: "$45M+",
        label: "Strategic Pipeline",
        sub: "B2B Deals & Expansion",
      },
      {
        value: "12+ Yrs",
        label: "Executive Leadership",
        sub: "Commercial & Operations",
      },
      {
        value: "8+",
        label: "Regional Markets",
        sub: "East Africa & Pan-African",
      },
      {
        value: "99.2%",
        label: "SLA Fulfillment",
        sub: "Operational Precision",
      },
    ],
  },

  about: {
    sectionTag: ".01.1 — BIOGRAPHY & PHILOSOPHY",
    sectionTitle: "ABOUT WALLACE OGUNDO",
    headline: "BRIDGING HIGH-LEVEL COMMERCIAL STRATEGY WITH RIGOROUS GROUND EXECUTION.",
    subheadline:
      "A seasoned commercial strategist and operations executive with over a decade of track-record engineering sustainable revenue growth across East Africa.",
    narrative: [
      "Operating at the intersection of enterprise business development, supply-chain logistics, and scalable go-to-market architecture, Wallace Ogundo has built and revitalized commercial operations for leading regional enterprises, multinational FMCG groups, and high-velocity digital ventures.",
      "His leadership philosophy pairs empirical analytics with tactical empathy: establishing high-yield distributor networks, standardizing performance SLAs across diverse regulatory regimes, and building cross-functional teams that consistently outpace revenue targets.",
      "Based in Nairobi with active operational footprints across Kenya, Uganda, Tanzania, and Rwanda, Wallace advises corporate boards and growth-stage enterprises on mitigating frontier market risks and unlocking sustainable multi-million dollar commercial pipelines.",
    ],
    pillars: [
      {
        title: "GTM Strategy & Market Expansion",
        desc: "Architecting end-to-end go-to-market playbooks, customer acquisition funnels, and brand positioning across competitive East African markets.",
      },
      {
        title: "Enterprise B2B Deal Structuring",
        desc: "Forging multi-stakeholder commercial alliances, revenue partnerships, and institutional procurement contracts with Tier-1 corporate clients.",
      },
      {
        title: "Operational Rigor & Lean Scaling",
        desc: "Optimizing supply chain bottlenecks, warehousing logistics, and workflow automation to sustain 30%+ year-over-year operational efficiency.",
      },
      {
        title: "Executive Leadership & Governance",
        desc: "Leading multi-disciplinary teams, managing P&L portfolios, and navigating complex regulatory landscapes across regional trade borders.",
      },
    ],
  },

  projects: [
    {
      id: "fmcg-expansion",
      title: "Pan-African FMCG Commercial Expansion",
      subtitle: "Multi-market commercial distribution and dealer network scaling across East Africa.",
      category: "Market Expansion & GTM",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      period: "2023 — 2024",
      location: "Kenya, Uganda, Tanzania",
      metrics: [
        { label: "Annual GMV", value: "$22M" },
        { label: "Regional Hubs", value: "14" },
        { label: "Cycle Speed", value: "+38%" },
        { label: "Direct Dealers", value: "850+" },
      ],
      overview:
        "Designed and executed the East African expansion strategy for a major FMCG and consumer goods conglomerate. Wallace unified fragmented regional distributor networks into a centralized, transparent supply pipeline with real-time demand forecasting.",
      challenge:
        "Severe cross-border logistics fragmentation, inconsistent distributor lead times (often exceeding 14 days), and poor visibility into retailer sell-through rates across regional borders.",
      solution:
        "Implemented standardized regional SLA contracts, automated freight consolidation at border hubs, and introduced an incentivized B2B dealer portal with tier-based volume rebates.",
      results: [
        "Expanded regional distributor footprint from 180 to over 850 active commercial outlets within 18 months.",
        "Trussed average fulfillment turnaround from 14 days down to 4.2 days across Nairobi, Kampala, and Dar es Salaam.",
        "Delivered $22M in annualized gross merchandise value with an 18% improvement in distributor retention.",
      ],
    },
    {
      id: "fintech-merchant-network",
      title: "Enterprise Merchant Acquiring & B2B Engine",
      subtitle: "Go-to-market architecture and commercial alliances for institutional digital payments.",
      category: "B2B Partnerships & Strategy",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      period: "2022 — 2023",
      location: "Nairobi, Kenya",
      metrics: [
        { label: "Institutional Pipeline", value: "$14M" },
        { label: "Tier-1 Merchants", value: "450+" },
        { label: "CAC Reduction", value: "-24%" },
        { label: "Transaction Vol", value: "+160%" },
      ],
      overview:
        "Led enterprise business development to accelerate adoption of integrated digital transaction and POS infrastructure among Tier-1 retail chains, hospitality groups, and logistics providers in Kenya.",
      challenge:
        "High merchant switching costs, lengthy institutional procurement cycles (averaging 6-9 months), and aggressive competition from legacy banking institutions.",
      solution:
        "Structured modular enterprise SLAs, tailored zero-downtime integration APIs with on-site deployment teams, and negotiated corporate risk-sharing agreements with leading commercial banks.",
      results: [
        "Contracted 450+ premier merchant accounts, reducing standard enterprise closing cycle from 9 months to 45 days.",
        "Drove a 160% increase in processed monthly transaction volumes across partner retail networks.",
        "Lowered blended merchant acquisition cost by 24% through automated onboarding workflows.",
      ],
    },
    {
      id: "logistics-hub-transformation",
      title: "Northern Corridor Transit & Fleet Overhaul",
      subtitle: "Supply chain network optimization, customs telemetry, and multi-modal fleet governance.",
      category: "Operations & Supply Chain",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
      period: "2020 — 2022",
      location: "Mombasa — Nairobi — Kampala Corridor",
      metrics: [
        { label: "Fleet Capacity", value: "120 Units" },
        { label: "Turnaround Time", value: "-35%" },
        { label: "Fuel Efficiency", value: "+18%" },
        { label: "SLA Adherence", value: "99.4%" },
      ],
      overview:
        "Restructured end-to-end haulage operations along the Northern Transit Corridor connecting the Port of Mombasa with inland distribution centers in Nairobi and Uganda.",
      challenge:
        "Recurring transit delays due to manual port clearance bottlenecks, unmonitored dead-head mileage, and lack of real-time cargo telematics leading to cargo integrity queries.",
      solution:
        "Deployed IoT-enabled tracking and smart seals, established bonded transit consolidation points, and renegotiated carrier line contracts for priority port gate allocation.",
      results: [
        "Cut corridor dwell and turnaround times by 35%, generating over $1.4M in annual demurrage savings.",
        "Increased fleet asset utilization rate from 62% to 88% across 120 heavy transport assets.",
        "Maintained 99.4% cargo integrity and regulatory compliance across all EAC customs checkpoints.",
      ],
    },
    {
      id: "healthcare-pharma-supply",
      title: "Cold-Chain & Essential Pharmaceuticals GTM",
      subtitle: "Regulatory approval, institutional tenders, and nationwide distribution for medical supplies.",
      category: "Market Entry & Public Sector",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
      period: "2019 — 2020",
      location: "Kenya (Nationwide Coverage)",
      metrics: [
        { label: "County Health Units", value: "42 Counties" },
        { label: "Cold-Chain Integrity", value: "99.8%" },
        { label: "Tender Volume", value: "$8.5M" },
        { label: "Stockout Reduction", value: "-62%" },
      ],
      overview:
        "Spearheaded public and private sector commercial engagement to distribute temperature-sensitive therapeutics and essential supplies across Kenya's decentralized healthcare system.",
      challenge:
        "Complex county-level procurement regulations, cold-chain temperature degradation risks during last-mile transit, and unpredictable public hospital reimbursement cycles.",
      solution:
        "Designed a localized hub-and-spoke distribution model equipped with continuous digital temperature loggers and established escrow-backed supplier credit terms with county governments.",
      results: [
        "Successfully supplied certified medical products across 42 out of 47 Kenyan counties.",
        "Secured and fulfilled $8.5M in competitive public healthcare and donor-funded supply tenders.",
        "Reduced critical rural hospital medical stockouts by 62% while preserving 99.8% cold-chain compliance.",
      ],
    },
  ],

  media: [
    {
      id: "media-keynote-1",
      type: "video",
      title: "Keynote Address: Unlocking Pan-African Trade & Digital Supply Chains",
      category: "Keynote Presentation",
      thumbnail: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/watch?v=7wtfhZwyrcc", // Accepts standard YouTube URLs
      duration: "18:40",
      date: "Nov 2024",
      description:
        "Wallace delivers the opening keynote at the East African Commercial Summit in Nairobi, detailing how modern trade corridors can leverage automated customs pre-clearance and multi-modal logistics.",
      metrics: "Presented to 650+ corporate delegates & regional trade ministers.",
    },
    {
      id: "media-framework-1",
      type: "image",
      title: "The 4-Pillar Commercial Execution Architecture",
      category: "Strategic Framework",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      date: "Aug 2024",
      description:
        "An executive strategic blueprint mapping high-velocity B2B customer acquisition funnels directly into automated distributor fulfillment hubs, mitigating supply variance across regional borders.",
      metrics: "Adopted by 14 regional distributor consortia across East Africa.",
    },
    {
      id: "media-panel-1",
      type: "video",
      title: "Executive Panel: Building Resilient Operations in Emerging Markets",
      category: "Industry Panel",
      thumbnail: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/watch?v=5qap5aO4i9A",
      duration: "26:15",
      date: "May 2024",
      description:
        "Panel discussion covering supply chain risk management, currency volatility hedges, and operational continuity strategies during geopolitical and macroeconomic shifts in the EAC.",
      metrics: "Broadcast live to 12,000+ regional business leaders.",
    },
    {
      id: "media-visual-telematics",
      type: "image",
      title: "Northern Corridor Transit & Dispatch Telematics Hub",
      category: "Operational Systems",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      date: "Jan 2024",
      description:
        "High-level telemetry and control dashboard designed to give real-time GPS tracking, electronic seal integrity alerts, and fuel optimization benchmarks across 120+ active haulage units.",
      metrics: "Reduced transit route discrepancies to < 0.15%.",
    },
    {
      id: "media-briefing-b2b",
      type: "video",
      title: "Executive Brief: Structuring High-Yield B2B Joint Ventures",
      category: "Commercial Strategy",
      thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
      duration: "14:20",
      date: "Sep 2023",
      description:
        "Strategic masterclass on structuring multi-tiered commercial contracts, revenue sharing matrices, and enforceable SLA governance when partnering with multinational enterprise brands.",
      metrics: "Internal corporate development training module.",
    },
    {
      id: "media-audit-mombasa",
      type: "image",
      title: "Port of Mombasa Multimodal Turnaround & Demurrage Audit",
      category: "Performance Audit",
      thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80",
      date: "Mar 2023",
      description:
        "Comprehensive empirical performance review analyzing dwell time reductions, dry port transit velocities, and fiscal impact across 2,400+ container units.",
      metrics: "Verified annual savings exceeding $1.8M in detention fees.",
    },
  ],

  experience: {
    sectionTag: ".01.2 — CAREER TIMELINE",
    sectionTitle: "PROFESSIONAL EXPERIENCE",
    timeline: [
      {
        period: "2022 — PRESENT",
        role: "VP of Business Development & Strategic Growth",
        company: "Apex Commercial Group / East Africa Advisory",
        location: "Nairobi, Kenya & Regional",
        description:
          "Spearheading high-value enterprise partnerships, commercial go-to-market execution, and cross-border expansion initiatives across Kenya, Uganda, Tanzania, and Rwanda.",
        achievements: [
          "Generated $28M+ in qualified institutional deal pipeline through structured B2B agreements.",
          "Negotiated 14 strategic joint-ventures with regional retail conglomerates and telecom operators.",
          "Architected unified sales and operational governance framework that boosted gross margins by 18.5%.",
        ],
        skills: ["Strategic Growth", "B2B Deal Structuring", "Market Expansion", "Executive Governance", "P&L Management"],
      },
      {
        period: "2018 — 2022",
        role: "Head of Commercial Operations & Expansion",
        company: "Equator Logistics & Trade Infrastructure",
        location: "Nairobi, Kenya",
        description:
          "Directed operational scaling, supply chain streamlining, and regional distribution networks across 12 urban and cross-border fulfillment centers.",
        achievements: [
          "Reduced fulfillment turn-around time by 38% through route optimization and automated dispatch algorithms.",
          "Scaled regional commercial operations to absorb a 42% YoY surge in freight volume without headcount bloating.",
          "Maintained 99.2% SLA compliance rate across tier-1 multinational enterprise manufacturing clients.",
        ],
        skills: ["Operations Leadership", "Supply Chain Optimization", "Logistics Scaling", "SLA Governance", "ERP Systems"],
      },
      {
        period: "2015 — 2018",
        role: "Senior Marketing & Go-To-Market Strategist",
        company: "Frontier Brand & Venture Partners",
        location: "Nairobi, Kenya",
        description:
          "Led product marketing launches, high-conversion commercial campaigns, and brand repositioning strategies for emerging enterprises and consumer brands.",
        achievements: [
          "Orchestrated 6 high-profile commercial market entries, achieving profitability within 9 months of launch.",
          "Reduced blended Customer Acquisition Cost (CAC) by 24% while expanding market reach across East Africa.",
          "Managed an annual marketing and promotional budget of $3.5M with strict ROI tracking.",
        ],
        skills: ["Go-To-Market (GTM)", "Campaign Strategy", "Brand Positioning", "Performance Marketing", "Stakeholder Alignment"],
      },
      {
        period: "2012 — 2015",
        role: "Operations & Logistics Manager",
        company: "Rift Distribution & Supply Chain Services",
        location: "Mombasa / Nairobi, Kenya",
        description:
          "Managed port logistics, multi-modal warehousing, customs brokerage, and fleet operations for high-velocity FMCG and industrial goods.",
        achievements: [
          "Supervised daily inventory turnover across 85,000 sq ft of warehousing facilities.",
          "Implemented lean warehouse management protocols that slashed shrink and inventory variance to <0.3%.",
          "Streamlined port clearance protocols at the Port of Mombasa, trimming detention costs by 32%.",
        ],
        skills: ["Fleet Operations", "Multimodal Freight", "Customs Clearance", "Lean Warehousing", "Vendor Contracts"],
      },
    ],
    competencies: [
      {
        category: "Commercial Strategy",
        items: [
          "Enterprise B2B Negotiation",
          "GTM Execution",
          "Market Entry & Due Diligence",
          "Revenue Modeling",
          "Competitive Intelligence",
        ],
      },
      {
        category: "Operations & Logistics",
        items: [
          "Supply Chain Optimization",
          "Multimodal Freight & Clearing",
          "Inventory Turnaround",
          "SLA & Quality Control",
          "Vendor Matrix Management",
        ],
      },
      {
        category: "Platforms & Tech",
        items: [
          "Salesforce / HubSpot CRM",
          "SAP ERP / Oracle NetSuite",
          "Power BI / Tableau Analytics",
          "Jira / Agile Workflows",
          "Digital Conversion Funnels",
        ],
      },
    ],
  },

  contact: {
    sectionTag: ".03 — COMMERCIAL INQUIRIES",
    sectionTitle: "GET IN TOUCH",
    headline: "CONTACT",
    subheadline:
      "Available for executive advisory engagements, board roles, and senior commercial leadership consultations across East Africa and international trade networks.",
    availabilityNote: "Available Globally for Advisory & Expansion",
    officeHours: "EAT (UTC+3) • Fast Response within 24h",
  },
};
