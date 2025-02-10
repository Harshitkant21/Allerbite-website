"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaApple } from "react-icons/fa";

export default function FloatingDownloadButton() {
  const [isVisible, setIsVisible] = useState(true);
  let scrollTimeout: NodeJS.Timeout | null = null;

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false);

      if (scrollTimeout) clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <Link
      href="https://apps.apple.com/us/app/allerbite/id6738210205"
      target="_blank"
      className={`fixed bottom-6 right-6 bg-black text-white flex items-center gap-2 px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition-all ${
        isVisible ? "opacity-100" : "opacity-0"
      } duration-300`}
    >
      <FaApple size={20} />
      <span className="font-semibold">Download</span>
    </Link>
  );
}
