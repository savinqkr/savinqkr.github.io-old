"use client";

import PATH from "@constants/path";
import { usePathname } from "next/navigation";

interface DevlogLayoutProps {
  children: React.ReactNode;
}
const DevlogLayout: React.FC<DevlogLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  return (
    <div
      className={`flex justify-center ${pathname === PATH.DEVLOG.MAIN ? "bg-gray01" : "bg-white"} p-4 pc:px-4 pc:pb-[120px] pc:pt-[40px]`}
    >
      <div className="w-full pc:max-w-[1060px]">{children}</div>
    </div>
  );
};

export default DevlogLayout;
