import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEmployees, getEmployeesLoading } from '../selectors/selectors';
import { loadEmployeesInProgress, removeEmployee } from '../actions/employee'

const Employee = (props) => {
  return (
    <tr>
      <td>{props.employee.name}</td>
      <td>{props.employee.dob}</td>
      <td>{props.employee.gender}</td>
      <td>{props.employee.salary}</td>
      <td>
        <Link to={'/edit/' + props.employee._id}>edit</Link> |{' '}
        <button
        style={{border: 'none', color: 'red'}}
          onClick={() => {
            props.deleteEmployee(props.employee._id);
          }}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

const EmployeeList = ({
  startLoadingEmployees,
  employeesR,
  getEmployeesS,
  isLoading,
  onRemovePressed,
  onCreatePressed,
}) => {
  useEffect(() => {
    startLoadingEmployees();
  }, [startLoadingEmployees]);

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
  startLoadingEmployees: () => dispatch(loadEmployeesInProgress()),
  onRemovePressed: (id) => dispatch(removeEmployee(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
