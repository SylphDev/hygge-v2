import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import hutsReducer from "./hutsReducer";
import reserveReducer from "./reserveReducer";
import userReducer from "./userReducer";
import viewReducer from "./viewReducer";
import citysReducer from "./citysReducer";

const reducer = combineReducers({
  citys: citysReducer,
  user: userReducer,
  view: viewReducer,
  reserve: reserveReducer,
  huts: hutsReducer,
  error: errorReducer
});

export { reducer };
