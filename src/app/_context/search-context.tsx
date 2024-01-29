"use client";

import React, { useState } from "react";

export type LocationDataItem = {
  [key: string]: string | number;
};

export type LocationData = Array<LocationDataItem> | undefined;

type ContextProperties = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  showLocations: string;
  setShowLocations: React.Dispatch<React.SetStateAction<string>>;
};

const initialContext = {} as ContextProperties;
const INITIAL_STATE = {
  showLocations: "",
  searchValue: "",
};

export const SearchContext = React.createContext(initialContext);

export function SearchContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showLocations, setShowLocations] = useState<string>(
    INITIAL_STATE.showLocations,
  );
  const [searchValue, setSearchValue] = useState<string>(
    INITIAL_STATE.searchValue,
  );
  const provide = React.useMemo(
    () => ({
      searchValue,
      setSearchValue,
      showLocations,
      setShowLocations,
    }),
    [showLocations, setShowLocations, searchValue, setSearchValue],
  );

  return (
    <SearchContext.Provider value={provide}>{children}</SearchContext.Provider>
  );
}
