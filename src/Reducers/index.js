import { combineReducers } from "redux";
import authUserReducer from "./AuthUser";
import questionsReducer from "./Question";
import userReducer from "./User";
export default combineReducers({
  authUserReducer,
  questionsReducer,
  userReducer,
});
