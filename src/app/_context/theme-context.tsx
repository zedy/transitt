"use client";

import React, { useState } from "react";

type ContextProperties = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const initialContext = {} as ContextProperties;

const INITIAL_STATE = {
  theme: "dark",
};

export const ThemeContext = React.createContext(initialContext);

export function ThemeContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<string>(INITIAL_STATE.theme);

  const provide = React.useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme],
  );

  return (
    <ThemeContext.Provider value={provide}>{children}</ThemeContext.Provider>
  );
}
