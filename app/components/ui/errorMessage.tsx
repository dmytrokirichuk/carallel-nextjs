import React from "react";

//@components
import { Typography } from "@components/ui";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

interface ErrorMessageProps {
  error: string;
}

/**
 * Returns the error-message component
 * @param ErrorMessageProps
 * @returns JSX.Element
 */
const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => (
  <div className="flex flex-col space-y-4 ">
    <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
    <Typography variant="h3" className="text-red-500">
      {error}
    </Typography>
  </div>
);

export default ErrorMessage;
