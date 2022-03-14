import { SET_USER } from "../actions/type";
import { initialState } from "../state";

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
