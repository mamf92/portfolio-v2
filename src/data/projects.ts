export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  repoUrl: string;
  imageUrl?: string;
  imageAlt?: string;
  features?: string[];
  context?: string;
  reflection?: string;
};

export const projects: Project[] = [
  {
    id: 'boardgameclub',
    title: 'Stavanger Board Game Club',
    summary:
      'A real-world client project — a community hub for a local board game club in Stavanger.',
    description:
      'Stavanger Brettspillklubb is a responsive web application developed for a real local board game club in Stavanger, Norway. Built as my Project Exam 2, the site acts as a central hub for event information, news updates, and club activities, with all content managed through Sanity CMS.',
    techStack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Sanity CMS',
      'Supabase',
    ],
    liveUrl: 'https://mamf92.github.io/sbsk-website/',
    repoUrl: 'https://github.com/mamf92/sbsk-website',
    imageUrl: '/assets/images/sbsk-preview.webp',
    imageAlt: 'Stavanger Board Game Club website preview.',
    features: [
      'Events calendar — overview of club nights, tournaments, and gatherings',
      'News section with the latest club updates and announcements',
      'Member sign-in — edit profile and join events',
      'Admin portal — manage the members list',
      'CMS-driven content via Sanity, no developer involvement needed for updates',
      'Fully responsive across mobile and desktop',
    ],
    context:
      'The PE2 brief challenged students to work on a real-world assignment. I applied to build the actual website for Stavanger Brettspillklubb, a board game club in Stavanger. Design, user stories, and feature priorities were shaped through interviews and ongoing feedback with the club board, then mapped against the exam requirements. Sanity was chosen for content management and Supabase for backend data, with development split across three planned iterations: a static MVP, the member/admin flows, and a final testing and polish phase.',
    reflection:
      'This is an ongoing project — the site is not yet in full deployment. Still to be built: a game overview with search, dedicated event pages with sign-up, a proper member portal, comprehensive form validation with React Hook Form and Zod, and more robust error handling throughout. The static content side (about page, contact form) also needs to be completed. Once these are in place the site will be ready for the club to go live with.',
  },
  {
    id: 'scretcher',
    title: 'Scretcher Online Store',
    summary:
      'An e-commerce web page with a focus on product browsing and checkout.',
    description:
      'An e-commerce web page where users can browse a selection of the latest product listings, sort, filter, add them to a cart, and complete a basic checkout process. Created with Next.js, Tailwind CSS, and other tools like React Hook Form, Zod, and Zustand',
    techStack: ['Next.js', 'Tailwind CSS', 'React Hook Form', 'Zod', 'Zustand'],
    liveUrl: 'https://skretcher.netlify.app/',
    repoUrl: 'https://github.com/mamf92/scretcher',
    imageUrl: '/assets/images/scretcher-preview.webp',
    imageAlt: 'Scretcher website preview.',
    features: [
      'Browse product listings with sort and filter controls',
      'Add to cart with quantity management',
      'Multi-step checkout process',
      'Schema-first form validation with React Hook Form and Zod',
      'Cart state persisted across navigation with Zustand',
    ],
    context:
      'Built to demonstrate a complete e-commerce flow with an emphasis on validation and client-side state management. Next.js handles routing and SSR; Zustand keeps cart state alive across page transitions without prop drilling.',
    reflection:
      "I'd extract the Zod validation schemas into shared utilities from the start rather than colocating them in components — they grew larger than expected and became harder to reuse. The project solidified my understanding of controlled forms and schema-first validation.",
  },
  {
    id: 'wexford-gallery',
    title: 'The Wexford Gallery',
    summary:
      'A fictive auction web page for browsing and bidding on product listings.',
    description:
      'The Wexford Gallery is a fictive auction web page where users can browse a selection of the latest product listings. Users can register and create their own profile, they can add their own listings, or bid on items. Get the full overview with a list of your listings, your bids, and purchased items. Looking for anything specific? Make a search!',
    techStack: ['TypeScript', 'Tailwind CSS', 'REST API'],
    liveUrl: 'https://mamf92.github.io/wexfordgallery/',
    repoUrl: 'https://github.com/mamf92/wexfordgallery',
    imageUrl: '/assets/images/wexford-preview.webp',
    imageAlt: 'The Wexford Gallery website preview.',
    features: [
      'Browse, search, and filter auction listings',
      'Credit-based bidding system with live balance tracking',
      'User registration and profile creation',
      'Create, edit, and delete your own listings',
      'Dashboard with your active bids and purchased items',
    ],
    context:
      'Built for Noroff Semester Project 2. Constrained to vanilla TypeScript — no frameworks — and integrated with a third-party REST API for all data, authentication, and bidding logic. Every DOM update is hand-rolled.',
    reflection:
      "Given more time, I'd componentise the DOM manipulation logic and introduce a proper state layer to reduce side effects scattered across modules. The project taught me a lot about structuring vanilla TypeScript at scale, and how quickly ad-hoc DOM updates become difficult to trace without a clear data flow.",
  },
];

export function getProjectById(projectId: string | null | undefined) {
  return projects.find((project) => project.id === projectId);
}
