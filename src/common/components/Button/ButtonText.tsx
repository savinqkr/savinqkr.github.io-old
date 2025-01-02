import React, { ReactNode } from "react";
import { useButtonContext } from "./ButtonContext";

interface ButtonTextProps {
  children: ReactNode;
}

const ButtonText: React.FC<ButtonTextProps> = ({ children }) => {
  const { size, color, style } = useButtonContext();

  const textClasses = [
    "text-center",
    color === "black"
      ? style === "outline"
        ? "text-black"
        : "text-white"
      : style === "outline"
      ? "text-point"
      : "text-white",
    color === "black" && "group-disabled:text-gray07",
    size === "large" ? "text-subtitle_bold_16" : "text-subtitle_bold_14",
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={textClasses}>{children}</span>;
};

export default ButtonText;
