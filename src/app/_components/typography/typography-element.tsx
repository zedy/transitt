import React from "react";

export enum TypographyType {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  P = "p",
  SPAN = "span",
}

const DEFAULT_TEXT_SIZE = "text-base";

export default function Typography({
  children,
  component,
  styles,
  isSr = false,
  classes = "",
}: Readonly<{
  children: React.ReactNode;
  component: TypographyType;
  styles?: React.CSSProperties;
  isSr?: boolean;
  classes?: string;
}>) {
  const classNames = `${DEFAULT_TEXT_SIZE} ${isSr ? "sr-only" : ""} ${classes}`;

  return React.createElement(
    component,
    { style: styles, className: classNames },
    children,
  );
}
