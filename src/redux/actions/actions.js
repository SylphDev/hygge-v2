import { ADD_RESERVE, SET_CITYS, SET_ERROR, SET_HUTS, SET_RESERVE, SET_USER, SET_VIEW } from "./type";

const setCitysAction = (payload) => ({
  type: SET_CITYS,
  payload,
});
const setUserAction = (payload) => ({
  type: SET_USER,
  payload,
});
const setViewAction = (payload) => ({
  type: SET_VIEW,
  payload,
});
const setHutsAction = (payload) => ({
  type: SET_HUTS,
  payload,
});
const setReserveAction = (payload) => ({
  type: SET_RESERVE,
  payload
})
const setErrorAction = (payload) => ({
  type: SET_ERROR,
  payload
})
const addReserveAction = (payload) => ({
  type: ADD_RESERVE,
  payload
})

export { setUserAction, setCitysAction, setViewAction, setHutsAction, setReserveAction, setErrorAction, addReserveAction };
