import { types } from "../assets/types";

let userReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_ALL_USERS:
      return action.payload;

    case types.USER_DATA_ERROR:
      return action.payload;

    default:
      return state;
  }
};

export default userReducer;
