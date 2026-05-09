"use client";

import { useState } from "react";
import { articles, articleTags, platformColors, type Article } from "./articles-data";

function PlatformBadge({ platform }: { platform: Article["platform"] }) {
  const c = platformColors[platform];
  return (
    <div
      className="absolute top-2 right-2 flex items-center gap-[5px] px-[7px] py-[3px] text-[10px] font-bold tracking-[0.08em] uppercase border [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]"
      style={{ color: c.text, borderColor: c.border, background: c.bg }}
    >
      {/* Platform icon letter */}
      <span
        className="inline-grid w-[14px] h-[14px] place-items-center text-[9px] font-black border rounded-sm"
        style={{ borderColor: c.border, color: c.text }}
      >
        {platform[0]}
      </span>
      {platform}
    </div>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="art-card border border-[#00E5FF] bg-[#021114] flex flex-col cursor-pointer hover:shadow-[0_0_16px_rgba(0,229,255,0.25)] no-underline"
    >
      {/* Cover */}
      <div className="relative h-[150px] shrink-0 overflow-hidden">
        <div className="absolute inset-0" style={{ background: article.coverGradient }} />
        {/* Corner brackets */}
        <div className="absolute top-2 left-2 w-[14px] h-[14px] border-t-2 border-l-2 border-white/50 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-[14px] h-[14px] border-b-2 border-r-2 border-white/50 pointer-events-none" />
        {/* Platform badge */}
        <PlatformBadge platform={article.platform} />
        {/* Scan line */}
        <div className="art-scan-line" />
      </div>

      {/* Body */}
      <div className="border-t border-[#00E5FF] bg-[#021114] px-3 py-[10px] flex flex-col gap-[6px] flex-1">
        <p className="text-[13px] font-bold text-[#00E5FF] leading-[18px] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] [text-shadow:0_0_8px_rgba(0,229,255,0.35)] line-clamp-2">
          {article.title}
        </p>
        <p className="text-[11px] text-[rgb(159,161,162)] leading-[16px] line-clamp-2 [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
          {article.excerpt}
        </p>
        <div className="flex flex-wrap gap-[4px] mt-auto pt-[4px]">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] border border-[#00E5FF] px-1 py-px text-[rgb(159,161,162)] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Date */}
        <p className="text-[10px] text-[rgba(0,229,255,0.4)] tracking-[0.1em] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
          {new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" })}
        </p>
      </div>
    </a>
  );
}

export default function ArticlesPanel() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? articles
      : articles.filter((a) => a.tags.includes(activeTag));

  const externalCount = filtered.length; // all are external links

  return (
    <div className="flex flex-1 min-h-0">
      <style>{`
        .art-scroll::-webkit-scrollbar { width: 4px; }
        .art-scroll::-webkit-scrollbar-track { background: transparent; margin-top: 8px; margin-bottom: 8px; }
        .art-scroll::-webkit-scrollbar-thumb { background: rgba(0,229,255,0.5); border-radius: 999px; }
        .art-scroll { scrollbar-width: thin; scrollbar-color: rgba(0,229,255,0.5) transparent; }

        @keyframes artScan {
          0%   { top: -4px; }
          100% { top: 100%; }
        }
        .art-card { position: relative; overflow: hidden; transition: transform 0.15s; }
        .art-card:hover { transform: translateY(-2px); }
        .art-card .art-scan-line {
          position: absolute; left: 0; top: -4px;
          width: 100%; height: 4px;
          background: linear-gradient(to right, rgba(0,229,255,0), rgba(0,229,255,0.85), rgba(0,229,255,0));
          filter: blur(1px);
          pointer-events: none; opacity: 0;
        }
        .art-card:hover .art-scan-line {
          opacity: 1;
          animation: artScan 1.8s linear infinite;
        }
      `}</style>

      <div className="grid flex-1 min-h-0 overflow-hidden mx-2 lg:mx-6 border border-[#00E5FF] grid-cols-1 lg:grid-cols-[minmax(180px,0.32fr)_1fr]">

        {/* LEFT: Tags sidebar */}
        <aside className="art-scroll flex flex-col border-r border-[#00E5FF] overflow-y-auto">
          {/* Header */}
          <div className="px-4 py-[7px] bg-[rgb(42,52,54)] border-b border-[#00E5FF] shrink-0">
            <span className="text-[13px] uppercase tracking-[0.14em] font-bold text-[#b8e063] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
              TAGS
            </span>
          </div>

          {/* Tag filter chips */}
          <div className="flex flex-col gap-[3px] p-3">
            {["All", ...articleTags].map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`border bg-[#021114] px-[12px] py-[6px] text-[13px] font-medium tracking-[0.1em] uppercase whitespace-nowrap text-left [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] cursor-pointer transition-all duration-150 hover:bg-[#00E5FF] hover:text-[#021114] hover:shadow-[0_0_10px_rgba(0,229,255,0.7),0_0_20px_rgba(0,229,255,0.35)] ${
                  activeTag === tag
                    ? "border-[#7ba205] shadow-[0_0_10px_rgba(0,229,255,0.7),0_0_20px_rgba(0,229,255,0.35)] text-[#7ba205] hover:text-[#7ba205] [text-shadow:0_0_8px_rgba(123,162,5,0.8),0_0_16px_rgba(123,162,5,0.4)] font-bold"
                    : "border-[#00E5FF] text-[#00E5FF]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-auto border-t border-[#00E5FF] px-4 py-2 flex flex-col text-center">
            <p className="text-[10px] tracking-[0.12em] uppercase text-[rgb(159,161,162)]">TOTAL</p>
            <p className="text-[22px] font-bold text-[#00E5FF] [font-family:var(--font-orbitron),sans-serif] [text-shadow:0_0_8px_rgba(0,229,255,0.5)]">
              {filtered.length}
            </p>
            <p className="text-[10px] tracking-[0.12em] uppercase text-[rgb(159,161,162)]">ARTICLES</p>
          </div>
        </aside>

        {/* RIGHT: main content */}
        <div className="flex flex-col min-h-0">
          {/* Status bar */}
          <div className="bg-[rgb(42,52,54)] px-4 py-2 flex items-center gap-6 text-[13px] font-bold text-[#b8e063] border-b border-[#00E5FF] shrink-0 [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] flex-wrap">
            <span>&gt;&gt; DISPLAYING ARTICLES: {filtered.length}</span>
            <span className="flex items-center gap-[5px] ml-auto">
              <span
                className="inline-block w-[8px] h-[8px] rounded-full bg-[#00E5FF] shadow-[0_0_6px_#00E5FF]"
                aria-hidden
              />
              EXTERNAL: {externalCount}
            </span>
          </div>

          {/* Cards grid */}
          <div className="art-scroll overflow-y-auto flex-1 p-3 bg-[#021114]">
            {filtered.length === 0 ? (
              <div className="flex items-center justify-center h-full text-[#00E5FF] text-[13px] tracking-[0.12em] uppercase opacity-50 [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
                NO ARTICLES FOUND
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filtered.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
