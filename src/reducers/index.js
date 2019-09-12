import { combineReducers } from 'redux';
import dataReducers from "./dataReducers";
import dgiReducers from "./dgiReducers";

const appReducer = combineReducers({
  dgi: dgiReducers
});

export default appReducer;