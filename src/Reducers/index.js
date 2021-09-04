import { combineReducers } from "redux";
import authUserReducer from "./AuthUser";
import questionsReducer from "./Question";
import userReducer from "./User";
import loaderReducer from "./loader";
import leaderboardsReducer from "./Leaderboards";
export default combineReducers({
  authUserReducer,
  questionsReducer,
  userReducer,
  loaderReducer,
  leaderboardsReducer,
});
