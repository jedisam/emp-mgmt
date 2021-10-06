import { RootState } from '../store'

export const getEmployees = (state: RootState) => state.employees.data;
export const getEmployeesLoading = (state: RootState) => state.employees.isLoading;
