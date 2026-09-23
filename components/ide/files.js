export const FILES = [
  {
    id: "home",
    name: "README.md",
    path: "README.md",
    lang: "Markdown",
    color: "text-vsc-keyword",
  },
  {
    id: "about",
    name: "About.jsx",
    path: "components/About.jsx",
    lang: "JavaScript JSX",
    color: "text-vsc-func",
  },
  {
    id: "experience",
    name: "Experience.js",
    path: "components/Experience.js",
    lang: "JavaScript",
    color: "text-vsc-func",
  },
  {
    id: "skills",
    name: "Skills.json",
    path: "components/Skills.json",
    lang: "JSON",
    color: "text-vsc-number",
  },
  {
    id: "projects",
    name: "Projects.js",
    path: "components/Projects.js",
    lang: "JavaScript",
    color: "text-vsc-func",
  },
  {
    id: "contact",
    name: "Contact.jsx",
    path: "components/Contact.jsx",
    lang: "JavaScript JSX",
    color: "text-vsc-func",
  },
  {
    id: "preview",
    name: "index.html",
    path: "dist/index.html",
    lang: "Live Preview",
    color: "text-vsc-type",
  },
];

export const CONTENT_FILES = FILES.filter(
  (f) => f.id !== "preview"
);
