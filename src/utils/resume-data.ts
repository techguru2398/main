import {
  LanguageProficiency,
  type Company,
  type Education,
  type Language,
  type Project,
  type SkillCategory,
} from "@/types"

export const companies: Company[] = [
  {
    name: "GameBeat Studio",
    logo: "/gamebeat_logo.svg",
    positions: [
      {
        title: "Head of Frontend Engineering",
        duration: "Mar 2023 - Present",
        description: [
          "Own the end-to-end delivery of GameBeat's flagship iGaming platform across web and mobile touchpoints",
          "Led a distributed squad of 8 engineers to replatform the marketing site, improving conversion by 34% and time-on-page by 42%",
          "Built a modular design system in React/Next.js with motion-rich hero sections, cinematic video support, and localized content blocks",
          "Integrated campaign tooling and CRM flows that automated partner onboarding and reduced manual operations by 60%",
          "Partnered with art and brand teams to translate concept art into high-fidelity UI/UX with optimized asset pipelines",
          "Instituted performance budgets and observability dashboards that cut LCP to sub-2s globally"
        ],
      },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Remix Icon", "AWS CloudFront", "GraphQL", "Storybook", "Jest", "Vercel Analytics"],
  },
  {
    name: "Greentube",
    logo: "/greentube_logo.svg",
    positions: [
      {
        title: "Lead Frontend Architect",
        duration: "Jan 2021 - Feb 2023",
        description: [
          "Designed and shipped the Greentube featured games hub that serves millions of monthly players on desktop and OTT devices",
          "Architected a headless CMS integration that empowered marketing to launch content drops without engineering support",
          "Implemented advanced image optimization, server-side rendering, and caching strategies to boost SEO and core web vitals",
          "Collaborated with data scientists to embed real-time telemetry widgets and personalization logic using Next.js middleware",
          "Mentored engineers across Vienna and Belgrade offices, establishing code review standards and a quarterly tech roadmap",
          "Co-led vendor negotiations and security reviews, ensuring compliance with EU gaming regulations and SOC 2 controls"
        ],
      }
    ],
    technologies: ["Next.js", "React", "TypeScript", "GraphQL", "Apollo", "Redux Toolkit", "AWS Lambda", "Contentful", "Cloudflare", "Sentry", "Cypress"],
  },
  {
    name: "Casino Purple",
    logo: "/casinopurple_logo.svg",
    positions: [
      {
        title: "Senior Frontend Engineer",
        duration: "Aug 2018 - Dec 2020",
        description: [
          "Delivered a gamified loyalty platform with dynamic bonuses and event-driven UI that increased ARPU by 27% in the first quarter",
          "Rebuilt the casino and sportsbook experiences with responsive layouts, accessible animations, and localized payment flows",
          "Implemented real-time wallet and bonus status using WebSockets and Redux, ensuring sub-200ms visual feedback",
          "Partnered with backend teams on GraphQL schema design, aligning API evolution with UX requirements",
          "Instituted automated regression checks with Playwright and visual diffing to safeguard releases across 20+ skins",
          "Coached junior engineers, driving adoption of TypeScript, component-driven development, and CI/CD best practices"
        ],
      },
    ],
    technologies: ["React", "TypeScript", "Next.js", "Redux", "Playwright", "Storybook", "Sass", "Node.js", "GraphQL", "Socket.IO", "Azure DevOps"],
  }
]

export const education: Education[] = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "University of Belgrade",
    location: "Belgrade, Serbia",
    duration: "2014 - 2018",
    description:
      "Graduated with honours, focusing on distributed systems, algorithms, and interactive media. Led the university hackathon team to two consecutive national titles.",
    logo: "/Universify of Belgrade.png",
  }
]

export const projects: Project[] = [
  {
    title: "GameBeat Marketing Platform Refresh",
    description:
      "Reimagined GameBeat's flagship marketing presence with bespoke hero animations, cinematic slot artwork, and a conversion-focused CMS. Introduced a component library, A/B testing harness, and analytics pipeline that informs growth experiments weekly.",
    thumbnail: "/gamebeat_hero.svg",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "A/B Testing", "Segment", "Vercel"],
    link: "https://gamebeat.studio/",
    github: null,
    duration: "2023",
  },
  {
    title: "Greentube Featured Games Hub",
    description:
      "Built a modular showcase for Greentube's top-performing titles with dynamic content slots, editorial workflows, and real-time telemetry overlays. Optimized rendering for 4K kiosks and web, ensuring accessibility and compliance across markets.",
    thumbnail: "/greentube_featured.svg",
    skills: ["Next.js", "React", "GraphQL", "Contentful", "Cloudflare", "Cypress"],
    link: "https://www.greentube.com/",
    github: null,
    duration: "2022",
  },
  {
    title: "Casino Purple Loyalty Experience",
    description:
      "Delivered a gamified loyalty portal with real-time bonus tracking, interactive tutorials, and a tailored onboarding funnel. The relaunch led to a 27% lift in ARPU and doubled retention in target segments within three months.",
    thumbnail: "/casino_purple_hero.svg",
    skills: ["React", "TypeScript", "Redux", "WebSockets", "Playwright", "Azure"],
    link: "https://casinopurple.com/",
    github: null,
    duration: "2021",
  },
  {
    title: "iGaming Operations Toolkit",
    description:
      "Internal suite combining compliance dashboards, localization preview tools, and brand asset delivery built on Next.js server actions and Supabase. Reduced rollout time for new skins by 50% and created a single source of truth for creative assets.",
    thumbnail: "/estimating.png",
    skills: ["Next.js", "Supabase", "Node.js", "Server Actions", "Playwright", "Docker"],
    link: null,
    github: null,
    duration: "2020 – Present",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 4 },
      { name: "Next.js", level: 4 },
      { name: "Flutter", level: 4 },
      { name: "Tailwind CSS", level: 4 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Express", level: 4 },
      { name: "Supabase", level: 4 },
      { name: "PostgreSQL", level: 4 },
      { name: "RPCs/RLS", level: 4 },
      { name: "Salesforce", level: 3 },
    ],
  },
  {
    name: "Languages",
    skills: [
      { name: "TypeScript", level: 4 },
      { name: "JavaScript", level: 4 },
      { name: "SQL", level: 4 },
      { name: "Dart", level: 3 },
      { name: "Python", level: 3 },
    ],
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Git", level: 5 },
      { name: "AI APIs (OpenAI, Gemini)", level: 4 },
      { name: "REST/GraphQL", level: 4 },
      { name: "Docker", level: 3 },
      { name: "CI/CD", level: 3 },
    ],
  },
]

export const languages: Language[] = [
  { name: "English", proficiency: LanguageProficiency.Fluent, level: 5 },
  { name: "Spanish", proficiency: LanguageProficiency.Native, level: 5 },
]
