import React from "react";

const ProjectItem = ({
  title,
  tagline,
  description,
  tech,
  metric,
  demoURL,
  demoLabel,
  codeURL,
}) => {
  return (
    <div className="relative flex flex-col h-full w-full border border-vsc-border rounded-md p-5 hover:border-vsc-accent hover:bg-vsc-hover/30 transition-colors">
      <p className="text-[11px] uppercase tracking-widest text-vsc-type">
        {tagline}
      </p>
      <h3 className="pt-2 pb-2 text-vsc-text text-xl">
        {title}
      </h3>
      <p className="text-vsc-muted text-sm flex-grow leading-relaxed">
        {description}
      </p>
      {metric && (
        <p className="text-sm text-vsc-func pt-3">
          {metric}
        </p>
      )}
      <p className="text-xs text-vsc-comment pt-4">
        {"// "}
        {tech}
      </p>
      <div className="pt-4 flex gap-3">
        {codeURL && (
          <a
            href={codeURL}
            target="_blank"
            rel="noreferrer">
            <button className="px-5 py-1.5 text-xs">
              Code
            </button>
          </a>
        )}
        {demoURL && (
          <a
            href={demoURL}
            target="_blank"
            rel="noreferrer">
            <button className="px-5 py-1.5 text-xs">
              {demoLabel || "View"}
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
