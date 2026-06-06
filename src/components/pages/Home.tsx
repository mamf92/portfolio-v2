import { ArrowDown, ArrowRight } from '../icons.tsx';
import AboutCard from '../cards/AboutCard.tsx';
import ContactCard from '../cards/ContactCard.tsx';
import PassionProjectCard from '../cards/PassionProjectCard.tsx';
import ProjectCard from '../cards/ProjectCard.tsx';
import Footer from '../layout/Footer.tsx';
import Header from '../layout/Header.tsx';
import {
  about,
  contactProfile,
  experienceSection,
  passionProject,
} from '../../data/featured.ts';
import { projects } from '../../data/projects.ts';

export default function Home() {
  return (
    <div className="md:w-90vw min-h-screen w-[calc(100vw-4rem)] sm:w-[calc(100vw-6rem)]">
      <Header />
      <main id="main-content" className="flex flex-col gap-16 pt-8 pb-8">
        <section
          id="about"
          className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-4 py-8"
          aria-labelledby="about-heading"
        >
          <AboutCard heading={about.heading} description={about.description} />
        </section>

        <section
          id="projects"
          className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-4"
          aria-labelledby="projects-heading"
        >
          <div className="mb-8 flex flex-col gap-3 self-start">
            <h2
              id="projects-heading"
              className="text-3xl font-bold text-black sm:text-4xl"
            >
              Projects
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index + 1}
              />
            ))}
          </div>
        </section>

        <section
          id="passion-project"
          className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-4"
          aria-labelledby="passion-project-heading"
        >
          <div className="mb-8 flex flex-col gap-3 self-start">
            <h2
              id="passion-project-heading"
              className="text-3xl font-bold text-black sm:text-4xl"
            >
              Passion project
            </h2>
          </div>

          <PassionProjectCard
            title={passionProject.title}
            description={passionProject.description}
            techStack={passionProject.techStack}
            liveUrl={passionProject.liveUrl}
            repoUrl={passionProject.repoUrl}
            imageUrl={passionProject.imageUrl}
            imageAlt={passionProject.imageAlt}
          />
        </section>

        <section
          id="contact"
          className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-4"
          aria-labelledby="contact-heading"
        >
          <div className="mb-8 flex flex-col gap-3">
            <h2 id="contact-heading" className="text-3xl font-bold text-black">
              Get in touch
            </h2>
          </div>

          <ContactCard
            heading={contactProfile.heading}
            description={contactProfile.description}
            imageUrl={contactProfile.imageUrl}
            imageAlt={contactProfile.imageAlt}
            linkedinUrl={contactProfile.linkedinUrl}
            githubUrl={contactProfile.githubUrl}
            email={contactProfile.email}
          />
        </section>

        <section
          id="more-about"
          className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-4"
          aria-labelledby="more-about-heading"
        >
          <div className="flex flex-col gap-6">
            <h2
              id="more-about-heading"
              className="text-3xl font-bold text-black"
            >
              {experienceSection.title}
            </h2>
            <div className="text-darkgrey flex flex-col gap-4">
              {experienceSection.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-7">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={experienceSection.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-funpink hover:bg-funpurple inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-semibold text-white transition-colors duration-300"
              >
                Check my GitHub
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={experienceSection.cvUrl}
                className="bg-funpink hover:bg-funpurple inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-semibold text-white transition-colors duration-300"
                download
                aria-label="Download my CV in PDF format"
              >
                Download CV
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
