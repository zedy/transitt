import classParser from "@/app/_lib/class-parser";

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
  const className = classParser(flexClass, classes);

  return <div className={className}>{children}</div>;
}
