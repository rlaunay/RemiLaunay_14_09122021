import { useCallback } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { EmployeeData } from '../utils/employeeForm';

const LOCALSTORAGE_KEY = 'employees_state';


const employeesState = atom<EmployeeData[]>({
  key: 'EmployeesState',
  default: [],
  effects: [
    ({setSelf, onSet}) => {
      const savedValue = localStorage.getItem(LOCALSTORAGE_KEY);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
    
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(LOCALSTORAGE_KEY)
          : localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newValue));
      });
    }
  ]
});

export function useAddEmployee() {
  const setEmployees = useSetRecoilState(employeesState);

  const addEmployee = useCallback((newEmployee: EmployeeData) => {
    setEmployees((old) => {
      return [...(old || []), newEmployee];
    });
  }, []);

  return addEmployee;
}

export function useEmployeesValue() {
  return useRecoilValue(employeesState);
}