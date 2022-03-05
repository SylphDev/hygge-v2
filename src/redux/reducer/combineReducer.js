import { combineReducers } from "redux";
import citysReducer from "./citysReducer";
import userReducer from "./userReducer";
import viewReducer from "./viewReducer";

const reducer = combineReducers(
    {
        user: userReducer,
        view: viewReducer,
        citys: citysReducer,
    }
)

export { reducer }