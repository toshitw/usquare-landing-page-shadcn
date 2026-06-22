export type NavItem = {
  label: string;
  href: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type ContentCard = {
  title: string;
  description: string;
};

export type IconContentCard = ContentCard & {
  icon: string;
};

export type ProcessStep = ContentCard & {
  step: string;
};

export type CaseStudy = ContentCard & {
  image: string;
  imageAlt: string;
  tags: string[];
};

export type CapabilityGroup = {
  title: string;
  items: string[];
};

export type FooterColumn = {
  title: string;
  links: NavItem[];
};

export const navbar = {
  logo: "USQUARE CONSULTING",
  links: [
    { label: "Services", href: "#services" },
    { label: "NEXTPLATFORM", href: "#nextplatform" },
    { label: "How We Work", href: "#methodology" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Industries", href: "#industries" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  cta: {
    label: "Talk to Us",
    href: "#contact",
  },
};

export const hero = {
  eyebrow: "IT Consulting | System Integration | Platform Strategy",
  headline:
    "Build, modernize, and operate enterprise technology platforms with less complexity.",
  subheadline:
    "USQUARE CONSULTING helps organizations transform business objectives into reliable digital platforms. We combine strategic IT consulting, system integration, application modernization, automation, cloud-native delivery, and managed services, powered by NEXTPLATFORM as our internal delivery engine.",
  supportingCopy:
    "From strategy to implementation, we help organizations reduce technical debt, integrate complex systems, automate critical workflows, and deliver scalable digital services faster.",
  deliveryHighlights: [
    "Consulting alignment",
    "Architecture and integration",
    "Platform engineering",
    "Managed operation",
  ],
  primaryCta: {
    label: "Start a Consultation",
    href: "mailto:info@usquare.id?subject=Consultation%20Request%20for%20USQUARE%20CONSULTING",
  },
  secondaryCta: {
    label: "Explore Our Services",
    href: "#services",
  },
  metrics: [
    { value: "15+", label: "Years Experience" },
    { value: "10+", label: "Industries Served" },
    { value: "50+", label: "Enterprises Supported" },
    { value: "500+", label: "Applications Developed" },
  ] satisfies Metric[],
};

export const proof = {
  label: "Enterprise Technology Partner",
  headline:
    "Designed for organizations that need technology to work in the real world.",
  body: [
    "Digital transformation is not only about building new applications. It requires alignment between business objectives, operating models, legacy systems, governance, people, and technology platforms.",
    "USQUARE CONSULTING works with organizations that need practical execution, not just strategy slides. We help design, build, integrate, operate, and continuously improve technology platforms that support mission-critical business operations.",
  ],
  cards: [
    {
      title: "Strategic Alignment",
      description:
        "Align business goals, operating needs, and technology architecture before implementation begins.",
      icon: "Compass",
    },
    {
      title: "Complex Integration Capability",
      description:
        "Connect legacy systems, modern applications, APIs, cloud infrastructure, workflows, and data platforms.",
      icon: "Network",
    },
    {
      title: "Platform-Based Delivery",
      description:
        "Use NEXTPLATFORM to accelerate development, integration, deployment, monitoring, and continuous improvement.",
      icon: "Layers",
    },
    {
      title: "Operational Continuity",
      description:
        "Design solutions with reliability, maintainability, security, and long-term service operation in mind.",
      icon: "ShieldCheck",
    },
  ] satisfies IconContentCard[],
};

export const services = {
  label: "Services",
  headline:
    "Integrated IT consulting and delivery services for enterprise transformation.",
  subheadline:
    "Our service portfolio covers the full lifecycle of digital transformation: strategy, architecture, engineering, integration, automation, cloud, cybersecurity, analytics, and managed operations.",
  items: [
    {
      title: "Digital Transformation",
      description:
        "Redesign business models, operating processes, and customer experiences through practical technology adoption.",
      icon: "Route",
    },
    {
      title: "Application Modernization & Software Engineering",
      description:
        "Modernize legacy applications and build scalable, cloud-native systems that support changing business needs.",
      icon: "Code2",
    },
    {
      title: "System Integration & API Enablement",
      description:
        "Connect legacy systems, enterprise applications, databases, workflows, and third-party services into a unified ecosystem.",
      icon: "Cable",
    },
    {
      title: "AI & Data Services",
      description:
        "Turn organizational data into operational intelligence through analytics, machine learning, predictive insights, and AI-assisted workflows.",
      icon: "BrainCircuit",
    },
    {
      title: "Cloud & Infrastructure",
      description:
        "Design and operate infrastructure that supports resilience, scalability, security, and deployment flexibility.",
      icon: "Cloud",
    },
    {
      title: "Cybersecurity & Identity Management",
      description:
        "Strengthen digital resilience through secure architecture, identity management, authentication, access control, and proactive risk mitigation.",
      icon: "LockKeyhole",
    },
    {
      title: "Business Process Automation",
      description:
        "Automate critical workflows using structured process design, workflow orchestration, business rules, and performance monitoring.",
      icon: "Workflow",
    },
    {
      title: "Managed Services",
      description:
        "Operate, monitor, support, and continuously improve enterprise systems after deployment.",
      icon: "Activity",
    },
  ] satisfies IconContentCard[],
};

export const nextPlatform = {
  label: "Our Delivery Engine",
  name: "NEXTPLATFORM",
  headline:
    "NEXTPLATFORM helps us deliver faster, integrate deeper, and operate smarter.",
  subheadline:
    "USQUARE CONSULTING uses NEXTPLATFORM as an internal technology platform to accelerate software engineering, system integration, workflow automation, deployment, identity management, analytics, and managed services.",
  body:
    "Instead of relying on fragmented tools and isolated implementation methods, NEXTPLATFORM provides a unified delivery ecosystem. It helps our teams build applications, expose APIs, automate workflows, connect legacy systems, manage identities, deploy services, and monitor digital operations from one integrated platform foundation.",
  modules: [
    {
      title: "NextAPI",
      description:
        "Rapidly develop, publish, secure, and manage APIs across modern and legacy systems.",
      icon: "Webhook",
    },
    {
      title: "NextFlow",
      description:
        "Design, automate, monitor, and improve business workflows using structured process management.",
      icon: "Workflow",
    },
    {
      title: "NextCluster",
      description:
        "Deploy and orchestrate applications across cloud, on-premise, and hybrid infrastructure.",
      icon: "Boxes",
    },
    {
      title: "NextWEB",
      description:
        "Develop enterprise web and mobile applications with a simplified, modern development approach.",
      icon: "MonitorSmartphone",
    },
    {
      title: "NextInsight",
      description:
        "Collect, organize, analyze, and visualize operational data generated by applications and workflows.",
      icon: "ChartNoAxesCombined",
    },
    {
      title: "NextID",
      description:
        "Manage identity, authentication, authorization, and single sign-on across applications and services.",
      icon: "Fingerprint",
    },
  ] satisfies IconContentCard[],
};

export const methodology = {
  label: "Methodology",
  headline: "A practical delivery model from strategy to managed operation.",
  subheadline:
    "We combine consulting discipline, platform engineering, and continuous operations to help organizations move from business problem to production-ready digital platform.",
  steps: [
    {
      step: "01",
      title: "Discover",
      description:
        "Identify business objectives, pain points, stakeholders, existing systems, data sources, operational risks, and transformation priorities.",
    },
    {
      step: "02",
      title: "Architect",
      description:
        "Design the target platform architecture, integration model, security requirements, workflow structure, deployment strategy, and operating model.",
    },
    {
      step: "03",
      title: "Build & Integrate",
      description:
        "Develop applications, configure workflows, connect systems, expose APIs, automate processes, and validate the solution with real users.",
    },
    {
      step: "04",
      title: "Deploy & Operate",
      description:
        "Deploy the solution into production, monitor service health, support users, manage incidents, and improve the platform over time.",
    },
  ] satisfies ProcessStep[],
};

export const caseStudies = {
  label: "Selected Work",
  headline: "Proven experience in complex enterprise transformation.",
  subheadline:
    "Our experience spans banking, energy, consumer goods, public sector, industrial operations, and digital platform modernization.",
  items: [
    {
      title: "Bank Mandiri - Core Banking API Modernization",
      description:
        "Modernized legacy core banking connectivity and enabled more agile open API connectivity using NEXTPLATFORM capabilities.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      imageAlt:
        "Analytics dashboard representing secure banking API modernization",
      tags: [
        "Core Banking",
        "API Gateway",
        "Legacy Modernization",
        "Secure Integration",
      ],
    },
    {
      title: "CIVD - Oil & Gas Vendor Management",
      description:
        "Supported national-scale vendor qualification through BPMN/DMN-based workflow orchestration, compliance workflows, and collaborative process design.",
      image: "/brand/civd-oil-gas-vendor-management.png",
      imageAlt:
        "Oil and gas professionals reviewing vendor management workflows",
      tags: ["Oil & Gas", "Vendor Management", "Workflow Automation", "Compliance"],
    },
    {
      title: "Coca-Cola Amatil Indonesia - Business Process Automation",
      description:
        "Helped transition from rigid homegrown applications into scalable workflow and application development using NEXTPLATFORM.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
      imageAlt:
        "Enterprise team collaborating on business process automation",
      tags: [
        "Business Automation",
        "Enterprise Apps",
        "Workflow",
        "Operational Excellence",
      ],
    },
    {
      title: "BTPN Syariah - Mobile Digital Banking Transformation",
      description:
        "Supported secure, scalable mobile banking services with online and offline capability, transaction security, and high-concurrency readiness.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",
      imageAlt:
        "Mobile payment interface representing digital banking transformation",
      tags: [
        "Digital Banking",
        "Mobile Platform",
        "Security",
        "Financial Inclusion",
      ],
    },
    {
      title: "Public Sector Transformation - BPMN-Based Bureaucracy Automation",
      description:
        "Demonstrates how NEXTFLOW can support transparent, accountable, and efficient public-sector workflows.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
      imageAlt:
        "Modern civic office environment representing public-sector services",
      tags: ["Public Sector", "BPMN", "SPBE", "Workflow Automation"],
    },
    {
      title: "Industrial IoT - Smart Palm Oil Processing",
      description:
        "Demonstrates how real-time data, predictive maintenance, audit trails, and analytics can support smarter industrial operations.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80",
      imageAlt:
        "Industrial engineer working with machinery and operational systems",
      tags: [
        "Industrial IoT",
        "Predictive Maintenance",
        "Analytics",
        "Traceability",
      ],
    },
  ] satisfies CaseStudy[],
};

export const industries = {
  label: "Industries",
  headline: "Built for complex industries with real operational constraints.",
  items: [
    {
      title: "Financial Services",
      description:
        "Core banking integration, digital banking, secure APIs, identity management, workflow automation, and regulatory-ready platforms.",
      icon: "Landmark",
    },
    {
      title: "Government & Public Sector",
      description:
        "BPMN-based service automation, SPBE-aligned digital platforms, public-service workflow modernization, audit trails, and compliance support.",
      icon: "Building2",
    },
    {
      title: "Energy & Natural Resources",
      description:
        "Vendor management, compliance workflows, Industrial IoT, operational monitoring, predictive maintenance, and data-driven efficiency programs.",
      icon: "Factory",
    },
    {
      title: "Consumer Goods & Distribution",
      description:
        "Workflow automation, sales operations, delivery management, invoicing, internal applications, and operational productivity platforms.",
      icon: "PackageCheck",
    },
    {
      title: "Transportation & Aviation",
      description:
        "Legacy integration, operational systems, service orchestration, data platforms, and enterprise-grade reliability for mission-critical environments.",
      icon: "Plane",
    },
    {
      title: "Enterprise Operations",
      description:
        "ERP/CRM integration, internal tools, identity management, analytics dashboards, managed services, and application modernization.",
      icon: "BriefcaseBusiness",
    },
  ] satisfies IconContentCard[],
};

export const capabilities = {
  label: "Technology Capabilities",
  headline: "From strategy to architecture, from application to operation.",
  groups: [
    {
      title: "Architecture & Strategy",
      items: [
        "Digital transformation roadmap",
        "Enterprise architecture",
        "Platform strategy",
        "IT investment planning",
        "Target operating model",
      ],
    },
    {
      title: "Engineering & Integration",
      items: [
        "Web applications",
        "Mobile applications",
        "API gateway",
        "Legacy system integration",
        "Workflow automation",
        "Low-code delivery",
      ],
    },
    {
      title: "Cloud & Operations",
      items: [
        "Cloud-native deployment",
        "Hybrid infrastructure",
        "Container orchestration",
        "Monitoring and observability",
        "Managed services",
        "AIOps support",
      ],
    },
    {
      title: "Data & Intelligence",
      items: [
        "Business intelligence",
        "Data integration",
        "Embedded analytics",
        "Machine learning",
        "Predictive insights",
        "AI-enabled automation",
      ],
    },
    {
      title: "Security & Governance",
      items: [
        "Identity management",
        "Single Sign-On",
        "Role-based access control",
        "Secure API design",
        "Compliance workflows",
        "Audit trails",
      ],
    },
  ] satisfies CapabilityGroup[],
};

export const cta = {
  headline: "Ready to turn your technology roadmap into a working digital platform?",
  subheadline:
    "Let's discuss how USQUARE CONSULTING can help you modernize systems, integrate platforms, automate workflows, and operate enterprise technology with confidence.",
  supportingText:
    "Whether you are modernizing legacy systems, building new digital services, automating business processes, or improving IT operations, we can help you move from strategy to execution.",
  primaryCta: {
    label: "Schedule a Consultation",
    href: "mailto:info@usquare.id?subject=Consultation%20Request%20for%20USQUARE%20CONSULTING",
  },
  secondaryCta: {
    label: "Contact USQUARE CONSULTING",
    href: "mailto:info@usquare.id?subject=Inquiry%20for%20USQUARE%20CONSULTING",
  },
};

export const footer = {
  description:
    "USQUARE CONSULTING is an IT consulting and system integration company helping organizations design, build, integrate, and operate digital platforms for sustainable transformation.",
  tagline:
    "USQUARE CONSULTING - Accelerating innovation with true digital transformation.",
  columns: [
    {
      title: "Company",
      links: [
        { label: "About", href: "#proof" },
        { label: "Services", href: "#services" },
        { label: "Case Studies", href: "#case-studies" },
        { label: "NEXTPLATFORM", href: "#nextplatform" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Digital Transformation", href: "#services" },
        { label: "Application Modernization", href: "#services" },
        { label: "System Integration", href: "#services" },
        { label: "AI & Data Services", href: "#services" },
        { label: "Cloud Solutions", href: "#services" },
        { label: "Managed Services", href: "#services" },
      ],
    },
    {
      title: "Platform",
      links: [
        { label: "NextAPI", href: "#nextplatform" },
        { label: "NextFlow", href: "#nextplatform" },
        { label: "NextCluster", href: "#nextplatform" },
        { label: "NextWEB", href: "#nextplatform" },
        { label: "NextInsight", href: "#nextplatform" },
        { label: "NextID", href: "#nextplatform" },
      ],
    },
  ] satisfies FooterColumn[],
  contact: {
    email: "info@usquare.id",
    location: "Jl. Progo No. 3, Bandung, West Java, Indonesia 40115",
  },
};

export const landingPageContent = {
  navbar,
  hero,
  proof,
  services,
  nextPlatform,
  methodology,
  caseStudies,
  industries,
  capabilities,
  cta,
  footer,
};
