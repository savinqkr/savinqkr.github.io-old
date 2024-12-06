"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuProps {
  name: string;
  href: string;
}
const Menu: React.FC<MenuProps> = ({ name, href }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`text-subtitle_medium_14 ${pathname === href ? "text-point" : "text-gray08"} pc:text-subtitle_medium_16`}
    >
      <span>{name}</span>
    </Link>
  );
};

export default Menu;
