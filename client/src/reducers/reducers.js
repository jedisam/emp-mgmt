import {
  CREATE_EMPLOYEE,
  REMOVE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  LOAD_EMPLOYEES_IN_PROGRESS,
  LOAD_EMPLOYEES_SUCCESS,
  LOAD_EMPLOYEES_FAILURE,
} from '../actions/employee';

const initialState = { isLoading: false, data: [] };

export const employees = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_EMPLOYEE: {
      const { employee } = payload;
      return {
        ...state,
        data: state.data.concat(employee),
      };
    }
    case REMOVE_EMPLOYEE: {
      const { employeeId: employeeToRemoveId } = payload;
      return {
        ...state,
        data: state.data.filter((emp) => emp._id !== employeeToRemoveId),
      };
    }
    case UPDATE_EMPLOYEE: {
      const { employee: updatedEmployee } = payload;
      return {
        ...state,
        data: state.data.map((employee) => {
          if (employee._id === updatedEmployee._id) {
            return updatedEmployee;
          }
          return employee;
        }),
      };
    }
    case LOAD_EMPLOYEES_SUCCESS: {
      const { employees } = payload;
      return {
        ...state,
        isLoading: false,
        data: employees,
      };
    }
    case LOAD_EMPLOYEES_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_EMPLOYEES_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
