import SubBar from "../components/SubBar";
import ProjectsPanel from "../components/ProjectsPanel";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <SubBar path="/ARCHIVES/PROJECTS/INFO" />
      <ProjectsPanel />
    </div>
  );
}
