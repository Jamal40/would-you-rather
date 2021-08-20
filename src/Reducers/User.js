import { types } from "../assets/types";

let userReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_ALL_USERS:
      return action.payload;

    default:
      return state;
  }
};

export default userReducer;
