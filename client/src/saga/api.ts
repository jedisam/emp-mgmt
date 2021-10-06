import axios from 'axios'
import { IEmployee, IId, IEmpl} from '../typeDefs'
import baseURL from '../constants/endPoints';

export const loadEmployees = () => async (dispatch: any) => {
  try {
    const response = await fetch(`${baseURL}/api/employees`);
    const employees = await response.json();
    return employees.data.data;
  } catch (e) {
    console.log(e)
  }
};

export const addEmployeeRequest = async (newEmployee: IEmployee) => {
  try {
    const body = JSON.stringify(newEmployee);
    const response = await fetch(`${baseURL}/api/employees`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body,
    });
    const employee = await response.json();
    return employee;
  } catch (e) {
    console.log(e)
  }
};

export const removeEmployeeRequest = async (id: IId) => {
  try {
    const eId  = id.employeeId;
    await fetch(`${baseURL}/api/employees/${eId}`, {
      method: 'delete',
    });
    return
  } catch (e) {
    console.log(e)
  }
};

export const updateEmployeeRequest =
  async (emp: IEmpl) => {
    try {
      const { id, updatedEmployeeInfo} = emp;
       axios
      .patch(
        `${baseURL}/api/employees/${id}`,
        updatedEmployeeInfo
      )
      .then((res: any) => res.data.status);

    } catch (e) {
      console.log('My Error: ', e)
    console.log(e)
    }
  };

export const displayAlert = (text: string) => {
  alert(text);
};
