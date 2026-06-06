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
};

export const projects: Project[] = [
  {
    id: 'boardgameclub',
    title: 'Stavanger Board Game Club',
    summary:
      'A community-focused site for board game enthusiasts in Stavanger.',
    description:
      'Stavanger Board Game Club is a responsive web application developed for a local board game club in Stavanger, Norway. The platform serves as a central hub for event information, their board game collection, and news updates, with content managed through a user-friendly CMS.',
    techStack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Sanity CMS',
      'Supabase',
    ],
    liveUrl: 'https://mamf92.github.io/sbsk-website/',
    repoUrl: 'https://github.com/mamf92/sbsk-website',
    imageUrl: 'assets/images/sbsk-preview.webp',
    imageAlt: 'Stavanger Board Game Club website preview.',
  },
  {
    id: 'scretcher',
    title: 'Scretcher Online Store',
    summary:
      'An e-commerce web page with a focus on product browsing and checkout.',
    description:
      'An e-commerce web page where users can browse a selection of the latest product listings, sort, filter, add them to a cart, and complete a basic checkout process. Created with Next.js, Tailwind CSS, and other tools like React Hook Form, Zod, and Zustand',
    techStack: ['Next.js', 'Tailwind CSS', 'React Hook Form', 'Zod', 'Zustand'],
    liveUrl: 'https://genuine-sundae-0c12fa.netlify.app/',
    repoUrl: 'https://github.com/mamf92/online-shop',
    imageUrl: 'assets/images/scretcher-preview.webp',
    imageAlt: 'Scretcher website preview.',
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
    imageUrl: 'assets/images/wexford-preview.webp',
    imageAlt: 'The Wexford Gallery website preview.',
  },
];

export function getProjectById(projectId: string | null | undefined) {
  return projects.find((project) => project.id === projectId);
}
