"use client";

import React, { useReducer } from "react";

export type LocationDataItem = {
  [key: string]: string | number;
};

export type LocationData = Array<LocationDataItem> | undefined;

export type Action = {
  type: string;
  payload?: {
    [key: string]: string | number | ((argument1?: string) => void);
  };
};

type StateProperties = {
  search: {
    from: string;
    to: string;
    date: string;
    time: string;
    page: number;
    sleeper: number;
    bike: number;
  };
  showLocations: string;
  searchValue: string;
  locationCallback: (name: string) => void | undefined;
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
    page: 0,
    sleeper: 0,
    bike: 0,
  },
  showLocations: "",
  searchValue: "",
  locationCallback: undefined,
};

const contextReducer = (state: StateProperties, action: Action) => {
  switch (action.type) {
    case "SET_ADDITIONAL_SETTINGS": {
      return {
        ...state,
        search: {
          ...state.search,
          ...action.payload,
        },
      };
    }
    case "RESET_ADDITIONAL_SETTINGS": {
      return {
        ...state,
        search: {
          ...state.search,
          sleeper: 0,
          bike: 0,
        },
      };
    }
    case "SWAP_LOCATIONS": {
      return {
        ...state,
        search: {
          ...state.search,
          from: state.search.to,
          to: state.search.from,
          page: 0, // always reset page when locations are swapped
        },
      };
    }
    case "PAGINATION_INCREMENT": {
      return {
        ...state,
        search: {
          ...state.search,
          page: state.search.page + 1,
        },
      };
    }
    case "PAGINATION_DECREMENT": {
      return {
        ...state,
        search: {
          ...state.search,
          page: state.search.page > 0 ? state.search.page - 1 : 0,
        },
      };
    }
    case "SET_DATE": {
      return {
        ...state,
        search: {
          ...state.search,
          date: action.payload?.date,
          page: 0, // always reset page when date changes
        },
      };
    }
    case "SET_TIME": {
      return {
        ...state,
        search: {
          ...state.search,
          time: action.payload?.time,
          page: 0, // always reset page when time changes
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
        locationCallback: action.payload?.callback,
      };
    }
    case "LOCATION_SELECTION": {
      const key = state.showLocations.toLowerCase();
      state.locationCallback(action.payload?.name as string);

      return {
        ...state,
        search: {
          ...state.search,
          [key]: action.payload?.name,
          page: 0, // always reset page when time changes
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
