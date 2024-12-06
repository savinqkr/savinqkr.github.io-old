"use client";

import React, { ReactNode, useEffect, useCallback } from "react";
import CancelIcon from "@icons/cancel.svg";

interface ButtonProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: React.FC<ButtonProps> = ({ isOpen, onClose, children }) => {
  const handleBodyScroll = useCallback((disableScroll: boolean) => {
    if (disableScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      handleBodyScroll(true);
    }

    return () => {
      handleBodyScroll(false);
    };
  }, [isOpen, handleBodyScroll]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-[#000000] bg-opacity-80" onClick={onClose} />
      <div className="relative z-10 flex w-full flex-col gap-2 px-4 pc:w-fit pc:p-0">
        <div className="flex items-center justify-end">
          <button type="button" onClick={onClose}>
            <CancelIcon width={24} height={24} className="h-6 w-6 text-white" />
          </button>
        </div>
        <div className="w-full rounded-2xl border border-gray04 bg-white px-6 py-8">{children}</div>
      </div>
    </div>
  );
};
