import {
  SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs,
  SiMongodb, SiSupabase, SiStripe, SiPostgresql, SiFirebase,
  SiAngular, SiPython, SiExpress, SiRedux, SiGithubactions,
  SiAuth0, SiFastapi, SiTailwindcss, SiPayloadcms, SiNetlify,
} from "react-icons/si";
import type { IconType } from "react-icons";

export const navItems = ["Info", "Projects", "Experiments", "Articles"];

export interface Skill {
  label: string;
  kind: string;
  icon: IconType;
  color: string;
}

export const skills: Skill[] = [
  { label: "Typescript",     kind: "Programming Language", icon: SiTypescript,    color: "#3178C6" },
  { label: "JavaScript",     kind: "Programming Language", icon: SiJavascript,    color: "#F7DF1E" },
  { label: "Python",         kind: "Programming Language", icon: SiPython,        color: "#FFD43B" },
  { label: "React",          kind: "Frontend Framework",   icon: SiReact,         color: "#61DAFB" },
  { label: "Next.js",        kind: "Frontend Framework",   icon: SiNextdotjs,     color: "#ffffff" },
  { label: "Angular",        kind: "Frontend Framework",   icon: SiAngular,       color: "#DD0031" },
  { label: "Tailwind CSS",   kind: "CSS Framework",        icon: SiTailwindcss,   color: "#06B6D4" },
  { label: "Redux",          kind: "State Management",     icon: SiRedux,         color: "#764ABC" },
  { label: "Node.js",        kind: "Backend Runtime",      icon: SiNodedotjs,     color: "#339933" },
  { label: "Express.js",     kind: "Backend Framework",    icon: SiExpress,       color: "#ffffff" },
  { label: "Fast API",       kind: "Backend Framework",    icon: SiFastapi,       color: "#009688" },
  { label: "MongoDB",        kind: "Database",             icon: SiMongodb,       color: "#47A248" },
  { label: "PostgreSQL",     kind: "Database",             icon: SiPostgresql,    color: "#4169E1" },
  { label: "Supabase",       kind: "Backend as a Service", icon: SiSupabase,      color: "#3ECF8E" },
  { label: "Firebase",       kind: "Backend as a Service", icon: SiFirebase,      color: "#FFCA28" },
  { label: "Stripe",         kind: "Payment Gateway",      icon: SiStripe,        color: "#635BFF" },
  { label: "Auth0",          kind: "Authentication",       icon: SiAuth0,         color: "#EB5424" },
  { label: "GitHub Actions", kind: "CI / CD",              icon: SiGithubactions, color: "#2088FF" },
  { label: "Payload CMS",    kind: "Headless CMS",         icon: SiPayloadcms,    color: "#ffffff" },
  { label: "Netlify CMS",    kind: "Headless CMS",         icon: SiNetlify,       color: "#00C7B7" },
];
