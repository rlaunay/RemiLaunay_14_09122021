import { Fragment } from 'react';
import IconLink from '../../components/UI/IconLink';
import DataTable from '../../components/DataTable';
import Title from '../../components/UI/Title';

import { ReactComponent as Plus } from './../../assets/plus-solid.svg';

import classes from './EmployeeList.module.css';
import { useEmployeesValue } from '../../store/employees';

const EmployeeList: React.FC = () => {
  const employees = useEmployeesValue();
  return (
    <Fragment>
      <Title>Employees List</Title>
      <DataTable data={employees} columns={[
        { title: 'First Name', data: 'firstName' },
        { title: 'Last Name', data: 'lastName' },
        { title: 'Start Date', data: 'startDate' },
        { title: 'Department', data: 'department' },
        { title: 'Date of Birth', data: 'dateOfBirth' },
        { title: 'Street', data: 'street' },
        { title: 'City', data: 'city' },
        { title: 'State', data: 'state' },
        { title: 'Zip Code', data: 'zipCode' },
      ]} />
      <IconLink
        to="/new-employee"
        className={classes.linkBtn}
      >
        <Plus />
      </IconLink>
    </Fragment>
  );
};

export default EmployeeList;