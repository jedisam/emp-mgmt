import {
  createEmployee,
  removeEmployee,
  loadEmployeesInProgress,
  loadEmployeesSuccess,
  loadEmployeesFailure,
  updateEmployee,
} from '../actions/employee';

export const loadEmployees = () => async (dispatch) => {
  try {
    dispatch(loadEmployeesInProgress());
    const response = await fetch('http://localhost:7000/api/employees');
    const employees = await response.json();

    dispatch(loadEmployeesSuccess(employees.data.data));
  } catch (e) {
    dispatch(loadEmployeesFailure());
    dispatch(displayAlert(e));
  }
};

export const addEmployeeRequest = (newEmployee) => async (dispatch) => {
  try {
    console.log(newEmployee);
    const body = JSON.stringify(newEmployee);
    const response = await fetch('http://localhost:7000/api/employees', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body,
    });
    const employee = await response.json();
    dispatch(createEmployee(employee));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const removeEmployeeRequest = (id) => async (dispatch) => {
  try {
    await fetch(`http://localhost:7000/api/employees/${id}`, {
      method: 'delete',
    });
    dispatch(removeEmployee(id));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const updateEmployeeRequest =
  (id, updatedEmployeeInfo) => async (dispatch) => {
    console.log('INFOO: ', updatedEmployeeInfo, id);
    try {
      const body = JSON.stringify(updatedEmployeeInfo);
      const response = await fetch(
        `http://localhost:7000/api/employees/${id}`,
        {
          method: 'patch',
          body,
        }
      );
      const updatedEmployee = await response.json();
      console.log('The upd: ', updatedEmployee);
      dispatch(updateEmployee(updatedEmployee));
    } catch (e) {
      dispatch(displayAlert(e));
    }
  };

export const displayAlert = (text) => () => {
  alert(text);
};
