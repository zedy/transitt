import classParser from "@/app/_lib/class-parser";

type ButtonProperties = {
  children?: React.ReactNode;
  onClick?: (event: React.BaseSyntheticEvent) => void;
  onMouseDown?: (event: React.BaseSyntheticEvent) => void;
  icon?: React.ReactNode | undefined;
  className?: string;
};

const DEFAULT_CLASS =
  "flex justify-center items-center rounded border-0 scale-100 hover:scale-110 transition-all duration-300 ease-in-out focus:outline-none focus:ring-0";

/**
 * Basic function button component.
 * It cannot be used as a link, so please don't pass in
 * any anchors. For that use next/link.
 *
 * The icons are passed in as React.ReactNode, currently
 * we're using Ant Design icons, but it can be type of icon
 * just as long as it's React.ReactNode.
 *
 * @params @see ButtonProperties
 * @returns React.ReactNode
 */
export default function Button({
  children,
  icon,
  className,
  onMouseDown,
  onClick,
}: ButtonProperties) {
  return (
    <button
      onClick={onClick}
      onMouseDown={onMouseDown}
      type="button"
      className={classParser(DEFAULT_CLASS, className)}
    >
      {icon}
      {children}
    </button>
  );
}
