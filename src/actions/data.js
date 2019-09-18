import { BENEFICIARY_TYPE, DGDA_ROUTE } from "../types/types";


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
