import { types } from "../assets/types";
import { getUsers } from "../assets/api";

export const GetAllUsers = () => {
  return (dispatch) => {
    getUsers().then((users) => {
      dispatch({
        type: types.GET_ALL_USERS,
        payload: users,
      });
    });
  };
};
