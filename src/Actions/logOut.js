import { types } from "../assets/types";

export function logOut() {
  return {
    type: types.LOG_USER_OUT,
  };
}
