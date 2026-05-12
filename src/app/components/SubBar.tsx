"use client";
import { useModal } from "./ModalContext";

interface Props {
  path: string;
}

export default function SubBar({ path }: Props) {
  const { openConnect } = useModal();
  return (
    <div className="h-[90px] max-lg:hidden">
      {/* Name */}
      <div className="flex shrink-0 items-center gap-3 max-lg:hidden">
        <div className="flex-1 px-16 py-6">
          <h1 className="text-[32px] leading-[48px] font-bold text-[#00E5FF] [text-shadow:0_0_8px_#00E5FF,0_0_24px_#00E5FF,0_0_48px_rgba(0,229,255,0.8)] whitespace-nowrap [font-family:var(--font-orbitron),'Courier_New',monospace]">
            Muhammad Awais
          </h1>
        </div>

        {/* System + path block */}
        <div className="flex-1 border-2 border-[#00E5FF] flex flex-col self-stretch my-3">
          <div className="flex items-center gap-[8px] px-3 py-[5px] border-b border-[rgba(0,229,255,0.35)] bg-[#00303c]">
            <span className="text-[11px] tracking-[0.15em] uppercase text-[#00E5FF] [font-family:Consolas,'Courier_New',monospace]">
              SYSTEM
            </span>
            <span className="text-[11px] tracking-[0.15em] uppercase text-[#00E5FF] term-blink [font-family:Consolas,'Courier_New',monospace]">
              ACTIVE
            </span>
          </div>
          <p className="text-[18px] font-bold tracking-[0.12em] uppercase text-[#00E5FF] whitespace-nowrap px-1 pt-1 [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
            {path}
          </p>
        </div>

        {/* Connect / Download buttons */}
        <div className="flex-1 flex gap-[6px] self-stretch p-[6px] border-2 border-[#00E5FF] bg-[#021320] my-3">
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
    </div>
  );
}
