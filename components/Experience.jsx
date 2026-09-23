import React from "react";
import CodeFile from "./ide/CodeFile";
import SplitView from "./ide/SplitView";
import { Kw, Str, Var, Com } from "./ide/Syntax";

const JOBS = [
  {
    company: "Flexday AI (B2B SaaS and Services)",
    role: "Full Stack Engineer (AI Products)",
    period: "06/2022 - Present",
    location: "Remote, IN",
    highlights: [
      "Delivered an internal platform end to end for a Fortune 500 real estate client (React, Flask, MongoDB), from requirements through production rollout, now used by 20,000+ weekly active employees.",
      "Flexday AI Studio: designed and shipped the visual builder that lets non-technical users compose AI agents, scheduled cron jobs and multi-step flows through chat instead of code. Own the product surface end to end — requirements, interaction design, React UI, auth and managed-database modules.",
      "speciphicAsk: built the company's top-selling Generative AI platform, contributing to an 80% revenue increase and shipping to three enterprise clients across real estate, packaging and FMCG.",
      "Designed the RAG pipeline (chunking, embeddings, vector search) over 10,000+ document corpora on a Flask microservices backend, returning answers in under 10 seconds.",
      "Built the REST APIs and database layer joining the React client to the retrieval services, including schema design.",
      "Architected shared state across 100+ React components with Redux Toolkit, plus RBAC and a 10+ theme MUI/i18next system for white-label deployments.",
    ],
  },
  {
    company: "Vamstar Pvt Ltd",
    role: "Data Analyst II (Python / SQL engineering)",
    period: "12/2020 - 05/2022",
    location: "Remote, IN",
    highlights: [
      "Automated tender data collection across 20+ countries in Python with Selenium and BeautifulSoup.",
      "Built SQL pipelines over PostgreSQL normalizing procurement data from 50+ countries into a consistent schema for analytics.",
    ],
  },
];

const EDUCATION = {
  school: "Indian Institute of Technology (IIT) Madras",
  degree: "Dual Degree (B.Tech + M.Tech), Civil Engineering",
  period: "05/2015 - 06/2020",
  location: "Chennai, IN",
};

export const ExperiencePreview = () => (
  <div className="flex flex-col gap-5">
    {JOBS.map((job) => (
      <div
        key={job.company}
        className="border border-vsc-border rounded-md p-4 hover:border-vsc-accent transition-colors">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-vsc-text text-base">
            {job.company}
          </h3>
          <span className="text-[11px] text-vsc-muted uppercase tracking-wide">
            {job.period}
          </span>
        </div>
        <p className="text-vsc-type text-sm pb-2">
          {job.role} · {job.location}
        </p>
        <ul className="list-disc pl-4 space-y-1.5">
          {job.highlights.map((point) => (
            <li
              key={point}
              className="text-vsc-muted text-sm leading-relaxed">
              {point}
            </li>
          ))}
        </ul>
      </div>
    ))}
    <div className="border border-vsc-border rounded-md p-4 hover:border-vsc-accent transition-colors">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-vsc-text text-base">
          {EDUCATION.school}
        </h3>
        <span className="text-[11px] text-vsc-muted uppercase tracking-wide">
          {EDUCATION.period}
        </span>
      </div>
      <p className="text-vsc-type text-sm">
        {EDUCATION.degree} · {EDUCATION.location}
      </p>
    </div>
  </div>
);

const Experience = () => {
  const code = (
    <CodeFile
      id="experience"
      path="components/Experience.js"
      lang="JavaScript"
      color="text-vsc-func">
      <span>
        <Kw>const</Kw> <Var>experience</Var> = [
      </span>
      {JOBS.flatMap((job, ji) => [
        <span
          key={`${job.company}-open`}
          className="pl-4">
          {"{"}
        </span>,
        <span
          key={`${job.company}-name`}
          className="pl-8">
          <Var>company</Var>: <Str>&quot;{job.company}&quot;</Str>,
        </span>,
        <span
          key={`${job.company}-role`}
          className="pl-8">
          <Var>role</Var>: <Str>&quot;{job.role}&quot;</Str>,
        </span>,
        <span
          key={`${job.company}-meta`}
          className="pl-8">
          <Var>period</Var>: <Str>&quot;{job.period}&quot;</Str>,{" "}
          <Var>location</Var>: <Str>&quot;{job.location}&quot;</Str>,
        </span>,
        <span
          key={`${job.company}-highlights-open`}
          className="pl-8">
          <Var>highlights</Var>: [
        </span>,
        ...job.highlights.map((point, pi) => (
          <span
            key={`${job.company}-h${pi}`}
            className="pl-12">
            <Str>&quot;{point}&quot;</Str>,
          </span>
        )),
        <span
          key={`${job.company}-highlights-close`}
          className="pl-8">
          ],
        </span>,
        <span
          key={`${job.company}-close`}
          className="pl-4">
          {"}"}
          {ji < JOBS.length - 1 ? "," : ""}
        </span>,
        ...(ji < JOBS.length - 1
          ? [<span key={`${job.company}-gap`}>{" "}</span>]
          : []),
      ])}
      <span>];</span>
      <span>{" "}</span>
      <span>
        <Com>{"// Education"}</Com>
      </span>
      <span>
        <Kw>const</Kw> <Var>education</Var> = {"{"}
      </span>
      <span className="pl-4">
        <Var>school</Var>: <Str>&quot;{EDUCATION.school}&quot;</Str>,
      </span>
      <span className="pl-4">
        <Var>degree</Var>: <Str>&quot;{EDUCATION.degree}&quot;</Str>,
      </span>
      <span className="pl-4">
        <Var>period</Var>: <Str>&quot;{EDUCATION.period}&quot;</Str>,{" "}
        <Var>location</Var>: <Str>&quot;{EDUCATION.location}&quot;</Str>,
      </span>
      <span>{"};"}</span>
    </CodeFile>
  );

  return (
    <SplitView
      code={code}
      preview={<ExperiencePreview />}
      path="components/Experience.js"
      color="text-vsc-func"
    />
  );
};

export default Experience;
