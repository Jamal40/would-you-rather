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

export function getLeaderboards() {
  return fetch("http://localhost:1001/api/users/leaderboards");
}

export function getUserById(id) {
  return _getUserById(id);
}

export function getQuestions() {
  return _getQuestions();
}

export function getQuestions_V2(userId) {
  return fetch(`http://localhost:1001/api/questions/?userId=${userId}`);
}

export function saveQuestion(question) {
  return _saveQuestion(question);
}

export function addQuestion(question) {
  return fetch("http://localhost:1001/api/questions", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(question),
  });
}

export function saveQuestionAnswer(answer) {
  return _saveQuestionAnswer(answer);
}
export function addAnswer(answer) {
  return fetch("http://localhost:1001/api/answers", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(answer),
  });
}
