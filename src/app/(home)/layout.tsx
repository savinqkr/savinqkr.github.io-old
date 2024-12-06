interface HomeLayoutProps {
  children: React.ReactNode;
}
const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className="pc:px-4 pc:pb-[120px] pc:pt-[40px] flex justify-center p-4">
      <div className="pc:max-w-[1060px] w-full">{children}</div>
    </div>
  );
};

export default HomeLayout;
