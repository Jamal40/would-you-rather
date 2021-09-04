import { types } from "../assets/types";
import { getUsers, getUsers_V2, getLeaderboards } from "../assets/api";

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
