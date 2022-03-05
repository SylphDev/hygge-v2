import { SET_CITYS, SET_USER, SET_VIEW } from "./type";

const setCitysAction = (payload) => ({
    type: SET_CITYS,
    payload
})
const setUserAction = (payload) => ({
    type: SET_USER,
    payload
})
const setViewAction = (payload) => ({
    type: SET_VIEW,
    payload
})

export { setUserAction, setCitysAction, setViewAction };