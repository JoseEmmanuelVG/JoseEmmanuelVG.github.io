import ProjectsClient from "../../../components/ProjectsClient";
import { getAllProjectMetas } from "@/lib/content";

export const metadata = { title: "Projects | JEVG" };

export default function ProjectsPage() {
  const projects = getAllProjectMetas().sort((a,b) => (b.date || "").localeCompare(a.date || ""));
  return (
    <>
      <h1 className="text-2xl font-bold tracking-tight mb-4">Projects</h1>
      <ProjectsClient projects={projects} />
    </>
  );
}
