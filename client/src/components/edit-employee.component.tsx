import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateEmployee } from '../actions/employee'
import { IId2 } from '../actions/employee'
import { IEmployee } from '../typeDefs'


const EditEmployee = (props: any) => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeDob, setEmployeeDob] = useState('');
  const [employeeGender, setEmployeeGender] = useState('');
  const [employeeSalary, setEmployeeSalary] = useState(0);

  const onChangeUsername = (e: any) => {
    setEmployeeName(e.target.value);
  };
  const onChangeDob = (e: any) => {
    setEmployeeDob(e.target.value);
  };
  const onChangeGender = (e: any) => {
    setEmployeeGender(e.target.value);
  };
  const onChangeSalary = (e: any) => {
    setEmployeeSalary(e.target.value);
  };
  const onSubmitHandler = (e: any) => {
    e.preventDefault();

    const updatedEmployee = {
      name: employeeName,
      dob: employeeDob,
      gender: employeeGender,
      salary: employeeSalary,
    };

    props.onEditPressed(props.match.params.id, updatedEmployee);
    window.location.href = '/';
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
          />
        </div>
        <div className="form-group">
          <label>Gender: </label>
          <input
            type="text"
            className="form-control"
            value={employeeGender}
            onChange={onChangeGender}
          />
        </div>
        <div className="form-group">
          <label>salary: </label>
          <input
            type="text"
            className="form-control"
            value={employeeSalary}
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

const mapDispatchToProps = (dispatch: any) => ({
  onEditPressed: (id: IId2, employee: IEmployee) =>
    dispatch(updateEmployee(id, employee)),
});

export default connect(null, mapDispatchToProps)(EditEmployee);
