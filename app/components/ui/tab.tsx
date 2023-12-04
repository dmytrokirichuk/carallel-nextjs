import { ComponentProps } from "react";
import { cn } from "../../utils";

interface TabProps extends ComponentProps<"button"> {
  label: string;
  isActive: boolean;
}

/**
 * Display a loading spinner.
 * @returns JSX.Element
 */
const Tab: React.FC<TabProps> = ({
  label,
  isActive,
  className,
  ...tabProps
}) => (
  <button
    className={cn(
      "rounded-full bg-white px-4 py-2 font-medium capitalize text-primary-green",
      className,
      isActive && "bg-primary-green text-white",
    )}
    {...tabProps}
  >
    {label}
  </button>
);

export default Tab;
