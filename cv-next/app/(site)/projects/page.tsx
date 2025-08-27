import { PROJECTS } from "../../../lib/projects";
import ProjectsClient from "../../../components/ProjectsClient";


export default function ProjectsPage() {
  return (
    <>
      <h1 className="text-2xl font-bold tracking-tight mb-4">Proyectos</h1>
      <ProjectsClient projects={PROJECTS} />
    </>
  );
}
