import React, { ReactNode } from "react";
import ButtonContext, { ButtonContextType } from "./ButtonContext";
import ButtonText from "./ButtonText";
import { Loader2 } from "lucide-react";

interface ButtonProps extends ButtonContextType {
  onClick?: () => void;
  type: "submit" | "reset" | "button";
  children: ReactNode;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> & {
  Text: typeof ButtonText;
} = ({ size, color, style, disabled, onClick, type = "button", children, isLoading = false }) => {
  const sizeClasses = {
    large: "h-12",
    medium: "h-10",
    small: "h-8",
  };

  const colorClasses = {
    point: {
      filled: "bg-point",
      outline: "bg-white border border-gray07",
      disabled: "disabled:opacity-40",
    },
    black: {
      filled: "bg-black",
      outline: "bg-white border border-gray07",
      disabled: "disabled:bg-gray04",
    },
  };

  const buttonClasses = [
    "group",
    "inline-flex justify-center items-center",
    "px-4 py-3",
    "flex-grow max-w-full min-w-fit",
    "rounded-[8px]",
    "whitespace-nowrap",
    sizeClasses[size],
    colorClasses[color][style],
    colorClasses[color].disabled,
  ].join(" ");

  return (
    <ButtonContext.Provider value={{ size, color, style, disabled }}>
      <button className={buttonClasses} onClick={onClick} disabled={disabled} type={type}>
        {isLoading ? <Loader2 className='w-5 h-5 animate-spin text-white' /> : children}
      </button>
    </ButtonContext.Provider>
  );
};

Button.Text = ButtonText;

export default Button;
