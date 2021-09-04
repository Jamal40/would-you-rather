import { types } from "../assets/types";
import {
  getUsers,
  getUsers_V2,
  getLeaderboards,
  logUserIn,
  addUser,
} from "../assets/api";

export const GetAllUsers = () => {
  return (dispatch) => {
    dispatch({
      type: types.ENABLE_LOADING,
    });
    getUsers_V2().then(async (res) => {
      let users = await res.json();
      dispatch({
        type: types.DISABLE_LOADING,
      });
      dispatch({
        type: types.GET_ALL_USERS,
        payload: users,
      });
    });
  };
};

export const GetLeaderboards = () => {
  return (dispatch) => {
    dispatch({
      type: types.ENABLE_LOADING,
    });
    getLeaderboards().then(async (res) => {
      const leaderboards = await res.json();
      dispatch({
        type: types.DISABLE_LOADING,
      });
      dispatch({
        type: types.ASSIGN_LEADERBOARDS,
        payload: leaderboards,
      });
    });
  };
};

export const LogUserIn = (user, password) => {
  return (dispatch) => {
    dispatch({
      type: types.ENABLE_LOADING,
    });
    logUserIn({ name: user.name, password: password }).then(async (res) => {
      dispatch({
        type: types.DISABLE_LOADING,
      });

      if (res.status == 200) {
        dispatch({
          type: types.AUTHORTIZE_USER,
          payload: user,
        });
      }

      if (res.status === 400) {
        const err = await res.json();
        console.log(err);
        dispatch({
          type: types.AUTHORIZE_ERROR,
          payload: err.msg,
        });
      }
    });
  };
};

export const AddUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: types.ENABLE_LOADING,
    });
    addUser(user).then(async (res) => {
      if (res.status === 200) {
        getUsers_V2().then(async (res) => {
          dispatch({
            type: types.DISABLE_LOADING,
          });
          const allUsers = await res.json();

          dispatch({
            type: types.GET_ALL_USERS,
            payload: allUsers,
          });
        });
      }

      if (res.status === 400) {
        const err = await res.json();
        dispatch({
          type: types.USER_DATA_ERROR,
          payload: err,
        });
      }
    });
  };
};
