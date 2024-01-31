import React from "react";
import FlexWrapper from "./flex-wrapper";

/**
 * Presentational component.
 *
 * @returns React.ReactNode
 */
function Sceleton() {
  return (
    <FlexWrapper
      flexDirection="col"
      classes="mb-2 w-full scale-100 rounded-lg bg-gray-700 p-4 shadow-lg transition-all duration-200"
    >
      <FlexWrapper justifyContent="between" classes="animate-pulse">
        <FlexWrapper>
          <div className="mr-4 h-3 w-24 rounded-lg bg-gray-500" />
          <div className="h-3 w-24 rounded-lg bg-gray-500" />
        </FlexWrapper>
        <div className="h-3 w-24 rounded-lg bg-gray-500" />
      </FlexWrapper>
      <FlexWrapper justifyContent="between" classes="animate-pulse my-4">
        <div className="h-3 w-12 rounded-lg bg-gray-500" />
        <div className="mx-3 h-2 w-full rounded-lg bg-gray-500" />
        <div className="h-3 w-12 rounded-lg bg-gray-500" />
      </FlexWrapper>
      <FlexWrapper classes="animate-pulse justify-between">
        <div className="h-3 w-24 rounded-lg bg-gray-500" />
        <div className="h-3 w-24 rounded-lg bg-gray-500" />
      </FlexWrapper>
    </FlexWrapper>
  );
}

/**
 * The caller is the number of sceletons to be rendered.
 *
 * The default/min value is 1.
 *
 * @param caller number
 * @returns React.ReactNode
 */
function LoadingSceleton({ caller = 1 }: { caller: number }) {
  const sceletons = [];

  for (let index = 0; index < caller; index += 1) {
    sceletons.push(<Sceleton key={index} />);
  }

  return sceletons;
}

export default React.memo(LoadingSceleton);
