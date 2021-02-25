import { combineReducers } from "redux";

import ipInfoReducer from './ipInfoReducer'
import utilityReducer from './utilityReducer'


export default combineReducers({
  ipState: ipInfoReducer,
  utilityState: utilityReducer,
});
