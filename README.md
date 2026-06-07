# 🧑‍💻 Martin Fischer – Front-End Developer Portfolio

![Portfolio Banner](https://github.com/mamf92/portfolio-v2/blob/main/public/assets/images/portfolio-banner.png?raw=true)

This is my second-year **Portfolio 2 Course Assignment** as part of the Front-End Development programme at Noroff. It's a single-page application portfolio site showcasing three of my graded projects from the second year:

- [Project Exam 2 - Stavanger Board Game Club](https://mamf92.github.io/sbsk-website)
- [JavaScript Frameworks – Scretcher Online Shop](https://genuine-sundae-0c12fa.netlify.app/)
- [Semester Project 2 - The Wexford Gallery Auction House](https://mamf92.github.io/wexfordgallery/)

The purpose of this project is to self-assess, reflect on what I've learned so far, and demonstrate how my skills have developed throughout the two years at Noroff.

---

## 📋 Description

The goal was to build a clean, responsive, and accessible portfolio site using **React**, **TypeScript**, **Tailwind CSS**, and **Vite**. The site includes teaser cards for three major assignments with links to the README, the deployed demo, and a details page about the project. Furthermore each project has been enhanced focusing especially on performance and accessibility.

Lastly, I wrote a reflection report discussing:

- Improvements I have made on the projects
- What I would improve further
- What I have learned from each project

---

## ⚙️ Built With

**Frontend:**

- [React 19](https://react.dev/) ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)
- [TypeScript](https://www.typescriptlang.org/) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
- [Tailwind CSS v4](https://tailwindcss.com/) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
- [Vite](https://vitejs.dev/) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)

**Icons:**

- [Lucide React](https://lucide.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)

**Tooling:**

- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) — linting and formatting
- [Husky](https://typicode.github.io/husky/) — pre-commit hooks via lint-staged

---

## 🌐 Live Demo

👉 [https://mamf.no/](https://mamf.no/)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (bundled with Node.js)

### Installing

1. Clone the repository:

```bash
git clone https://github.com/mamf92/portfolio-v2.git
cd portfolio-v2
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

### Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the local development server   |
| `npm run build`   | Type-check and build for production  |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint across the project        |

---

### Code Quality

This project enforces code quality automatically on every commit via [Husky](https://typicode.github.io/husky/) pre-commit hooks. Staged files are run through ESLint and Prettier before the commit goes through — no manual formatting step needed.

To run them manually:

```bash
npm run lint            # ESLint
npx prettier --write .  # Prettier
```

---

## 🧠 Projects

### Stavanger Board Game Club

Project Exam 2 – A club website built with React, TypeScript, Tailwind CSS, Sanity, and Supabase.
👉 [Live demo](https://mamf92.github.io/sbsk-website)

### Scretcher Online Shop

JavaScript Frameworks – An online shop built with Next.js, Tailwind CSS, React Hook Form, Zod, and Zustand.
👉 [Live demo](https://skretcher.netlify.app/)

### The Wexford Gallery Auction House

Semester Project 2 – A vanilla JS project with TypeScript and Tailwind CSS, showcasing API integration and user-friendly design.
👉 [Live demo](https://mamf92.github.io/wexfordgallery/)

---

## 👤 Contact

- [LinkedIn – Martin Fischer](https://www.linkedin.com/in/mamf92/)
- [GitHub – @mamf92](https://github.com/mamf92)

---

## 🙏 Acknowledgments

- Noroff Front-End Development Faculty
- Feedback from teachers and peers

---

## 📄 License

This project was created as a course assignment at Noroff and is not licensed for redistribution.
