import { combineReducers } from "redux";
import hutsReducer from "./hutsReducer";
import reserveReducer from "./reserveReducer";
import userReducer from "./userReducer";
import viewReducer from "./viewReducer";

const reducer = combineReducers({
  user: userReducer,
  view: viewReducer,
  reserve: reserveReducer,
  huts: hutsReducer,
});

export { reducer };
