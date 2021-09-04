import { types } from "../assets/types";

const leaderboardsReducer = (state = null, action) => {
  switch (action.type) {
    case types.ASSIGN_LEADERBOARDS:
      state = action.payload;
      return state;

    default:
      return state;
  }
};

export default leaderboardsReducer;
