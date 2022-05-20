import Link from '../UI/Link';

import classes from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={classes.header} >
      <img src="/icon.png" alt="Logo HRnet" className={classes['header-img']} />
      <h1 className={classes['header-title']}>HRnet</h1>
      <Link className={classes['header-link']} to="/">Home</Link>
    </header>
  );
};

export default Header;