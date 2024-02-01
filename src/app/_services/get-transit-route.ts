import objectToQueryString from "../_lib/object-to-string-parser";
import getDataFromRoute from "./route-wrapper";

export default async function getTransitRoute(
  search: Record<string, string | number>,
) {
  const queryString = objectToQueryString(search);
  return getDataFromRoute(() => fetch(`/api/transit?${queryString}`));
}
