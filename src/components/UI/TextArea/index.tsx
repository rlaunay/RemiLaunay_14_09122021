import { ChangeEventHandler, FocusEventHandler, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

import classes from './TextArea.module.css';

export type TextAreaProps = {
  id: string;
  label: string;
  name: string;
  type?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  error?: FieldError;
}

const TextArea = forwardRef<HTMLInputElement, TextAreaProps>(({ id, label, onChange, onBlur, name, type = 'text', error }, ref) => {
  return (
    <div
      className={classes.container}
    >
      <label htmlFor={id} className={classes.label}>{label}</label>
      <input
        id={id} 
        type={type}
        name={name}
        placeholder={label}
        onChange={onChange}
        onBlur={onBlur}
        className={`${classes.input} ${error ? classes.error : ''}`}
        ref={ref}
      />
      {error && <p className={classes.error} >{error.message}</p>}
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;