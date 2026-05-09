import InfoBar from "./components/InfoBar";
import HeroImage from "./components/HeroImage";
import SkillsPanel from "./components/SkillsPanel";

export default function Home() {
  return (
    <div className="mx-2 flex min-h-0 flex-1 flex-col gap-[3px] overflow-hidden pb-2 pt-0 lg:mx-6 lg:pb-0">
      <InfoBar />

      <div className="grid min-h-0 flex-1 gap-[3px] overflow-hidden border border-[#00E5FF] max-lg:grid-cols-1 max-lg:grid-rows-[minmax(0,1.15fr)_minmax(0,1fr)] lg:max-h-[310px] lg:grid-cols-[1.9fr_1fr]">
        <div className="min-h-0 overflow-hidden">
          <HeroImage />
        </div>
        <div className="flex min-h-0 flex-col overflow-hidden">
          <SkillsPanel />
        </div>
      </div>
    </div>
  );
}
