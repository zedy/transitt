export default async function getDataFromRoute(
  callback: () => Promise<Response>,
) {
  try {
    const fetchResult = await callback();

    if (fetchResult.status !== 200) {
      throw new Error(`Error fetching data: ${fetchResult.statusText}`);
    }

    const data = await fetchResult.json();

    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
}
