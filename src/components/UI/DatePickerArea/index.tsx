import { DatePicker } from '@relaunay/date-picker';
import { ChangeEvent, ChangeEventHandler, FocusEventHandler, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

import classes from './DatePickerArea.module.css';

export type DatePickerAreaProps = {
  id: string;
  label: string;
  name: string;
  type?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  error?: FieldError;
}

const DatePickerArea = forwardRef<HTMLInputElement, DatePickerAreaProps>(({ id, label, name, onChange, onBlur, error }, ref) => {
  return (
    <div className={classes.container} >
      <label htmlFor={id} className={classes.label}>{label}</label>
      <DatePicker 
        id={id} 
        name={name}
        onChange={(date) => onChange && onChange({ target: { value: date }} as ChangeEvent<HTMLInputElement>)}
        onBlur={onBlur}
        color={'#21c45d'}
        ref={ref}
      />
      {error && <p className={classes.error} >{error.message}</p>}
    </div>
  );
});

DatePickerArea.displayName = 'DatePickerArea';

export default DatePickerArea;