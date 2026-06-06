import { useEffect, useState } from 'react';
import {
  BriefcaseBusiness,
  CodeXml,
  Heart,
  Mail,
  UserRound,
} from '../icons.tsx';

const navigationItems = [
  { href: '#about', label: 'About me', icon: UserRound },
  { href: '#projects', label: 'My projects', icon: CodeXml },
  { href: '#passion-project', label: 'Passion project', icon: Heart },
  { href: '#contact', label: 'Contact me', icon: Mail },
  {
    href: '#more-about',
    label: 'Experience and skills',
    icon: BriefcaseBusiness,
  },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('#about');

  useEffect(() => {
    const observers = navigationItems.map(({ href }) => {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(href);
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <header className="fixed top-0 right-0 z-40 flex h-screen w-16 flex-col items-center border-l border-black bg-white px-2 py-6 shadow-[0_0_24px_rgba(0,0,0,0.08)] sm:w-20 md:w-[10vw]">
      <a
        href="#"
        className="flex w-full items-center justify-center"
        aria-label="Go to the top of the page."
      >
        <img
          src="/logo/mf-logo.webp"
          alt="MF logo"
          className="w-full object-contain transition-transform duration-300 hover:scale-110"
        />
      </a>

      <nav
        className="mt-8 flex flex-1 flex-col items-center justify-center gap-4"
        aria-label="Main navigation"
      >
        {navigationItems.map(({ href, label, icon: Icon }) => {
          const isActive = href === activeSection;

          return (
            <a
              key={href}
              href={href}
              onClick={() => setActiveSection(href)}
              aria-label={label}
              aria-current={isActive ? 'page' : undefined}
              className={`group hover:text-funpink flex flex-col items-center justify-center gap-1 transition-colors duration-300 ${
                isActive ? 'text-funpink' : 'text-black'
              }`}
            >
              <Icon
                className={`h-8 w-8 transition-transform duration-300 hover:scale-110 ${
                  isActive ? 'stroke-[2.25]' : 'stroke-[1.75]'
                }`}
                aria-hidden="true"
              />
              <span className="sr-only">{label}</span>
            </a>
          );
        })}
      </nav>
    </header>
  );
}
