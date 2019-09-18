import { combineReducers } from 'redux';
import dgdaReducer from "./dgdaReducer";
import dgiReducers from "./dgiReducer";

const appReducer = combineReducers({
  dgi: dgiReducers,
  dgda: dgdaReducer
});

export default appReducer;