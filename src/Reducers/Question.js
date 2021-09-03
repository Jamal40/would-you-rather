import { types } from "../assets/types";

const questionsReducer = (state = null, action) => {
  switch (action.type) {
    case types.GET_ALL_QUESTIONS:
      state = action.payload;
      return state;

    case types.ADD_QUESTION:
      state = action.payload;
      return state;

    case types.ADD_QUESTION_ANSWER:
      state = action.payload;
      return state;

    default:
      return state;
  }
};

export default questionsReducer;
