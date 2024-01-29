import getDataFromRoute from "./route-wrapper";

export default async function getLocation(query: string) {
  return getDataFromRoute(() => fetch(`/api/location?query=${query}`));
}
