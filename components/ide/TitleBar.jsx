import React from "react";
import { VscMenu } from "react-icons/vsc";

const TitleBar = ({ onToggleSidebar }) => {
  return (
    <div className="h-9 bg-vsc-titlebar flex items-center px-3 gap-3 select-none border-b border-black/40 shrink-0 relative">
      <button
        onClick={onToggleSidebar}
        className="md:hidden bg-transparent normal-case tracking-normal p-1 text-vsc-muted hover:text-vsc-text">
        <VscMenu size={16} />
      </button>
      <div className="hidden sm:flex gap-2 pl-1">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
      </div>
      <p className="text-xs text-vsc-muted absolute left-1/2 -translate-x-1/2 hidden sm:block">
        sunil-kumar-portfolio — Visual Studio Code
      </p>
      <div className="ml-auto text-[10px] text-vsc-muted tracking-wide hidden sm:block">
        v5.0.2
      </div>
    </div>
  );
};

export default TitleBar;
