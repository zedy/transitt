"use client";

import { useQuery } from "@tanstack/react-query";
import getTransitRoute from "@/app/_services/get-transit-route";
import { useContext } from "react";
import { SearchContext } from "@/app/_context/search-context";

export default function TimeTable() {
  const { state } = useContext(SearchContext);

  // const { data } = useQuery({
  //   queryKey: ["transitData"],
  //   queryFn: () => getTransitRoute(from, to),
  //   initialData: [],
  //   enabled: !!from && !!to,
  // });
  // console.log("time table data:", data);

  console.log("state:", state);

  return (
    <div className="mt-20">
      <p>time table chart</p>
      {/* <div className="flex w-full flex-col">
        {data?.connections?.map((item, index) => {
          return (
            <div key={index} className="mb-2 w-full flex-col bg-slate-600 p-2">
              <div>
                {item.from.location.name} - {item.to.location.name}
              </div>
              <div>platform: {item.from.platform}</div>
              <div>
                {item.from.departure} - {item.to.arrival}
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
