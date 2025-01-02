"use client";

import { createContext, useContext } from "react";

export interface ButtonContextType {
  size: "large" | "medium" | "small";
  color: "point" | "black";
  style: "filled" | "outline";
  disabled?: boolean;
}

const ButtonContext = createContext<ButtonContextType | undefined>(undefined);

export const useButtonContext = () => {
  const context = useContext(ButtonContext);
  if (!context) {
    throw new Error("Button components must be used within a Button");
  }
  return context;
};

export default ButtonContext;
