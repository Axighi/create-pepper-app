export const LIST = "list";
export function list(payload) {
  return {
    type: LIST,
    payload
  };
}

export const TEXT = "text";
export function text(payload) {
  return {
    type: TEXT,
    payload
  };
}

export const SELECT = "select";
export function select(payload) {
  return {
    type: SELECT,
    payload
  };
}

export const FULLSCREEN_IMAGE = "fullscreen_image";
export function fullscreenImage(payload) {
  return {
    type: FULLSCREEN_IMAGE,
    payload
  };
}

export const FULLSCREEN_SELECT = "fullscreen_select";
export function fullscreenSelect(payload) {
  return {
    type: FULLSCREEN_SELECT,
    payload
  };
}

export const FULLSCREEN_MENU = "fullscreen_menu";
export function fullscreenMenu(payload) {
  return {
    type: FULLSCREEN_MENU,
    payload
  };
}

export const WEATHER = "weather";
export function weather(payload) {
  return {
    type: WEATHER,
    payload
  };
}
