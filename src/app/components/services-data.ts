export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  gradient: string;
  accentColor: string;
  icon: string; // ASCII / symbol used as decorative glyph
}

export const services: Service[] = [
  {
    id: "1",
    title: "Full-Stack Web Development",
    tagline: "End-to-end web apps — from database to UI",
    description:
      "Design and build production-ready web applications using modern frameworks. Covers everything from REST / GraphQL APIs and database modelling to responsive front-end interfaces and deployment pipelines.",
    bullets: [
      "Next.js, React, Angular front-ends with TypeScript",
      "Node.js / Express / FastAPI back-ends",
      "PostgreSQL, MongoDB, Supabase, Firebase data layers",
      "Auth, payments (Stripe), and third-party API integrations",
      "CI/CD with GitHub Actions and cloud deployments",
    ],
    gradient: "linear-gradient(135deg, #021114 0%, #00303c 60%, #004d5c 100%)",
    accentColor: "#00E5FF",
    icon: "</>",
  },
  {
    id: "2",
    title: "Backend & API Development",
    tagline: "Scalable APIs built for reliability",
    description:
      "Architect and implement robust back-end services — RESTful APIs, microservices, and serverless functions — with a focus on performance, security, and clean documentation.",
    bullets: [
      "RESTful and GraphQL API design",
      "FastAPI and Node.js service development",
      "Database schema design and query optimisation",
      "JWT / OAuth2 authentication flows",
      "API documentation with OpenAPI / Swagger",
    ],
    gradient: "linear-gradient(135deg, #021114 0%, #0a1628 60%, #0f2040 100%)",
    accentColor: "#4169E1",
    icon: "{ }",
  },
  {
    id: "3",
    title: "Automation & Scripting",
    tagline: "Eliminate repetitive work with smart tooling",
    description:
      "Build Python-based automation scripts, daemons, and CLI tools that save hours of manual effort — from file processing pipelines and scheduled tasks to custom developer utilities.",
    bullets: [
      "Python scripts for file sync, log analysis, monitoring",
      "CLI tools with Click and Rich TUI interfaces",
      "Task runners and build automation",
      "Scheduled jobs and background daemons",
      "Cross-platform shell and system utilities",
    ],
    gradient: "linear-gradient(135deg, #021114 0%, #1c1917 50%, #2d1a00 100%)",
    accentColor: "#f59e0b",
    icon: ">>_",
  },
  {
    id: "4",
    title: "UI / UX Implementation",
    tagline: "Pixel-perfect interfaces that actually work",
    description:
      "Translate designs into clean, accessible, and performant front-end code. Specialised in Tailwind CSS component systems, animations, and responsive layouts across all screen sizes.",
    bullets: [
      "Tailwind CSS utility-first component systems",
      "Responsive and mobile-first layouts",
      "Smooth animations and micro-interactions",
      "Accessibility (WCAG) aware implementation",
      "Design-to-code from Figma or reference images",
    ],
    gradient: "linear-gradient(135deg, #021114 0%, #1a0533 55%, #2d0a4e 100%)",
    accentColor: "#a855f7",
    icon: "[ ]",
  },
  {
    id: "5",
    title: "CMS Integration",
    tagline: "Content management without the headaches",
    description:
      "Integrate headless CMS platforms into existing or new projects, enabling non-technical teams to manage content independently while developers retain full control over the front-end.",
    bullets: [
      "Payload CMS and Netlify CMS setup and configuration",
      "Custom content models and field types",
      "Next.js and React front-end data wiring",
      "Media handling and asset optimisation",
      "Role-based editorial workflows",
    ],
    gradient: "linear-gradient(135deg, #021114 0%, #003322 55%, #004433 100%)",
    accentColor: "#3ECF8E",
    icon: "[CMS]",
  },
  {
    id: "6",
    title: "Code Review & Consulting",
    tagline: "A second set of eyes on your codebase",
    description:
      "Review existing codebases, identify bottlenecks, and provide actionable recommendations on architecture, performance, security, and maintainability — without committing to a full build engagement.",
    bullets: [
      "Architecture and design pattern review",
      "Performance profiling and query optimisation",
      "Security audit for common vulnerabilities",
      "Refactoring plans with priority ranking",
      "Written report with clear, actionable findings",
    ],
    gradient: "linear-gradient(135deg, #021114 0%, #1a1a00 50%, #2a2a00 100%)",
    accentColor: "#b8e063",
    icon: "??",
  },
];
