import { types } from "../assets/types";

const questionsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_ALL_QUESTIONS:
      state = action.payload;
      return state;

    default:
      return state;
  }
};

export default questionsReducer;
