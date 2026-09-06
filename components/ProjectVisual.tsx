import Diagram, { hasDiagram } from "./Diagram";
import type { Project } from "@/lib/work";

/**
 * The product visual for a project.
 *
 * A real screenshot wins if one exists: set `shot` on the project to a file in
 * /public. Until then the system diagram stands in, which is honest and shows
 * more of the engineering than a marketing shot would.
 */
export default function ProjectVisual({ project }: { project: Project }) {
  if (project.shot) {
    return (
      <figure className="visual overflow-hidden rounded-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.shot}
          alt={project.shotAlt ?? `${project.name} interface`}
          className="block h-auto w-full"
          loading="lazy"
        />
      </figure>
    );
  }

  if (!hasDiagram(project.slug)) return null;

  return (
    <div className="visual overflow-hidden rounded-2xl">
      <Diagram slug={project.slug} />
    </div>
  );
}
