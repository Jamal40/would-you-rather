import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
  _getUserById,
} from "./_DATA";

export function getUsers() {
  return _getUsers();
}

export function getUsers_V2() {
  return fetch("http://localhost:1001/api/users");
}

export function getUserById(id) {
  return _getUserById(id);
}

export function getQuestions() {
  return _getQuestions();
}

export function saveQuestion(question) {
  return _saveQuestion(question);
}

export function saveQuestionAnswer(answer) {
  return _saveQuestionAnswer(answer);
}
