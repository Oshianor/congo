import { ACCOUNT_ROUTE } from "../types/types";

const initialstate = {
  route: "login",
}

export default (state = initialstate, action) => {
  switch (action.type) {
    case ACCOUNT_ROUTE:
      return Object.assign({}, state, {
        route: action.payload
      });
    default:
      return state;
  }
}