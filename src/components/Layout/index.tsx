import Header from './Header';

import classes from './Layout.module.css';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className={classes.main}>
        {children}
      </main>
    </>
  );
};

export default Layout;