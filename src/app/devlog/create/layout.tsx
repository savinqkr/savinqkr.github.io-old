interface CreateDevlogPostLayoutProps {
  children: React.ReactNode;
}
const CreateDevlogPostLayout: React.FC<CreateDevlogPostLayoutProps> = ({ children }) => {
  return <div className="border bg-white">{children}</div>;
};

export default CreateDevlogPostLayout;
