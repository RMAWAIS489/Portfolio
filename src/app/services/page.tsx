import SubBar from "../components/SubBar";
import ServicesPanel from "../components/ServicesPanel";

export default function ServicesPage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <SubBar path="/ARCHIVES/SERVICES/INFO" />
      <ServicesPanel />
    </div>
  );
}
