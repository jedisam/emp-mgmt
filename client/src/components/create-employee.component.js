import { useState } from 'react';
import { connect } from 'react-redux';
// import { useLocation } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
import { addEmployeeRequest } from '../thunk/thunks';
import 'react-datepicker/dist/react-datepicker.css';

const CreateEmployee = ({ onCreatePressed }) => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeDob, setEmployeeDob] = useState('');
  const [employeeGender, setEmployeeGender] = useState('');
  const [employeeSalary, setEmployeeSalary] = useState(0);
  // let location = useLocation();

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5000/users/')
  //     .then((response) => {
  //       if (response.data.length > 0) {
  //         this.setState({
  //           users: response.data.map((user) => user.username),
  //           username: response.data[0].username,
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

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

    const newEmployee = {
      name: employeeName,
      dob: employeeDob,
      gender: employeeGender,
      salary: employeeSalary,
    };
    onCreatePressed(newEmployee);

    // console.log(newEmployee);

    // axios
    //   .post('http://localhost:7000/api/employees', newEmployee)
    //   .then((res) => alert(res.data.status));

    window.location = '/';
  };

  return (
    <div>
      <h3>Create New Employee</h3>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            required
            className="form-control"
            value={employeeName}
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group">
          <label>Date of Birth: </label>
          <input
            type="text"
            required
            className="form-control"
            value={employeeDob}
            onChange={onChangeDob}
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <input
            type="text"
            className="form-control"
            value={employeeGender}
            onChange={onChangeGender}
          />
        </div>
        <div className="form-group">
          <label>Salary</label>
          <input
            type="text"
            className="form-control"
            value={employeeSalary}
            onChange={onChangeSalary}
          />
          <div>
            {/* <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              /> */}
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Add Employee"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (employee) => dispatch(addEmployeeRequest(employee)),
});

export default connect(null, mapDispatchToProps)(CreateEmployee);
