"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Experiment } from "./experiments-data";

interface Props {
  experiment: Experiment;
  onClose: () => void;
}

export default function ExperimentModal({ experiment: exp, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);

  /* ── Keyboard close ── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleBackdrop = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleBackdrop}
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
      aria-label={exp.title}
    >
      {/* Modal shell */}
      <div className="relative flex flex-col w-[min(820px,96vw)] max-h-[82dvh] border-2 border-[#00E5FF] bg-[#000d18] shadow-[0_0_40px_rgba(0,229,255,0.25)]">

        {/* ── Title bar ── */}
        <div className="flex items-center gap-3 shrink-0 border-b-2 border-[#00E5FF] bg-[#02181c] px-4 py-[10px]">
          <span className="grid h-6 w-6 shrink-0 place-items-center bg-[#71a600] text-[#021320] text-[11px] font-black">
            EX
          </span>
          <span className="flex-1 text-[13px] font-bold tracking-wide uppercase text-[#71a600] [font-family:var(--font-orbitron),monospace] truncate">
            {exp.title}
          </span>
          {/* Status badge */}
          <span
            className={`px-[8px] py-[2px] text-[10px] font-bold tracking-[0.1em] uppercase border [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] ${
              exp.status === "Completed"
                ? "text-[#aaff00] border-[#aaff00]"
                : "text-[#FFD700] border-[#FFD700]"
            }`}
          >
            {exp.status}
          </span>
          <button
            onClick={onClose}
            className="grid h-7 w-7 shrink-0 place-items-center border border-[#71a600] text-[#71a600] text-[13px] font-bold hover:bg-[#00E5FF] hover:text-[#021320] transition-colors"
            aria-label="Close"
          >
            X
          </button>
        </div>

        {/* ── Sub-bar ── */}
        <div className="flex items-center gap-6 shrink-0 border-b border-[rgba(0,229,255,0.25)] bg-[#02181c] px-4 py-[6px]">
          <span className="text-[10px] tracking-[0.14em] uppercase text-[#00E5FF] [font-family:Consolas,'Courier_New',monospace]">
            EXPERIMENT_LOG
          </span>
          <span className="text-[10px] tracking-[0.14em] uppercase text-[#00E5FF] [font-family:Consolas,'Courier_New',monospace]">
            ACCESS LEVEL: USER
          </span>
          <span className="text-[10px] tracking-[0.14em] uppercase [font-family:Consolas,'Courier_New',monospace] exp-modal-blink text-[#00E5FF]">
            LOADING DATA...
          </span>
        </div>

        {/* ── Content ── */}
        <div className="relative flex flex-col flex-1 min-h-0 overflow-hidden">
          {/* Scan beam */}
          <div className="exp-modal-scan-beam absolute inset-x-0 pointer-events-none z-50" />

          <div className="exp-modal-scroll flex-1 overflow-y-auto min-h-0 bg-[#02181c]">

            {/* Cover banner */}
            <div
              className="relative w-full border-b border-[rgba(0,229,255,0.25)] shrink-0 overflow-hidden"
              style={{ background: exp.gradient }}
            >
              {exp.image ? (
                <Image
                  src={exp.image}
                  alt={exp.title}
                  width={820}
                  height={461}
                  sizes="820px"
                  className="w-full h-auto block"
                />
              ) : (
                <div className="h-[200px]" />
              )}
              {/* scanline texture */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 1px, transparent 3px)",
                }}
              />
              <div className="absolute bottom-3 left-4 flex flex-wrap gap-[5px] z-20">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] border border-[#00E5FF] bg-[rgba(2,17,20,0.75)] px-[6px] py-[2px] text-[#00E5FF] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Meta rows */}
            <div className="flex flex-col gap-0 border-b border-[rgba(0,229,255,0.25)] px-6 py-4">
              {[
                { label: "EXPERIMENT ID:", value: `#EXP-${exp.id.padStart(3, "0")}` },
                { label: "STATUS:", value: exp.status },
                ...(exp.link
                  ? [{ label: "LINK:", value: exp.link, isLink: true }]
                  : []),
              ].map(({ label, value, isLink }) => (
                <div
                  key={label}
                  className="flex items-baseline gap-4 border-b border-dashed border-[rgba(0,229,255,0.15)] py-[9px] last:border-b-0"
                >
                  <span className="w-[140px] shrink-0 text-[11px] font-bold tracking-[0.14em] uppercase text-[#00E5FF] [font-family:Consolas,'Courier_New',monospace]">
                    {label}
                  </span>
                  {isLink ? (
                    <a
                      href={value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-[#00E5FF] hover:underline [font-family:Consolas,'Courier_New',monospace] break-all"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-[13px] text-[#00E5FF] [font-family:Consolas,'Courier_New',monospace]">
                      {value}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="px-6 pt-5 pb-3">
              <SectionHeader label="DESCRIPTION" />
              <div className="border border-[rgba(0,229,255,0.35)] bg-[#022429] px-4 py-3">
                <p className="text-[13px] text-[#00E5FF] [font-family:Consolas,'Courier_New',monospace] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>

            {/* Tech stack */}
            <div className="px-6 pt-4 pb-3">
              <SectionHeader label="TECH STACK" />
              <div className="flex flex-wrap gap-2">
                {exp.techStack.map((t) => (
                  <span
                    key={t}
                    className="border border-[#00E5FF] px-2 py-[4px] text-[13px] text-[#00E5FF] [font-family:Consolas,'Courier_New',monospace]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="px-6 pt-4 pb-6">
              <SectionHeader label="HIGHLIGHTS" />
              <div className="flex flex-col gap-3">
                {exp.highlights.map((line, i) => (
                  <div
                    key={i}
                    className="border-l-2 border-[rgba(0,229,255,0.4)] bg-[#022429] px-4 py-[6px]"
                  >
                    <p className="text-[13px] text-[#00E5FF] [font-family:Consolas,'Courier_New',monospace] leading-relaxed">
                      {line}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Footer ── */}
          <div className="flex items-center justify-end shrink-0 border-t-2 border-[#00E5FF] bg-[#02181c] px-4 py-[10px]">
            <button
              onClick={onClose}
              className="border border-[#71a600] bg-transparent px-4 py-[4px] text-[13px] font-bold tracking-wide uppercase text-[#71a600] hover:bg-[#00E5FF] hover:text-[#021320] transition-colors [font-family:Consolas,'Courier_New',monospace]"
            >
              CLOSE LOG
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .exp-modal-scroll::-webkit-scrollbar { width: 6px; }
        .exp-modal-scroll::-webkit-scrollbar-track { background: transparent; }
        .exp-modal-scroll::-webkit-scrollbar-thumb { background: rgba(0,229,255,0.45); }
        .exp-modal-scroll { scrollbar-width: thin; scrollbar-color: rgba(0,229,255,0.45) transparent; }

        @keyframes expModalScan {
          0%   { top: -4px; }
          100% { top: calc(100% + 80px); }
        }
        .exp-modal-scan-beam {
          height: 4px;
          background: linear-gradient(to right, rgba(0,229,255,0), rgba(0,229,255,0.8), rgba(0,229,255,0));
          filter: blur(1px);
          animation: expModalScan 3s linear infinite;
        }

        @keyframes expModalBlink {
          0%, 49% { color: #00E5FF; }
          50%, 100% { color: #01636f; }
        }
        .exp-modal-blink {
          animation: expModalBlink 1.2s step-start infinite;
        }
      `}</style>
    </div>
  );
}

/* ── Small helper ── */
function SectionHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="flex-1 h-px bg-[rgba(0,229,255,0.25)]" />
      <span className="text-[13px] font-bold uppercase text-[#71a600] [font-family:Consolas,'Courier_New',monospace]">
        {label}
      </span>
      <div className="flex-1 h-px bg-[rgba(0,229,255,0.25)]" />
    </div>
  );
}
