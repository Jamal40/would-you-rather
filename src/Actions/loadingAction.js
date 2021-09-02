import { types } from "../assets/types";

export function enableLoading() {
  return {
    type: types.ENABLE_LOADING,
  };
}

export function disableLoading() {
  return {
    type: types.DISABLE_LOADING,
  };
}
