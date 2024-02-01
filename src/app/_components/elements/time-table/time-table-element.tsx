"use client";

import { useCallback, useContext } from "react";
import {
  calculateJourneyTime,
  createKeyFromProperties,
  getTime,
} from "@/app/_lib/transit-route-helpers";
import Image from "next/image";
import { SearchContext } from "@/app/_context/search-context";
import toast from "react-hot-toast";
import TimeTableJourneytRoute from "./time-table-journeyt-route";
import FlexWrapper from "../flex-wrapper";
import Typography, {
  TypographyType,
} from "../../typography/typography-element";
import TimeTableCard from "./time-table-card";

// TODO: do i need this?
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

function getTransportCategoryIcon(category: string) {
  switch (category) {
    case "B": {
      return "bus";
    }
    case "T":
    case "F":
    case "C": {
      return "tram";
    }
    case "S": {
      return "ship";
    }
    default: {
      return "train";
    }
  }
}

// TODO: typesafety
export default function TimeTableElement({ data }) {
  const { state, dispatch } = useContext(SearchContext);

  const handleEarlierConnectionOnClick = useCallback(() => {
    if (state.search.page === 0) {
      toast.error("No earlier connections available");
      return;
    }

    dispatch({
      type: "PAGINATION_DECREMENT",
    });
  }, []);

  const handleLaterConnectionOnClick = useCallback(() => {
    if (state.search.page === 3) {
      toast.error("No later connections available");
      return;
    }

    dispatch({
      type: "PAGINATION_INCREMENT",
    });
  }, []);

  return (
    <FlexWrapper flexDirection="col">
      {data && (
        <TimeTableCard
          label="Show earlier connections"
          onClick={handleEarlierConnectionOnClick}
        />
      )}
      {data?.map((item) => {
        return (
          <FlexWrapper
            flexDirection="col"
            key={createKeyFromProperties(item)}
            classes="my-2 w-full scale-100 cursor-pointer rounded-lg bg-gray-700 p-4 shadow-lg transition-all duration-200 hover:scale-105"
          >
            <FlexWrapper justifyContent="between">
              <FlexWrapper>
                <Image
                  src={`/${getTransportCategoryIcon(item.sections[0].journey.category)}.svg`}
                  alt="transport-icon"
                  width={24}
                  height={24}
                  className="mr-2 h-6 w-6"
                />
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
            <FlexWrapper classes="justify-between">
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
      {data && (
        <TimeTableCard
          label="Show later connections"
          onClick={handleLaterConnectionOnClick}
        />
      )}
    </FlexWrapper>
  );
}
