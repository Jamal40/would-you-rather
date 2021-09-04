import { types } from "../assets/types";

const loaderReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ENABLE_LOADING:
      state = true;
      return state;

    case types.DISABLE_LOADING:
      state = false;
      return state;

    default:
      return state;
  }
};

export default loaderReducer;
