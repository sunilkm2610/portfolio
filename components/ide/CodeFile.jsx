import React from "react";
import { VscFileCode } from "react-icons/vsc";

const CodeFile = ({ id, path, lang, color, children }) => {
  const lines = React.Children.toArray(children);
  return (
    <section
      id={id}
      data-file={id}
      className="scroll-mt-6 h-full flex flex-col flex-1">
      <div className="flex items-center justify-between bg-vsc-tabbar px-4 py-2 border-b border-vsc-border text-xs text-vsc-muted shrink-0">
        <span className="flex items-center gap-2 min-w-0 truncate">
          <VscFileCode
            className={color}
            size={14}
          />
          {path}
        </span>
        <span className="uppercase tracking-widest hidden sm:inline shrink-0">
          {lang}
        </span>
      </div>
      <div className="bg-vsc-editor px-1 sm:px-2 py-4 overflow-auto flex-1">
        {lines.map((line, i) => (
          <div
            key={i}
            className="flex hover:bg-vsc-hover/50 px-2 rounded-sm">
            <span
              style={{
                fontSize: "var(--code-font-size)",
              }}
              className="select-none text-vsc-muted w-8 sm:w-10 text-right pr-3 sm:pr-4 shrink-0 leading-6 sm:leading-7">
              {i + 1}
            </span>
            <div
              style={{
                fontSize: "var(--code-font-size)",
              }}
              className="whitespace-pre-wrap break-words leading-6 sm:leading-7">
              {line}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CodeFile;
