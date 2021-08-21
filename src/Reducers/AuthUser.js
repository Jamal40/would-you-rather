import { types } from "../assets/types";
const userStorageKey = "userKey";

let authUserReducer = (
  state = {} /*  JSON.parse(localStorage.getItem(userStorageKey)),*/,
  action
) => {
  switch (action.type) {
    case types.AUTHORTIZE_USER:
      const user = action.payload;
      if (user) {
        //localStorage.setItem(userStorageKey, JSON.stringify(user));
      }
      return user;

    case types.LOG_USER_OUT:
      //localStorage.removeItem(userStorageKey);
      return null;

    default:
      return state;
  }
};

export default authUserReducer;
