import React, { useEffect, useRef, useState } from "react";
import { VscChevronDown } from "react-icons/vsc";

const BANNER = [
  "Welcome to sunil@portfolio. Type 'help' to get started.",
];

const HELP = [
  "Available commands:",
  "  whoami        - who I am",
  "  about         - who I am, in more detail",
  "  experience    - where I've worked",
  "  skills        - what I can do",
  "  projects      - what I've built",
  "  preview       - see the whole site rendered end to end",
  "  resume        - download my resume",
  "  contact       - get in touch",
  "  sudo hire-me  - jump straight to the good part",
  "  clear         - clear the terminal",
];

const Terminal = ({ open, onScrollTo, onClose }) => {
  const [lines, setLines] = useState(BANNER);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [lines]);

  const run = (raw) => {
    const cmd = raw.trim();
    const echo = `sunil@portfolio ~ % ${cmd}`;
    const push = (out) => setLines((l) => [...l, echo, ...out]);

    if (!cmd) {
      setLines((l) => [...l, echo]);
      return;
    }

    const [name, ...rest] = cmd.toLowerCase().split(" ");

    switch (name) {
      case "help":
        push(HELP);
        break;
      case "whoami":
        push([
          "Sunil Kumar — Full Stack Engineer, AI Products (Jaipur, India)",
        ]);
        break;
      case "about":
        push([
          "5+ years building software, 4+ shipping production GenAI products.",
          "Opening About.jsx...",
        ]);
        onScrollTo("about");
        break;
      case "experience":
        push([
          "Flexday AI (06/2022-Present) · Vamstar Pvt Ltd (12/2020-05/2022)",
          "Opening Experience.js...",
        ]);
        onScrollTo("experience");
        break;
      case "skills":
        push([
          "React, Next.js, TypeScript, Node.js, Python, Flask, RAG, OpenAI API, Docker, AWS...",
          "Opening Skills.json...",
        ]);
        onScrollTo("skills");
        break;
      case "projects":
        push([
          "speciphicAsk, Flexday AI Studio, Side Notepad, Clay Lock.",
          "Opening Projects.js...",
        ]);
        onScrollTo("projects");
        break;
      case "contact":
        push([
          "sunilkm2610@gmail.com — opening Contact.jsx...",
        ]);
        onScrollTo("contact");
        break;
      case "preview":
        push(["Opening index.html — the whole site, rendered..."]);
        onScrollTo("preview");
        break;
      case "resume":
        push(["Opening resume.pdf..."]);
        if (typeof window !== "undefined") {
          window.open(
            "/resume/Sunil-Kumar-Resume.pdf",
            "_blank"
          );
        }
        break;
      case "ls":
        push([
          "README.md  About.jsx  Experience.js  Skills.json  Projects.js  Contact.jsx",
        ]);
        break;
      case "sudo":
        if (rest.join(" ") === "hire-me") {
          push([
            "Permission granted. Redirecting to contact form...",
          ]);
          onScrollTo("contact");
        } else {
          push([
            `sudo: ${rest.join(" ") || "..."}: command not found`,
          ]);
        }
        break;
      case "clear":
        setLines([]);
        return;
      default:
        push([
          `command not found: ${cmd}. Type 'help' for available commands.`,
        ]);
    }
  };

  if (!open) return null;

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="border-t border-black/40 bg-[#181818] shrink-0 flex flex-col">
      <div className="flex items-center justify-between px-3 py-1.5 bg-vsc-tabbar text-[11px] text-vsc-muted border-b border-black/40 uppercase tracking-widest">
        <span>Terminal</span>
        <button
          onClick={onClose}
          className="bg-transparent normal-case tracking-normal p-0.5 hover:text-vsc-text">
          <VscChevronDown size={14} />
        </button>
      </div>
      <div className="h-48 sm:h-56 overflow-y-auto px-3 sm:px-4 py-2 font-mono text-[12px] sm:text-[13px] text-vsc-text">
        {lines.map((line, i) => (
          <div
            key={i}
            className={
              line.startsWith("sunil@portfolio")
                ? "text-vsc-green"
                : "text-vsc-text whitespace-pre-wrap"
            }>
            {line}
          </div>
        ))}
        <div className="flex items-center text-vsc-green">
          <span className="mr-2 shrink-0">
            sunil@portfolio ~ %
          </span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                run(input);
                setInput("");
              }
            }}
            className="flex-1 bg-transparent outline-none text-vsc-text min-w-0"
            spellCheck={false}
            autoComplete="off"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default Terminal;
