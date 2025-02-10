import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { FaApple, FaAppStore } from "react-icons/fa";

interface FooterProps {
  id?: string;
}
function Footer({ id }: FooterProps) {
  return (
    <footer id={id} className="bg-neutral-800 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Allerbite simplifies daily life with features like ingredient
            scanning, meal-to-recipe conversion, and more, helping you find
            healthier eating options and make the most of your pantry.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#FeatureSection"
                className="hover:text-white transition-colors duration-300"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#About"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#Team"
                className="hover:text-white transition-colors duration-300"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                href="#FAQ"
                className="hover:text-white transition-colors duration-300"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/in/sahil-aggarwal-620050212/"
              className="hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </Link>
            <Link
              href="https://x.com/Harshit61124884"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </Link>
            <Link
              href="https://www.instagram.com/xcode_addy/"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Chandigarh, India</p>
          <p>Chandigarh</p>
          <p>Email: allerbite.offical@gmail.com</p>
          <p>Phone: (+91) 9814581570</p>
        </div>
      </div>
      <Separator className="opacity-5" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 space-y-2 md:space-y-0 mt-2">
        <div className="flex items-center space-x-3">
          <p className="text-gray-400 text-sm">Get the app</p>
          <a
            href="https://apps.apple.com/us/app/allerbite/id6738210205"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-black bg-opacity-95 text-white px-3 py-1 rounded-md shadow-lg hover:bg-gray-800 transition"
          >
            <FaApple size={20} />
            <div className="ml-2 flex flex-col leading-none">
              <span className="text-[10px]">Download on the</span>
              <span className="text-xs font-semibold">App Store</span>
            </div>
          </a>
        </div>
        <p className="text-xs text-center md:text-left">
          © 2024 Allerbite. All rights reserved. |{" "}
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
