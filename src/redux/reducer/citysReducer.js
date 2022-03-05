import { SET_CITYS } from '../actions/type';
import { initialState } from '../state';

const citysReducer = (state = initialState.citys, action) => {
    switch (action.type) {
        case SET_CITYS:
            return action.payload;
        default:
            return state;
    }
}

export default citysReducer;