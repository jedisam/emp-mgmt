import { takeLatest, all, call, put, takeLeading } from 'redux-saga/effects';
import {
  CREATE_EMPLOYEE,
  createEmployee,
  REMOVE_EMPLOYEE,
  removeEmployee,
  UPDATE_EMPLOYEE,
  updateEmployee,
  LOAD_EMPLOYEES_IN_PROGRESS,
  loadEmployeesSuccess,
  loadEmployeesFailure
} from '../actions/employee';
import { loadEmployees, addEmployeeRequest, removeEmployeeRequest, updateEmployeeRequest } from './api';

function* getEmployeesSaga() {
  try {
    const data = yield call(loadEmployees());
    yield put(loadEmployeesSuccess(data));
  } catch (error) {
    yield put(loadEmployeesFailure());
  }
}

function* getAddEmployeesWatcher() {
  yield takeLatest(LOAD_EMPLOYEES_IN_PROGRESS, getEmployeesSaga);
}

function* addEmployeeSaga(action) {
  try {
    const data = yield call(addEmployeeRequest(action.payload));
    yield put(createEmployee(data));
  } catch (error) {
    console.error(error)
  }
}

function* addEmployeesWatcher() {
  yield takeLeading(CREATE_EMPLOYEE, addEmployeeSaga);
}


function* removeEmployeeSaga(action) {
  try {
    yield call(removeEmployeeRequest(action.payload));
    yield put(removeEmployee());
  } catch (error) {
    console.error(error)
  }
}

function* removeEmployeeWatcher() {
  yield takeLeading(REMOVE_EMPLOYEE, removeEmployeeSaga);
}



function* updateEmployeeSaga(action) {
  try {
    yield call(updateEmployeeRequest(action.payload));
    yield put(updateEmployee());
  } catch (error) {
    console.error(error)
  }
}

function* updateEmployeeWatcher() {
  yield takeLeading(UPDATE_EMPLOYEE, updateEmployeeSaga);
}

export default function* employeessSaga() {
  yield all([getAddEmployeesWatcher(), addEmployeesWatcher(), removeEmployeeWatcher(), updateEmployeeWatcher()]);
}
