import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateEmployee } from '../actions/employee'

const EditEmployee = ({ match, onEditPressed }) => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeDob, setEmployeeDob] = useState('');
  const [employeeGender, setEmployeeGender] = useState('');
  const [employeeSalary, setEmployeeSalary] = useState(0);

  const onChangeUsername = (e) => {
    setEmployeeName(e.target.value);
  };
  const onChangeDob = (e) => {
    setEmployeeDob(e.target.value);
  };
  const onChangeGender = (e) => {
    setEmployeeGender(e.target.value);
  };
  const onChangeSalary = (e) => {
    setEmployeeSalary(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const updatedEmployee = {
      name: employeeName,
      dob: employeeDob,
      gender: employeeGender,
      salary: employeeSalary,
    };

    onEditPressed(match.params.id, updatedEmployee);
    window.location = '/';
  };

  return (
    <div>
      <h3>Edit Employee</h3>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label>name: </label>
          <input
            required
            className="form-control"
            value={employeeName}
            placeholder={employeeName}
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group">
          <label>dob: </label>
          <input
            type="text"
            required
            className="form-control"
            value={employeeDob}
            onChange={onChangeDob}
            placeholder={employeeDob}
          />
        </div>
        <div className="form-group">
          <label>Gender: </label>
          <input
            type="text"
            className="form-control"
            value={employeeGender}
            placeholder={employeeGender}
            onChange={onChangeGender}
          />
        </div>
        <div className="form-group">
          <label>salary: </label>
          <input
            type="text"
            className="form-control"
            value={employeeSalary}
            placeholder={employeeSalary}
            onChange={onChangeSalary}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Edit Employee"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onEditPressed: (id, employee) =>
    dispatch(updateEmployee(id, employee)),
});

export default connect(null, mapDispatchToProps)(EditEmployee);
