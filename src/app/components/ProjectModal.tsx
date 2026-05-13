"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "./projects-data";

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const beamContainerRef = useRef<HTMLDivElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => { setImgLoaded(false); }, [project.id]);

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
      aria-label={project.name}
    >
      {/* Modal shell */}
      <div className="relative flex flex-col w-[min(800px,96vw)] max-h-[80dvh] border-2 border-[#00E5FF] bg-[#000d18] shadow-[0_0_40px_rgba(0,229,255,0.25)]">

        {/* ── Title bar ── */}
        <div className="flex items-center gap-3 shrink-0 border-b-2 border-[#00E5FF] bg-[#02181c] px-4 py-[10px]">
          <span className="grid h-6 w-6 shrink-0 place-items-center bg-[#71a600] text-[#021320] text-[11px] font-black">!</span>
          <span className="flex-1 text-[13px] font-bold tracking-wide uppercase text-[#71a600] [font-family:var(--font-orbitron),monospace] truncate">
            {project.name}
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
          {["SYSTEM_ROOT", "ACCESS LEVEL: USER"].map((t) => (
            <span key={t} className="text-[10px] tracking-[0.14em] uppercase text-[#00E5FF] [font-family:Consolas,'Courier_New',monospace]">
              {t}
            </span>
          ))}
          <span className="text-[10px] tracking-[0.14em] uppercase [font-family:Consolas,'Courier_New',monospace] modal-blink">
            CONNECTING...
          </span>
        </div>

        {/* ── Content area: image + body + footer — scan beam lives here ── */}
        <div ref={beamContainerRef} className="relative flex flex-col flex-1 min-h-0 overflow-hidden">

          {/* Continuous scan beam */}
          <div className="modal-scan-beam absolute inset-x-0 pointer-events-none z-50" />

          {/* ── Scrollable body ── */}
          <div className="proj-modal-scroll flex-1 overflow-y-auto min-h-0 bg-[#02181c]">

            {/* Project image */}
            {project.image && (
              <div className="relative w-full border-b border-[rgba(0,229,255,0.25)] overflow-hidden p-4">
                {!imgLoaded && (
                  <div className="w-full h-[220px] bg-[#011018] border border-[rgba(0,229,255,0.15)] rounded-lg overflow-hidden relative">
                    <div className="img-skeleton-beam" />
                  </div>
                )}
                <Image
                  src={project.image}
                  alt={project.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={`w-full h-auto block rounded-lg ${imgLoaded ? "img-reveal" : "opacity-0 absolute inset-0"}`}
                  onLoad={() => setImgLoaded(true)}
                />
              </div>
            )}

            {/* Meta rows */}
            <div className="flex flex-col gap-0 border-b border-[rgba(0,229,255,0.25)] px-6 py-4 bg-[#02181c]">
              {[
                { label: "PROJECT ID:", value: `#${project.id}` },
                { label: "TYPE:", value: project.type },
                { label: "SIZE:", value: project.size },
                { label: "URL:", value: project.url, isLink: true },
              ].map(({ label, value, isLink }) => (
                <div key={label} className="flex items-baseline gap-4 border-b border-dashed border-[rgba(0,229,255,0.15)] py-[9px] last:border-b-0">
                  <span className="w-[110px] shrink-0 text-[11px] font-bold tracking-[0.14em] uppercase text-[#00E5FF] [font-family:Consolas,'Courier_New',monospace]">
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
            <div className="px-6 pt-5 pb-3 bg-[#02181c]">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-1 h-px bg-[rgba(0,229,255,0.25)]" />
                <span className="text-[13px] font-bold uppercase text-[#71a600] [font-family:Consolas,'Courier_New',monospace]">DESCRIPTION</span>
                <div className="flex-1 h-px bg-[rgba(0,229,255,0.25)]" />
              </div>
              <div className="border border-[rgba(0,229,255,0.35)] bg-[#022429] px-4 py-3">
                <p className="text-[13px] text-[#00E5FF] [font-family:Consolas,'Courier_New',monospace] leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="px-6 pt-4 pb-3 bg-[#02181c]">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-1 h-px bg-[rgba(0,229,255,0.25)]" />
                <span className="text-[13px] font-bold uppercase text-[#71a600] [font-family:Consolas,'Courier_New',monospace]">TECHNOLOGIES</span>
                <div className="flex-1 h-px bg-[rgba(0,229,255,0.25)]" />
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="border border-[#00E5FF] px-2 py-[4px] text-[13px] text-[#00E5FF] [font-family:Consolas,'Courier_New',monospace]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="px-6 pt-4 pb-6 bg-[#02181c]">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-1 h-px bg-[rgba(0,229,255,0.25)]" />
                <span className="text-[13px] font-bold uppercase text-[#71a600] [font-family:Consolas,'Courier_New',monospace]">DETAILS</span>
                <div className="flex-1 h-px bg-[rgba(0,229,255,0.25)]" />
              </div>
              <div className="flex flex-col gap-3">
                {project.details.map((line, i) => (
                  <div key={i} className="border-l-2 border-[rgba(0,229,255,0.4)] bg-[#022429] px-4 py-[4px]">
                    <p className="text-[13px] text-[#00E5FF] [font-family:Consolas,'Courier_New',monospace] leading-relaxed">
                      {line}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Footer bar ── */}
          <div className="flex items-center justify-end shrink-0 border-t-2 border-[#00E5FF] bg-[#02181c] px-4 py-[10px]">
            <button
              onClick={onClose}
              className="border border-[#71a600] bg-transparent px-4 py-[4px] text-[13px] font-bold tracking-wide uppercase text-[#71a600] hover:bg-[#00E5FF] hover:text-[#021320] transition-colors [font-family:Consolas,'Courier_New',monospace]"
            >
              DISCONNECT
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .proj-modal-scroll::-webkit-scrollbar { width: 6px; }
        .proj-modal-scroll::-webkit-scrollbar-track { background: transparent; }
        .proj-modal-scroll::-webkit-scrollbar-thumb { background: rgba(0,229,255,0.45); }
        .proj-modal-scroll { scrollbar-width: thin; scrollbar-color: rgba(0,229,255,0.45) transparent; }

        @keyframes imgReveal {
          0%   { clip-path: inset(0 0 100% 0); }
          100% { clip-path: inset(0 0 0% 0); }
        }
        .img-reveal {
          animation: imgReveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes skeletonSweep {
          0%   { left: -60%; }
          100% { left: 110%; }
        }
        .img-skeleton-beam {
          position: absolute;
          top: 0; left: -60%;
          width: 60%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(0,229,255,0.06), transparent);
          animation: skeletonSweep 1.4s ease-in-out infinite;
        }

        @keyframes modalBlink {
          0%, 49% { color: #00E5FF; }
          50%, 100% { color: #01636f; }
        }
        .modal-blink {
          animation: modalBlink 1.2s step-start infinite;
        }

        @keyframes modalScan {
          0%   { top: -4px; }
          100% { top: calc(100% + 80px); }
        }
        .modal-scan-beam {
          height: 4px;
          background: linear-gradient(to right, rgba(0,229,255,0), rgba(0,229,255,0.8), rgba(0,229,255,0));
          filter: blur(1px);
          animation: modalScan 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
