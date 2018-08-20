import { combineReducers } from 'redux';
import EmployeeReducer from './reducer_employee';
import ActiveEmployee from './reducer_active_employee';


const rootReducer = combineReducers({
  employees:EmployeeReducer,
  activeEmployee:ActiveEmployee
});

export default rootReducer;
