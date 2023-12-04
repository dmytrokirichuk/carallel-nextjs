import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import Typography from "./typography";

interface BackLinkProps {
  url: string;
}

/**
 * Returns the back link component
 * @param BackLinkProps
 * @returns JSX.Element
 */
const BackLink: React.FC<BackLinkProps> = ({ url }) => (
  <Link className="flex items-center space-x-2" href={url}>
    <ArrowUturnLeftIcon className="h-5 w-5" />
    <Typography variant="span">Go back</Typography>
  </Link>
);

export default BackLink;
