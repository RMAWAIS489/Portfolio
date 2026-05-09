export type ExperimentStatus = "Completed" | "In Progress";

export interface Experiment {
  id: string;
  title: string;
  tags: string[];
  status: ExperimentStatus;
  // gradient used as placeholder cover
  gradient: string;
}

export const experiments: Experiment[] = [
  {
    id: "1",
    title: "Retro Game Engine",
    tags: ["Game Development", "Python", "Pygame"],
    status: "Completed",
    gradient: "linear-gradient(135deg, #1a0533 0%, #6b21a8 50%, #ec4899 100%)",
  },
  {
    id: "2",
    title: "Server Room Monitor",
    tags: ["Automation", "Python"],
    status: "Completed",
    gradient: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #7c3aed 100%)",
  },
  {
    id: "3",
    title: "File Sync Daemon",
    tags: ["File Management", "Python", "Automation"],
    status: "Completed",
    gradient: "linear-gradient(135deg, #021114 0%, #0e7490 50%, #00E5FF 100%)",
  },
  {
    id: "4",
    title: "CLI Task Runner",
    tags: ["Automation", "Python"],
    status: "In Progress",
    gradient: "linear-gradient(135deg, #1c1917 0%, #78350f 50%, #f59e0b 100%)",
  },
  {
    id: "5",
    title: "Pixel Art Generator",
    tags: ["Game Development", "Pygame"],
    status: "Completed",
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
  },
  {
    id: "6",
    title: "Log Analyzer",
    tags: ["File Management", "Automation"],
    status: "In Progress",
    gradient: "linear-gradient(135deg, #0a0a0a 0%, #1a3a1a 50%, #22c55e 100%)",
  },
];

export const allTags = [
  "Game Development",
  "Python",
  "Pygame",
  "Automation",
  "File Management",
];
