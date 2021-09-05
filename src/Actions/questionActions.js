import { types } from "../assets/types";

export function getAllQuestions(data) {
  return {
    type: types.GET_ALL_QUESTIONS,
    payload: data,
  };
}

export function addQuestionAct(newQuestion) {
  return {
    type: types.ADD_QUESTION,
    payload: newQuestion,
  };
}

export function addQuestionAnswerAct(answer) {
  return {
    type: types.ADD_QUESTION,
    payload: answer,
  };
}
