import classes from './Title.module.css';

export type TitleProps = {
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className = '' }) => {
  return (
    <h1 className={classes.title + ' ' + className} >{children}</h1>
  );
};

export default Title;