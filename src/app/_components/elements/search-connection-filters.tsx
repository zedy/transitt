"use client";

import { useContext } from "react";
import { SearchContext } from "@/app/_context/search-context";
import FlexWrapper from "@/app/_components/elements/flex-wrapper";
import DateTimeWrapper from "@/app/_components/elements/filters/date-time-wrapper";

/**
 * Wrapper/Parent component for search connection filters.
 *
 * @returns React.ReactNode
 */
export default function SearchConnectionFilters() {
  const { dispatch } = useContext(SearchContext);

  return (
    <FlexWrapper classes="h-14 p-4">
      <DateTimeWrapper dispatch={dispatch} />
    </FlexWrapper>
  );
}
