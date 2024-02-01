"use client";

import {
  type LocationDataItem,
  SearchContext,
} from "@/app/_context/search-context";
import React, { useCallback, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import getLocation from "@/app/_services/get-location";
import LocationResultItem from "./location-results-item";
import FlexWrapper from "./flex-wrapper";

const NO_RESULTS = [
  {
    id: "no_results",
    name: "No results found",
  },
];

/**
 * Main component for displaying location results
 * from the /api/location endpoint.
 *
 * It uses React Query to fetch data from the endpoint
 * based on the search value keyword.
 *
 * Fallback strategy is to display "No results found".
 *
 * @TODO integreate with useDebounce hook
 * @returns React.ReactNode
 */
function LocationResults() {
  const {
    state: { showLocations, searchValue },
    dispatch,
  } = useContext(SearchContext);

  const { data } = useQuery({
    queryFn: () => getLocation(searchValue),
    queryKey: ["locationData", searchValue],
    enabled: true,
    retry: false,
    select: (response) => response.stations,
    placeholderData: NO_RESULTS,
  });

  const handleDispatch = useCallback((name: string) => {
    dispatch({
      type: "LOCATION_SELECTION",
      payload: {
        name,
      },
    });
  }, []);

  return (
    <FlexWrapper>
      {(showLocations as string) && (
        <div className="absolute left-0 z-40 w-full overflow-hidden rounded-b-2xl shadow-slate-950 drop-shadow-md">
          <div className="h-1 w-full shadow-slate-950 drop-shadow-md" />
          <FlexWrapper flexDirection="col">
            {data && data.length > 0 ? (
              data.map((item: LocationDataItem) => {
                return (
                  <LocationResultItem
                    key={item.id}
                    name={item.name as string}
                    dispatch={handleDispatch}
                  />
                );
              })
            ) : (
              <LocationResultItem key="no_results" name="No results found" />
            )}
          </FlexWrapper>
        </div>
      )}
    </FlexWrapper>
  );
}

export default React.memo(LocationResults);
