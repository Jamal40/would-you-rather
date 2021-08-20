import { types } from "../assets/types";
import { getQuestions, saveQuestion, saveQuestionAnswer } from "../assets/api";

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

export const AddAnswer = (answer) => {
  return (dispatch) => {
    saveQuestionAnswer(answer).then((res) => {
      getQuestions().then((questions) => {
        dispatch({
          type: types.ADD_QUESTION_ANSWER,
          payload: questions,
        });
      });
    });
  };
};
