import { ChangeEventHandler, FocusEventHandler, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

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
      className="flex flex-col w-full"
    >
      <label htmlFor={id} className="text-gray-400">{label}</label>
      <input
        id={id} 
        type={type}
        name={name}
        placeholder={label}
        onChange={onChange}
        onBlur={onBlur}
        className={`rounded-md w-full border-2 p-2 border-gray-400 font-semibold 
        text-gray-600 hover:border-gray-600 focus:border-green-500 
        focus:text-green-600 outline-none transition-all duration-300
        my-2 ${error ? 'border-red-600 focus:border-red-600 focus:text-red-600' : ''}`}
        ref={ref}
      />
      {error && <p className="text-red-600" >{error.message}</p>}
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;