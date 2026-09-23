import React, { useEffect, useRef, useState } from "react";
import { SiUpwork } from "react-icons/si";
import TitleBar from "./TitleBar";
import ActivityBar from "./ActivityBar";
import Sidebar from "./Sidebar";
import TabBar from "./TabBar";
import StatusBar from "./StatusBar";
import Terminal from "./Terminal";
import ProfileMenu from "./ProfileMenu";
import SettingsPanel from "./SettingsPanel";
import EndOfFileNav from "./EndOfFileNav";
import FullPreview from "./FullPreview";
import { FILES, CONTENT_FILES } from "./files";

const IDEShell = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePanel, setActivePanel] = useState("explorer");
  const [activeId, setActiveId] = useState(FILES[0].id);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [popover, setPopover] = useState(null);
  const scrollRef = useRef(null);

  const goToFile = (id) => {
    setActiveId(id);
    setPopover(null);
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: 0 });
    });
  };

  const handleActivitySelect = (key) => {
    setPopover(null);
    if (key === activePanel) {
      setSidebarOpen((o) => !o);
      return;
    }
    setActivePanel(key);
    setSidebarOpen(true);
  };

  const toggleProfile = () =>
    setPopover((p) => (p === "profile" ? null : "profile"));
  const toggleSettings = () =>
    setPopover((p) => (p === "settings" ? null : "settings"));

  useEffect(() => {
    setSidebarOpen(window.innerWidth >= 768);
  }, []);

  const childrenArray = React.Children.toArray(children);
  const activeIndex = FILES.findIndex((f) => f.id === activeId);
  const nextFile = FILES[activeIndex + 1];

  return (
    <div className="flex flex-col h-screen bg-vsc-editor text-vsc-text overflow-hidden">
      <TitleBar
        onToggleSidebar={() => setSidebarOpen((o) => !o)}
      />
      <div className="flex flex-1 min-h-0 relative">
        <ActivityBar
          active={activePanel}
          onSelect={handleActivitySelect}
          popover={popover}
          onToggleProfile={toggleProfile}
          onToggleSettings={toggleSettings}
        />

        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
          />
        )}

        <div
          className={`fixed md:static z-40 top-9 md:top-auto left-0 h-[calc(100%-2.25rem)] md:h-auto w-64 bg-vsc-sidebar border-r border-black/40 overflow-y-auto shrink-0 transition-transform duration-200 ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:hidden md:translate-x-0"
          }`}>
          <Sidebar
            panel={activePanel}
            activeId={activeId}
            onSelectFile={goToFile}
            onToggleProfile={toggleProfile}
            onToggleSettings={toggleSettings}
          />
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          <TabBar
            activeId={activeId}
            onSelect={goToFile}
          />
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto bg-vsc-editor flex flex-col">
            <div className="w-full flex-1 flex flex-col">
              {FILES.map((f) => {
                if (f.id !== activeId) return null;
                const contentIdx = CONTENT_FILES.findIndex(
                  (cf) => cf.id === f.id
                );
                return (
                  <div
                    key={f.id}
                    className="flex-1 flex flex-col">
                    <div className="flex-1 flex flex-col">
                      {f.id === "preview" ? (
                        <FullPreview />
                      ) : (
                        childrenArray[contentIdx]
                      )}
                    </div>
                    <div className="px-3 sm:px-4 shrink-0">
                      <EndOfFileNav next={nextFile} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Terminal
            open={terminalOpen}
            onScrollTo={goToFile}
            onClose={() => setTerminalOpen(false)}
          />
        </div>

        {popover === "profile" && (
          <ProfileMenu onClose={() => setPopover(null)} />
        )}
        {popover === "settings" && (
          <SettingsPanel onClose={() => setPopover(null)} />
        )}
      </div>
      <StatusBar
        activeId={activeId}
        terminalOpen={terminalOpen}
        onToggleTerminal={() => setTerminalOpen((o) => !o)}
      />

      {!terminalOpen && (
        <a
          href="https://www.upwork.com/freelancers/~01b1ecbba65af1c30a"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-10 right-4 sm:right-6 z-40 flex items-center gap-2 bg-[#14a800] hover:bg-[#108a00] text-white text-xs sm:text-sm font-semibold pl-3 pr-4 py-2.5 rounded-full shadow-lg shadow-black/50 normal-case tracking-normal animate-pulse2">
          <SiUpwork size={14} />
          Hire me on Upwork
        </a>
      )}
    </div>
  );
};

export default IDEShell;
