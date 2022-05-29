import { NavLink } from 'react-router-dom';

import classes from './Link.module.css';

type LinkProps = {
  to: string;
  className?: string;
}

const Link: React.FC<LinkProps> = ({ children, to, className }) => {
  return (
    <NavLink className={({ isActive }) => {
      return isActive ? `${classes.link} ${classes.active} ${className}` : `${classes.link} ${className}`;
    }} to={to}>{children}</NavLink>
  );
};

export default Link;