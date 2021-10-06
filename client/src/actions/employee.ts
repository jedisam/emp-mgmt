
import { IEmployee, IId} from '../typeDefs'

export interface IId2 {
  id: string
}

export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
export const createEmployee = (employee: IEmployee) => ({
  type: CREATE_EMPLOYEE,
  payload: employee ,
});

export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';
export const removeEmployee = (employeeId: IId) => ({
  type: REMOVE_EMPLOYEE,
  payload: { employeeId },
});

export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const updateEmployee = (id: IId2, updatedEmployeeInfo: IEmployee) => ({
  type: UPDATE_EMPLOYEE,
  payload: { id, updatedEmployeeInfo },
});

export const LOAD_EMPLOYEES_IN_PROGRESS = 'LOAD_EMPLOYEES_IN_PROGRESS';
export const loadEmployeesInProgress = () => ({
  type: LOAD_EMPLOYEES_IN_PROGRESS,
});

export const LOAD_EMPLOYEES_SUCCESS = 'LOAD_EMPLOYEES_SUCCESS';
export const loadEmployeesSuccess = (employees: [IEmployee]) => ({
  type: LOAD_EMPLOYEES_SUCCESS,
  payload: { employees },
});

export const LOAD_EMPLOYEES_FAILURE = 'LOAD_EMPLOYEES_FAILURE';
export const loadEmployeesFailure = () => ({
  type: LOAD_EMPLOYEES_FAILURE,
});
