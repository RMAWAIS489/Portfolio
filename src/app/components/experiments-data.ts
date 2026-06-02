export type ExperimentStatus = "Completed" | "In Progress";

export interface Experiment {
  id: string;
  title: string;
  tags: string[];
  status: ExperimentStatus;
  /** gradient used as cover art fallback */
  gradient: string;
  /** optional real cover image (path relative to /public) */
  image?: string;
  description: string;
  techStack: string[];
  highlights: string[];
  /** optional: repo / demo link */
  link?: string;
}

export const experiments: Experiment[] = [
  {
    id: "1",
    title: "Retro Game Engine",
    tags: ["Game Development", "Python", "Pygame"],
    status: "Completed",
    gradient: "linear-gradient(135deg, #1a0533 0%, #6b21a8 50%, #ec4899 100%)",
    image: "/Retro-Game-Engine.png",
    description:
      "A lightweight 2-D game engine built from scratch on top of Pygame. Supports a component-entity system, a simple scene manager, sprite batching, basic AABB collision detection, and a tile-map loader — giving small retro games a structured foundation without depending on a heavy framework.",
    techStack: ["Python 3.11", "Pygame 2", "NumPy", "Tiled (map format)"],
    highlights: [
      "Component-entity architecture decouples game logic from rendering, making it easy to compose behaviors.",
      "Scene manager handles title, gameplay, pause, and game-over screens with clean push/pop transitions.",
      "Tile-map loader parses Tiled JSON exports, renders multi-layer maps, and auto-generates collision bodies.",
      "Sprite batching reduces per-frame draw calls by grouping same-texture quads into a single blit pass.",
      "Packaged as an importable module so new games can bootstrap in under 30 lines.",
    ],
  },
  {
    id: "2",
    title: "Server Room Monitor",
    tags: ["Automation", "Python"],
    status: "Completed",
    gradient: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #7c3aed 100%)",
    image: "/Server-Room-Monitor.png",
    description:
      "A headless Python daemon that polls a set of Linux servers over SSH, collects CPU, memory, disk, and network metrics, persists them to a local SQLite database, and fires email or Slack alerts when thresholds are breached — all without installing anything on the monitored hosts.",
    techStack: ["Python 3.11", "Paramiko", "SQLite3", "smtplib", "schedule"],
    highlights: [
      "Agent-less design — only SSH access is required; no software is installed on monitored machines.",
      "Configurable alert thresholds per host via a single YAML file; supports CPU %, memory %, and disk usage rules.",
      "SQLite time-series storage with a rolling 30-day retention policy to keep the footprint small.",
      "Email and Slack webhook notifications with per-alert cool-down periods to suppress noise.",
      "Runs as a systemd service; built-in reconnect logic handles transient network interruptions gracefully.",
    ],
  },
  {
    id: "3",
    title: "File Sync Daemon",
    tags: ["File Management", "Python", "Automation"],
    status: "Completed",
    gradient: "linear-gradient(135deg, #021114 0%, #0e7490 50%, #00E5FF 100%)",
    image: "/File-Sync-Daemon.png",
    description:
      "A cross-platform background service that watches one or more source directories and mirrors changes to a destination — local folder, network share, or S3 bucket — in near-real-time using filesystem events, with conflict detection and a full change log.",
    techStack: ["Python 3.11", "watchdog", "boto3", "SQLite3", "Click"],
    highlights: [
      "Event-driven sync via watchdog; reacts to create, modify, move, and delete events without polling.",
      "Pluggable back-end targets — local path, SMB/NFS mount, or Amazon S3 with configurable bucket and prefix.",
      "SHA-256 content hashing detects true changes and skips no-op writes, reducing unnecessary I/O.",
      "Conflict resolution strategy (last-write-wins or manual review queue) is selectable per sync rule.",
      "CLI built with Click; supports start/stop/status commands and live tail of the change log.",
    ],
  },
  {
    id: "4",
    title: "CLI Task Runner",
    tags: ["Automation", "Python"],
    status: "In Progress",
    gradient: "linear-gradient(135deg, #1c1917 0%, #78350f 50%, #f59e0b 100%)",
    image: "/CLI-Task-Runner.png",
    description:
      "A developer-focused task runner (think a lightweight Make / Just alternative) driven entirely by a YAML task file. Tasks support dependencies, environment variable injection, parallel execution, and a colourised interactive TUI — all from a single Python binary with no external runtime dependencies.",
    techStack: ["Python 3.12", "PyYAML", "Rich", "asyncio", "Click"],
    highlights: [
      "YAML-based task definitions with dependency graphs; tasks run in topological order automatically.",
      "Parallel execution via asyncio — independent tasks run concurrently to cut total pipeline time.",
      "Rich-powered TUI shows a live task tree with per-task status spinners, timings, and truncated output.",
      "Environment variable scoping: global defaults can be overridden per task or per invocation flag.",
      "Work in progress: adding a watch mode that re-runs affected tasks when source files change.",
    ],
  },
  {
    id: "5",
    title: "Pixel Art Generator",
    tags: ["Game Development", "Pygame"],
    status: "Completed",
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    image: "/Pixel-Art-Generator.png",
    description:
      "An interactive desktop tool for creating and editing pixel art sprites and tile sets. Features a canvas with configurable grid sizes, a full colour palette editor, layer support, onion-skinning for animation frames, and one-click PNG export — all built with Pygame.",
    techStack: ["Python 3.11", "Pygame 2", "Pillow"],
    highlights: [
      "Canvas resolutions from 8×8 to 128×128 with a zoom-in viewport and configurable pixel size.",
      "Layer system with visibility toggles and per-layer opacity for non-destructive editing.",
      "Onion-skinning overlays the previous and next animation frames at reduced opacity for smooth sprite work.",
      "Custom colour palette editor with HSV sliders, hex input, and a swatchbook of saved colours.",
      "Exports individual frames or full sprite sheets as PNG via Pillow, with transparent background support.",
    ],
  },
  {
    id: "6",
    title: "Log Analyzer",
    tags: ["File Management", "Automation"],
    status: "In Progress",
    gradient: "linear-gradient(135deg, #0a0a0a 0%, #1a3a1a 50%, #22c55e 100%)",
    image: "/Log-Analyzer.png",
    description:
      "A terminal application for ingesting, parsing, and summarising large log files (nginx, systemd, custom formats) in real time. Supports regex-based pattern matching, anomaly flagging, frequency histograms, and exportable HTML reports — with a live-tail mode for active log streams.",
    techStack: ["Python 3.12", "Rich", "Textual", "regex", "Jinja2"],
    highlights: [
      "Format auto-detection for common log schemas (Common Log Format, JSON lines, systemd journal).",
      "Regex rule engine lets users define named patterns and severity levels in a config file.",
      "Frequency histogram shows the top error patterns over configurable time windows.",
      "Anomaly detection flags sudden spikes in error rate using a simple rolling-average baseline.",
      "Work in progress: Textual-based TUI with split panes for raw log stream and parsed summary side by side.",
    ],
  },
];

export const allTags = [
  "Game Development",
  "Python",
  "Pygame",
  "Automation",
  "File Management",
];
