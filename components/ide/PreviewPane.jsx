import React from "react";
import { VscFileCode, VscClose } from "react-icons/vsc";

const PreviewPane = ({ path, color, onClose, children }) => {
  return (
    <div className="h-full flex flex-col flex-1">
      <div className="flex items-center justify-between gap-2 bg-vsc-tabbar px-4 py-2 border-b border-vsc-border text-xs text-vsc-muted shrink-0">
        <span className="flex items-center gap-2 min-w-0 truncate">
          <VscFileCode
            className={color}
            size={14}
          />
          {path}
        </span>
        <div className="flex items-center gap-3 shrink-0">
          <span className="uppercase tracking-widest hidden sm:inline">
            Preview
          </span>
          {onClose && (
            <button
              onClick={onClose}
              title="Close preview"
              className="flex items-center bg-transparent normal-case tracking-normal text-xs leading-none p-0 text-vsc-muted hover:text-vsc-text">
              <VscClose size={14} />
            </button>
          )}
        </div>
      </div>
      <div className="bg-vsc-sidebar p-4 sm:p-6 overflow-auto flex-1">
        {children}
      </div>
    </div>
  );
};

export default PreviewPane;
