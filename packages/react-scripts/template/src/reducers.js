import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import { actionTypes } from "./actions";

const textReducer = (
  state = {
    content:
      "PTC provides other benefits as well. Programs that utilize PTC can see a reduced memory footprint because the garbage collector will be more likely to collect certain local objects. "
  },
  action
) => {
  if (action.type === actionTypes.TEXT) return { ...state, ...action.payload };
  return state;
};

const listReducer = (
  state = {
    items: ["product1", "product2", "product3"],
    title: "List"
  },
  action
) => {
  if (action.type === actionTypes.LIST) return { ...state, ...action.payload };
  return state;
};

const selectReducer = (
  state = {
    items: [
      { text: "product1", event: "product1" },
      { text: "product2", event: "product2" },
      { text: "product3", event: "product3" }
    ],
    title: "Select one"
  },
  action
) => {
  if (action.type === actionTypes.SELECT)
    return { ...state, ...action.payload };
  return state;
};

const fullscreenImageReducer = (
  state = { image_url: "http://cdn4.pitchfork.com/news/65135/2ff87515.jpg" },
  action
) => {
  if (action.type === actionTypes.FULLSCREEN_IMAGE)
    return { ...state, ...action.payload };
  return state;
};

const fullscreenMenuReducer = (
  state = {
    items: [
      {
        text: "fun1",
        image_url:
          "http://img.qq1234.org/uploads/allimg/150403/0942003054-0-lp.jpg"
      },
      {
        text: "fun2",
        image_url:
          "http://www.uuwtq.com/file/image/tx/0w2757779861u1989855563t21.jpg"
      },
      {
        text: "fun3",
        image_url:
          "http://mvavatar2.meitudata.com/57dbaf481d6332723.jpg!thumb160"
      }
    ]
  },
  action
) => {
  if (action.type === actionTypes.FULLSCREEN_MENU)
    return { ...state, ...action.payload };
  return state;
};

const fullscreenSelectReducer = (
  state = {
    items: [
      { text: "option", event: "e" },
      { text: "option", event: "e" },
      { text: "option", event: "e" },
      { text: "option", event: "e" }
    ],
    title: "Please select"
  },
  action
) => {
  if (action.type === actionTypes.FULLSCREEN_SELECT)
    return { ...state, ...action.payload };
  return state;
};

const systemReducer = (
  state = {
    battery: 90,
    wifi: 3,
    nui_status: "idle",
    status_text: "I'm listening"
  },
  action
) => {
  if (action.type === actionTypes.PHYSICAL_STATE)
    return { ...state, ...action.payload };
  if (action.type === actionTypes.NUI_STATUS)
    return { ...state, ...action.payload };
  return state;
};

const weatherReducer = (
  state = {
    highlight: "2017/3/18",
    days: [
      {
        date: "2017/3/17",
        week: "星期三",
        city: "北京",
        weather: "有雨",
        temp_high: 12,
        temp_low: 7
      },
      {
        date: "2017/3/18",
        weather: "晴",
        temp_high: 22,
        week: "星期三",
        city: "北京",
        temp_low: 10
      },
      {
        date: "2017/3/19",
        weather: "霾",
        week: "星期三",
        city: "北京",
        temp_high: 7,
        temp_low: -2
      },
      {
        date: "2017/3/20",
        weather: "沙尘暴",
        week: "星期三",
        city: "北京",
        temp_high: 14,
        temp_low: 8
      }
    ]
  },
  action
) => {
  if (action.type === actionTypes.WEATHER)
    return { ...state, ...action.payload };
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
    weather: weatherReducer,
    system: systemReducer
  });
}
