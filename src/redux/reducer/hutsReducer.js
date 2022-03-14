import { SET_HUTS } from "../actions/type";
import { initialState } from "../state";

const hutsReducer = (state = initialState.huts, action) => {
  switch (action.type) {
    case SET_HUTS:
      return action.payload;
    default:
      return state;
  }
};

export default hutsReducer;
