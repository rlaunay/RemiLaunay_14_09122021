import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

type TextAreaProps = {
  id: string;
  label: string;
  name: string;
  type?: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  rules: {
    [key: string]: {
      value: any;
      message: string;
    }
  }
}

const TextArea: React.FC<TextAreaProps> = ({ id, label, register, name, type = 'text', error, rules }) => {
  return (
    <div
      className="flex flex-col w-full"
    >
      <label htmlFor={id} className="text-gray-400">{label}</label>
      <input
        id={id} 
        type={type}
        placeholder={label}
        className={`rounded-md w-full border-2 p-2 border-gray-400 font-semibold 
        text-gray-600 hover:border-gray-600 focus:border-green-500 
        focus:text-green-600 outline-none transition-all duration-300
        my-2 ${error ? 'border-red-600 focus:border-red-600 focus:text-red-600' : ''}`}
        {...register(name, rules)}
      />
      {error && <p className="text-red-600" >{error.message}</p>}
    </div>
  );
};

export default TextArea;