import { Fragment } from 'react';
import IconLink from '../components/UI/IconLink';
import DataTable from '../components/UI/DataTable';
import Title from '../components/UI/Title';
import { useStateEmployees } from '../hooks/useEmployees';

import { ReactComponent as Plus } from './../assets/plus-solid.svg';

const EmployeeList: React.FC = () => {
  const employees = useStateEmployees();
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
        className="fixed bottom-5 right-5 sm:bottom-10 sm:right-10"
      >
        <Plus />
      </IconLink>
    </Fragment>
  );
};

export default EmployeeList;