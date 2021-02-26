import { combineReducers } from "redux";

// Reducer file import
import ipInfoReducer from './ipInfoReducer'
import utilityReducer from './utilityReducer'

export default combineReducers({
  ipState: ipInfoReducer,
  utilityState: utilityReducer,
});
