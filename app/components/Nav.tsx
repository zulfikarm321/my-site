"use client";

import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? "underline underline-offset-4"
      : "hover:underline underline-offset-4";

  return (
    <nav className="sticky z-10 top-2 flex flex-col sm:flex-row justify-between items-center bordered p-2">
      <Logo />

      <ul className="flex space-x-4 items-center">
        <Link href="/" className={linkClass("/")}>
          Home
        </Link>
        <Link href="/posts" className={linkClass("/posts")}>
          Posts
        </Link>
        <Link href="/about" className={linkClass("/about")}>
          About
        </Link>
        <Link href="/gallery" className={linkClass("/gallery")}>
          Gallery
        </Link>
        <ThemeToggle />
      </ul>
    </nav>
  );
};

export default Nav;
