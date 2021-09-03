import { types } from "../assets/types";
import {
  getQuestions,
  getQuestions_V2,
  saveQuestion,
  saveQuestionAnswer,
} from "../assets/api";

export const GetAllQuestions = () => {
  return (dispatch) => {
    dispatch({
      type: types.ENABLE_LOADING,
    });
    getQuestions_V2().then((questions) => {
      dispatch({
        type: types.DISABLE_LOADING,
      });
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
