export interface ProjectRow {
  id: string;
  name: string;
  size: string;
  type: string;
}

export const dummyProjects: ProjectRow[] = [
  { id: "1", name: "David Secul Portfolio", size: "320 MB", type: "Frontend" },
  { id: "2", name: "Deep Lawn", size: "2.8 GB", type: "Full Stack" },
  { id: "3", name: "Dogwood Analytics", size: "820 MB", type: "Full Stack" },
  { id: "4", name: "ILM UK", size: "1.1 GB", type: "Frontend" },
  { id: "5", name: "KGHYPE – Taobao Agent", size: "640 MB", type: "Full Stack" },
  { id: "6", name: "Manage Nail Shops", size: "410 MB", type: "Frontend" },
  { id: "7", name: "Neon Ops Dashboard", size: "195 MB", type: "Frontend" },
  { id: "8", name: "Vector Vault API", size: "980 MB", type: "Backend" },
  { id: "9", name: "Cipher Mail Client", size: "2.2 GB", type: "Full Stack" },
  { id: "10", name: "Gridline Telemetry", size: "560 MB", type: "Frontend" },
];
