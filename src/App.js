import React from "react";
import "./App.css";
//Components
import NavBar from "./Components/NavBar/nav-bar";
import Home from "./Components/Home/home";
import QuestionAdd from "./Components/QuestionAdd/question-add";
import Leaderboards from "./Components/Leaderboards/leaderboards";
import Login from "./Components/Login/login";
import QuestionDetails from "./Components/QuestionDetails/question-details";
import QuestionResult from "./Components/QuestionResult/question-result";
import UserAdd from "./Components/UserAdd/user-add";
// import UserCard from "./Components/UserCard/user-card";

//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Reducers";
import thunk from "redux-thunk";

// const logger = (store) => (next) => (action) => {
//   console.group(action.type);
//   console.log("Action:", action);
//   const result = next(action);
//   console.log("New State:", store.getState());
//   console.groupEnd();
//   return result;
// };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  //composeEnhancers(applyMiddleware(thunk, logger))
  //removing logger middleware for production
  composeEnhancers(applyMiddleware(thunk))
);

function App(props) {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/users/add" component={UserAdd} />
            <Route path="/questions/add" component={QuestionAdd} />
            <Route path="/questions/answer/:id" component={QuestionDetails} />
            <Route path="/questions/:id" component={QuestionResult} />
            <Route path="/leaderboards" component={Leaderboards} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
