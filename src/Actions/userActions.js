import { types } from "../assets/types";

export function getAllUsers() {
  return {
    type: types.GET_ALL_USERS,
  };
}

export function getUserById(id) {
  return {
    type: types.GET_USER_BY_ID,
    payload: id,
  };
}
