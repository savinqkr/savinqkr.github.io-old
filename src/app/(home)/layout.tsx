"use client";

interface HomeLayoutProps {
  children: React.ReactNode;
}
const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    // <div className="flex justify-center bg-gray01 p-4 pc:px-4 pc:pb-[120px] pc:pt-[40px]">
    <div className="flex justify-center p-4 pc:px-4 pc:pb-[120px] pc:pt-[40px]">
      <div className="w-full pc:max-w-[1060px]">{children}</div>
    </div>
  );
};

export default HomeLayout;
