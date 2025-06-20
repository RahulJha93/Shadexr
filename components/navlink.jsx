"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition-all  ${
        isActive
          ? " text-purple-600  "
          : " hover:text-purple-600 duration-200 "
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
