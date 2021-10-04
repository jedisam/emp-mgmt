import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getEmployees, getEmployeesLoading } from '../selectors/selectors';
import {
  addEmployeeRequest,
  loadEmployees,
  removeEmployeeRequest,
} from '../thunk/thunks';

const Employee = (props) => {
  return (
    <tr>
      <td>{props.employee.name}</td>
      <td>{props.employee.dob}</td>
      <td>{props.employee.gender}</td>
      <td>{props.employee.salary}</td>
      <td>
        <Link to={'/edit/' + props.employee._id}>edit</Link> |{' '}
        <a
          href="#"
          onClick={() => {
            props.deleteEmployee(props.employee._id);
          }}
        >
          delete
        </a>
      </td>
    </tr>
  );
};

const EmployeeList = ({
  startLoadingEmployees,
  employeesR,
  isLoading,
  onRemovePressed,
  onCreatePressed,
}) => {
  const [employeesList, setEmployeesList] = useState([]);
  useEffect(() => {
    startLoadingEmployees();
    // axios
    //   .get('http://localhost:7000/api/employees/')
    //   .then((res) => setEmployeesList(res.data.data.data))
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);
  console.log('View Time: ', employeesR);

  // const deleteEmployee = (id) => {
  //   axios
  //     .delete('http://localhost:7000/api/employees/' + id)
  //     .then((response) => {
  //       alert('Employee Removed');
  //     });
  //   const newEmployeeList = employeesList.filter((emp) => emp._id !== id);
  //   setEmployeesList(newEmployeeList);
  // };

  const employees = () => {
    const loadingMessage = <div>Loading Employees...</div>;
    const content = employeesR.map((employee) => {
      console.log('The Emp: ', employee);
      return (
        <Employee
          employee={employee}
          deleteEmployee={onRemovePressed}
          key={employee._id}
        />
      );
    });
    return isLoading ? loadingMessage : content;
  };

  return (
    <div>
      <h3>Employees</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>{employees()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: getEmployeesLoading(state),
  employeesR: getEmployees(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingEmployees: () => dispatch(loadEmployees()),
  onCreatePressed: (employee) => dispatch(addEmployeeRequest(employee)),
  onRemovePressed: (id) => dispatch(removeEmployeeRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
