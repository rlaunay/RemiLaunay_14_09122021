import { NavLink } from 'react-router-dom';

type IconLinkProps = {
  to: string;
  className?: string;
}

const IconLink: React.FC<IconLinkProps> = ({ children, to, className = '' }) => {
  return (
    <NavLink
      to={to}
      className={`rounded-full bg-green-500 h-14 w-14 flex justify-center items-center text-white p-4 hover:scale-105 transition-transform duration-300 ${className}`}
    >
      {children}
    </NavLink>
  );
};

export default IconLink;