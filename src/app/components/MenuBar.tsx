"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./data";

function navHref(item: string) {
  if (item === "Info") return "/";
  if (item === "Projects") return "/projects";
  if (item === "Experiments") return "/experiments";
  if (item === "Articles") return "/articles";
  return "#";
}

function isNavActive(item: string, pathname: string | null) {
  if (!pathname) return false;
  if (item === "Info") return pathname === "/";
  if (item === "Projects")
    return pathname === "/projects" || pathname.startsWith("/projects/");
  if (item === "Experiments")
    return pathname === "/experiments" || pathname.startsWith("/experiments/");
  if (item === "Articles")
    return pathname === "/articles" || pathname.startsWith("/articles/");
  return false;
}

export default function MenuBar({ onLoginClick }: { onLoginClick?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:gap-[3px] px-2 md:px-4 items-stretch my-[16px] shrink-0 min-w-0">
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
        className="shrink-0 border border-[#00E5FF] text-[#040e0f] uppercase tracking-[0.14em] text-[12px] sm:text-[13px] lg:text-[13px] bg-[#00E5FF] px-3 lg:px-2 py-[6px] whitespace-nowrap hover:bg-[#021114] hover:text-[#00E5FF] transition-colors duration-150 w-full sm:w-auto lg:w-auto"
      >
        LOGIN
      </button>
    </div>
  );
}
