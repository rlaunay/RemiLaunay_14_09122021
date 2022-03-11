import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center px-5 relative grow overflow-y-auto bg-zinc-100">
        {children}
      </main>
    </>
  );
};

export default Layout;