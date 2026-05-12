"use client";

import { useEffect } from "react";

interface Props {
  onClose: () => void;
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#00E5FF">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#00E5FF">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#00E5FF">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconEmail() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#00E5FF">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function IconMedium() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#00E5FF">
      <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

const contacts = [
  { label: "GitHub",   handle: "github.com/muhammadawais",         url: "https://github.com",             Icon: IconGitHub   },
  { label: "LinkedIn", handle: "linkedin.com/in/muhammadawais",    url: "https://linkedin.com",           Icon: IconLinkedIn },
  { label: "X",        handle: "x.com/muhammadawais",              url: "https://x.com",                  Icon: IconX        },
  { label: "Email",    handle: "muhammadawais@gmail.com",          url: "mailto:muhammadawais@gmail.com", Icon: IconEmail    },
  { label: "Medium",   handle: "medium.com/@muhammadawais",        url: "https://medium.com",             Icon: IconMedium   },
];

export default function ConnectModal({ onClose }: Props) {
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
     

      <div className="relative overflow-hidden w-full max-w-[620px] mx-4 border-2 border-[#00E5FF] bg-[#021114] shadow-[0_0_40px_rgba(0,229,255,0.25)] flex flex-col max-h-[90vh]">

        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-[10px] border-b-2 border-[#00E5FF] bg-[#021320] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-[28px] h-[28px] border-2 border-[#7ba205] flex items-center justify-center shrink-0">
              <span className="text-[#7ba205] font-black text-[14px] leading-none">!</span>
            </div>
            <span className="text-[14px] font-bold tracking-wider uppercase text-[#7ba205] [font-family:var(--font-orbitron),sans-serif]">
              CONNECT
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

        {/* Sub-header */}
        <div className="flex items-center gap-6 px-4 py-[7px] border-b border-[rgba(0,229,255,0.15)] bg-[#021114] shrink-0">
          <span className="text-[11px] tracking-[0.14em] uppercase text-[#00E5FF] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">SYSTEM_ROOT</span>
          <span className="text-[11px] tracking-[0.14em] uppercase text-[#00E5FF] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">ACCESS LEVEL: PUBLIC</span>
          <span className="text-[11px] tracking-[0.14em] uppercase [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] modal-blink">CONNECTING...</span>
        </div>

        {/* Content area with scan beam */}
        <div className="relative flex flex-col flex-1 min-h-0 overflow-hidden">

          {/* Continuous scan beam */}
          <div className="modal-scan-beam absolute inset-x-0 pointer-events-none z-50" />

        {/* Body */}
        <div className="connect-scroll overflow-y-auto flex-1 px-4 py-3 flex flex-col gap-[8px]">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.url}
              target={c.url.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="contact-row flex items-center gap-4 border border-[rgba(0,229,255,0.35)] bg-[#021320] px-4 py-[16px] no-underline"
            >
              <div className="row-scan" />
              <div className="shrink-0 w-[46px] h-[46px] rounded-[6px] bg-[#011018] border border-[rgba(0,229,255,0.25)] flex items-center justify-center">
                <c.Icon />
              </div>
              <div className="flex flex-col gap-[4px] min-w-0">
                <p className="text-[14px] font-bold text-[#00E5FF] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] [text-shadow:0_0_8px_rgba(0,229,255,0.4)]">
                  {c.label}
                </p>
                <p className="text-[12px] text-[rgba(0,229,255,0.5)] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] truncate">
                  {c.handle}
                </p>
              </div>
              <span className="row-arrow ml-auto text-[#00E5FF] text-[20px] leading-none">→</span>
            </a>
          ))}

          <div className="flex items-center gap-3 mt-3 mb-1">
            <span className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#7ba205] whitespace-nowrap [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
              &gt;&gt; DOWNLOAD RESUME
            </span>
            <div className="flex-1 h-px bg-[rgba(0,229,255,0.2)]" />
          </div>

          <a
            href="/resume.pdf"
            download
            className="resume-btn flex items-center justify-center gap-3 border border-[#7ba205] bg-[#021114] px-4 py-[14px] text-[#7ba205] text-[13px] font-bold tracking-[0.18em] uppercase [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] hover:bg-[#00E5FF] hover:text-[#021114] transition-colors duration-150 no-underline mb-1"
          >
            <span className="text-[16px]">⬇</span>
            DOWNLOAD_RESUME.PDF
          </a>
          </div>{/* end connect-scroll */}

          {/* Footer */}
          <div className="flex items-center justify-end px-4 py-[8px] border-t-2 border-[#00E5FF] bg-[#021320] shrink-0">
            <button
              onClick={onClose}
              className="px-4 py-[6px] border border-[#7ba205] text-[#7ba205] text-[12px] font-bold tracking-wide uppercase [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] hover:bg-[#00E5FF] hover:text-[#021114] transition-all duration-150"
            >
              DISCONNECT
            </button>
          </div>
        </div>{/* end content wrapper */}

        <style>{`
          .connect-scroll::-webkit-scrollbar { width: 6px; }
          .connect-scroll::-webkit-scrollbar-track { background: transparent; }
          .connect-scroll::-webkit-scrollbar-thumb { background: rgba(0,229,255,0.45); }
          .connect-scroll { scrollbar-width: thin; scrollbar-color: rgba(0,229,255,0.45) transparent; }

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
    </div>
  );
}
