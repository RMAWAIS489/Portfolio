"use client";
import { useModal } from "./ModalContext";

export default function ExperimentsSubBar() {
  const { openConnect } = useModal();
  return (
    <div className="flex items-center gap-[3px] my-[6px] shrink-0 h-[80px]">
      {/* Name */}
      <div className="flex-1 px-16 py-6">
        <h1 className="text-[32px] leading-[48px] font-bold text-[#00E5FF] [text-shadow:0_0_8px_#00E5FF,0_0_24px_#00E5FF,0_0_48px_rgba(0,229,255,0.8)] whitespace-nowrap [font-family:var(--font-orbitron),'Courier_New',monospace]">
          Muhammad Awais
        </h1>
      </div>

      {/* System + path block */}
      <div className="flex-1 border-t-2 border-l-2 border-r-2 border-[#00E5FF] flex flex-col self-stretch">
        <div className="flex items-center gap-[8px] px-3 py-[5px] border-b border-[rgba(0,229,255,0.35)] bg-[#021320]">
          <span className="text-[11px] tracking-[0.15em] uppercase text-[#00E5FF] [font-family:Consolas,'Courier_New',monospace]">
            SYSTEM
          </span>
          <span className="text-[11px] tracking-[0.15em] uppercase text-[#00E5FF] term-blink [font-family:Consolas,'Courier_New',monospace]">
            ACTIVE
          </span>
        </div>
        <p className="text-[18px] font-bold tracking-[0.12em] uppercase text-[#00E5FF] whitespace-nowrap px-3 py-[8px] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
          /ARCHIVES/EXPERIMENTS/LOG
        </p>
      </div>

      {/* Connect / Download buttons */}
      <div className="flex-1 flex gap-[6px] self-stretch p-[6px] border-t-2 border-l-2 border-r-2 border-[#00E5FF] bg-[#021320]">
        <button onClick={openConnect} className="flex-1 flex flex-col gap-[3px] transition-transform duration-200 hover:scale-95">
          <div className="h-[8px] w-full bg-[#aaff00] rounded-t-[2px]" />
          <div className="flex-1 flex items-center justify-center border border-[#00E5FF] bg-[#021320] uppercase tracking-[0.12em] text-[16px] leading-[24px] text-[#00E5FF] font-bold [font-family:var(--font-orbitron),sans-serif] rounded-b-[2px]">
            Connect
          </div>
        </button>
        <button className="flex-1 flex flex-col gap-[3px] transition-transform duration-200 hover:scale-95">
          <div className="h-[8px] w-full bg-[#021320] border border-[#00E5FF] rounded-t-[2px]" />
          <div className="flex-1 flex items-center justify-center border border-[#00E5FF] bg-[#021320] uppercase tracking-[0.12em] text-[16px] leading-[24px] text-[#00E5FF] font-bold [font-family:var(--font-orbitron),sans-serif] rounded-b-[2px]">
            Download
          </div>
        </button>
      </div>
    </div>
  );
}
