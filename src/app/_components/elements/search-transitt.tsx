import Section from "../layout/section";
import Typography, { TypographyType } from "../typography/typography-element";

export default function SearchTransitt() {
  return (
    <Section>
      <Typography component={TypographyType.H1} isSr>
        Transitt - explore Switzerland
      </Typography>
      <Typography component={TypographyType.H2} isSr>
        Search timetable and purhcase tickets
      </Typography>
      <Typography component={TypographyType.H2}>
        Where are you going to?
      </Typography>
      TODO: immplement search form component here
    </Section>
  );
}
