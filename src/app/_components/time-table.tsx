"use client";

import { useQuery } from "@tanstack/react-query";
import getTransitRoute from "@/app/_services/get-transit-route";
import { useContext } from "react";
import { SearchContext } from "@/app/_context/search-context";
import TimeTableElement from "@/app/_components/elements/time-table/time-table-element";
import LoadingSceleton from "@/app/_components/elements/loading-sceleton";

export default function TimeTable() {
  const {
    state: { search },
  } = useContext(SearchContext);
  const { from, to, date, time, page, bike, sleeper } = search;

  const { data, isFetching } = useQuery({
    queryKey: ["transitData", from, to, date, time, page, bike, sleeper],
    queryFn: () => getTransitRoute(search),
    enabled: !!from && !!to,
    select: (response) => {
      const { connections } = response;

      return connections;
    },
  });

  if (isFetching) {
    return <LoadingSceleton caller={4} />;
  }

  return <TimeTableElement data={data} />;
}
