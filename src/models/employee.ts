import mongoose from 'mongoose'

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name of the employee required!'],
  },
  dob: {
    type: String,
    required: [true, 'Date of birth of the employee is required!'],
  },
  gender: {
    type: String,
    required: [true, 'Gender of the employee is required!'],
  },
  salary: {
    type: Number,
    required: [true, 'Salary of the employee is required'],
  },
  createdAt: {
    type: String,
    default: Date.now
  }
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;
