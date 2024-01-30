/**
 * We pass a object of key-value pairs and it returns a query string.
 * If the value is null, undefined or an empty string, it will be ignored.
 *
 * @param object Record<string, string>
 * @returns string
 */
export default function objectToQueryString(object: Record<string, string>) {
  return Object.keys(object)
    .filter(
      (key) =>
        object[key] !== null && object[key] !== undefined && object[key] !== "",
    )
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`,
    )
    .join("&");
}
