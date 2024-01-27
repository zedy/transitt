import SearchConnections from "@/app/_components/elements/search-connections";
import Section from "@/app/_components/layout/section";
import Typography, {
  TypographyType,
} from "@/app/_components/typography/typography-element";
import TimeTable from "@/app/_components/time-table";
import getTransitRoute from "@/app/_services/transit-service";

export default async function SearchTransitt() {
  const transitData = await getTransitRoute();

  return (
    <Section classes="flex-col">
      <Typography component={TypographyType.H1} isSr>
        Transitt - explore Switzerland
      </Typography>
      <Typography component={TypographyType.H2} isSr>
        Search timetable and purhcase tickets
      </Typography>
      <Typography component={TypographyType.H2} classes="text-center">
        Can we help you plan your route?
      </Typography>
      <SearchConnections />
      <TimeTable transitData={transitData} />
    </Section>
  );
}
