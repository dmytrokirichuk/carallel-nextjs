import React from "react";

//@components
import { Typography } from "@components/ui";
import { BookmarkIcon } from "@heroicons/react/24/outline";

interface ContentNotFoundProps {
  message: string;
}

/**
 * Returns the content not found component
 * @param ContentNotFoundProps
 * @returns JSX.Element
 */
const ContentNotFound: React.FC<ContentNotFoundProps> = ({ message }) => (
  <div className="flex flex-col items-center space-y-4">
    <BookmarkIcon className="h-8 w-8" />
    <Typography variant="h3">{message}</Typography>
  </div>
);

export default ContentNotFound;
