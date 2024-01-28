import SearchConnectionsForm from "@/app/_components/forms/search-connections.form";
import RoundedBox from "@/app/_components/elements/rounded-box";
import SearchConnectionFilters from "@/app/_components/elements/search-connection-filters";
import LocationResults from "@/app/_components/elements/location-results";
import { SearchContextProvider } from "@/app/_context/search-context";

export default function SearchConnections() {
  return (
    <SearchContextProvider>
      <RoundedBox>
        <SearchConnectionsForm />
        <LocationResults />
        <SearchConnectionFilters />
      </RoundedBox>
    </SearchContextProvider>
  );
}
