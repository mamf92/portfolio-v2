import { ArrowRight } from '../icons.tsx';
import type { Project } from '../../data/projects.ts';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="flex w-full max-w-lg flex-col overflow-hidden rounded-lg bg-white shadow-md">
      <div className="bg-lightgrey flex h-60 items-center justify-center">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.imageAlt ?? project.title}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <span className="text-grey text-sm font-semibold tracking-widest uppercase">
            Project {String(index).padStart(2, '0')}
          </span>
        )}
      </div>

      <div className="flex h-full flex-col justify-between gap-4 p-4">
        <div className="flex flex-col gap-6 text-black">
          <div className="flex flex-wrap justify-center gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-xlightgrey text-darkgrey rounded-full px-3 py-1 text-xs font-semibold tracking-widest uppercase"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl leading-tight font-semibold text-black">
              {project.title}
            </h3>
            <p className="text-darkgrey text-sm leading-6">
              {project.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-funpink hover:bg-pink inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold text-white transition-colors duration-300"
          >
            Visit website
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="border-funpink text-funpink hover:bg-funpink inline-flex items-center justify-center gap-2 rounded-md border bg-white px-4 py-3 text-sm font-semibold transition-colors duration-300 hover:text-white"
          >
            Read README
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={`?project=${project.id}`}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-black px-4 py-3 text-sm font-semibold text-black transition-colors duration-300 hover:bg-black hover:text-white"
          >
            Project details
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
