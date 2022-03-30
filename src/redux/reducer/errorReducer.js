import { SET_ERROR } from "../actions/type";
import { initialState } from "../state";

const errorReducer = (state = initialState.error, action) => {
    switch (action.type) {
        case SET_ERROR:
            return action.payload;
        default:
            return state;
    }
};

export default errorReducer;