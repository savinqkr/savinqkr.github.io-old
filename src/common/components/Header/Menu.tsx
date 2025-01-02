"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuProps {
  name?: string;
  icon?: React.ReactNode;
  href: string;
  isExternal?: boolean;
}
const Menu: React.FC<MenuProps> = ({ name, icon, href, isExternal }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      className={`text-subtitle_medium_14 ${pathname.startsWith(href) ? "text-point" : "text-gray08"} hover:text-gray10 pc:text-subtitle_medium_16`}
    >
      <span>{name ?? icon}</span>
    </Link>
  );
};

export default Menu;
