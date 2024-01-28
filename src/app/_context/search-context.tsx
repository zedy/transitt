"use client";

import React, { useState } from "react";

interface ContextProperties {
  showLocations: boolean;
  setShowLocations: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialContext = {} as ContextProperties;
const INITIAL_STATE = {
  showLocations: false,
};

export const SearchContext = React.createContext(initialContext);

export function SearchContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showLocations, setShowLocations] = useState<boolean>(
    INITIAL_STATE.showLocations,
  );
  const provide = React.useMemo(
    () => ({
      showLocations,
      setShowLocations,
    }),
    [showLocations, setShowLocations],
  );

  return (
    <SearchContext.Provider value={provide}>{children}</SearchContext.Provider>
  );
}
