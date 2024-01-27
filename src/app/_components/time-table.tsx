"use client";

import { useQuery } from "@tanstack/react-query";
import getTransitRoute from "@/app/_services/transit-service";

type TimeTableProperties = {
  transitData: any;
};

export default function TimeTable({ transitData }: TimeTableProperties) {
  const { data } = useQuery({
    queryKey: ["transitData"],
    queryFn: getTransitRoute,
    initialData: transitData,
  });

  console.log(data);
  return <div>time-table</div>;
}
