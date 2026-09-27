"use client";

import { useEffect, useState } from "react";

export default function HomePageVid() {
  const [shouldPlay, setShouldPlay] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      setShouldPlay(false);
    }

    const handleChange = (event) => {
      setShouldPlay(!event.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <video
        className="w-full h-full object-cover"
        src="/assets/video.mp4"
        autoPlay={shouldPlay}
        muted={shouldPlay}
        loop={shouldPlay}
        playsInline
        preload="none"
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
