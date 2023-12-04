import React from "react";

//@utils
import { cn } from "@utils";

//@components
import { Typography } from "@components/ui";

interface LabelProps {
  text: string;
  wrapperClassName?: string;
  textClassName?: string;
  icon?: React.ReactNode;
}

/**
 * Returns the label component
 * @param LabelProps
 * @returns JSX.Element
 */
const Label: React.FC<LabelProps> = ({
  text,
  wrapperClassName,
  textClassName,
  icon,
}) => (
  <div
    className={cn(
      "flex w-fit items-center space-x-2 rounded-xl px-2.5 py-1.5",
      wrapperClassName,
    )}
  >
    {icon}
    <Typography
      className={cn("font-medium capitalize", textClassName)}
      variant="span"
    >
      {text}
    </Typography>
  </div>
);

export default Label;
