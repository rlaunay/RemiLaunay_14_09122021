import { useCallback } from 'react';
import { EmployeeData } from '../utils/employeeForm';
import { useLocalStorage } from './useLocalStorage';

type Employees = EmployeeData[];

export function useEmployees(): [Employees, (employee: EmployeeData) => void] {
  const [employees, setEmployees] = useLocalStorage<Employees>('employees');

  const addEmployees = useCallback((newEmployee: EmployeeData) => {
    setEmployees((old) => {
      return [...(old || []), newEmployee];
    });
  }, []);


  return [employees || [], addEmployees];
}

export function useAddEmployees() {
  const [,addEmployees] = useEmployees();
  return addEmployees;
}

export function useStateEmployees() {
  const [employees] = useEmployees();
  return employees;
}