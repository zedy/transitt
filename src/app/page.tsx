import Header from "@/app/_components/header";
import Main from "@/app/_components/layout/main";
import SearchTransitt from "@/app/_components/elements/search-transitt";
import Container from "@/app/_components/layout/container";
import { ThemeContextProvider } from "@/app/_context/theme-context";

export default function Home() {
  return (
    <ThemeContextProvider>
      <Header />
      <Main>
        <Container>
          <SearchTransitt />
        </Container>
      </Main>
    </ThemeContextProvider>
  );
}
