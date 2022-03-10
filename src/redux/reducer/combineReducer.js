import { combineReducers } from "redux";
import citysReducer from "./citysReducer";
import hutsReducer from "./hutsReducer";
import userReducer from "./userReducer";
import viewReducer from "./viewReducer";

const reducer = combineReducers(
    {
        user: userReducer,
        view: viewReducer,
        citys: citysReducer,
        huts: hutsReducer
    }
)

export { reducer }