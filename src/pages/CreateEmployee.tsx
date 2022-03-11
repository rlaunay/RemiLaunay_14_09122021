import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../components/UI/Button';
import FormGroup from '../components/UI/FormGroup';
import Modal from '../components/UI/Modal';
import Select from '../components/UI/Select';
import TextArea from '../components/UI/TextArea';
import Title from '../components/UI/Title';
import { useAddEmployees } from '../hooks/useEmployees';
import { departments } from '../utils/departments';
import { EmployeeData, employeeForm } from '../utils/employeeForm';
import { states } from '../utils/states';

const CreateEmployee: React.FC = () => {
  const addEmployees = useAddEmployees();
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm<EmployeeData>();

  const submitHandler = (data: EmployeeData) => {
    addEmployees(data);
  };

  console.log(isSubmitSuccessful);

  return (
    <Fragment>
      <Modal isOpen={isSubmitSuccessful} onClose={() => reset()} >
        Employee Created!
      </Modal>
      <Title className="my-8">Create Employee</Title>
      <form className="w-full sm:w-3/5 lg:w-2/5 flex flex-col" onSubmit={handleSubmit(submitHandler)}>
        <TextArea {...employeeForm.firstName} register={register} error={errors.firstName}  />
        <TextArea {...employeeForm.lastName} register={register} error={errors.lastName} />
        <TextArea {...employeeForm.dateOfBirth} register={register} error={errors.dateOfBirth} />
        <TextArea {...employeeForm.startDate} register={register} error={errors.startDate} />
        <FormGroup label="Address" >
          <TextArea {...employeeForm.street} register={register} error={errors.department} />
          <TextArea {...employeeForm.city} register={register} error={errors.city} />
          <Select {...employeeForm.state} register={register} options={states.map(state => ({
            value: state.abbreviation,
            label: state.name
          }))} error={errors.state} />
          <TextArea {...employeeForm.zipCode} register={register} error={errors.zipCode} />
        </FormGroup>
        <Select {...employeeForm.department} register={register} options={departments.map(dep => ({
          value: dep,
          label: dep
        }))} error={errors.state} />
        <Button className="my-5 ml-auto" type="submit">Save</Button>
      </form>
    </Fragment>
  );
};

export default CreateEmployee;