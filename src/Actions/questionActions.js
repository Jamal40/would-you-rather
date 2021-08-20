import { types } from "../assets/types";

export function getAllQuestions() {
  return {
    type: types.GET_ALL_QUESTIONS,
  };
}

export function addQuestion(newQuestion) {
  return {
    type: types.ADD_QUESTION,
    payload: newQuestion,
  };
}

export function addQuestionAnswer(answer) {
  return {
    type: types.ADD_QUESTION,
    payload: answer,
  };
}
