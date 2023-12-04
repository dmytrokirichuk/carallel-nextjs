import React, { ComponentProps } from "react";

//@utils
import { cn } from "@utils";

interface IconButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
}

/**
 * Returns the button component
 * @param ButtonProps
 * @returns JSX.Element
 */
const IconButton: React.FC<IconButtonProps> = ({
  className,
  children,
  ...buttonProps
}) => (
  <button
    className={cn(
      "inline-flex items-center rounded-full p-2.5 text-center text-sm font-medium hover:bg-slate-100",
      className,
    )}
    {...buttonProps}
  >
    {children}
  </button>
);

export default IconButton;
