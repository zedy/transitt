type FlexWrapperProperties = {
  children: React.ReactNode;
  flexDirection?: "row" | "col";
  justifyContent?: "start" | "center" | "end" | "between" | "around";
  alignItems?: "start" | "center" | "end" | "stretch" | "baseline";
  classes?: string;
};

export default function FlexWrapper({
  children,
  classes = "",
  flexDirection = "row",
  justifyContent = "start",
  alignItems = "start",
}: FlexWrapperProperties) {
  const flexClass = `w-full h-auto flex flex-${flexDirection} justify-${justifyContent} items-${alignItems}`;

  return <div className={`${flexClass} ${classes}`}>{children}</div>;
}
