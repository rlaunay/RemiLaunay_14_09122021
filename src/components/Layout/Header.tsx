import Link from '../UI/Link';

const Header: React.FC = () => {
  return (
    <header className="w-full text-white bg-green-500 h-16 p-1 flex items-center" >
      <img src="/icon.png" alt="Logo HRnet" className="h-4/5" />
      <h1 className="text-2xl font-bold ml-1 mr-auto">HRnet</h1>
      <Link className="px-6 py-3 font-semibold" to="/">Home</Link>
    </header>
  );
};

export default Header;