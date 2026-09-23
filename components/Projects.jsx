import React from "react";
import CodeFile from "./ide/CodeFile";
import SplitView from "./ide/SplitView";
import ProjectItem from "./ProjectItem";
import { Kw, Str, Var, Com } from "./ide/Syntax";

const PROJECTS = [
  {
    title: "speciphicAsk",
    tagline: "Flexday AI · Enterprise GenAI",
    description:
      "Generative AI platform for querying large enterprise document sets in natural language. Designed the RAG pipeline (chunking, embeddings, vector search) over 10,000+ document corpora on a Flask microservices backend, returning answers in under 10 seconds.",
    metric:
      "Flexday AI's top-selling product · 80% revenue increase · shipped to 3 enterprise clients",
    tech: "React · Redux Toolkit · Flask · RAG · Vector Search · MUI/i18next",
    demoURL: "https://flexday.ai/",
    demoLabel: "Company Site",
  },
  {
    title: "Flexday AI Studio",
    tagline: "Flexday AI · Internal Product",
    description:
      "Chat-driven platform for building AI apps with agents, cron jobs, flows, auth and a database — no code required. Designed and shipped the visual builder that lets non-technical users compose multi-step AI workflows through chat.",
    metric:
      "Owned end to end: requirements, interaction design, UI, auth and managed-database modules",
    tech: "React · Node.js · AI Agents · Auth · Database",
    demoURL: "https://flexday.ai/",
    demoLabel: "Company Site",
  },
  {
    title: "Side Notepad",
    tagline: "Independently Built · Chrome Web Store",
    description:
      "A side-panel note-taking Chrome extension with rich text formatting, local-first storage and DOCX export. Run the whole stack alone: auth, payments, self-hosted deployment and every support ticket.",
    metric:
      "15,000+ weekly active users · 4.6+ stars · monetized via subscription billing",
    tech: "React · Chrome Extension (MV3) · Docker · Coolify · Hetzner",
    demoURL:
      "https://chromewebstore.google.com/detail/side-notepad-notes-note-t/jnajbdnopbhnfjjhkpichjdbfobeokjh",
    demoLabel: "Chrome Web Store",
  },
  {
    title: "Clay Lock",
    tagline: "Independently Built · Shopify App Store",
    description:
      "A B2B access-control app for Shopify merchants — lock products, collections and prices, then hand out access by customer tag or passcode link. Shipped merchant onboarding, access rules, billing and support end to end.",
    metric: "400+ active installs · 5.0 stars · top 6 in category",
    tech: "React · Shopify App · Billing Integration",
    demoURL: "https://apps.shopify.com/clay-b2b-lock",
    demoLabel: "Shopify App Store",
  },
];

export const ProjectsPreview = () => (
  <div className="grid grid-cols-1 gap-4 items-stretch">
    {PROJECTS.map((p) => (
      <ProjectItem
        key={p.title}
        title={p.title}
        tagline={p.tagline}
        description={p.description}
        metric={p.metric}
        tech={p.tech}
        demoURL={p.demoURL}
        demoLabel={p.demoLabel}
      />
    ))}
  </div>
);

const Projects = () => {
  const code = (
    <CodeFile
      id="projects"
      path="components/Projects.js"
      lang="JavaScript"
      color="text-vsc-func">
      <span>
        <Kw>const</Kw> <Var>projects</Var> = [
      </span>
      {PROJECTS.flatMap((p, i) => [
        <span
          key={`${p.title}-open`}
          className="pl-4">
          {"{"}
        </span>,
        <span
          key={`${p.title}-name`}
          className="pl-8">
          <Var>name</Var>: <Str>&quot;{p.title}&quot;</Str>,
        </span>,
        <span
          key={`${p.title}-tag`}
          className="pl-8">
          <Var>tag</Var>: <Str>&quot;{p.tagline}&quot;</Str>,
        </span>,
        <span
          key={`${p.title}-desc`}
          className="pl-8">
          <Com>
            {"// "}
            {p.description}
          </Com>
        </span>,
        <span
          key={`${p.title}-metric`}
          className="pl-8">
          <Var>metric</Var>: <Str>&quot;{p.metric}&quot;</Str>,
        </span>,
        <span
          key={`${p.title}-tech`}
          className="pl-8">
          <Var>tech</Var>: <Str>&quot;{p.tech}&quot;</Str>,
        </span>,
        <span
          key={`${p.title}-link`}
          className="pl-8">
          <Var>link</Var>: <Str>&quot;{p.demoURL}&quot;</Str>,
        </span>,
        <span
          key={`${p.title}-close`}
          className="pl-4">
          {"}"}
          {i < PROJECTS.length - 1 ? "," : ""}
        </span>,
      ])}
      <span>];</span>
    </CodeFile>
  );

  return (
    <SplitView
      code={code}
      preview={<ProjectsPreview />}
      path="components/Projects.js"
      color="text-vsc-func"
    />
  );
};

export default Projects;
