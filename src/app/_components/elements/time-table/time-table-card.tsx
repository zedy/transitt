import React from "react";
import FlexWrapper from "@/app/_components/elements/flex-wrapper";
import RoundedBox from "@/app/_components/elements/rounded-box";
import AriaFlex from "../aria-flex";

function TimeTableCard({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <RoundedBox className="scale-100 transition-all duration-300 hover:scale-105 hover:bg-gray-800">
      <AriaFlex onClick={onClick}>
        <FlexWrapper
          justifyContent="center"
          alignItems="center"
          classes="py-6 cursor-pointer"
        >
          <span className="">{label}</span>
        </FlexWrapper>
      </AriaFlex>
    </RoundedBox>
  );
}

export default React.memo(TimeTableCard);
