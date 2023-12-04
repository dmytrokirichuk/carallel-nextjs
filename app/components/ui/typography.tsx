//@types
import React, { ComponentProps, ElementType } from "react";

//@utils
import { cn } from "@utils";

interface TypographyProps extends ComponentProps<"h1"> {
  variant: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  children: React.ReactNode;
}

/**
 * Display a typography component.
 * @returns JSX.Element
 */
const Typography: React.FC<TypographyProps> = ({
  className,
  variant,
  children,
  ...TypographyProps
}) => {
  const Component = variant as ElementType;

  return (
    <Component
      className={cn(
        variant === "h1" && "my-4 text-3xl font-medium",
        variant === "h2" && "my-4 text-2xl font-medium",
        variant === "h3" && "my-2 text-xl font-medium",
        variant === "h4" && "my-2 text-lg",
        className,
      )}
      {...TypographyProps}
    >
      {children}
    </Component>
  );
};

export default Typography;
