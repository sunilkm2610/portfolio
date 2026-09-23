import React from "react";
import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscExtensions,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";

const items = [
  { icon: VscFiles, key: "explorer", title: "Explorer" },
  { icon: VscSearch, key: "search", title: "Search" },
  {
    icon: VscSourceControl,
    key: "git",
    title: "Source Control",
    badge: true,
  },
  { icon: VscExtensions, key: "extensions", title: "Extensions" },
];

const ActivityBar = ({
  active,
  onSelect,
  popover,
  onToggleProfile,
  onToggleSettings,
}) => {
  return (
    <div className="hidden md:flex flex-col items-center w-12 bg-vsc-activitybar border-r border-black/40 py-2 justify-between shrink-0">
      <div className="flex flex-col items-center gap-1">
        {items.map(({ icon: Icon, key, title, badge }) => (
          <button
            key={key}
            title={title}
            onClick={() => onSelect(key)}
            className={`relative bg-transparent normal-case tracking-normal p-3 border-l-2 rounded-none ${
              active === key
                ? "border-white text-white"
                : "border-transparent text-vsc-muted hover:text-white"
            }`}>
            <Icon size={22} />
            {badge && (
              <span className="absolute top-2 right-2 w-[7px] h-[7px] bg-vsc-accent rounded-full" />
            )}
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center gap-1 pb-2">
        <button
          title="Account"
          onClick={onToggleProfile}
          className={`bg-transparent normal-case tracking-normal p-3 ${
            popover === "profile"
              ? "text-white"
              : "text-vsc-muted hover:text-white"
          }`}>
          <VscAccount size={20} />
        </button>
        <button
          title="Settings"
          onClick={onToggleSettings}
          className={`bg-transparent normal-case tracking-normal p-3 ${
            popover === "settings"
              ? "text-white"
              : "text-vsc-muted hover:text-white"
          }`}>
          <VscSettingsGear size={20} />
        </button>
      </div>
    </div>
  );
};

export default ActivityBar;
