import {DGRAD_ROUTE} from "../types/types"

const initialstate = {
  routes: "paymentForm",
}

export default (state = initialstate, action) => {
  switch (action.type) {
    case DGRAD_ROUTE:
      return Object.assign({}, state, {
        routes: action.payload
      });
    default:
      return state;
  }
}