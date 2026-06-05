import { ArrowDown } from '../icons.tsx';

type AboutCardProps = {
  heading: string;
  description: string;
};

export default function AboutCard({ heading, description }: AboutCardProps) {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-6 text-black">
        <h1
          id="about-heading"
          className="text-3xl sm:text-4xl font-bold leading-tight sm:text-5xl"
        >
          {heading}
        </h1>
        <p className="text-base sm:text-lg leading-7 text-darkgrey">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-funpink px-5 py-3 font-semibold text-white transition-colors duration-300 hover:bg-funpurple"
        >
          Projects
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-funpink px-5 py-3 font-semibold text-white transition-colors duration-300 hover:bg-funpurple"
        >
          Get in touch
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
