"use client";

import { useState, useEffect } from "react";
import FloatingDownloadButton from "./FloatingDownloadButton";

export default function FloatingDownloadWrapper() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("footer");

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return !isFooterVisible ? <FloatingDownloadButton /> : null;
}
