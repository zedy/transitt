import SearchConnections from "@/app/_components/elements/search-connections";
import Section from "@/app/_components/layout/section";
import Typography, {
  TypographyType,
} from "@/app/_components/typography/typography-element";
import { SearchContextProvider } from "@/app/_context/search-context";
import TimeTable from "@/app/_components/time-table";

export default async function SearchTransitt() {
  return (
    <Section classes="flex-col">
      <Typography component={TypographyType.H1} isSr>
        Transitt - explore Switzerland
      </Typography>
      <Typography component={TypographyType.H2} isSr>
        Search timetable and purhcase tickets
      </Typography>
      <Typography
        component={TypographyType.H2}
        classes="text-center text-lg my-10"
      >
        Can we help you plan your route?
      </Typography>
      <SearchContextProvider>
        <SearchConnections />
        <TimeTable />
      </SearchContextProvider>
    </Section>
  );
}
