import axios from 'axios'

export const loadEmployees = () => async dispatch => {
  try {
    const response = await fetch('http://localhost:7000/api/employees');
    const employees = await response.json();
    return employees.data.data;
  } catch (e) {
    console.log(e)
  }
};

export const addEmployeeRequest = async (newEmployee) => {
  try {
    const body = JSON.stringify(newEmployee);
    const response = await fetch('http://localhost:7000/api/employees', {
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

export const removeEmployeeRequest = async (id) => {
  try {
    const eId  = id.employeeId;
    await fetch(`http://localhost:7000/api/employees/${eId}`, {
      method: 'delete',
    });
    return
  } catch (e) {
    console.log(e)
  }
};

export const updateEmployeeRequest =
  async (emp) => {
    try {
      const { id, updatedEmployeeInfo} = emp;
       axios
      .patch(
        'http://localhost:7000/api/employees/' + id,
        updatedEmployeeInfo
      )
      .then((res) => res.data.status);

    } catch (e) {
      console.log('My Error: ', e)
    console.log(e)
    }
  };

export const displayAlert = (text) => {
  alert(text);
};
