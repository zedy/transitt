"use client";

import type { Dayjs } from "dayjs";
import FlexWrapper from "@/app/_components/elements/flex-wrapper";
import { type Dispatch } from "react";
import { type Action } from "@/app/_context/search-context";
import AntDDatePicker from "./date-picker";
import AntDTimePicker from "./time-picker";

/**
 * Date / Time picker component based of Ant Design.
 *
 * The component receives on change function from parent component,
 * so that we ensure scalability and reusability.
 */
export default function DateTimeWrapper({
  dispatch,
}: {
  dispatch: Dispatch<Action>;
}) {
  const handleDateOnChange = (
    selectedData: Dayjs | null,
    dateString: string,
  ) => {
    dispatch({ type: "SET_DATE", payload: { date: dateString } });
  };

  const handleTimeOnChange = (time: Dayjs | null, timeString: string) => {
    dispatch({ type: "SET_TIME", payload: { time: timeString } });
  };

  return (
    <FlexWrapper>
      <AntDDatePicker onChange={handleDateOnChange} />
      <AntDTimePicker onChange={handleTimeOnChange} />
    </FlexWrapper>
  );
}
