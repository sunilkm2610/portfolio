import React from "react";
import { MainPreview } from "../Main";
import { AboutPreview } from "../About";
import { ExperiencePreview } from "../Experience";
import { SkillsPreview } from "../Skills";
import { ProjectsPreview } from "../Projects";
import { ContactPreview } from "../Contact";

const Section = ({ title, children, first }) => (
  <div
    className={`py-10 sm:py-14 px-4 sm:px-10 ${
      first ? "" : "border-t border-vsc-border"
    }`}>
    <p className="text-vsc-muted text-[11px] uppercase tracking-widest pb-6 text-center">
      {title}
    </p>
    {children}
  </div>
);

const FullPreview = () => (
  <div className="h-full flex flex-col min-h-full">
    <div className="flex items-center justify-between gap-2 bg-vsc-tabbar px-4 py-2 border-b border-vsc-border text-xs text-vsc-muted shrink-0">
      <span>sunilk.dev</span>
      <span className="uppercase tracking-widest hidden sm:inline">
        Live Preview
      </span>
    </div>
    <div className="bg-vsc-sidebar flex-1">
      <Section
        title="Home"
        first>
        <MainPreview />
      </Section>
      <Section title="About">
        <AboutPreview />
      </Section>
      <Section title="Experience">
        <ExperiencePreview />
      </Section>
      <Section title="Skills">
        <SkillsPreview />
      </Section>
      <Section title="Projects">
        <ProjectsPreview />
      </Section>
      <Section title="Contact">
        <ContactPreview />
      </Section>
    </div>
  </div>
);

export default FullPreview;
