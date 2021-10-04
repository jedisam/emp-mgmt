"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var employeeSchema = new mongoose_1.default.Schema({
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
var Employee = mongoose_1.default.model('Employee', employeeSchema);
exports.default = Employee;
