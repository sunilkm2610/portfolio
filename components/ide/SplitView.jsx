import React, { useState } from "react";
import { VscChevronLeft } from "react-icons/vsc";
import PreviewPane from "./PreviewPane";

const SplitView = ({ code, preview, path, color }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex flex-col lg:flex-row min-h-full">
      <div
        className={`${
          open ? "w-full lg:w-1/2" : "w-full"
        } min-w-0 flex flex-col border-b lg:border-b-0 lg:border-r border-vsc-border`}>
        {code}
      </div>
      {open ? (
        <div className="w-full lg:w-1/2 min-w-0 flex flex-col">
          <PreviewPane
            path={path}
            color={color}
            onClose={() => setOpen(false)}>
            {preview}
          </PreviewPane>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          title="Show preview"
          className="flex items-center justify-center gap-2 bg-vsc-tabbar hover:bg-vsc-hover text-vsc-muted hover:text-vsc-text normal-case tracking-normal w-full py-2 lg:py-0 lg:w-8 shrink-0">
          <VscChevronLeft
            size={14}
            className="hidden lg:block"
          />
          <span className="lg:hidden text-xs">
            Show Preview
          </span>
        </button>
      )}
    </div>
  );
};

export default SplitView;
