interface AdminLayoutProps {
  children: React.ReactNode;
}
const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="flex w-full flex-grow justify-center p-4 pc:pb-[80px] pc:pt-[40px]">
      <div className="flex w-full flex-grow flex-col items-center justify-center pc:max-w-[1060px]">{children}</div>
    </div>
  );
};

export default AdminLayout;
