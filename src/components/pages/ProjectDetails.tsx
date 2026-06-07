import { Link, useParams } from 'react-router';
import { ArrowLeft, ArrowRight, Check } from '../icons.tsx';
import { getProjectById } from '../../data/projects.ts';

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id);

  if (!project) {
    return (
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center gap-6 px-4 py-16">
        <h1 className="text-3xl font-bold text-black">Project not found</h1>
        <p className="text-darkgrey max-w-2xl text-base leading-7">
          The project id in the URL does not match one of the portfolio cards.
          Go back to the home page and pick a project.
        </p>
        <Link
          to="/"
          className="bg-funpink hover:bg-funpurple inline-flex w-fit items-center gap-2 rounded-md px-5 py-3 font-semibold text-white transition-colors duration-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back home
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-8 px-4 py-10">
      <Link
        to="/"
        className="text-darkgrey hover:text-funpink transition-color inline-flex w-fit items-center gap-2 text-sm font-semibold transition-transform duration-300 hover:scale-110"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to projects
      </Link>

      <section className="overflow-hidden rounded-lg border border-black bg-white">
        <div className="flex max-h-96 flex-col border-b border-black sm:flex-row">
          <div className="flex w-full flex-col justify-center px-6 py-6">
            <p className="text-grey text-sm font-semibold tracking-widest uppercase">
              Project details
            </p>
            <h1 className="mt-2 text-3xl font-bold text-black sm:text-4xl">
              {project.title}
            </h1>
          </div>
          {project.imageUrl && (
            <div className="w-full">
              <img
                src={project.imageUrl}
                alt={project.imageAlt ?? project.title}
                className="h-full w-full object-cover object-top"
              />
            </div>
          )}
        </div>

        <div className="grid gap-6 px-6 py-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-black">Overview</h2>
            <p className="text-darkgrey max-w-2xl text-base leading-7">
              {project.description}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-black">Tech stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-black px-3 py-1 text-xs font-semibold tracking-widest text-black uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-funpink hover:bg-funpurple inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 font-semibold text-white transition-colors duration-300"
              >
                Visit website
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-black px-4 py-3 font-semibold text-black transition-colors duration-300 hover:bg-black hover:text-white"
              >
                Read README
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {project.features && project.features.length > 0 && (
          <div className="border-t border-black px-6 py-8">
            <h2 className="mb-6 text-xl font-bold text-black">Key features</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check
                    className="text-funpink mt-0.5 h-5 w-5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-darkgrey text-sm leading-6">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.context && (
          <div className="border-t border-black px-6 py-6">
            <p className="text-grey mb-2 text-sm font-semibold tracking-widest uppercase">
              Project context
            </p>
            <p className="text-darkgrey text-base leading-7">
              {project.context}
            </p>
          </div>
        )}

        {project.reflection && (
          <div className="border-t border-black px-6 py-8">
            <h2 className="mb-4 text-xl font-bold text-black">Reflection</h2>
            <p className="text-darkgrey text-base leading-7">
              {project.reflection}
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
