import { ArrowRight } from '../icons.tsx';

type PassionProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  repoUrl: string;
  imageUrl?: string;
  imageAlt?: string;
};

export default function PassionProjectCard({
  title,
  description,
  techStack,
  liveUrl,
  repoUrl,
  imageUrl,
  imageAlt,
}: PassionProjectCardProps) {
  return (
    <article className="flex flex-col items-center gap-6 bg-white md:flex-row md:items-stretch">
      <div className="flex h-80 w-full items-center justify-center md:h-96 md:w-1/2">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt ?? title}
            className="h-full w-full rounded-lg object-cover"
          />
        ) : (
          <div className="text-grey flex h-full w-full items-center justify-center rounded-lg border border-black text-sm font-semibold tracking-widest uppercase">
            Passion project image
          </div>
        )}
      </div>

      <div className="flex w-full flex-col gap-8 md:w-1/2">
        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-black px-3 py-1 text-xs font-semibold tracking-widest text-black uppercase"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-4 px-0 text-black md:px-4">
          <h3 className="text-xl font-semibold md:text-2xl">{title}</h3>
          <p className="text-darkgrey text-sm leading-6">{description}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-funpink hover:bg-funpurple inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold text-white transition-colors duration-300"
          >
            Visit ESC Party
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-black px-4 py-3 text-sm font-semibold text-black transition-colors duration-300 hover:bg-black hover:text-white"
          >
            View on GitHub
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
