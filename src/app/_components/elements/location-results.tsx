"use client";

import { SearchContext } from "@/app/_context/search-context";
import { useContext } from "react";

export default function LocationResults() {
  const { showLocations } = useContext(SearchContext);

  return (
    <div className="realtive w-full">
      {showLocations && (
        <div className="absolute left-0 w-full overflow-hidden rounded-b-2xl shadow-slate-950 drop-shadow-md">
          <div className="h-1 w-full shadow-slate-950 drop-shadow-md" />
          <ul className="">
            <li className="cursor-pointer bg-gray-700 px-5 py-4 transition-all duration-300 hover:bg-gray-800">
              First results
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
