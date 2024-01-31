import SearchConnectionsWrapper from "@/app/_components/elements/search-connections-wrapper";
import RoundedBox from "@/app/_components/elements/rounded-box";
import SearchConnectionFilters from "@/app/_components/elements/search-connection-filters";
import LocationResults from "@/app/_components/elements/location-results";

/**
 * Presentational component
 *
 * @returns React.ReactNode
 */
export default function SearchConnections() {
  return (
    <RoundedBox>
      <SearchConnectionsWrapper />
      <LocationResults />
      <SearchConnectionFilters />
    </RoundedBox>
  );
}
