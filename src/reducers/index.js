import { combineReducers } from 'redux';
import dgdaReducers from "./dgdaReducer";
import dgiReducers from "./dgiReducer";
import dgradReducers from "./dgradReducers";
import dgrkReducers from "./dgrkReducers";
import accountReducers from "./accountReducer";


const appReducer = combineReducers({
  dgi: dgiReducers,
  dgda: dgdaReducers,
  dgrad: dgradReducers,
  dgrk: dgrkReducers,
  account: accountReducers
});

export default appReducer;