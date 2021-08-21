import { types } from "../assets/types";

export function authorizeUser(user) {
  return {
    type: types.AUTHORTIZE_USER,
    payload: user,
  };
}

export function assignCameFromLink(link) {
  return {
    type: types.ASSIGN_CAME_FROM_LINK,
    payload: link,
  };
}

export function logOut() {
  return {
    type: types.LOG_USER_OUT,
  };
}
