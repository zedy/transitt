"use client";

import React, { useReducer } from "react";

export type LocationDataItem = {
  [key: string]: string | number;
};

export type LocationData = Array<LocationDataItem> | undefined;

type Action = {
  type: string;
  payload: {
    [key: string]: string;
  };
};

type StateProperties = {
  search: {
    from: string;
    to: string;
    date: string;
    time: string;
  };
  showLocations: string;
  searchValue: string;
};

type ContextProperties = {
  state: StateProperties;
  dispatch: React.Dispatch<Action>;
};

const initialContext = {} as ContextProperties;

const INITIAL_STATE = {
  search: {
    from: "",
    to: "",
    date: "",
    time: "",
  },
  showLocations: "",
  searchValue: "",
};

const contextReducer = (state: StateProperties, action: Action) => {
  switch (action.type) {
    case "searchValue": {
      return {
        ...state,
        searchValue: action.payload?.searchValue,
      };
    }
    case "showLocations": {
      return {
        ...state,
        showLocations: action.payload?.showLocations,
      };
    }
    case "locationSelection": {
      const key = state.showLocations.toLowerCase();

      return {
        ...state,
        search: {
          ...state.search,
          [key]: action.payload?.name,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export const SearchContext = React.createContext(initialContext);

export function SearchContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [state, dispatch] = useReducer(contextReducer, INITIAL_STATE);

  const provide = React.useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch],
  );

  return (
    <SearchContext.Provider value={provide}>{children}</SearchContext.Provider>
  );
}
