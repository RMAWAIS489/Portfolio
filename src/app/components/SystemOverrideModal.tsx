"use client";

import { useEffect } from "react";

interface Props {
  onClose: () => void;
}

export default function SystemOverrideModal({ onClose }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(2,11,14,0.82)] backdrop-blur-[2px]"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-[800px] mx-4 border-2 border-[#00E5FF] bg-[#000d18] shadow-[0_0_40px_rgba(0,229,255,0.25)] flex flex-col">

        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-[10px] border-b-2 border-[#00E5FF] bg-[#02181c] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-[28px] h-[28px] bg-[#7ba205] flex items-center justify-center shrink-0">
              <span className="text-[#021320] font-black text-[14px] leading-none">!</span>
            </div>
            <span className="text-[13px] font-bold tracking-wider uppercase text-[#7ba205] [font-family:var(--font-orbitron),monospace]">
              SYSTEM OVERRIDE
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-[28px] h-[28px] border border-[#7ba205] flex items-center justify-center text-[#7ba205] hover:bg-[#00E5FF] hover:text-[#021114] transition-colors duration-150 text-[12px] font-bold"
            aria-label="Close"
          >
            X
          </button>
        </div>

        {/* Sub-bar */}
        <div className="flex items-center gap-6 px-4 py-[7px] border-b border-[rgba(0,229,255,0.15)] bg-[#02181c] shrink-0">
          <span className="text-[11px] tracking-[0.14em] uppercase text-[#00E5FF] [font-family:Consolas,'Courier_New',monospace]">SYSTEM_ROOT</span>
          <span className="text-[11px] tracking-[0.14em] uppercase text-[#00E5FF] [font-family:Consolas,'Courier_New',monospace]">ACCESS LEVEL: ADMIN</span>
          <span className="text-[11px] tracking-[0.14em] uppercase [font-family:Consolas,'Courier_New',monospace] modal-blink">CONNECTING...</span>
        </div>

        {/* Content area with scan beam */}
        <div className="relative flex flex-col flex-1 min-h-0 overflow-hidden">

          {/* Continuous scan beam */}
          <div className="modal-scan-beam absolute inset-x-0 pointer-events-none z-50" />

        {/* Body */}
        <div className="px-6 py-6 bg-[#02181c]">
          <div className="border border-[rgba(0,229,255,0.35)] bg-[#000d18] px-5 py-5 flex gap-4 items-start">
            {/* Icon */}
            <div className="shrink-0 w-[48px] h-[48px] rounded-full border-2 border-[#00E5FF] bg-[#011018] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="28" height="28" viewBox="0 0 24 24">
                <path fill="#00E5FF" d="M13 13h-2V7h2m-2 8h2v2h-2m4.73-14H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27z" />
              </svg>
            </div>
            {/* Text */}
            <div className="flex flex-col gap-3">
              <p className="text-[13px] font-bold tracking-[0.1em] uppercase text-[#ff4444] [font-family:Consolas,'Courier_New',monospace]">
                SYSTEM NOTIFICATION:
              </p>
              <p className="text-[13px] text-[#00E5FF] [font-family:Consolas,'Courier_New',monospace] leading-relaxed">
                Minimize operation intercepted. This terminal cannot be minimized.<br />
                Reason: Critical system functions active.
              </p>
              <div className="mt-1 border-t border-[rgba(0,229,255,0.2)] pt-3">
                <p className="text-[11px] tracking-[0.14em] text-[rgba(0,229,255,0.45)] [font-family:Consolas,'Courier_New',monospace]">
                  SYS CODE: 0x45FD2A
                </p>
              </div>
            </div>
          </div>
          </div>{/* end body */}

          {/* Footer */}
          <div className="flex items-center justify-end px-4 py-[10px] border-t-2 border-[#00E5FF] bg-[#02181c] shrink-0">
            <button
              onClick={onClose}
              className="px-4 py-[6px] border border-[#7ba205] text-[#7ba205] text-[12px] font-bold tracking-wide uppercase [font-family:Consolas,'Courier_New',monospace] hover:bg-[#00E5FF] hover:text-[#021114] transition-all duration-150"
            >
              DISCONNECT
            </button>
          </div>
        </div>{/* end content wrapper */}

        <style>{`
          @keyframes modalBlink {
            0%, 49% { color: #00E5FF; }
            50%, 100% { color: #01636f; }
          }
          .modal-blink { animation: modalBlink 1.2s step-start infinite; }

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
    </div>
  );
}
