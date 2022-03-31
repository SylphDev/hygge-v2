import { SET_RESERVE } from "../actions/type";
import { initialState } from "../state";

const reserveReducer = (state = initialState.reserve, action) => {
  switch (action.type) {
    case SET_RESERVE:
      return action.payload;
    default:
      return state;
  }
};

export default reserveReducer;
