import { NavLink } from 'react-router-dom';

type LinkProps = {
  to: string;
  className?: string;
  activeClass?: string;
}

const BASE_CLASS = 'transition-all ease-in-out duration-300 px-5 py-1 font-semibold rounded-lg mx-2 hover:bg-white hover:text-green-500 hover:scale-110';
const ACTIVE_CLASS = 'bg-white text-green-500';

const Link: React.FC<LinkProps> = ({ children, to, className }) => {
  return (
    <NavLink className={({ isActive }) => {
      return isActive ? `${BASE_CLASS} ${ACTIVE_CLASS} ${className}` : `${BASE_CLASS} ${className}`;
    }} to={to}>{children}</NavLink>
  );
};

export default Link;