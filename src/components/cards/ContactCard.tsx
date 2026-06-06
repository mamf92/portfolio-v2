import { FaGithub, FaLinkedin, Mail } from '../icons.tsx';

type ContactCardProps = {
  heading: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  linkedinUrl: string;
  githubUrl: string;
  email: string;
};

export default function ContactCard({
  heading,
  description,
  imageUrl,
  imageAlt,
  linkedinUrl,
  githubUrl,
  email,
}: ContactCardProps) {
  return (
    <article className="flex flex-col items-center gap-6 bg-white md:flex-row md:items-stretch">
      <div className="flex h-130 w-full items-center justify-center md:h-130 md:w-1/2">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt ?? heading}
            className="h-full w-full rounded-lg object-cover"
          />
        ) : (
          <div className="text-grey flex h-full w-full items-center justify-center rounded-lg border border-black text-sm font-semibold tracking-widest uppercase">
            Profile image
          </div>
        )}
      </div>

      <div className="flex w-full flex-col gap-6 md:h-full md:w-1/2 md:self-center">
        <address className="flex justify-center gap-4 not-italic">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="text-funpink hover:text-funpurple transition-colors duration-300"
            aria-label="Go to my LinkedIn"
          >
            <FaLinkedin className="h-8 w-8" aria-hidden="true" />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-funpink hover:text-funpurple transition-colors duration-300"
            aria-label="Go to my GitHub"
          >
            <FaGithub className="h-8 w-8" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${email}`}
            className="text-funpink hover:text-funpurple transition-colors duration-300"
            aria-label="Email me"
          >
            <Mail className="h-8 w-8" aria-hidden="true" />
          </a>
        </address>

        <div className="flex flex-col gap-4 px-0 text-black md:px-4">
          <h3 className="text-xl font-semibold md:text-2xl">{heading}</h3>
          <p className="text-darkgrey text-sm leading-6">{description}</p>
        </div>
      </div>
    </article>
  );
}
