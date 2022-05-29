import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

import classes from './Select.module.css';

type SelectProps = {
    id: string;
    label: string;
    name: string;
    register: UseFormRegister<any>;
    options: {
        value: string;
        label: string;
    }[];
    error?: FieldError;
    rules: {
      [key: string]: {
        value: any;
        message: string;
      }
    }
}

const Select: React.FC<SelectProps> = ({ id, label, register, name, options, rules }) => {
  return (
    <div className={classes.container} >
      <label className={classes.label} htmlFor={id}>{label}</label>
      <select 
        id={id} 
        {...register(name, rules)}
        className={classes.select}
      >
        {options.map(opt => {
          return <option key={opt.value} value={opt.value}>{opt.label}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;