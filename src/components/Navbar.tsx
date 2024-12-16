// "use client";

// import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem } from "./ui/navigation-menu";
// import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";
// import { FaHamburger } from "react-icons/fa";

// function Navbar({ className }: { className?: string }) {
//   const [active, setActive] = useState<string | null>(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const scrollToSection = (id: string) => {
//     const section = document.querySelector(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   }
//   return (
//     <div
//       className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
//     >
//       {/* <div>{}</div> */}
      // <Menu setActive={setActive}>
      //   <HoveredLink href="/">
      //     <MenuItem
      //       setActive={setActive}
      //       active={active}
      //       item="Home"
      //     ></MenuItem>
      //   </HoveredLink>

      //   <motion.button
      //     onClick={() => scrollToSection("#FeatureSection")}
      //     className="bg-transparent border-none cursor-pointer"
      //   >
      //     <MenuItem
      //       setActive={setActive}
      //       active={active}
      //       item="Features"
      //     ></MenuItem>
      //   </motion.button>
      //   <motion.button
      //     onClick={() => scrollToSection("#About")}
      //     className="bg-transparent border-none cursor-pointer"
      //   >
      //     <MenuItem
      //       setActive={setActive}
      //       active={active}
      //       item="About"
      //     ></MenuItem>
      //   </motion.button>
      //   <motion.button
      //     onClick={() => scrollToSection("#Team")}
      //     className="bg-transparent border-none cursor-pointer"
      //   >
      //     <MenuItem
      //       setActive={setActive}
      //       active={active}
      //       item="Team"
      //     ></MenuItem>
      //   </motion.button>
      //   <motion.button
      //     onClick={() => scrollToSection("#FAQ")}
      //     className="bg-transparent border-none cursor-pointer"
      //   >
      //     <MenuItem
      //       setActive={setActive}
      //       active={active}
      //       item="FAQ"
      //     ></MenuItem>
      //   </motion.button>
      // </Menu>
//     </div>
//   );
// }




// export default Navbar;


"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <div
      className={cn(
        "fixed top-10 inset-y-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 w-full",
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
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        >
          <div
            className="absolute right-0 top-0 w-64 bg-white h-full shadow-lg z-50 transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside menu
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

            <div className="flex flex-col items-start p-6">
              <HoveredLink href="/">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Home"
                ></MenuItem>
              </HoveredLink>

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
      <div className="hidden md:flex space-x-8 items-start w-full justify-center min-h-screen mt-20">
        {/* <Menu setActive={setActive}>
          <HoveredLink href="/">
            <MenuItem setActive={setActive} active={active} item="Home" />
          </HoveredLink>

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
        </Menu> */}
        <Menu setActive={setActive}>
        <HoveredLink href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </HoveredLink>

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
      </Menu>
      </div>
    </div>
  );
}

export default Navbar;
