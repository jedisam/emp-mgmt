import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware  from 'redux-saga'
import { employees } from './reducers/reducers';
import empSaga from './saga/index'

const sagaMiddleware = createSagaMiddleware()


const reducers = {
  employees,
};

// const withDevTools =
  // (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers(reducers);

const store = createStore(
  rootReducer,
  withDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(empSaga)
export default store