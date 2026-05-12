"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const BOOT_LINES = [
  "INITIALIZING SYSTEM...",
  "LOADING CORE MODULES...",
  "ESTABLISHING SECURE LINK...",
  "MOUNTING INTERFACE...",
  "BOOT SEQUENCE COMPLETE",
];

function LoaderContent() {
  const [fadeOut, setFadeOut] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setLineIndex((i) => {
        if (i < BOOT_LINES.length - 1) return i + 1;
        clearInterval(lineTimer);
        return i;
      });
    }, 320);

    const progressTimer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(progressTimer); return 100; }
        return p + 2;
      });
    }, 32);

    const fadeTimer = setTimeout(() => setFadeOut(true), 1900);

    return () => {
      clearInterval(lineTimer);
      clearInterval(progressTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "#000b14",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.5s ease",
        overflow: "hidden",
        fontFamily: "Consolas, 'Courier New', monospace",
      }}
    >
      {/* Scanlines */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,229,255,0.025) 3px, rgba(0,229,255,0.025) 4px)",
      }} />

      {/* Corner brackets */}
      {[
        { top: 20, left: 20, borderWidth: "2px 0 0 2px" },
        { top: 20, right: 20, borderWidth: "2px 2px 0 0" },
        { bottom: 20, left: 20, borderWidth: "0 0 2px 2px" },
        { bottom: 20, right: 20, borderWidth: "0 2px 2px 0" },
      ].map((s, i) => (
        <span key={i} style={{
          position: "absolute", width: 28, height: 28,
          borderColor: "#00E5FF", borderStyle: "solid", opacity: 0.7, ...s,
        }} />
      ))}

      {/* Center body */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18, width: "min(420px, 90vw)" }}>

        {/* Name */}
        <div style={{
          fontFamily: "var(--font-orbitron), monospace",
          fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
          fontWeight: 700,
          letterSpacing: "0.18em",
          color: "#00E5FF",
          textShadow: "0 0 24px rgba(0,229,255,0.7), 0 0 60px rgba(0,229,255,0.3)",
        }}>
          AWAIS.DEV
        </div>
        <div style={{
          fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase",
          color: "rgba(0,229,255,0.55)", marginTop: -14,
        }}>
          FULL STACK DEVELOPER
        </div>

        {/* Hex ring SVG */}
        <div style={{ width: 120, height: 120, filter: "drop-shadow(0 0 10px rgba(0,229,255,0.7))" }}>
          <svg viewBox="0 0 120 120" fill="none" width="120" height="120">
            <style>{`
              @keyframes hexSpin {
                from { stroke-dashoffset: 320; }
                to   { stroke-dashoffset: 0; }
              }
              @keyframes dotPulse {
                0%,100% { opacity:1; }
                50%     { opacity:0.2; }
              }
              .hl-hex { animation: hexSpin 1.6s linear forwards; }
              .hl-dot { animation: dotPulse 1s ease-in-out infinite; }
            `}</style>
            <polygon
              className="hl-hex"
              points="60,4 112,32 112,88 60,116 8,88 8,32"
              stroke="#00E5FF" strokeWidth="2"
              strokeDasharray="320" strokeDashoffset="320"
            />
            <polygon
              points="60,20 98,42 98,78 60,100 22,78 22,42"
              stroke="rgba(0,229,255,0.25)" strokeWidth="1"
            />
            <circle className="hl-dot" cx="60" cy="60" r="6" fill="#00E5FF" />
          </svg>
        </div>

        {/* Boot log */}
        <div style={{
          width: "100%", border: "1px solid rgba(0,229,255,0.4)",
          background: "rgba(0,20,36,0.8)", padding: "10px 14px",
          display: "flex", flexDirection: "column", gap: 5, minHeight: 110,
        }}>
          {BOOT_LINES.slice(0, lineIndex + 1).map((line, i) => (
            <div key={i} style={{
              fontSize: "0.65rem", letterSpacing: "0.1em",
              color: "#00E5FF", opacity: i === lineIndex ? 1 : 0.35,
              whiteSpace: "nowrap",
            }}>
              <span style={{ color: "rgba(0,229,255,0.45)" }}>&gt;&nbsp;</span>
              {line}
              {i === lineIndex && (
                <span style={{ marginLeft: 3, animation: "cursorBlink 0.7s step-start infinite" }}>█</span>
              )}
            </div>
          ))}
          <style>{`
            @keyframes cursorBlink {
              0%,49% { opacity:1; }
              50%,100% { opacity:0; }
            }
          `}</style>
        </div>

        {/* Progress bar */}
        <div style={{ width: "100%", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            flex: 1, height: 4,
            background: "rgba(0,229,255,0.1)",
            border: "1px solid rgba(0,229,255,0.35)",
            overflow: "hidden",
          }}>
            <div style={{
              height: "100%", width: `${progress}%`,
              background: "#00E5FF",
              boxShadow: "0 0 8px #00E5FF",
              transition: "width 0.03s linear",
            }} />
          </div>
          <span style={{ fontSize: "0.6rem", letterSpacing: "0.12em", color: "#00E5FF", minWidth: "2.8rem", textAlign: "right" }}>
            {String(progress).padStart(3, "0")}%
          </span>
        </div>

      </div>
    </div>
  );
}

export default function PageLoader() {
  const [mounted, setMounted] = useState(true);
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
    const t = setTimeout(() => setMounted(false), 2400);
    return () => clearTimeout(t);
  }, []);

  if (!mounted || !domReady) return null;

  // Portal to document.body to escape any overflow:hidden ancestors
  return createPortal(<LoaderContent />, document.body);
}
