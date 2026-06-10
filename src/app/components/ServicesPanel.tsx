"use client";

import { useState } from "react";
import { services, type Service } from "./services-data";
import { useModal } from "./ModalContext";

/* ─── Service card ───────────────────────────────────────────────────────── */
function ServiceCard({
  service,
  onEnquire,
}: {
  service: Service;
  onEnquire: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="svc-card border border-[#00E5FF] bg-[#021114] flex flex-col"
      style={{ "--accent": service.accentColor } as React.CSSProperties}
    >
      {/* Cover banner */}
      <div
        className="relative h-[100px] shrink-0 overflow-hidden flex items-center justify-center"
        style={{ background: service.gradient }}
      >
        {/* decorative icon glyph */}
        <span className="select-none text-[32px] font-black tracking-widest opacity-30 [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]"
          style={{ color: service.accentColor }}>
          {service.icon}
        </span>
        {/* scan line */}
        <div className="svc-scan-line" />
      </div>

      {/* Card body */}
      <div className="border-t border-[#00E5FF] px-4 py-3 flex flex-col gap-2 flex-1">
        {/* Title */}
        <p
          className="text-[14px] font-bold [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] [text-shadow:0_0_8px_var(--accent,rgba(0,229,255,0.35))]"
          style={{ color: service.accentColor }}
        >
          {service.title}
        </p>

        {/* Tagline */}
        <p className="text-[11px] uppercase tracking-[0.1em] text-[rgb(159,161,162)] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
          {service.tagline}
        </p>

        {/* Description */}
        <p className="text-[12px] text-[rgb(180,185,186)] leading-[18px] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
          {service.description}
        </p>

        {/* Expandable bullets */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1 text-[11px] uppercase tracking-[0.1em] mt-1 cursor-pointer transition-colors hover:opacity-80 [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]"
          style={{ color: service.accentColor }}
        >
          <span
            className="inline-block transition-transform duration-200"
            style={{ transform: expanded ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            ▶
          </span>
          {expanded ? "HIDE DETAILS" : "VIEW DETAILS"}
        </button>

        {expanded && (
          <ul className="flex flex-col gap-[5px] pl-1 mt-1">
            {service.bullets.map((b) => (
              <li
                key={b}
                className="flex gap-2 text-[11px] text-[rgb(159,161,162)] leading-[16px] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]"
              >
                <span style={{ color: service.accentColor }} className="shrink-0">▸</span>
                {b}
              </li>
            ))}
          </ul>
        )}

        {/* Enquire button */}
        <button
          onClick={onEnquire}
          className="mt-auto pt-3 border-t border-[#00E5FF]/30 text-[11px] font-bold uppercase tracking-[0.12em] text-left transition-colors hover:opacity-80 [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]"
          style={{ color: service.accentColor }}
        >
          [ ENQUIRE → ]
        </button>
      </div>
    </div>
  );
}

/* ─── Main panel ─────────────────────────────────────────────────────────── */
export default function ServicesPanel() {
  const { openContact } = useModal();

  return (
    <div className="flex flex-1 min-h-0">
      <style>{`
        .svc-scroll::-webkit-scrollbar { width: 4px; }
        .svc-scroll::-webkit-scrollbar-track { background: transparent; margin-top: 8px; margin-bottom: 8px; }
        .svc-scroll::-webkit-scrollbar-thumb { background: rgba(0,229,255,0.5); border-radius: 999px; }
        .svc-scroll { scrollbar-width: thin; scrollbar-color: rgba(0,229,255,0.5) transparent; }

        @keyframes svcScan {
          0%   { top: -4px; }
          100% { top: 100%; }
        }
        .svc-card { position: relative; overflow: hidden; }
        .svc-card .svc-scan-line {
          position: absolute; left: 0; top: -4px;
          width: 100%; height: 4px;
          background: linear-gradient(to right, rgba(0,229,255,0), rgba(0,229,255,0.8), rgba(0,229,255,0));
          filter: blur(1px);
          pointer-events: none; opacity: 0;
        }
        .svc-card:hover .svc-scan-line {
          opacity: 1;
          animation: svcScan 1.8s linear infinite;
        }
      `}</style>

      <div className="flex flex-1 min-h-0 flex-col overflow-hidden mx-2 lg:mx-6 border border-[#00E5FF]">

        {/* Status bar */}
        <div className="bg-[rgb(42,52,54)] px-4 py-2 flex items-center gap-4 text-[13px] font-bold text-[#b8e063] border-b border-[#00E5FF] shrink-0 [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] flex-wrap">
          <span>&gt;&gt; AVAILABLE SERVICES: {services.length}</span>
          <span className="flex items-center gap-[5px] ml-auto">
            <span
              className="inline-block w-[8px] h-[8px] rounded-full bg-[#aaff00] shadow-[0_0_6px_#aaff00]"
              aria-hidden
            />
            STATUS: ACCEPTING WORK
          </span>
        </div>

        {/* Cards grid — scrollable */}
        <div className="svc-scroll overflow-y-auto flex-1 p-3 bg-[#021114]">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {services.map((svc) => (
              <ServiceCard
                key={svc.id}
                service={svc}
                onEnquire={openContact}
              />
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div className="mt-4 border border-[#00E5FF] bg-[#021114] px-6 py-5 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1">
              <p className="text-[13px] font-bold text-[#00E5FF] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] [text-shadow:0_0_8px_rgba(0,229,255,0.35)]">
                &gt;&gt; HAVE A PROJECT IN MIND?
              </p>
              <p className="text-[11px] text-[rgb(159,161,162)] mt-1 [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
                Let&apos;s discuss what you&apos;re building and how I can help make it happen.
              </p>
            </div>
            <button
              onClick={openContact}
              className="shrink-0 border border-[#00E5FF] bg-[#00E5FF] px-6 py-[10px] text-[12px] font-bold uppercase tracking-[0.14em] text-[#021114] hover:bg-[#021114] hover:text-[#00E5FF] transition-colors [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]"
            >
              Get In Touch →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
