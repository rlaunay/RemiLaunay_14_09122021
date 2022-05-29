import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/UI/Button';
import FormGroup from '../../components/UI/FormGroup';
import Modal from '../../components/UI/Modal';
import Select from '../../components/UI/Select';
import TextArea from '../../components/UI/TextArea';
import Title from '../../components/UI/Title';
import { departments } from '../../utils/departments';
import { EmployeeData, employeeForm as form } from '../../utils/employeeForm';
import { states } from '../../utils/states';

import classes from './CreateEmployee.module.css';
import DatePickerArea from '../../components/UI/DatePickerArea';
import { useAddEmployee } from '../../store/employees';

const CreateEmployee: React.FC = () => {
  const addEmployees = useAddEmployee();
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
      <Title>Create Employee</Title>
      <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
        <TextArea {...form.firstName.input} {...register('firstName', form.firstName.rules)} error={errors.firstName}  />
        <TextArea {...form.lastName.input} {...register('lastName', form.lastName.rules)} error={errors.lastName}  />
        <DatePickerArea {...form.dateOfBirth.input} {...register('dateOfBirth', form.dateOfBirth.rules)} error={errors.dateOfBirth} />
        <DatePickerArea {...form.startDate.input} {...register('startDate', form.startDate.rules)} error={errors.startDate} />
        <FormGroup label="Address" >
          <TextArea {...form.street.input} {...register('street', form.street.rules)} error={errors.department} />
          <TextArea {...form.city.input} {...register('city', form.city.rules)} error={errors.city} />
          <Select {...form.state} register={register} options={states.map(state => ({
            value: state.abbreviation,
            label: state.name
          }))} error={errors.state} />
          <TextArea {...form.zipCode.input} {...register('zipCode', form.zipCode.rules)} error={errors.zipCode} />
        </FormGroup>
        <Select {...form.department} register={register} options={departments.map(dep => ({
          value: dep,
          label: dep
        }))} error={errors.state} />
        <Button className={classes.btn} type="submit">Save</Button>
      </form>
    </Fragment>
  );
};

export default CreateEmployee;