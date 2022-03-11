type FormGroupProps = {
  label: string
}

const FormGroup: React.FC<FormGroupProps> = ({ label, children }) => {
  return (
    <div className="relative rounded-md border-gray-400 border-2 p-5 mt-5">
      <span className="absolute top-0 -translate-y-4 bg-zinc-100 text-gray-400 px-2" >{label}</span>
      {children}
    </div>
  );
};

export default FormGroup;