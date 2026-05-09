export type ArticlePlatform = "Medium" | "LinkedIn" | "Dev.to" | "Hashnode";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
  platform: ArticlePlatform;
  url: string;
  coverGradient: string;
  date: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Next 14 and Google Maps Integration",
    excerpt: "A deep dive into integrating Google Maps API with Next.js 14 App Router, covering server components and client-side rendering strategies.",
    tags: ["Next.js", "Google Maps", "API Integration"],
    platform: "Medium",
    url: "#",
    coverGradient: "linear-gradient(135deg, #0f2027 0%, #203a43 40%, #1a3a2a 100%)",
    date: "2024-03-12",
  },
  {
    id: "2",
    title: "Mastering TypeScript Generics",
    excerpt: "Practical patterns for writing reusable, type-safe code using TypeScript generics — from basic constraints to advanced conditional types.",
    tags: ["TypeScript", "Algorithms", "Data Structures"],
    platform: "LinkedIn",
    url: "#",
    coverGradient: "linear-gradient(135deg, #0a0a2e 0%, #1a1a5e 50%, #2d2d8e 100%)",
    date: "2024-02-28",
  },
  {
    id: "3",
    title: "Hash Maps Under the Hood",
    excerpt: "Understanding how hash maps work internally — collision resolution, load factors, and when to use them over other data structures.",
    tags: ["Data Structures", "Hash Maps", "Algorithms"],
    platform: "Dev.to",
    url: "#",
    coverGradient: "linear-gradient(135deg, #1a0a00 0%, #7c2d12 50%, #ea580c 100%)",
    date: "2024-01-15",
  },
  {
    id: "4",
    title: "Building REST APIs with FastAPI",
    excerpt: "Step-by-step guide to building production-ready REST APIs using FastAPI, Pydantic validation, and async database access.",
    tags: ["Python", "API Integration", "Backend"],
    platform: "Medium",
    url: "#",
    coverGradient: "linear-gradient(135deg, #003322 0%, #009688 60%, #00E5FF 100%)",
    date: "2024-01-05",
  },
  {
    id: "5",
    title: "React State Management in 2024",
    excerpt: "Comparing Zustand, Jotai, and Redux Toolkit — when to use each and how they handle complex state in large React applications.",
    tags: ["React", "Algorithms"],
    platform: "Hashnode",
    url: "#",
    coverGradient: "linear-gradient(135deg, #0d0221 0%, #3b0764 50%, #7e22ce 100%)",
    date: "2023-12-20",
  },
  {
    id: "6",
    title: "PostgreSQL Query Optimization",
    excerpt: "Practical techniques for speeding up slow queries — indexes, EXPLAIN ANALYZE, and common anti-patterns to avoid.",
    tags: ["Data Structures", "Backend", "Algorithms"],
    platform: "LinkedIn",
    url: "#",
    coverGradient: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #4169E1 100%)",
    date: "2023-11-30",
  },
];

export const articleTags = [
  "API Integration",
  "Algorithms",
  "Data Structures",
  "Google Maps",
  "Hash Maps",
  "Next.js",
  "Python",
  "React",
  "Backend",
  "TypeScript",
];

export const platformColors: Record<ArticlePlatform, { text: string; border: string; bg: string }> = {
  Medium:   { text: "#ffffff", border: "#ffffff",  bg: "rgba(2,17,20,0.85)" },
  LinkedIn: { text: "#0A66C2", border: "#0A66C2",  bg: "rgba(2,17,20,0.85)" },
  "Dev.to": { text: "#00E5FF", border: "#00E5FF",  bg: "rgba(2,17,20,0.85)" },
  Hashnode: { text: "#2962FF", border: "#2962FF",  bg: "rgba(2,17,20,0.85)" },
};
