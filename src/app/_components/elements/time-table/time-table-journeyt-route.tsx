import {
  calculateJourneyProgress,
  calculateTransferPointPositions,
  diffTime,
} from "@/app/_lib/transit-route-helpers";
import React from "react";
import { type Connection } from "@/app/_types/api";
import FlexWrapper from "../flex-wrapper";

function Segment() {
  return <span className="h-[1px] grow bg-gray-400" />;
}
function Stop() {
  return <span className="h-2 w-2 rounded-full bg-gray-100" />;
}
function Start() {
  return <span className="h-2 w-2 rounded-full bg-gray-500" />;
}
function Transit({ position }: { position: number }) {
  return (
    <span
      style={{ left: `calc(${position}% - 8px)` }}
      className="absolute h-2 w-2 rounded-full bg-red-800"
    />
  );
}
function Transfer({ position }: { position: number }) {
  return (
    <span
      style={{ left: `calc(${position}% - 8px)` }}
      className="absolute h-2 w-2 rounded-full border-2 border-gray-500 bg-gray-700"
    />
  );
}

type Properties = {
  item: Connection;
};

// TODO: typesafety
function CalculateRouteAndTrasnfers({ item }: Properties) {
  const { transfers, sections, from, to } = item;
  const transferSegments = [];
  const now = new Date();
  const isInTransit = diffTime(from.departure, now.toISOString()) > 0;
  const transferPointPositions = calculateTransferPointPositions(sections);

  if (transfers > 0) {
    for (let index = 0; index < transfers; index += 1) {
      transferSegments.push(
        <Transfer key={index} position={transferPointPositions[index]} />,
      );
    }
  }

  return (
    <FlexWrapper
      justifyContent="between"
      alignItems="center"
      classes="distance relative mx-4 grow"
    >
      <Start />
      <Segment />
      {transfers > 0 && transferSegments}
      {isInTransit ? (
        <Transit
          position={calculateJourneyProgress(from.departure, to.arrival)}
        />
      ) : undefined}
      <Stop />
    </FlexWrapper>
  );
}

export default React.memo(CalculateRouteAndTrasnfers);
