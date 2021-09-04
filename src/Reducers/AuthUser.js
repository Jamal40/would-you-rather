import { types } from "../assets/types";

let authUserReducer = (state = { link: "/" }, action) => {
  switch (action.type) {
    case types.AUTHORTIZE_USER:
      const user = action.payload;
      return user;

    case types.ASSIGN_CAME_FROM_LINK:
      const link = action.payload;

      return { ...state, link };

    case types.LOG_USER_OUT:
      return { link: "/" };

    case types.AUTHORIZE_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default authUserReducer;
