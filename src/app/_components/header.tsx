import Image from "next/image";
import FlexWrapper from "./elements/flex-wrapper";
import Typography, { TypographyType } from "./typography/typography-element";
import ThemeChanger from "./elements/theme-changer";

export default function Header() {
  return (
    <header className="flex items-center justify-center bg-gray-800 p-4 text-white">
      <FlexWrapper
        alignItems="center"
        justifyContent="between"
        classes="md:max-w-3xl"
      >
        <FlexWrapper alignItems="center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={32}
            height={32}
            className="mr-2 h-8 w-8"
          />
          <Typography
            classes="text-lg font-bold"
            component={TypographyType.SPAN}
          >
            Transitt
          </Typography>
        </FlexWrapper>
        <ThemeChanger />
      </FlexWrapper>
    </header>
  );
}
