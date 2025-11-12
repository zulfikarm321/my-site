import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="sticky top-2 flex flex-col sm:flex-row justify-between items-center bordered p-2">
      <Logo />

      <ul className="flex space-x-4 items-center">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/about">About</Link>
        <ThemeToggle />
      </ul>
    </nav>
  );
};

export default Nav;
