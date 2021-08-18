import { authorizeUser } from "../Actions/authorizeUser";
import { types } from "../assets/types";
const userStorageKey = "userKey";

let userReducer = (
  state = JSON.parse(localStorage.getItem(userStorageKey)),
  action
) => {
  switch (action.type) {
    case types.AUTHORTIZE_USER:
      const user = action.payload;
      if (user) {
        localStorage.setItem(userStorageKey, JSON.stringify(user));
      }
      return user;

    case types.LOG_USER_OUT:
      console.log("We came here");
      localStorage.removeItem(userStorageKey);
      return null;

    default:
      return state;
  }
};

export default userReducer;
