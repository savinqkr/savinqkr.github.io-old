"use client";

import { useEffect, useRef, useState } from "react";
import MeatballIcon from "@icons/meatball.svg";

interface MeatballMenuItem {
  name: string;
  onClick: () => void;
}

const MeatballMenu: React.FC<{ menus: MeatballMenuItem[] }> = ({ menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // 단일 DOM 요소를 참조

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button onClick={toggleMenu} className="cursor-pointer" aria-haspopup="true" aria-expanded={isOpen}>
        <MeatballIcon width={24} height={24} className="h-6 w-6 text-gray10" />
      </button>
      {isOpen && (
        <div className="shadow-front_shadow absolute right-0 z-50 w-[93px] rounded-lg bg-white">
          <div
            className="flex flex-col text-subtitle_medium_14 text-gray11"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {menus.map(({ name, onClick }, idx) => (
              <button key={`${name}-${idx}`} onClick={onClick} className="hover:bg-gray-100 px-4 py-2">
                {name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MeatballMenu;
