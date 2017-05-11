import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import {
  TEXT,
  LIST,
  SELECT,
  FULLSCREEN_IMAGE,
  FULLSCREEN_SELECT,
  FULLSCREEN_MENU
} from "./actions";

const textReducer = (state = {}, action) => {
  if (action.type === TEXT) return { ...state, ...action.payload };
  return state;
};

const listReducer = (state = { items: [] }, action) => {
  if (action.type === LIST) return { ...state, ...action.payload };
  return state;
};

const selectReducer = (state = { items: [] }, action) => {
  if (action.type === SELECT) return { ...state, ...action.payload };
  return state;
};

const fullscreenImageReducer = (state = {}, action) => {
  if (action.type === FULLSCREEN_IMAGE) return { ...state, ...action.payload };
  return state;
};

const fullscreenMenuReducer = (state = { items: [] }, action) => {
  if (action.type === FULLSCREEN_MENU) return { ...state, ...action.payload };
  return state;
};

const fullscreenSelectReducer = (state = { items: [] }, action) => {
  if (action.type === FULLSCREEN_SELECT) return { ...state, ...action.payload };
  return state;
};

export default function createReducer() {
  return combineReducers({
    router: routerReducer,
    list: listReducer,
    text: textReducer,
    select: selectReducer,
    fullscreenImage: fullscreenImageReducer,
    fullscreenSelect: fullscreenSelectReducer,
    fullscreenMenu: fullscreenMenuReducer
  });
}
