import { types } from "../assets/types";
import { getUsers, getUsers_V2 } from "../assets/api";

export const GetAllUsers = () => {
  console.log("test");

  return (dispatch) => {
    getUsers_V2().then(async (res) => {
      let users = await res.json();
      dispatch({
        type: types.GET_ALL_USERS,
        payload: users,
      });
    });
    // getUsers().then((users) => {
    //   dispatch({
    //     type: types.GET_ALL_USERS,
    //     payload: users,
    //   });
    // });
  };
};
