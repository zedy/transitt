"use client";

import {
  calculateJourneyTime,
  createKeyFromProperties,
  getTime,
} from "@/app/_lib/transit-route-helpers";
import TimeTableJourneytRoute from "./time-table-journeyt-route";
import FlexWrapper from "../flex-wrapper";
import Typography, {
  TypographyType,
} from "../../typography/typography-element";

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
    <FlexWrapper flexDirection="col">
      {data?.map((item) => {
        return (
          <FlexWrapper
            flexDirection="col"
            key={createKeyFromProperties(item)}
            classes="mb-2 w-full scale-100 cursor-pointer rounded-lg bg-gray-700 p-4 shadow-lg transition-all duration-200 hover:scale-105"
          >
            <FlexWrapper justifyContent="between">
              <FlexWrapper>
                <Typography component={TypographyType.SPAN} classes="w-14">
                  {item.products[0]}
                </Typography>
                <Typography component={TypographyType.SPAN}>
                  Direction {item.sections[0].journey.to}
                </Typography>
              </FlexWrapper>
              <Typography
                component={TypographyType.SPAN}
                classes="w-24 text-right"
              >
                {calculateJourneyTime(item.from.departure, item.to.arrival)}
              </Typography>
            </FlexWrapper>
            <FlexWrapper justifyContent="between" classes="my-2">
              <Typography component={TypographyType.SPAN}>
                {getTime(item.from.departure)}
              </Typography>
              <TimeTableJourneytRoute item={item} />
              <Typography component={TypographyType.SPAN}>
                {getTime(item.to.arrival)}
              </Typography>
            </FlexWrapper>
            <FlexWrapper justifyContent="between">
              <Typography component={TypographyType.SPAN}>
                Platform {item.from.platform}
              </Typography>
              <Typography component={TypographyType.SPAN}>
                Platform {item.to.platform}
              </Typography>
            </FlexWrapper>
          </FlexWrapper>
        );
      })}
    </FlexWrapper>
  );
}
