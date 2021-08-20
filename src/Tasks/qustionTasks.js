import { types } from "../assets/types";
import { getQuestions } from "../assets/api";

export const GetAllQuestions = () => {
  return (dispatch) => {
    getQuestions().then((questions) => {
      dispatch({
        type: types.GET_ALL_QUESTIONS,
        payload: questions,
      });
    });
  };
};
