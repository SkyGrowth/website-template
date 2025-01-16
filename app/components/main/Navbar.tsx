"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Hamburger from "../sub/Hamburger";
import NavbarModal from "../sub/NavbarModal";
import { NAVBAR } from "@/app/constants/navbar/constants";

const Navbar = () => {
  const currentRoute = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${NAVBAR.backgroundStyle} sticky top-0 backdrop-blur-sm`}>
      <div
        className={`${NAVBAR.fontStyle} md:max-lg:px-10 py-4 px-4 flex justify-between font-sans text-[14px] items-center`}
      >
        <Link
          href="/"
          className={`${NAVBAR.mainTextColor} text-[18px] gap-2 flex items-center`}
        >
          <p className="font-sans block sm:hidden text-[14px]">
            {NAVBAR.businessName}
          </p>
          <p className="font-sans hidden sm:flex">Template</p>
        </Link>

        <nav className="hidden sm:flex gap-5">
          <Link
            href="/about"
            className={`${
              currentRoute === "/about"
                ? `${NAVBAR.navActiveColor}`
                : `${NAVBAR.navLinksColor} ${NAVBAR.navHoverColor} duration-150 delay-50`
            } `}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={`${
              currentRoute === "/blog"
                ? `${NAVBAR.navActiveColor}`
                : `${NAVBAR.navLinksColor} ${NAVBAR.navHoverColor} duration-150 delay-50`
            } `}
          >
            Blog
          </Link>
          <Link
            href="/projects"
            className={`${
              currentRoute === "/projects"
                ? `${NAVBAR.navActiveColor}`
                : `${NAVBAR.navLinksColor} ${NAVBAR.navHoverColor} duration-150 delay-50`
            } `}
          >
            Projects
          </Link>
        </nav>

        <div
          className="block sm:hidden justify-end"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Hamburger />
        </div>
      </div>

      <hr className={`${NAVBAR.borderStyle} border-1.`} />

      {isOpen && <NavbarModal onClose={() => setIsOpen(false)} />}
    </nav>
  );
};

export default Navbar;
