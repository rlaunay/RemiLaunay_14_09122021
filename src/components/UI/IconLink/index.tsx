import { NavLink } from 'react-router-dom';

import classes from './IconLink.module.css';

type IconLinkProps = {
  to: string;
  className?: string;
}

const IconLink: React.FC<IconLinkProps> = ({ children, to, className = '' }) => {
  return (
    <NavLink
      to={to}
      className={`${classes['icon-link']} ${className}`}
    >
      {children}
    </NavLink>
  );
};

export default IconLink;