import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import { LISTEN, SPEAK, ANSWER, PROMPT } from "./actions";

const textReducer = (state = {}, action) => {
  if (action.type === TEXT)
    return { ...state, content: action.payload.content };
  return state;
};

const listReducer = (state = {}, action) => {
  if (action.type === TEXT)
    return { ...state, content: action.payload.content };
  return state;
};

const selectReducer = (state = {}, action) => {
  if (action.type === TEXT)
    return { ...state, content: action.payload.content };
  return state;
};

const fullscreenImageReducer = (state = {}, action) => {
  if (action.type === TEXT)
    return { ...state, content: action.payload.content };
  return state;
};

const fullscreenMenuReducer = (state = {}, action) => {
  if (action.type === TEXT)
    return { ...state, content: action.payload.content };
  return state;
};

const fullscreenListReducer = (state = {}, action) => {
  if (action.type === TEXT)
    return { ...state, content: action.payload.content };
  return state;
};

export default function createReducer() {
  return combineReducers({
    router: routerReducer,
    list: listReducer,
    text: textReducer,
    select: selectReducer,
    fullscreenImage: fullscreenImageReducer,
    fullscreenList: fullscreenListReducer,
    fullscreenMenu: fullscreenMenuReducer
  });
}
