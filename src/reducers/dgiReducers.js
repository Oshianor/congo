import { BENEFICIARY_TYPE } from "../types/types";

const initialstate = {
  beneficiaryType: "",
  user: {},
}

export default (state = initialstate, action) => {
  switch (action.type) {
    case BENEFICIARY_TYPE:
      return Object.assign({}, state, {
        beneficiaryType: action.payload
      });
    case "INCREASE_PAGE_NUMBER":
      return Object.assign({}, state, {
        pageNumber: action.payload
      });
    default:
      return state;
  }
}