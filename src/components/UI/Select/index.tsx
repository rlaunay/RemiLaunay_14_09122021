import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

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
    <div className="flex flex-col w-full" >
      <label className="text-gray-400" htmlFor={id}>{label}</label>
      <select 
        id={id} 
        {...register(name, rules)}
        className="rounded-md w-full border-2 p-2 border-gray-400 font-semibold 
      text-gray-600 hover:border-gray-600 focus:border-green-500 
        outline-none transition-all duration-300
        my-2" 
      >
        {options.map(opt => {
          return <option key={opt.value} value={opt.value}>{opt.label}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;