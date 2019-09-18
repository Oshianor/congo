import { BENEFICIARY_TYPE } from "../types/types";

const initialstate = {
  beneficiaryType: "",
}

export default (state = initialstate, action) => {
  switch (action.type) {
    case BENEFICIARY_TYPE:
      return Object.assign({}, state, {
        beneficiaryType: action.payload
      });
    default:
      return state;
  }
}