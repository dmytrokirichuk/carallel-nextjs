import React, { ComponentProps } from "react";

//@utils
import { cn } from "@utils";

//@components
import { Loader } from "@components/ui";

interface ButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
  loading?: boolean;
}

/**
 * Returns the button component
 * @param ButtonProps
 * @returns JSX.Element
 */
const Button: React.FC<ButtonProps> = ({
  children,
  className,
  loading,
  ...buttonProps
}) => (
  <button
    className={cn(
      "rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 disabled:cursor-not-allowed disabled:opacity-75",
      className,
    )}
    {...buttonProps}
  >
    {children}
    {loading ? (
      <span className="ml-2">
        <Loader />
      </span>
    ) : null}
  </button>
);

export default Button;
