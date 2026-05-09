import ExperimentsSubBar from "../components/ExperimentsSubBar";
import ExperimentsPanel from "../components/ExperimentsPanel";

export default function ExperimentsPage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <ExperimentsSubBar />
      <ExperimentsPanel />
    </div>
  );
}
