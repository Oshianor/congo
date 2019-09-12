import { BENEFICIARY_TYPE } from "../types/types";


// set beneficiaryType
export const setBeneficiaryType = (val) => {
  return {
    type: "BENEFICIARY_TYPE",
    payload: val
  };
}
