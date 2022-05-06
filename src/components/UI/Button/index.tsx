import React from 'react';

export type ButtonProps = {
  type?: 'submit' | 'reset' | 'button';
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button className={`bg-green-500 px-5 py-1 rounded-lg text-white text-xl ${className}`} onClick={onClick} type={type} >
      {children}
    </button>
  );
};

export default Button;