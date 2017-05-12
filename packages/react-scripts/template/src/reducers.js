import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import {
  TEXT,
  LIST,
  SELECT,
  FULLSCREEN_IMAGE,
  FULLSCREEN_SELECT,
  FULLSCREEN_MENU,
  WEATHER
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

const weatherReducer = (
  state = {
    highlight: "2017-3-18",
    days: [
      {
        date: "2017-3-17",
        weather: "有雨",
        temp_high: 12,
        temp_low: 7
      },
      {
        date: "2017-3-18",
        weather: "雪",
        temp_high: 22,
        temp_low: 10
      },
      {
        date: "2017-3-19",
        weather: "霾",
        temp_high: 7,
        temp_low: -2
      },
      {
        date: "2017-3-20",
        weather: "沙尘暴",
        temp_high: 14,
        temp_low: 8
      }
    ]
  },
  action
) => {
  if (action.type === WEATHER) return { ...state, ...action.payload };
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
    fullscreenMenu: fullscreenMenuReducer,
    weather: weatherReducer
  });
}
