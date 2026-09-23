import React from "react";
import { VscColorMode, VscTextSize, VscPulse } from "react-icons/vsc";
import { useSettings } from "./SettingsContext";

const OptionRow = ({ icon: Icon, label, children }) => (
  <div className="py-2.5">
    <p className="flex items-center gap-2 text-xs text-vsc-muted uppercase tracking-widest pb-2">
      <Icon size={13} />
      {label}
    </p>
    <div className="flex gap-2">{children}</div>
  </div>
);

const OptionButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`normal-case tracking-normal text-xs px-3 py-1.5 rounded-sm border ${
      active
        ? "bg-vsc-accent border-vsc-accent text-white"
        : "bg-transparent border-vsc-border text-vsc-text hover:bg-vsc-hover"
    }`}>
    {children}
  </button>
);

const SettingsPanel = ({ onClose }) => {
  const settings = useSettings();
  if (!settings) return null;
  const {
    theme,
    setTheme,
    fontSize,
    setFontSize,
    reduceMotion,
    setReduceMotion,
  } = settings;

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      <div className="fixed bottom-14 left-14 z-50 w-72 bg-vsc-sidebar border border-vsc-border rounded-md shadow-2xl shadow-black/60 p-4 text-vsc-text">
        <p className="text-xs uppercase tracking-widest text-vsc-muted pb-1">
          Settings
        </p>

        <OptionRow
          icon={VscColorMode}
          label="Color Theme">
          <OptionButton
            active={theme === "dark"}
            onClick={() => setTheme("dark")}>
            Dark+
          </OptionButton>
          <OptionButton
            active={theme === "light"}
            onClick={() => setTheme("light")}>
            Light+
          </OptionButton>
        </OptionRow>

        <OptionRow
          icon={VscTextSize}
          label="Editor Font Size">
          <OptionButton
            active={fontSize === "small"}
            onClick={() => setFontSize("small")}>
            S
          </OptionButton>
          <OptionButton
            active={fontSize === "medium"}
            onClick={() => setFontSize("medium")}>
            M
          </OptionButton>
          <OptionButton
            active={fontSize === "large"}
            onClick={() => setFontSize("large")}>
            L
          </OptionButton>
        </OptionRow>

        <OptionRow
          icon={VscPulse}
          label="Motion">
          <OptionButton
            active={!reduceMotion}
            onClick={() => setReduceMotion(false)}>
            Animations On
          </OptionButton>
          <OptionButton
            active={reduceMotion}
            onClick={() => setReduceMotion(true)}>
            Reduce Motion
          </OptionButton>
        </OptionRow>
      </div>
    </>
  );
};

export default SettingsPanel;
