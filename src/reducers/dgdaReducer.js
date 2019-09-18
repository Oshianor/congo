import { DGDA_ROUTE } from "../types/types";

const initialstate = {
  route: "paymentForm",
}

export default (state = initialstate, action) => {
  switch (action.type) {
    case DGDA_ROUTE:
      return Object.assign({}, state, {
        route: action.payload
      });
    default:
      return state;
  }
}