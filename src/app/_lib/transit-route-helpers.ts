import dayjs from "dayjs";
import { type Connection, type ConnectionSection } from "../_types/api";

/**
 * Helper functions for various types of calculations for transit routes
 * and connections between two/multiple points
 */

/**
 * Input time in format "2024-01-30T23:02:00+0100" | ISO 8601
 * Output time in format "HH:mm"
 *
 * @param time
 * @returns string
 */
export const getTime = (time: string) => {
  return dayjs(time).format("HH:mm");
};

/**
 * Calculate the difference between two times in minutes
 * The returned value can be negative (meaning that the event
 * still hasn't started)
 *
 * @param time1 strig
 * @param time2 string
 * @returns number
 */
export const diffTime = (time1: string, time2: string) => {
  const t1 = dayjs(time1);
  const t2 = dayjs(time2);
  return t2.diff(dayjs(t1), "minute");
};

/**
 * Calculate the time difference between two times
 * and returns a string in format "15min | 1h 15min"
 *
 * @param time1 string
 * @param time2 string
 * @returns string
 */
export const calculateJourneyTime = (time1: string, time2: string) => {
  const minutes = diffTime(time1, time2);
  const hours = Math.floor(minutes / 60);
  const displayHours = hours > 0 ? `${hours}h` : "";

  return `${displayHours} ${minutes - hours * 60}min`;
};

/**
 * Parse a string and replace spaces with underscores
 * and convert to lowercase.
 *
 * @param value string | number
 * @returns string
 */
export const parseStrings = (value: string | number) => {
  return value.toString().replace(" ", "_").toLowerCase();
};

/**
 * Create a unique key for a transit route item
 * based on the departure and arrival locations
 * and the departure and arrival times
 *
 * @param item
 * @returns string
 */
export const createKeyFromProperties = (item: Connection) => {
  const { from, to } = item;
  const fromSt = parseStrings(from.location.name as string);
  const departure = parseStrings(from.departureTimestamp);
  const toSt = parseStrings(to.location.name as string);
  const arrival = parseStrings(to.arrivalTimestamp);

  return `${fromSt}-${departure}-${toSt}-${arrival}`;
};

/**
 * Calculate the progress of a journey
 * based on the departure and arrival times
 *
 * @param departure string
 * @param arrival string
 * @returns number
 */
export const calculateJourneyProgress = (
  departure: string,
  arrival: string,
) => {
  const now = new Date();
  const startTime = dayjs(departure);
  const endTime = dayjs(arrival);
  const currentTime = dayjs(now);
  const totalDuration = endTime.diff(startTime, "minute");
  const elapsedTime = currentTime.diff(startTime, "minute");
  const progress = Math.ceil(
    Number.parseInt(((elapsedTime / totalDuration) * 100).toFixed(2), 10),
  );

  return progress > 100 ? 100 : progress;
};

/**
 * Calculates the positons of each individual transfer point
 * based on the total duration of the journey.
 *
 * @param sections Array<Record<string, string>>
 * @returns Array<number>
 */
export const calculateTransferPointPositions = (
  sections: Array<ConnectionSection>,
) => {
  const limit = sections.length;
  const transitDuration: Array<number> = [];
  // the number of minutes a person will spend on board a train in transit to the next connection
  // sum of all transit durations
  let totalTimeInTransit = 0;

  for (let index = 0; index < limit; index += 1) {
    const startTime = sections[index].departure.departure;
    const endTime = sections[index].arrival.arrival;
    const totalDuration = diffTime(startTime as string, endTime as string);

    transitDuration.push(totalDuration);
    totalTimeInTransit += totalDuration;
  }

  const transferPointPositionsInPercentage = transitDuration.map((duration) => {
    return Math.ceil((duration / totalTimeInTransit) * 100);
  });

  return transferPointPositionsInPercentage;
};
