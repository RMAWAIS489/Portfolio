"use client";

import { useState } from "react";
import { experiments, allTags, type Experiment } from "./experiments-data";

function ExperimentCard({ exp }: { exp: Experiment }) {
  return (
    <div className="exp-card border border-[#00E5FF] bg-[#021114] flex flex-col cursor-pointer hover:shadow-[0_0_16px_rgba(0,229,255,0.25)]">
      {/* Cover image area */}
      <div className="relative h-[160px] shrink-0">
        <div
          className="absolute inset-0"
          style={{ background: exp.gradient }}
        />
        {/* Status badge */}
        <div
          className={`absolute top-2 right-2 px-[6px] py-[2px] text-[10px] font-bold tracking-[0.1em] uppercase border bg-[rgba(2,17,20,0.85)] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] ${
            exp.status === "Completed"
              ? "text-[#aaff00] border-[#aaff00]"
              : "text-[#FFD700] border-[#FFD700]"
          }`}
        >
          {exp.status}
        </div>
        {/* Scan line overlay */}
        <div className="scan-line" />
      </div>

      {/* Card body */}
      <div className="border-t border-[#00E5FF] bg-[#021114] px-3 py-2 flex flex-col gap-[6px]">
        <p className="text-[14px] font-bold text-[#00E5FF] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] [text-shadow:0_0_8px_rgba(0,229,255,0.35)]">
          {exp.title}
        </p>
        <div className="flex flex-wrap gap-[4px]">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] border border-[#00E5FF] px-1 py-[1px] text-[rgb(159,161,162)] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExperimentsPanel() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? experiments
      : experiments.filter((e) => e.tags.includes(activeTag));

  const completedCount = filtered.filter((e) => e.status === "Completed").length;
  const inProgressCount = filtered.filter((e) => e.status === "In Progress").length;

  return (
    <div className="flex flex-1 min-h-0">
      <style>{`
        .exp-scroll::-webkit-scrollbar { width: 4px; }
        .exp-scroll::-webkit-scrollbar-track { background: transparent; margin-top: 8px; margin-bottom: 8px; }
        .exp-scroll::-webkit-scrollbar-thumb { background: rgba(0,229,255,0.5); border-radius: 999px; }
        .exp-scroll { scrollbar-width: thin; scrollbar-color: rgba(0,229,255,0.5) transparent; }

        @keyframes expScan {
          0%   { top: -4px; }
          100% { top: 100%; }
        }
        .exp-card { position: relative; overflow: hidden; }
        .exp-card .scan-line {
          position: absolute; left: 0; top: -4px;
          width: 100%; height: 4px;
          background: linear-gradient(to bottom, rgba(0,229,255,0), rgba(0,229,255,0.8), rgba(0,229,255,0));
          filter: blur(1px);
          pointer-events: none; opacity: 0;
        }
        .exp-card:hover .scan-line {
          opacity: 1;
          animation: expScan 1.8s linear infinite;
        }
      `}</style>

      <div className="grid flex-1 min-h-0 overflow-hidden mx-2 lg:mx-6 border border-[#00E5FF] grid-cols-1 lg:grid-cols-[minmax(180px,0.32fr)_1fr]">

        {/* LEFT: Tags sidebar */}
        <aside className="exp-scroll flex flex-col border-r border-[#00E5FF] overflow-y-auto">
          {/* Header */}
          <div className="px-4 py-[7px] bg-[rgb(42,52,54)] border-b border-[#00E5FF] shrink-0">
            <span className="text-[13px] uppercase tracking-[0.14em] font-bold text-[#b8e063] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
              TAGS
            </span>
          </div>

          {/* Tag filter chips */}
          <div className="flex flex-col gap-[3px] p-3">
            {["All", ...allTags].map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`border bg-[#021114] px-[12px] py-[6px] text-[13px] font-medium tracking-[0.1em] uppercase whitespace-nowrap [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] cursor-pointer transition-all duration-150 hover:bg-[#00E5FF] hover:text-[#021114] hover:shadow-[0_0_10px_rgba(0,229,255,0.7),0_0_20px_rgba(0,229,255,0.35)] text-left ${
                  activeTag === tag
                    ? "border-[#7ba205] shadow-[0_0_10px_rgba(0,229,255,0.7),0_0_20px_rgba(0,229,255,0.35)] text-[#7ba205] hover:text-[#7ba205] [text-shadow:0_0_8px_rgba(123,162,5,0.8),0_0_16px_rgba(123,162,5,0.4)] font-bold"
                    : "border-[#00E5FF] text-[#00E5FF]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-auto border-t border-[#00E5FF] px-4 py-2 flex flex-col text-center">
            <p className="text-[10px] tracking-[0.12em] uppercase text-[rgb(159,161,162)]">TOTAL</p>
            <p className="text-[22px] font-bold text-[#00E5FF] [font-family:var(--font-orbitron),sans-serif] [text-shadow:0_0_8px_rgba(0,229,255,0.5)]">
              {filtered.length}
            </p>
            <p className="text-[10px] tracking-[0.12em] uppercase text-[rgb(159,161,162)]">EXPERIMENTS</p>
          </div>
        </aside>

        {/* RIGHT: main content */}
        <div className="flex flex-col min-h-0">
          {/* Status bar */}
          <div className="bg-[rgb(42,52,54)] px-4 py-2 flex items-center gap-4 text-[13px] font-bold text-[#b8e063] border-b border-[#00E5FF] shrink-0 [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] flex-wrap">
            <span>&gt;&gt; DISPLAYING EXPERIMENTS: {filtered.length}</span>
            <span className="flex items-center gap-[5px]">
              <span
                className="inline-block w-[8px] h-[8px] rounded-full bg-[#aaff00] shadow-[0_0_6px_#aaff00]"
                aria-hidden
              />
              COMPLETED: {completedCount}
            </span>
            <span className="flex items-center gap-[5px]">
              <span
                className="inline-block w-[8px] h-[8px] rounded-full bg-[#FFD700] shadow-[0_0_6px_#FFD700]"
                aria-hidden
              />
              IN PROGRESS: {inProgressCount}
            </span>
          </div>

          {/* Cards grid — scrollable */}
          <div className="exp-scroll overflow-y-auto flex-1 p-3 bg-[#021114]">
            {filtered.length === 0 ? (
              <div className="flex items-center justify-center h-full text-[#00E5FF] text-[13px] tracking-[0.12em] uppercase opacity-50 [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
                NO EXPERIMENTS FOUND
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filtered.map((exp) => (
                  <ExperimentCard key={exp.id} exp={exp} />
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
