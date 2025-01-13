"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Hamburger from "../sub/Hamburger";
import NavbarModal from "../sub/NavbarModal";

const Navbar = () => {
  const currentRoute = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-slate-100 backdrop-blur-sm">
      <div className="text-slate-200 md:max-lg:px-10 py-4 px-4 flex justify-between font-sans font-semibold text-[14px] items-center">
        <Link
          href="/"
          className="text-[18px] gap-2 flex items-center text-slate-700"
        >
          <p className="font-sans font-semibold block sm:hidden text-[14px]">
            Template
          </p>
          <p className="font-sans font-semibold hidden sm:flex">Template</p>
        </Link>

        <nav className="hidden sm:flex gap-5">
          <Link
            href="/about"
            className={`${
              currentRoute === "/about"
                ? "text-slate-400"
                : "text-slate-600 hover:text-slate-400 duration-150 delay-50"
            } `}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={`${
              currentRoute === "/blog"
                ? "text-slate-400"
                : "text-slate-600 hover:text-slate-400 duration-150 delay-50"
            } `}
          >
            Blog
          </Link>
          <Link
            href="/projects"
            className={`${
              currentRoute === "/projects"
                ? "text-slate-400"
                : "text-slate-600 hover:text-slate-400 duration-150 delay-50"
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

      <hr className="border-slate-300 border-1." />

      {isOpen && <NavbarModal onClose={() => setIsOpen(false)} />}
    </nav>
  );
};

export default Navbar;
