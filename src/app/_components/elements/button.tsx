import classParser from "@/app/_lib/class-parser";

type ButtonProperties = {
  children?: React.ReactNode;
  handleClick?: () => void;
  icon?: React.ReactNode | undefined;
  className?: string;
};

const DEFAULT_CLASS =
  "flex justify-center items-center rounded border-0 bg-transparent scale-100 hover:scale-110 transition-all duration-300 ease-in-out focus:outline-none focus:ring-0";

export default function Button({
  children,
  icon,
  className,
  handleClick,
}: ButtonProperties) {
  return (
    <button
      onClick={handleClick}
      type="button"
      className={classParser(DEFAULT_CLASS, className)}
    >
      {icon}
      {children}
    </button>
  );
}
