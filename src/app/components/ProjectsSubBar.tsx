"use client";
import { useModal } from "./ModalContext";

export default function ProjectsSubBar() {
  const { openConnect } = useModal();
  return (
    <div className="my-[6px] flex min-w-0 shrink-0 flex-col items-stretch gap-2 lg:flex-row lg:items-center lg:gap-[3px] lg:h-[80px] max-lg:hidden">
      <div className="flex-1 min-w-0 px-3 py-4 sm:px-6 lg:px-16 lg:py-6">
        <h1 className="text-xl leading-tight sm:text-2xl sm:leading-snug md:text-[28px] md:leading-snug lg:text-[32px] lg:leading-[48px] font-bold text-[#00E5FF] [text-shadow:0_0_8px_#00E5FF,0_0_24px_#00E5FF,0_0_48px_rgba(0,229,255,0.8)] whitespace-normal lg:whitespace-nowrap [font-family:var(--font-orbitron),'Courier_New',monospace]">
          Muhammad Awais
        </h1>
      </div>

      <div className="flex-1 min-w-0 border-t-2 border-l-2 border-r-2 border-[#00E5FF] flex flex-col self-stretch">
        <div className="flex items-center gap-[8px] px-3 py-[5px] border-b border-[rgba(0,229,255,0.35)] bg-[#021320]">
          <span className="text-[11px] tracking-[0.15em] uppercase text-[#00E5FF] [font-family:Consolas,'Courier_New',monospace]">
            SYSTEM
          </span>
          <span className="text-[11px] tracking-[0.15em] uppercase text-[#00E5FF] term-blink [font-family:Consolas,'Courier_New',monospace]">
            ACTIVE
          </span>
        </div>
        <p className="text-sm md:text-[16px] font-bold tracking-[0.12em] uppercase text-[#00E5FF] truncate lg:text-[18px] lg:whitespace-nowrap px-3 py-[8px] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
          /ARCHIVES/PROJECTS/INFO
        </p>
      </div>

      <div className="flex-1 flex min-w-0 gap-[6px] self-stretch p-[6px] border-t-2 border-l-2 border-r-2 border-[#00E5FF] bg-[#021320]">
        <button onClick={openConnect} className="flex-1 flex flex-col gap-[3px] transition-transform duration-200 hover:scale-95">
          <div className="h-[8px] w-full bg-[#aaff00] rounded-t-[2px]" />
          <div className="flex-1 flex items-center justify-center border border-[#00E5FF] bg-[#021320] uppercase tracking-[0.12em] text-[14px] leading-snug lg:text-[16px] lg:leading-[24px] text-[#00E5FF] font-bold [font-family:var(--font-orbitron),sans-serif] rounded-b-[2px] px-1">
            Connect
          </div>
        </button>
        <button className="flex-1 flex flex-col gap-[3px] transition-transform duration-200 hover:scale-95">
          <div className="h-[8px] w-full bg-[#021320] border border-[#00E5FF] rounded-t-[2px]" />
          <div className="flex-1 flex items-center justify-center border border-[#00E5FF] bg-[#021320] uppercase tracking-[0.12em] text-[14px] leading-snug lg:text-[16px] lg:leading-[24px] text-[#00E5FF] font-bold [font-family:var(--font-orbitron),sans-serif] rounded-b-[2px] px-1">
            Download
          </div>
        </button>
      </div>
    </div>
  );
}
