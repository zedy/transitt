export default async function getTransitRoute() {
  const fetchResult = await fetch(
    "http://transport.opendata.ch/v1/connections?from=Lausanne&to=Genève",
    {
      // Add any required headers, parameters, etc.
    },
  );

  if (!fetchResult.ok) {
    throw new Error(`Error fetching data: ${fetchResult.statusText}`);
  }

  const data = await fetchResult.json();

  return data;
}
