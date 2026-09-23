import React, { useEffect, useState } from "react";
import {
  VscGitMerge,
  VscError,
  VscWarning,
  VscTerminal,
} from "react-icons/vsc";
import { FILES } from "./files";

const StatusBar = ({ activeId, terminalOpen, onToggleTerminal }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      try {
        setTime(
          new Intl.DateTimeFormat("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "Asia/Kolkata",
          }).format(new Date())
        );
      } catch (e) {
        setTime("");
      }
    };
    update();
    const t = setInterval(update, 30000);
    return () => clearInterval(t);
  }, []);

  const file = FILES.find((f) => f.id === activeId) || FILES[0];

  return (
    <div className="h-6 bg-vsc-accent text-white flex items-center justify-between px-2 sm:px-3 text-[11px] select-none shrink-0">
      <div className="flex items-center gap-2 sm:gap-4">
        <span className="flex items-center gap-1">
          <VscGitMerge size={13} /> main
        </span>
        <span className="hidden sm:flex items-center gap-1">
          <VscError size={13} /> 0
        </span>
        <span className="hidden sm:flex items-center gap-1">
          <VscWarning size={13} /> 0
        </span>
        <button
          onClick={onToggleTerminal}
          className="flex items-center gap-1 bg-transparent normal-case tracking-normal hover:bg-white/10 px-1.5 -my-1 py-0.5 rounded-sm">
          <VscTerminal size={13} />
          <span>
            {terminalOpen ? "Hide Terminal" : "Terminal"}
          </span>
        </button>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <span className="hidden sm:inline">
          🟢 Available for hire
        </span>
        <span>{file.lang}</span>
        <span className="hidden sm:inline">UTF-8</span>
        {time && (
          <span className="hidden sm:inline">{time} IST</span>
        )}
      </div>
    </div>
  );
};

export default StatusBar;
