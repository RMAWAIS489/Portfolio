"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useModal } from "./ModalContext";
import { navItems, navHref, isNavActive } from "./nav-config";

type Props = {
  open: boolean;
  onClose: () => void;
  onLoginClick: () => void;
};

export default function MobileNavDrawer({ open, onClose, onLoginClick }: Props) {
  const pathname = usePathname();
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const { openConnect } = useModal();

  useEffect(() => {
    onCloseRef.current();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation">
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        aria-label="Close menu"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-[#00E5FF] bg-[#021114] shadow-[0_0_40px_rgba(0,229,255,0.15)]">
        <div className="flex items-center justify-between border-b border-[#00E5FF] px-3 py-3 shrink-0">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#00E5FF] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center border border-[#00E5FF] text-[#00E5FF] hover:bg-[#00E5FF] hover:text-[#021114]"
            aria-label="Close"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="18" y1="2" x2="2" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="border-b border-[#00E5FF]/50 px-3 py-2">
          <p className="text-[10px] uppercase tracking-[0.12em] text-[#00E5FF]/80 [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
            Remote-access — secure connection
          </p>
        </div>

        <nav className="flex flex-1 flex-col gap-2 overflow-y-auto p-3 min-h-0">
          {navItems.map((item) => {
            const active = isNavActive(item, pathname);
            return (
              <Link
                key={item}
                href={navHref(item)}
                onClick={onClose}
                className={`border px-3 py-3 text-center text-[12px] uppercase tracking-[0.12em] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] transition-all duration-150 ${
                  active
                    ? "border-[#7ba205] bg-[#021320] font-bold text-[#7ba205] shadow-[0_0_10px_rgba(0,229,255,0.35)]"
                    : "border-[#00E5FF] bg-[#021114] text-[#00E5FF] hover:bg-[#00E5FF] hover:text-[#021114]"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-col gap-2 border-t border-[#00E5FF]/50 p-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              onClose();
              onLoginClick();
            }}
            className="border border-[#00E5FF] bg-[#00E5FF] py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-[#040e0f] hover:bg-[#021114] hover:text-[#00E5FF]"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              openConnect();
            }}
            className="border border-[#00E5FF] py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-[#00E5FF] hover:bg-[#00E5FF]/10"
          >
            Connect
          </button>
          <button
            type="button"
            onClick={onClose}
            className="border border-[#00E5FF] py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-[#00E5FF] hover:bg-[#00E5FF]/10"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
