"use client";

import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position
  const [showNavbar, setShowNavbar] = useState(true); // Track whether navbar is visible

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle scroll behavior
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scroll down, hide the navbar
        setShowNavbar(false);
      } else {
        // Scroll up, show the navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Re-run the effect when lastScrollY changes

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 z-50 flex justify-between items-center px-6 md:px-12 w-full transition-transform duration-300",
        showNavbar ? "translate-y-0" : "-translate-y-full", // Apply a translate effect to hide/show the navbar
        className
      )}
    >
      {/* Hamburger Icon for Mobile, aligned to the right */}
      <div className="md:hidden absolute right-6 top-8 transform -translate-y-1/2">
        <button onClick={toggleMenu} className="text-2xl text-white">
          <FaBars />
        </button>
      </div>

      {/* Side Overlay Menu - Positioned on the right */}

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40" // Full-screen dark overlay
          onClick={closeMenu}
        >
          <div
            className="absolute right-0 top-0 w-64 h-screen bg-white shadow-lg z-50 overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent overlay click
          >
            {/* Close Button */}
            <div className="absolute top-6 right-6">
              <button
                onClick={closeMenu}
                className="text-2xl text-gray-600 hover:text-black"
              >
                <FaTimes />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col mt-12 p-6 space-y-6">
              <motion.button
                onClick={() => scrollToSection("#")}
                className="bg-transparent border-none cursor-pointer"
              >
                <MenuItem setActive={setActive} active={active} item="Home" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("#FeatureSection")}
                className="bg-transparent border-none cursor-pointer"
              >
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Features"
                ></MenuItem>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("#About")}
                className="bg-transparent border-none cursor-pointer"
              >
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="About"
                ></MenuItem>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("#Team")}
                className="bg-transparent border-none cursor-pointer"
              >
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Team"
                ></MenuItem>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("#FAQ")}
                className="bg-transparent border-none cursor-pointer"
              >
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="FAQ"
                ></MenuItem>
              </motion.button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 items-start w-full justify-center mt-12">
        <Menu setActive={setActive}>
          <motion.button
            onClick={() => scrollToSection("#")}
            className="bg-transparent border-none cursor-pointer"
          >
            <MenuItem setActive={setActive} active={active} item="Home" />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("#FeatureSection")}
            className="bg-transparent border-none cursor-pointer"
          >
            <MenuItem setActive={setActive} active={active} item="Features" />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("#About")}
            className="bg-transparent border-none cursor-pointer"
          >
            <MenuItem setActive={setActive} active={active} item="About" />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("#Team")}
            className="bg-transparent border-none cursor-pointer"
          >
            <MenuItem setActive={setActive} active={active} item="Team" />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("#FAQ")}
            className="bg-transparent border-none cursor-pointer"
          >
            <MenuItem setActive={setActive} active={active} item="FAQ" />
          </motion.button>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
