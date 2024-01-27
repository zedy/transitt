import classParser from "@/app/_lib/class-parser";

const DEFAULT_CLASSES = "relative w-full flex";

export default function Section({
  children,
  classes = "",
}: Readonly<{
  children: React.ReactNode;
  classes?: string;
}>) {
  const classNames = classParser(DEFAULT_CLASSES, classes);

  return <section className={classNames}>{children}</section>;
}
