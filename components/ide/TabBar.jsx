import React from "react";
import { VscClose, VscFileCode } from "react-icons/vsc";
import { FILES } from "./files";

const TabBar = ({ activeId, onSelect }) => {
  return (
    <div className="flex bg-vsc-tabbar border-b border-black/40 overflow-x-auto shrink-0">
      {FILES.map((f) => {
        const active = activeId === f.id;
        return (
          <button
            key={f.id}
            onClick={() => onSelect(f.id)}
            className={`group flex items-center gap-2 px-3 sm:px-4 py-2 text-xs whitespace-nowrap border-r border-black/40 normal-case tracking-normal shrink-0 ${
              active
                ? "bg-vsc-tabactive text-vsc-text border-t-2 border-t-vsc-accent"
                : "bg-vsc-tabbar text-vsc-muted hover:text-vsc-text border-t-2 border-t-transparent"
            }`}>
            <VscFileCode
              className={f.color}
              size={14}
            />
            {f.name}
            <span
              title="You can't close this tab. I'm not going anywhere."
              className="ml-1 opacity-0 group-hover:opacity-100 hover:bg-vsc-hover rounded-sm p-0.5">
              <VscClose size={13} />
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default TabBar;
