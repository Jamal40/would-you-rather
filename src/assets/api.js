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
  return fetch("https://safe-chamber-24261.herokuapp.com/api/users");
}

export function getLeaderboards() {
  return fetch(
    "https://safe-chamber-24261.herokuapp.com/api/users/leaderboards"
  );
}

export function getUserById(id) {
  return _getUserById(id);
}

export function getQuestions() {
  return _getQuestions();
}

export function getQuestions_V2(userId) {
  return fetch(
    `https://safe-chamber-24261.herokuapp.com/api/questions/?userId=${userId}`
  );
}

export function saveQuestion(question) {
  return _saveQuestion(question);
}

export function addQuestion(question) {
  return fetch("https://safe-chamber-24261.herokuapp.com/api/questions", {
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
  return fetch("https://safe-chamber-24261.herokuapp.com/api/answers", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(answer),
  });
}

export function logUserIn(userCredentials) {
  console.log(userCredentials);
  return fetch("https://safe-chamber-24261.herokuapp.com/api/user/login", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userCredentials),
  });
}

export function addUser(user) {
  return fetch("https://safe-chamber-24261.herokuapp.com/api/user/register", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}
