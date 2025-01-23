"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarModalProps {
  onClose: () => void;
}

const NavbarModal: React.FC<NavbarModalProps> = ({ onClose }) => {
  const currentRoute = usePathname();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return (): void => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="pt-10 block sm:hidden p-4 absolute bg-zinc-100 w-full h-lvh font-sans font-semibold text-[14px] text-zinc-500">
      <div className="flex flex-col gap-4">
        <Link
          href="/"
          className={`${
            currentRoute === "/"
              ? "text-zinc-700"
              : "text-zinc-500 hover:text-zinc-700 duration-150 delay-50"
          } `}
          onClick={onClose}
        >
          Home
        </Link>

        <Link
          href="/about"
          className={`${
            currentRoute === "/about"
              ? "text-zinc-700"
              : "text-zinc-500 hover:text-zinc-700 duration-150 delay-50"
          } `}
          onClick={onClose}
        >
          About
        </Link>
        <Link
          href="/blog"
          className={`${
            currentRoute === "/blog"
              ? "text-zinc-700"
              : "text-zinc-500 hover:text-zinc-700 duration-150 delay-50"
          } `}
          onClick={onClose}
        >
          Blog
        </Link>
        <Link
          href="/projects"
          className={`${
            currentRoute === "/projects"
              ? "text-zinc-700"
              : "text-zinc-500 hover:text-zinc-700 duration-150 delay-50"
          } `}
          onClick={onClose}
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default NavbarModal;
