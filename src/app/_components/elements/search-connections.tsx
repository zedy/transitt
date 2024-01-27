import SearchConnectionsForm from "@/app/_components/forms/search-connections.form";
import RoundedBox from "@/app/_components/elements/rounded-box";
import SearchConnectionFilters from "@/app/_components/elements/search-connection-filters";

export default function SearchConnections() {
  return (
    <RoundedBox>
      <SearchConnectionsForm />
      <SearchConnectionFilters />
    </RoundedBox>
  );
}
