"use client";

import React, { useReducer } from "react";

export type LocationDataItem = {
  [key: string]: string | number;
};

export type LocationData = Array<LocationDataItem> | undefined;

export type Action = {
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
    case "SET_DATE": {
      return {
        ...state,
        search: {
          ...state.search,
          date: action.payload?.date,
        },
      };
    }
    case "SET_TIME": {
      return {
        ...state,
        search: {
          ...state.search,
          time: action.payload?.time,
        },
      };
    }
    case "SEARCH_VALUE": {
      return {
        ...state,
        searchValue: action.payload?.searchValue,
      };
    }
    case "SHOW_LOCATIONS": {
      return {
        ...state,
        showLocations: action.payload?.showLocations,
      };
    }
    case "LOCATION_SELECTION": {
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
