import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiMaterialui,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFlask,
  SiFastapi,
  SiOpenai,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiDocker,
  SiAmazonaws,
  SiMicrosoftazure,
  SiVercel,
  SiGithub,
  SiShopify,
} from "react-icons/si";
import { GiBrain } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import CodeFile from "./ide/CodeFile";
import SplitView from "./ide/SplitView";
import { Str } from "./ide/Syntax";

const skillGroups = [
  {
    title: "frontend",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Material UI", icon: SiMaterialui },
      { name: "HTML / CSS", icon: SiHtml5 },
    ],
  },
  {
    title: "backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Python", icon: SiPython },
      { name: "Flask", icon: SiFlask },
      { name: "FastAPI", icon: SiFastapi },
    ],
  },
  {
    title: "aiGenai",
    skills: [
      { name: "OpenAI API", icon: SiOpenai },
      { name: "RAG Pipelines", icon: GiBrain },
      { name: "Vector Search", icon: BsSearch },
    ],
  },
  {
    title: "dataAndDevOps",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Prisma / Drizzle", icon: SiPrisma },
      { name: "Docker", icon: SiDocker },
      { name: "AWS", icon: SiAmazonaws },
      { name: "Azure", icon: SiMicrosoftazure },
      { name: "Vercel", icon: SiVercel },
      { name: "Git / GitHub", icon: SiGithub },
      { name: "Shopify Apps", icon: SiShopify },
    ],
  },
];

export const SkillsPreview = () => (
  <div className="flex flex-col gap-8">
    {skillGroups.map((group) => (
      <div key={group.title}>
        <h3 className="text-vsc-muted text-xs uppercase tracking-widest pb-3">
          {group.title.replace(/([A-Z])/g, " $1")}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {group.skills.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="p-4 border border-vsc-border rounded-md hover:border-vsc-accent hover:bg-vsc-hover/40 transition-colors flex flex-col items-center justify-center gap-2">
              <Icon
                size={28}
                className="text-vsc-type"
              />
              <p className="text-[11px] text-center text-vsc-text">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const Skills = () => {
  const code = (
    <CodeFile
      id="skills"
      path="components/Skills.json"
      lang="JSON"
      color="text-vsc-number">
      <span>{"{"}</span>
      {skillGroups.flatMap((group, gi) => [
        <span
          key={`${group.title}-open`}
          className="pl-4">
          <Str>&quot;{group.title}&quot;</Str>: [
        </span>,
        ...group.skills.map((skill, si) => (
          <span
            key={`${group.title}-${skill.name}`}
            className="pl-8">
            <Str>&quot;{skill.name}&quot;</Str>
            {si < group.skills.length - 1 ? "," : ""}
          </span>
        )),
        <span
          key={`${group.title}-close`}
          className="pl-4">
          ]{gi < skillGroups.length - 1 ? "," : ""}
        </span>,
      ])}
      <span>{"}"}</span>
    </CodeFile>
  );

  return (
    <SplitView
      code={code}
      preview={<SkillsPreview />}
      path="components/Skills.json"
      color="text-vsc-number"
    />
  );
};

export default Skills;
