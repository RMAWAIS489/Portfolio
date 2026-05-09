"use client";

import { useEffect, useRef } from "react";

export default function LiveClock() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fmt = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");
      if (ref.current) ref.current.textContent = `${hh}.${mm}.${ss}`;
    };
    fmt();
    const id = setInterval(fmt, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <style>{`
        @keyframes termBlink {
          0%, 49%  { color: #00E5FF; }
          50%, 100% { color: #003344; }
        }
        .term-blink {
          animation: termBlink 2s step-start infinite !important;
        }
      `}</style>
      <p className="term-blink font-normal text-[12px]">
        <span ref={ref} />
      </p>
    </>
  );
}
