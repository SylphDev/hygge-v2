import { SET_VIEW } from "../actions/type";
import { initialState } from "../state";

const viewReducer = (state = initialState.view, action) => {
  switch (action.type) {
    case SET_VIEW:
      return action.payload;
    default:
      return state;
  }
};

export default viewReducer;
