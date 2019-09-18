import { 
  BENEFICIARY_TYPE, 
  DGDA_ROUTE, 
  DGRAD_ROUTE, 
  DGRK_ROUTE 
} from "../types/types";


// set beneficiaryType
export const setBeneficiaryType = (val) => {
  return {
    type: BENEFICIARY_TYPE,
    payload: val
  };
}


// set dgda route
export const setDgdaRoute = (route) => {
  return {
    type: DGDA_ROUTE,
    payload: route
  };
}

// set dgrad route
export const setDgradRoute = (routes) => {
  return {
    type: DGRAD_ROUTE,
    payload: routes
  };
}

// set dgrk route
export const setDgrkRoute = (route) => {
  return {
    type: DGRK_ROUTE,
    payload: route
  };
}
