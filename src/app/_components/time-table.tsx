"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import getTransitRoute from "@/app/_services/get-transit-route";
import { Suspense } from "react";

type TimeTableProperties = {
  transitData?: any;
};

export default function TimeTable({ transitData }: TimeTableProperties) {
  // const { data } = useSuspenseQuery({
  //   queryKey: ["transitData"],
  //   queryFn: () => getTransitRoute(),
  //   initialData: [],
  // });

  // console.log("time table data:", data);

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
