"use client";

import { createContext, useContext } from "react";

type theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#1c1c1e",
  },
};

const ThemeContext = createContext<theme>(defaultTheme);
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
