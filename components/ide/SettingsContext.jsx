import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const SettingsContext = createContext(null);

const FONT_SIZES = { small: "12px", medium: "13px", large: "15px" };

const STORAGE_KEY = "portfolio-ide-settings";

export const SettingsProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [fontSize, setFontSize] = useState("medium");
  const [reduceMotion, setReduceMotion] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        if (saved.theme) setTheme(saved.theme);
        if (saved.fontSize) setFontSize(saved.fontSize);
        if (typeof saved.reduceMotion === "boolean")
          setReduceMotion(saved.reduceMotion);
      }
    } catch (e) {
      // ignore
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.setProperty(
      "--code-font-size",
      FONT_SIZES[fontSize] || FONT_SIZES.medium
    );
    document.documentElement.classList.toggle(
      "reduce-motion",
      reduceMotion
    );
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ theme, fontSize, reduceMotion })
      );
    } catch (e) {
      // ignore
    }
  }, [theme, fontSize, reduceMotion, loaded]);

  return (
    <SettingsContext.Provider
      value={{
        theme,
        setTheme,
        fontSize,
        setFontSize,
        reduceMotion,
        setReduceMotion,
      }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
