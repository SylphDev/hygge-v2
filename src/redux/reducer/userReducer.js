import { ADD_RESERVE, SET_USER } from "../actions/type";
import { initialState } from "../state";

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case ADD_RESERVE:
      return {
        ...state,
        reserves: {
          ...state.reserves,
          active: [...state.reserves.active, action.payload],
        }
      }
    default:
      return state;
  }
};

export default userReducer;
