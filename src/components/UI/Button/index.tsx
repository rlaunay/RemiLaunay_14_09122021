import React from 'react';

import classes from './Button.module.css';

export type ButtonProps = {
  type?: 'submit' | 'reset' | 'button';
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button className={`${classes.button} ${className}`} onClick={onClick} type={type} >
      {children}
    </button>
  );
};

export default Button;