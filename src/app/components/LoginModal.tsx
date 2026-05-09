"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  onClose: () => void;
}

export default function LoginModal({ onClose }: Props) {
  const [userId, setUserId] = useState("");
  const [accessKey, setAccessKey] = useState("");
  const [connecting, setConnecting] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  // focus first input on mount
  useEffect(() => {
    inputRef.current?.focus();
    const t = setTimeout(() => setConnecting(false), 1200);
    return () => clearTimeout(t);
  }, []);

  // close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(2,11,14,0.82)] backdrop-blur-[2px]"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <style>{`
        @keyframes modalScan {
          0%   { top: -4px; }
          100% { top: 100%; }
        }
        .modal-scan-line {
          position: absolute; left: 0; top: -4px; z-index: 10;
          width: 100%; height: 3px;
          background: linear-gradient(to right, rgba(0,229,255,0), rgba(0,229,255,0.6), rgba(0,229,255,0));
          filter: blur(1px);
          pointer-events: none;
          animation: modalScan 3s linear infinite;
        }
        .hud-input {
          width: 100%;
          background: #021320;
          border: 1px solid rgba(0,229,255,0.4);
          color: #00E5FF;
          padding: 10px 12px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
          font-size: 13px;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .hud-input:focus {
          border-color: #00E5FF;
          box-shadow: 0 0 0 1px rgba(0,229,255,0.3), 0 0 12px rgba(0,229,255,0.15);
        }
        .hud-input::placeholder { color: rgba(0,229,255,0.25); }
        .hud-input[type="password"] { letter-spacing: 0.2em; }
        @keyframes blink-conn {
          0%, 49%  { opacity: 1; }
          50%, 100% { opacity: 0.2; }
        }
        .blink-conn { animation: blink-conn 1s step-start infinite; }
      `}</style>

      {/* Modal panel */}
      <div className="relative overflow-hidden w-full max-w-[620px] mx-4 border-2 border-[#00E5FF] bg-[#021114] shadow-[0_0_40px_rgba(0,229,255,0.25),inset_0_0_0_1px_rgba(0,229,255,0.08)]">
        <div className="modal-scan-line" />

        {/* ── Title bar ── */}
        <div className="flex items-center justify-between px-4 py-[10px] border-b border-[#00E5FF] bg-[#021320]">
          <div className="flex items-center gap-3">
            {/* Warning icon */}
            <div className="w-[28px] h-[28px] border-2 border-[#b8e063] flex items-center justify-center shrink-0">
              <span className="text-[#b8e063] font-black text-[14px] leading-none">!</span>
            </div>
            <span className="text-[14px] font-bold tracking-[0.18em] uppercase text-[#b8e063] [font-family:var(--font-orbitron),sans-serif]">
              SYSTEM AUTHENTICATION
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-[28px] h-[28px] border border-[#00E5FF] flex items-center justify-center text-[#00E5FF] hover:bg-[#00E5FF] hover:text-[#021114] transition-colors duration-150 text-[12px] font-bold"
            aria-label="Close"
          >
            X
          </button>
        </div>

        {/* ── Sub-header tabs ── */}
        <div className="flex items-center gap-6 px-4 py-[7px] border-b border-[rgba(0,229,255,0.2)] bg-[#021114]">
          <span className="text-[11px] tracking-[0.14em] uppercase text-[#00E5FF] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
            SYSTEM_ROOT
          </span>
          <span className="text-[11px] tracking-[0.14em] uppercase text-[#00E5FF] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
            ACCESS LEVEL: PUBLIC
          </span>
          <span className="text-[11px] tracking-[0.14em] uppercase text-[#00E5FF] blink-conn [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
            connecting...
          </span>
        </div>

        {/* ── Body ── */}
        <div className="px-6 py-5 flex flex-col gap-5">
          {/* Heading */}
          <div className="flex flex-col gap-1">
            <p className="text-[13px] font-bold tracking-[0.14em] uppercase text-[#b8e063] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
              ENTER ROOT ACCESS CREDENTIALS
            </p>
            <div className="w-full h-px bg-[rgba(0,229,255,0.2)]" />
            <p className="text-[11px] tracking-[0.12em] uppercase text-[#00E5FF] opacity-60 [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
              SECURITY PROTOCOL: ACTIVE
            </p>
          </div>

          {/* ROOT USER ID */}
          <div className="flex flex-col gap-[8px]">
            <label className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#00E5FF] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
              ROOT USER ID:
            </label>
            <input
              ref={inputRef}
              type="text"
              className="hud-input"
              placeholder="ENTER USER ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              autoComplete="username"
            />
          </div>

          {/* ACCESS KEY */}
          <div className="flex flex-col gap-[8px]">
            <label className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#00E5FF] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
              ACCESS KEY:
            </label>
            <input
              type="password"
              className="hud-input"
              placeholder="••••••••••••"
              value={accessKey}
              onChange={(e) => setAccessKey(e.target.value)}
              autoComplete="current-password"
            />
            {/* Active indicator line */}
            <div className="w-full h-[2px] bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
          </div>

          {/* AUTHENTICATE button */}
          <button
            className="w-full py-[14px] bg-[#00E5FF] text-[#021114] text-[14px] font-black tracking-[0.2em] uppercase [font-family:var(--font-orbitron),sans-serif] hover:bg-[#021114] hover:text-[#00E5FF] hover:shadow-[0_0_16px_rgba(0,229,255,0.5)] border-2 border-[#00E5FF] transition-all duration-150"
            onClick={() => { /* auth logic here */ }}
          >
            AUTHENTICATE
          </button>
        </div>

        {/* ── Footer bar ── */}
        <div className="flex items-center justify-end px-4 py-[8px] border-t border-[#00E5FF] bg-[#021320]">
          <button
            onClick={onClose}
            className="px-4 py-[6px] border border-[#00E5FF] text-[#00E5FF] text-[12px] font-bold tracking-[0.14em] uppercase [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] hover:bg-[#00E5FF] hover:text-[#021114] transition-all duration-150"
          >
            DISCONNECT
          </button>
        </div>
      </div>
    </div>
  );
}
