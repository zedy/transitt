import SearchConnectionsWrapper from "@/app/_components/elements/search-connections-wrapper";
import RoundedBox from "@/app/_components/elements/rounded-box";
import SearchConnectionFilters from "@/app/_components/elements/search-connection-filters";
import LocationResults from "@/app/_components/elements/location-results";
import { SearchContextProvider } from "@/app/_context/search-context";

export default function SearchConnections() {
  return (
    <SearchContextProvider>
      <RoundedBox>
        <SearchConnectionsWrapper />
        <LocationResults />
        <SearchConnectionFilters />
      </RoundedBox>
    </SearchContextProvider>
  );
}
