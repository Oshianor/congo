import { DGRK_ROUTE } from "../types/types"

const initialstate = {
  route: "paymentForm",
}

export default (state = initialstate, action) => {
  switch (action.type) {
    case DGRK_ROUTE:
      return Object.assign({}, state, {
        route: action.payload
      });
    default:
      return state;
  }
}