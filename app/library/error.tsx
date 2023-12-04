"use client";

import { useEffect } from "react";

//components
import { Button } from "@components/ui";
import { toast } from "react-toastify";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    toast.error(`Error with articles fetching, message: ${error.message}`);
  }, [error]);

  return (
    <div className="content-container flex h-screen flex-col items-center justify-center space-y-4">
      <h2>Something went wrong trying to get articles!</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
