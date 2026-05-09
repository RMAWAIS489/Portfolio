import InfoBar from "./components/InfoBar";
import HeroImage from "./components/HeroImage";
import SkillsPanel from "./components/SkillsPanel";

export default function Home() {
  return (
    <>
      {/* Info bar */}
      <InfoBar />

      {/* Content: hero + skills */}
      <div className="grid flex-1 min-h-0 overflow-hidden grid-cols-[1.9fr_1fr] gap-[3px] mx-2 lg:mx-6 max-h-[310px] border border-[#00E5FF]">
        <HeroImage />
        <SkillsPanel />
      </div>
    </>
  );
}
