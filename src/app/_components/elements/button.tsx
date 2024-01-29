import classParser from "@/app/_lib/class-parser";

type ButtonProperties = {
  children?: React.ReactNode;
  onClick?: (event: React.BaseSyntheticEvent) => void;
  onMouseDown?: (event: React.BaseSyntheticEvent) => void;
  icon?: React.ReactNode | undefined;
  className?: string;
};

const DEFAULT_CLASS =
  "flex justify-center items-center rounded border-0 bg-transparent scale-100 hover:scale-110 transition-all duration-300 ease-in-out focus:outline-none focus:ring-0";

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
