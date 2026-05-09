"use client";

import LiveClock from "./LiveClock";

type TopBarProps = {
  onMenuClick?: () => void;
  menuOpen?: boolean;
};

export default function TopBar({ onMenuClick, menuOpen }: TopBarProps) {
  return (
    <div className="flex items-center justify-between bg-[#021114] px-2 lg:px-4 py-0.5 shrink-0 gap-2">
      <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
        {/* Logo */}
        <div className="shrink-0 border border-[#00E5FF] p-1 bg-[#021320]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="h-10 w-10 sm:h-12 sm:w-12"
          >
            <rect x="0" y="0" width="48" height="48" fill="#00E5FF" />
            <rect x="2" y="2" width="44" height="44" fill="none" strokeWidth="1" />
            <polygon points="24,6 43,41 5,41" fill="#021114" />
            <rect x="3" y="41" width="13" height="4" fill="#021114" />
            <rect x="32" y="41" width="13" height="4" fill="#021114" />
            <polygon points="24,15 36,38 12,38" fill="#021114" />
            <rect x="13" y="29" width="22" height="5" fill="#00E5FF" />
            <rect x="15" y="30" width="18" height="3" fill="#021320" />
          </svg>
        </div>

        <div className="hidden h-[36px] w-[4px] shrink-0 shadow-[0_0_8px_1px_rgba(0,229,255,0.2)] sm:block" />

        <div className="min-w-0">
          <p className="truncate font-bold text-[14px] text-[#00E5FF] sm:text-[18px]">ACCESS TERMINAL</p>
          <LiveClock />
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="grid h-9 w-9 place-items-center border border-[#00E5FF] text-[#00E5FF] hover:bg-[#00E5FF]/10 lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen ?? false}
        >
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="18" y1="2" x2="2" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
              <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="2" />
              <line x1="0" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="2" />
              <line x1="0" y1="13" x2="20" y2="13" stroke="currentColor" strokeWidth="2" />
            </svg>
          )}
        </button>

        {/* Minimize — desktop only */}
        <button
          className="hidden h-9 w-11 items-center justify-center border border-[#00E5FF] lg:flex"
          aria-label="Minimize"
        >
          <span className="block h-[2px] w-[18px] bg-[#00E5FF]" />
        </button>

        {/* Close — desktop only */}
        <button
          className="hidden h-9 w-11 place-items-center border border-[#00E5FF] lg:grid"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <line x1="2" y1="2" x2="18" y2="18" stroke="#00E5FF" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="18" y1="2" x2="2" y2="18" stroke="#00E5FF" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
