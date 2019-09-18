import { combineReducers } from 'redux';
import dgdaReducers from "./dgdaReducer";
import dgiReducers from "./dgiReducer";
import dgradReducers from "./dgradReducers";
import dgrkReducers from "./dgrkReducers";


const appReducer = combineReducers({
  dgi: dgiReducers,
  dgda: dgdaReducers,
  dgrad: dgradReducers,
  dgrk: dgrkReducers
});

export default appReducer;