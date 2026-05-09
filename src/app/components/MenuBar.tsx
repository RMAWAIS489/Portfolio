"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, navHref, isNavActive } from "./nav-config";

export default function MenuBar({ onLoginClick }: { onLoginClick?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex w-full flex-row gap-[3px] items-stretch px-4 my-[16px] shrink-0 min-w-0">
      {/* Left block with shimmer scan animation */}
      <div className="border border-[#00E5FF] px-2 md:max-lg:px-8 lg:px-20 py-[6px] flex items-center min-w-0">
        <style>{`
          @keyframes shimmer {
            0%   { left: -100px; }
            100% { left: 110%; }
          }
          .shimmer-bar {
            position: absolute;
            top: 0;
            width: 60px;
            height: 100%;
            background: linear-gradient(to right, transparent, rgba(0,229,255,0.45), transparent);
            animation: shimmer 2.5s linear infinite;
            pointer-events: none;
            z-index: 1;
          }
        `}</style>
        <span className="relative inline-block overflow-hidden text-[11px] sm:text-[13px] lg:text-[14px] uppercase font-bold text-[#00E5FF] whitespace-normal lg:whitespace-nowrap">
          <div className="shimmer-bar" />
          REMOTE-ACCESS – SECURE CONNECTION
        </span>
      </div>

      {/* Nav items */}
      <div className="flex flex-nowrap gap-3 px-2 sm:px-4 md:max-lg:px-6 overflow-x-auto min-h-[44px] min-w-0 [-webkit-overflow-scrolling:touch] [scrollbar-width:thin] lg:flex-1 lg:overflow-visible lg:gap-8 lg:px-12 lg:py-0">
        {navItems.map((item) => {
          const active = isNavActive(item, pathname);
          return (
            <Link
              key={item}
              href={navHref(item)}
              className={`flex shrink-0 items-center justify-center border bg-[#021114] px-[10px] py-[6px] sm:px-[12px] text-[11px] sm:text-[13px] tracking-[0.12em] uppercase whitespace-nowrap text-[#00E5FF] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] cursor-pointer transition-all duration-150 hover:bg-[#00E5FF] hover:text-[#021114] hover:shadow-[0_0_10px_rgba(0,229,255,0.7),0_0_20px_rgba(0,229,255,0.35)] lg:px-[12px] lg:text-[13px] ${
                active
                  ? "border-[#7ba205] shadow-[0_0_10px_rgba(0,229,255,0.7),0_0_20px_rgba(0,229,255,0.35)] text-[#7ba205] hover:text-[#7ba205] [text-shadow:0_0_8px_rgba(123,162,5,0.8),0_0_16px_rgba(123,162,5,0.4)] font-bold"
                  : "border-[#00E5FF]"
              }`}
            >
              {item.toUpperCase()}
            </Link>
          );
        })}
      </div>

      {/* Login */}
      <button
        onClick={onLoginClick}
        className="w-auto shrink-0 border border-[#00E5FF] bg-[#00E5FF] px-3 py-[6px] text-[12px] uppercase tracking-[0.14em] text-[#040e0f] transition-colors duration-150 hover:bg-[#021114] hover:text-[#00E5FF] sm:text-[13px] lg:px-2 lg:text-[13px]"
      >
        LOGIN
      </button>
    </div>
  );
}
