"use client";

import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

export interface ProvidersProps {
  children: ReactNode;
}

export const RecoilProviders = ({ children }: ProvidersProps) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
