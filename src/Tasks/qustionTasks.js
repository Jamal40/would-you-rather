import { types } from "../assets/types";

//Actions
import {
  getAllQuestions,
  addQuestionAct,
  addQuestionAnswerAct,
} from "../Actions/questionActions";
import { enableLoading, disableLoading } from "../Actions/loadingAction";

import { getQuestions_V2, addQuestion, addAnswer } from "../assets/api";

export const GetAllQuestions = (userId) => {
  return (dispatch) => {
    dispatch(enableLoading());
    getQuestions_V2(userId).then(async (res) => {
      const questions = await res.json();
      dispatch(disableLoading());
      dispatch(getAllQuestions(questions));
    });
  };
};

export const GetQuestionStats = (userId) => {
  return (dispatch) => {
    dispatch(enableLoading());
    getQuestions_V2(userId).then(async (res) => {
      const questions = await res.json();
      dispatch(disableLoading());
      dispatch(getAllQuestions(questions));
    });
  };
};

export const AddQuestion = (question) => {
  return (dispatch) => {
    dispatch(enableLoading());
    addQuestion(question).then(async (res) => {
      const addedQuestion = await res.json();
      getQuestions_V2(addedQuestion.author).then(async (res) => {
        const questions = await res.json();
        dispatch(disableLoading());
        dispatch(addQuestionAct(questions));
      });
    });
  };
};

export const AddAnswer = (answer) => {
  return (dispatch) => {
    dispatch(enableLoading());
    addAnswer(answer).then((res) => {
      getQuestions_V2(answer.userId).then(async (_res) => {
        const questions = await _res.json();
        dispatch(disableLoading());
        dispatch(addQuestionAnswerAct(questions));
      });
    });
  };
};
