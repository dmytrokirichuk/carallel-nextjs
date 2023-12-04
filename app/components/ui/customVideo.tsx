"use client";

//@components
import ReactPlayer from "react-player";

//@hooks
import { useEffect, useState } from "react";

interface CustomVideoProps {
  src: string;
}

/**
 * Display video with state handling
 * @param src string
 * @constructor
 */
export function CustomVideo({ src }: CustomVideoProps) {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    hasWindow && (
      <ReactPlayer url={src} controls={true} width="100%" height={250} />
    )
  );
}
