import React, { useState } from "react";
import {
  VscChevronDown,
  VscFolderOpened,
  VscFileCode,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";
import { FILES } from "./files";
import { searchContent } from "./searchIndex";

const highlight = (text, query) => {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  const start = Math.max(0, idx - 30);
  const end = Math.min(text.length, idx + query.length + 40);
  const prefix = start > 0 ? "…" : "";
  const suffix = end < text.length ? "…" : "";
  const before = text.slice(start, idx);
  const match = text.slice(idx, idx + query.length);
  const after = text.slice(idx + query.length, end);
  return (
    <>
      {prefix}
      {before}
      <mark className="bg-vsc-accent/40 text-white rounded-sm">
        {match}
      </mark>
      {after}
      {suffix}
    </>
  );
};

const EXTENSIONS = [
  {
    name: "GenAI Copilot",
    desc: "RAG pipelines, embeddings, vector search — ships to production.",
  },
  {
    name: "Ship It",
    desc: "Powers speciphicAsk & Flexday AI Studio. 80% revenue increase.",
  },
  {
    name: "Coffee ☕",
    desc: "Required dependency. Cannot be uninstalled.",
  },
  {
    name: "Stack Overflow Autopilot",
    desc: "Occasionally consulted, rarely admitted.",
  },
];

const rowClasses = (active) =>
  `flex items-center gap-2 py-1 px-2 rounded-sm cursor-pointer text-[13px] ${
    active
      ? "bg-vsc-hover text-vsc-text"
      : "text-vsc-text hover:bg-vsc-hover/60"
  }`;

const Sidebar = ({
  panel,
  activeId,
  onSelectFile,
  onToggleProfile,
  onToggleSettings,
}) => {
  const [query, setQuery] = useState("");
  const [commitStatus, setCommitStatus] = useState("");

  let body;

  if (panel === "search") {
    const fileMatches = query
      ? FILES.filter((f) =>
          f.name.toLowerCase().includes(query.toLowerCase())
        )
      : [];
    const contentMatches = searchContent(query);
    const totalMatches =
      fileMatches.length + contentMatches.length;

    body = (
      <div className="p-3">
        <p className="text-vsc-muted text-xs tracking-widest pb-2">
          SEARCH
        </p>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search across all files..."
          className="w-full bg-vsc-line text-vsc-text text-xs px-2 py-1.5 rounded-sm outline-none border border-transparent focus:border-vsc-accent"
        />
        {query && (
          <p className="text-vsc-muted text-[11px] pt-2 pb-1">
            {totalMatches} result{totalMatches === 1 ? "" : "s"}
          </p>
        )}
        <div className="mt-1 space-y-1">
          {fileMatches.map((f) => (
            <div
              key={`file-${f.id}`}
              onClick={() => onSelectFile(f.id)}
              className={rowClasses(activeId === f.id)}>
              <VscFileCode
                className={f.color}
                size={14}
              />
              <span className="truncate">{f.name}</span>
            </div>
          ))}
          {contentMatches.map((m, i) => {
            const file = FILES.find((f) => f.id === m.fileId);
            return (
              <div
                key={`content-${i}`}
                onClick={() => onSelectFile(m.fileId)}
                className="py-1.5 px-2 rounded-sm cursor-pointer hover:bg-vsc-hover/60">
                <div className="flex items-center gap-2 text-[11px] text-vsc-muted pb-0.5">
                  <VscFileCode
                    className={file?.color}
                    size={12}
                  />
                  {file?.name}
                </div>
                <p className="text-[12px] text-vsc-text leading-4 pl-4">
                  {highlight(m.text, query)}
                </p>
              </div>
            );
          })}
          {query && totalMatches === 0 && (
            <p className="text-vsc-muted text-xs px-2">
              No results found.
            </p>
          )}
        </div>
      </div>
    );
  } else if (panel === "git") {
    body = (
      <div className="p-3 text-xs">
        <p className="text-vsc-muted tracking-widest pb-2">
          SOURCE CONTROL
        </p>
        <input
          disabled
          placeholder="Message (already shipped)"
          className="w-full bg-vsc-line text-vsc-muted text-xs px-2 py-1.5 rounded-sm mb-2 cursor-not-allowed"
        />
        <button
          onClick={() =>
            setCommitStatus(
              "🚀 Nothing to commit — always shipping to prod."
            )
          }
          className="w-full mb-1 py-1.5">
          Commit
        </button>
        {commitStatus && (
          <p className="text-vsc-comment pt-1 pb-2">
            {commitStatus}
          </p>
        )}
        <p className="text-vsc-muted pt-3 pb-1">
          Changes ({FILES.length - 1})
        </p>
        <ul className="space-y-1">
          {FILES.filter((f) => f.id !== "home").map((f) => (
            <li
              key={f.id}
              onClick={() => onSelectFile(f.id)}
              className="flex items-center gap-2 text-vsc-text cursor-pointer hover:bg-vsc-hover/60 rounded-sm py-1 px-1">
              <span className="text-vsc-type font-bold">M</span>
              <span className="truncate">{f.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  } else if (panel === "extensions") {
    body = (
      <div className="p-3 text-xs">
        <p className="text-vsc-muted tracking-widest pb-3">
          EXTENSIONS: INSTALLED
        </p>
        <div className="space-y-3">
          {EXTENSIONS.map((ext) => (
            <div
              key={ext.name}
              className="border border-vsc-border rounded-sm p-2 hover:bg-vsc-hover/40">
              <div className="flex items-center justify-between">
                <p className="text-vsc-text font-semibold">
                  {ext.name}
                </p>
                <span className="text-vsc-comment text-[10px]">
                  Installed
                </span>
              </div>
              <p className="text-vsc-muted pt-1 leading-4">
                {ext.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    body = (
      <div className="text-xs py-2">
        <div className="px-3 py-1 text-vsc-muted tracking-widest">
          EXPLORER
        </div>
        <div className="px-2 pt-1">
          <div className="flex items-center gap-1 py-1 font-semibold text-vsc-text">
            <VscChevronDown size={14} />
            PORTFOLIO
          </div>
          <div className="pl-4">
            <div
              onClick={() => onSelectFile("home")}
              className={rowClasses(activeId === "home")}>
              <VscFileCode
                className="text-vsc-keyword"
                size={14}
              />
              <span className="truncate">README.md</span>
            </div>
            <div className="flex items-center gap-1 py-1 text-vsc-text">
              <VscChevronDown size={14} />
              <VscFolderOpened
                className="text-vsc-keyword"
                size={14}
              />
              components
            </div>
            <div className="pl-5">
              {FILES.filter((f) => f.id !== "home").map((f) => (
                <div
                  key={f.id}
                  onClick={() => onSelectFile(f.id)}
                  className={rowClasses(activeId === f.id)}>
                  <VscFileCode
                    className={f.color}
                    size={14}
                  />
                  <span className="truncate">{f.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">{body}</div>
      {(onToggleProfile || onToggleSettings) && (
        <div className="md:hidden flex items-center justify-around border-t border-vsc-border py-2 shrink-0">
          <button
            onClick={onToggleProfile}
            className="bg-transparent normal-case tracking-normal p-2 text-vsc-muted hover:text-vsc-text flex items-center gap-1.5 text-xs">
            <VscAccount size={16} />
            Account
          </button>
          <button
            onClick={onToggleSettings}
            className="bg-transparent normal-case tracking-normal p-2 text-vsc-muted hover:text-vsc-text flex items-center gap-1.5 text-xs">
            <VscSettingsGear size={16} />
            Settings
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
