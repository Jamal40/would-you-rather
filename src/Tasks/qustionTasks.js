import { types } from "../assets/types";
import { getQuestions, saveQuestion } from "../assets/api";

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

export const AddQuestion = (question) => {
  return (dispatch) => {
    saveQuestion(question).then((res) => {
      getQuestions().then((questions) => {
        dispatch({
          type: types.ADD_QUESTION,
          payload: questions,
        });
      });
    });
  };
};
