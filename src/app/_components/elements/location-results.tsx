"use client";

import {
  type LocationDataItem,
  SearchContext,
} from "@/app/_context/search-context";
import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import getLocation from "@/app/_services/get-location";
import LocationResultItem from "./location-results-item";

const NO_RESULTS = [
  {
    id: "no_results",
    name: "No results found",
  },
];

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

  const handleDispatch = (name: string) => {
    dispatch({
      type: "locationSelection",
      payload: {
        name,
      },
    });
  };

  return (
    <div className="realtive w-full">
      {(showLocations as string) && (
        <div className="absolute left-0 w-full overflow-hidden rounded-b-2xl shadow-slate-950 drop-shadow-md">
          <div className="h-1 w-full shadow-slate-950 drop-shadow-md" />
          <div className="flex flex-col">
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
          </div>
        </div>
      )}
    </div>
  );
}

export default React.memo(LocationResults);
