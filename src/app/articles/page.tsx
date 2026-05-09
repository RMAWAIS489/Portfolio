import ArticlesSubBar from "../components/ArticlesSubBar";
import ArticlesPanel from "../components/ArticlesPanel";

export default function ArticlesPage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <ArticlesSubBar />
      <ArticlesPanel />
    </div>
  );
}
