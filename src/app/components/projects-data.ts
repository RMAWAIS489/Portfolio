export interface Project {
  id: string;
  name: string;
  type: string;
  size: string;
  url: string;
  logo: string;
  image: string | null;
  description: string;
  technologies: string[];
  details: string[];
}

export const projects: Project[] = [
   {
    id: "1",
    name: "Log Automobile",
    type: "Full Stack",
    size: "650 MB",
    url: "https://lamborghini-group.ch/en",
    logo: "/logo.svg",
    image: "/project-image-1.png",
    description: "Full-stack automobile club management platform",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Redux Toolkit",
      "React Query",
      "Framer Motion",
      "Sentry",
      "Node.js",
      "next-intl",
    ],
    details: [
      "Full-stack web app for managing an automobile club — members, events, forums, garage, news, and a member directory with chat.",
      "Built on Next.js 15 App Router with Firebase as the backend (Firestore, Auth, Storage, Cloud Functions).",
      "Internationalized with next-intl (EN/DE), state managed via Redux Toolkit + React Query, UI built with Radix UI + shadcn/c components.",
      "Cloud Functions handle email notifications, event reminders, and user status triggers via scheduled jobs.",
      "Deployed on Firebase App Hosting (Cloud Run), with Sentry for error monitoring across client, server, and edge.",
    ],
  },
  {
    id: "2",
    name: "Verified Offers",
    type: "Full Stack",
    size: "820 MB",
    url: "https://verified-offers-b0e04.web.app",
    logo: "/verified-logo.png",
    image: "/project-image-3.png",
    description: "Full-stack real estate offer management platform",
    technologies: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Firebase",
      "Redux Toolkit",
      "React Query",
      "React Hook Form",
      "Recharts",
      "Stripe",
      "Zod",
      "shadcn/ui",
      "Radix UI",
      "jsPDF",
      "Lucide React",
    ],
    details: [
      "Full-stack web app for managing real estate offers end-to-end — buyers submit offers, sellers counter or accept, with full negotiation history, document management, and investment analysis tools.",
      "Built with React 18 + Vite on the frontend, Firebase as the backend (Firestore, Auth, Storage, Cloud Functions) for real-time offer tracking and notifications.",
      "Role-based access for buyers, sellers, and listing agents with verified buyer badges, offer expiry logic, SMS/email notifications, and shareable seller links.",
      "Features an Investment Analyzer with Flip, Rental, BRRRR, and Exit strategy tabs, PDF export via jsPDF, and Stripe-powered subscription tiers for pro features.",
      "Deployed on Firebase Hosting with real-time Firestore listeners, counter offer workflows, document uploads, and activity timelines per offer.",
    ],
  },
 
];

// Legacy alias kept for any existing imports
export const dummyProjects = projects.map((p) => ({
  id: p.id,
  name: p.name,
  size: p.size,
  type: p.type,
}));

export type ProjectRow = (typeof dummyProjects)[number];
