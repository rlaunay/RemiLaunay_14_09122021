type TitleProps = {
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <h1 className={'text-green-500 text-2xl font-bold my-4 md:text-5xl' + className} >{children}</h1>
  );
};

export default Title;