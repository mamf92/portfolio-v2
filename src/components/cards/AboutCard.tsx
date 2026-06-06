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
          className="text-3xl leading-tight font-bold sm:text-4xl"
        >
          {heading}
        </h1>
        <p className="text-darkgrey text-base leading-7 sm:text-lg">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          className="bg-funpink hover:bg-funpurple inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-semibold text-white transition-colors duration-300"
        >
          Projects
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
        <a
          href="#contact"
          className="bg-funpink hover:bg-funpurple inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-semibold text-white transition-colors duration-300"
        >
          Get in touch
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
