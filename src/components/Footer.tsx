import Link from "next/link";
import { Separator } from "@/components/ui/separator"


function Footer() {
  return (
    <footer className="bg-neutral-800 text-gray-400 py-10">
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
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#FeatureSection"
                className="hover:text-white transition-colors duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#About"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Team"
                className="hover:text-white transition-colors duration-300"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#FAQ"
                className="hover:text-white transition-colors duration-300"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Chandigarh, India</p>
          <p>Chandigarh 123456</p>
          <p>Email: support@allerbite.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
        <Separator className="opacity-5"/>
      <p className="text-center text-xs pt-8">
        © 2024 Allerbite. All rights reserved. | <Link href="/privacy" className="cursor-pointer">Privacy Policy</Link>{" "}
      </p>
    </footer>
  );
}

export default Footer;
