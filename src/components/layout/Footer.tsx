import { FaGithub, FaLinkedin, Mail } from '../icons.tsx';

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-5xl flex-col self-center bg-white px-2 py-4 sm:grid sm:grid-cols-2">
      <div className="rounded-t-md bg-black px-6 pt-10 pb-5 sm:col-start-1 sm:rounded-tl-md sm:rounded-tr-none sm:px-8 md:px-10 lg:pl-16">
        <div className="mb-6 flex items-center gap-3">
          <img
            src="/logo/mf-logo.webp"
            alt="MF logo"
            className="h-12 w-12 rounded-full object-contain"
          />
          <div>
            <p className="font-heading text-lg font-semibold text-white">
              Martin Fischer
            </p>
            <p className="font-body text-sm text-white/60">
              Frontend Developer
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-semibold text-white md:text-xl">
            Get in touch
          </h3>
          <div className="flex flex-nowrap justify-around pt-2 sm:justify-start sm:gap-8">
            <a
              href="https://www.linkedin.com/in/mamf92/"
              aria-label="Go to my LinkedIn page."
              className="hover:text-funpink text-white transition-colors"
            >
              <FaLinkedin className="h-8 w-8" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/mamf92"
              aria-label="Go to my GitHub page."
              className="hover:text-funpink text-white transition-colors"
            >
              <FaGithub className="h-8 w-8" aria-hidden="true" />
            </a>
            <a
              href="mailto:mamfischer92@gmail.com"
              target="_blank"
              aria-label="Send me an email."
              className="hover:text-funpink text-white transition-colors"
            >
              <Mail className="h-8 w-8" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 bg-black px-6 pt-4 pb-6 sm:col-start-2 sm:flex-row sm:items-center sm:justify-center sm:gap-12 sm:rounded-tr-md sm:px-8 md:px-10 lg:pr-16">
        <div className="flex flex-col gap-2">
          <h3 className="sr-only">Navigate to</h3>
          <a
            href="index.html#main-content"
            className="font-body text-sm font-semibold text-white no-underline transition-colors duration-300 hover:underline hover:decoration-white"
          >
            Top of page
          </a>
          <a
            href="index.html#projects"
            className="font-body text-sm text-white no-underline transition-colors duration-300 hover:underline hover:decoration-white"
          >
            Projects
          </a>
          <a
            href="index.html#passion-project"
            className="font-body text-sm text-white no-underline transition-colors duration-300 hover:underline hover:decoration-white"
          >
            Passion Project
          </a>
          <a
            href="index.html#contact"
            className="font-body text-sm text-white no-underline transition-colors duration-300 hover:underline hover:decoration-white"
          >
            Contact info
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="sr-only">Projects</h3>
          <a
            href="index.html#projects"
            className="font-body text-sm font-semibold text-white no-underline transition-colors duration-300 hover:underline hover:decoration-white"
            aria-label="Go to projects section."
          >
            Projects
          </a>
          <a
            href="https://mamf92.github.io/escnews-v1/"
            className="font-body text-sm text-white no-underline transition-colors duration-300 hover:underline hover:decoration-white"
            aria-label="Visit ESC News website."
          >
            ESC News v1
          </a>
          <a
            href="https://mamf92.github.io/escparty/"
            className="font-body text-sm text-white no-underline transition-colors duration-300 hover:underline hover:decoration-white"
            aria-label="Visit ESC Party website."
          >
            ESC Party
          </a>
          <a
            href="https://mamf92.github.io/semester-project-1/"
            className="font-body text-sm text-white no-underline transition-colors duration-300 hover:underline hover:decoration-white"
            aria-label="Go to Community Science Museum website."
          >
            Community Museum
          </a>
        </div>
      </div>
      <div className="rounded-b-md border-t border-white bg-black px-5 py-6 sm:col-span-2">
        <p className="font-body text-center text-xs text-white sm:text-sm">
          © 2026 Martin Fischer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
