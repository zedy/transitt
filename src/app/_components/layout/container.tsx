import FlexWrapper from "../elements/flex-wrapper";

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FlexWrapper
      flexDirection="col"
      alignItems="center"
      classes="min-h-screen w-full px-5 md:max-w-3xl md:px-1"
    >
      {children}
    </FlexWrapper>
  );
}
