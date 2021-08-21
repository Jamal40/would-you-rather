import { types } from "../assets/types";
const userStorageKey = "userKey";

let authUserReducer = (
  state = { link: "/" } /*  JSON.parse(localStorage.getItem(userStorageKey)),*/,
  action
) => {
  switch (action.type) {
    case types.AUTHORTIZE_USER:
      const user = action.payload;
      if (user) {
        //localStorage.setItem(userStorageKey, JSON.stringify(user));
      }
      return user;

    case types.ASSIGN_CAME_FROM_LINK:
      const link = action.payload;

      return { ...state, link };

    case types.LOG_USER_OUT:
      //localStorage.removeItem(userStorageKey);
      return { link: "/" };

    default:
      return state;
  }
};

export default authUserReducer;
