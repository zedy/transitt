import getDataFromRoute from "./route-wrapper";

export default async function getTransitRoute() {
  return getDataFromRoute(() => fetch("/api/transit"));
}
