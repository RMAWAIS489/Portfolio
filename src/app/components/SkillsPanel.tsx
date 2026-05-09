import { skills } from "./data";

export default function SkillsPanel() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <style>{`
        .skill-aside::-webkit-scrollbar { width: 4px; }
        .skill-aside::-webkit-scrollbar-track { background: transparent; margin-top: 16px; margin-bottom: 16px; }
        .skill-aside::-webkit-scrollbar-thumb { background: rgba(0,229,255,0.5); border-radius: 999px; }
        @keyframes scanDown {
          0%   { top: -4px; }
          100% { top: 100%; }
        }
        .skill-card { position: relative; overflow: hidden; }
        .skill-card .scan-line {
          position: absolute; left: 0; top: -6px;
          width: 100%; height: 4px;
          background: linear-gradient(to right, rgba(0,229,255,0), rgba(0,229,255,0.8), rgba(0,229,255,0));
          filter: blur(1px);
          pointer-events: none; opacity: 0;
        }
        .skill-card:hover { background: rgba(0,229,255,0.06); }
        .skill-card:hover .scan-line {
          opacity: 1;
          animation: scanDown 2s linear infinite;
        }
      `}</style>

      <aside className="skill-aside flex min-h-0 flex-1 flex-col gap-[12px] overflow-y-auto overscroll-contain p-[4px] py-3 sm:py-4">
        {skills.map((skill) => (
          <article
            key={skill.label}
            className="skill-card grid gap-[8px] items-center border border-[#00E5FF] px-[8px] py-[24px] shrink-0 grid-cols-[80px_1fr]"
          >
            <div className="scan-line" />
            <span className="skill-icon relative grid h-[68px] w-[68px] place-items-center text-[1.3rem] font-bold tracking-[0.04em] text-[#00E5FF] shadow-[0_0_6px_rgba(0,229,255,0.35)]">
              <skill.icon size={36} color={skill.color} />
            </span>
            <div>
              <p className="text-[10px] tracking-[0.12em] uppercase text-[rgb(159,161,162)] mb-[px]">
                {skill.kind}
              </p>
              <p className="text-[16px] text-[#00E5FF] font-bold">{skill.label}</p>
            </div>
          </article>
        ))}
      </aside>
    </div>
  );
}
