import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/UI/Button';
import FormGroup from '../../components/UI/FormGroup';
import Modal from '../../components/UI/Modal';
import Select from '../../components/UI/Select';
import TextArea from '../../components/UI/TextArea';
import Title from '../../components/UI/Title';
import { useAddEmployees } from '../../hooks/useEmployees';
import { departments } from '../../utils/departments';
import { EmployeeData, employeeForm as form } from '../../utils/employeeForm';
import { states } from '../../utils/states';
import { DatePicker } from '@relaunay/date-picker';

import classes from './CreateEmployee.module.css';

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
      <Title className={classes.title}>Create Employee</Title>
      <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
        <TextArea {...form.firstName.input} {...register('firstName', form.firstName.rules)} error={errors.firstName}  />
        <TextArea {...form.lastName.input} {...register('lastName', form.lastName.rules)} error={errors.lastName}  />
        <TextArea {...form.dateOfBirth.input} {...register('dateOfBirth', form.dateOfBirth.rules)} error={errors.dateOfBirth} />
        <TextArea {...form.startDate.input} {...register('startDate', form.startDate.rules)} error={errors.startDate} />
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