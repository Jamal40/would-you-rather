import { types } from "../assets/types";

export function authorizeUser() {
  return {
    type: types.LOG_USER_OUT,
  };
}
