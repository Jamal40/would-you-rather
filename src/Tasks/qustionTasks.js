import { types } from "../assets/types";
import {
  getQuestions,
  getQuestions_V2,
  saveQuestion,
  addQuestion,
  saveQuestionAnswer,
} from "../assets/api";

export const GetAllQuestions = (userId) => {
  return (dispatch) => {
    dispatch({
      type: types.ENABLE_LOADING,
    });
    getQuestions_V2(userId).then(async (res) => {
      const questions = await res.json();
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
    addQuestion(question).then(async (res) => {
      const addedQuestion = await res.json();
      getQuestions_V2(addedQuestion.author).then(async (res) => {
        const questions = await res.json();
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
