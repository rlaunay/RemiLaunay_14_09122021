import classes from './FormGroup.module.css';

type FormGroupProps = {
  label: string
}

const FormGroup: React.FC<FormGroupProps> = ({ label, children }) => {
  return (
    <div className={classes['form-group']}>
      <span className={classes.label} >{label}</span>
      {children}
    </div>
  );
};

export default FormGroup;