"use client";

import { useState } from "react";
import { dummyProjects } from "./projects-data";

const categories = ["All", "Frontend", "Full Stack", "Backend"];

function ProjectThumb({ label }: { label: string }) {
  const ch = label.replace(/\s/g, "").slice(0, 2).toUpperCase();
  return (
    <span
      className="inline-grid h-9 w-9 shrink-0 place-items-center border border-[#00E5FF] bg-[#021320] text-[10px] font-bold tracking-wider text-[#00E5FF] shadow-[0_0_6px_rgba(0,229,255,0.35)] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]"
      aria-hidden
    >
      {ch}
    </span>
  );
}

export default function ProjectsPanel() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? dummyProjects : dummyProjects.filter((p) => p.type === active);

  return (
    <div className="flex flex-1 min-h-0 flex-col min-w-0">
      <style>{`
        .proj-scroll::-webkit-scrollbar { width: 4px; }
        .proj-scroll::-webkit-scrollbar-track { background: transparent; margin-top: 8px; margin-bottom: 8px; }
        .proj-scroll::-webkit-scrollbar-thumb { background: rgba(0,229,255,0.5); border-radius: 999px; }
        .proj-scroll { scrollbar-width: thin; scrollbar-color: rgba(0,229,255,0.5) transparent; }
        @keyframes projScan {
          0%   { top: -4px; }
          100% { top: 100%; }
        }
        .proj-row { position: relative; overflow: hidden; }
        .proj-row .proj-scan-line {
          position: absolute; left: 0; top: -4px;
          width: 100%; height: 4px;
          background: linear-gradient(to right, rgba(0,229,255,0), rgba(0,229,255,0.8), rgba(0,229,255,0));
          filter: blur(1px);
          pointer-events: none; opacity: 0;
        }
        .proj-row:hover .proj-scan-line {
          opacity: 1;
          animation: projScan 1.8s linear infinite;
        }
      `}</style>

      <div className="grid flex-1 min-h-0 overflow-hidden mx-2 lg:mx-6 border border-[#00E5FF] grid-cols-1 lg:grid-cols-[minmax(180px,0.32fr)_1fr]">

        {/* Filter sidebar */}
        <aside className="proj-scroll flex flex-col shrink-0 border-b border-[#00E5FF] lg:border-b-0 lg:border-r overflow-y-auto max-h-[min(280px,42vh)] sm:max-h-[min(320px,38vh)] lg:max-h-none">
          {/* Header */}
          <div className="px-4 py-[7px] bg-[rgb(42,52,54)] border-b border-[#00E5FF] shrink-0">
            <span className="text-[13px] uppercase tracking-[0.14em] font-bold text-[#b8e063] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
              FILTER
            </span>
          </div>

          {/* Category chips */}
          <div className="flex flex-col gap-[3px] p-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`border bg-[#021114] px-[12px] py-[6px] text-[14px] font-medium tracking-[0.12em] uppercase whitespace-nowrap [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] cursor-pointer transition-all duration-150 hover:bg-[#00E5FF] hover:text-[#021114] hover:shadow-[0_0_10px_rgba(0,229,255,0.7),0_0_20px_rgba(0,229,255,0.35)] ${
                  active === cat
                    ? "border-[#7ba205] shadow-[0_0_10px_rgba(0,229,255,0.7),0_0_20px_rgba(0,229,255,0.35)] text-[#7ba205] hover:text-[#7ba205] [text-shadow:0_0_8px_rgba(123,162,5,0.8),0_0_16px_rgba(123,162,5,0.4)] font-bold"
                    : "border-[#00E5FF] text-[#00E5FF]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-auto border-t border-[#00E5FF] px-4 py-2 flex flex-col text-center">
            <p className="text-[10px] tracking-[0.12em] uppercase text-[rgb(159,161,162)]">TOTAL</p>
            <p className="text-[22px] font-bold text-[#00E5FF] [font-family:var(--font-orbitron),sans-serif] [text-shadow:0_0_8px_rgba(0,229,255,0.5)]">
              {filtered.length}
            </p>
            <p className="text-[10px] tracking-[0.12em] uppercase text-[rgb(159,161,162)]">PROJECTS</p>
          </div>
        </aside>

        {/* Project table — thead sticky inside the same scroll container so columns always align */}
        <div className="proj-scroll flex flex-col min-h-0 min-w-0 bg-[#021114] overflow-y-auto overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse table-fixed lg:min-w-0">
            <colgroup>
              <col />
              <col style={{ width: "110px" }} />
              <col style={{ width: "130px" }} />
            </colgroup>
            <thead className="sticky top-0 z-10">
              <tr className="bg-[rgb(42,52,54)] uppercase tracking-[0.14em] text-[13px] font-bold text-[#b8e063]">
                <th className="text-left px-4 py-2 font-bold [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
                  NAME
                </th>
                <th className="text-right px-4 py-2 font-bold tabular-nums [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
                  SIZE
                </th>
                <th className="text-right px-4 py-2 font-bold [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
                  TYPE
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr
                  key={p.id}
                  className="proj-row border-b border-[#00E5FF] hover:bg-[rgba(0,229,255,0.04)] cursor-pointer"
                >
                  <td className="px-4 py-3 relative">
                    <div className="proj-scan-line" />
                    <div className="flex items-center gap-3 min-w-0">
                      <ProjectThumb label={p.name} />
                      <span className="text-[15px] font-bold text-[#00E5FF] truncate [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] [text-shadow:0_0_8px_rgba(0,229,255,0.35)]">
                        {p.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums text-[14px] text-[#00E5FF] whitespace-nowrap [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
                    {p.size}
                  </td>
                  <td className="px-4 py-3 text-right text-[14px] text-[#00E5FF] whitespace-nowrap [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
                    {p.type}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
