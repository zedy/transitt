"use client";

import { useContext } from "react";
import { SearchContext } from "@/app/_context/search-context";
import SearchInputWrapper from "./search-input-wrapper";

export default function SearchConnectionsWrapper() {
  const {
    state: { showLocations },
  } = useContext(SearchContext);

  return (
    <div
      className="relative z-10 flex w-full flex-col overflow-hidden"
      style={
        showLocations
          ? { boxShadow: "0 12px 14px -2px rgba(0, 0, 0, 0.15)" }
          : {}
      }
    >
      <SearchInputWrapper name="From" />
      <SearchInputWrapper name="To" />
    </div>
  );
}
