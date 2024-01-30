"use client";

import {
  calculateJourneyTime,
  createKeyFromProperties,
  parseStrings,
  getTime,
} from "@/app/_lib/transit-route-helpers";
import TimeTableJourneytRoute from "./time-table-journeyt-route";
import FlexWrapper from "../flex-wrapper";

// TODO: integrate icons
const TRAIN_CATEGORIES = [
  "ice",
  "ic",
  "ir",
  "tgv",
  "rjx",
  "ec",
  "pe",
  "re",
  "s",
  "r",
  "sn",
  "arz",
  "ext",
];

// TODO: typesafety
export default function TimeTableElement({ data }) {
  return (
    <FlexWrapper flexDirection="col" classes="mt-10">
      {data?.map((item) => {
        const totalJourneyTime = calculateJourneyTime(
          item.from.departure,
          item.to.arrival,
        );
        return (
          <FlexWrapper
            flexDirection="col"
            key={createKeyFromProperties(item)}
            classes="mb-2 w-full scale-100 cursor-pointer rounded-lg bg-gray-700 p-4 shadow-lg transition-all duration-200 hover:scale-105"
          >
            <FlexWrapper justifyContent="between">
              <FlexWrapper>
                <span
                  key={parseStrings(item.products[0])}
                  className="block w-14"
                >
                  {item.products[0]}
                </span>
                <span className="direction">
                  Direction {item.sections[0].journey.to}
                </span>
              </FlexWrapper>
              <span className="duration">{totalJourneyTime}</span>
            </FlexWrapper>
            <FlexWrapper justifyContent="between">
              <span className="departure">{getTime(item.from.departure)}</span>
              <TimeTableJourneytRoute item={item} />
              <span className="arrival">{getTime(item.to.arrival)}</span>
            </FlexWrapper>
            <FlexWrapper justifyContent="between">
              <span className="platform-departure">
                Platform {item.from.platform}
              </span>
              <span className="platform-arrival">
                Platform {item.to.platform}
              </span>
            </FlexWrapper>
          </FlexWrapper>
        );
      })}
    </FlexWrapper>
  );
}
