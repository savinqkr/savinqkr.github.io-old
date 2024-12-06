interface AdminLayoutProps {
  children: React.ReactNode;
}
const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center pc:px-4 pc:py-[40px]">
      <div className="flex w-full flex-grow flex-col items-center pc:max-w-[1060px]">{children}</div>
    </div>
  );
};

export default AdminLayout;
