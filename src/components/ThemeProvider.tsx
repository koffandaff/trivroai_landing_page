"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  // Sync theme from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("trivro-theme") as Theme | null;
    if (stored && (stored === "dark" || stored === "light")) {
      // Small timeout avoids synchronous cascading render warning
      const timeoutId = setTimeout(() => {
        setTheme(stored);
        document.documentElement.className = stored;
      }, 0);
      return () => clearTimeout(timeoutId);
    } else {
      document.documentElement.className = "dark";
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.className = next;
      localStorage.setItem("trivro-theme", next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
