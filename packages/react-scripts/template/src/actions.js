import { camelCased } from "./lib/helpers";
import R from "ramda";

const lowercaseActions = [
  "list",
  "text",
  "select",
  "fullscreen_image",
  "fullscreen_select",
  "weather",
  "physical_state",
  "nui_status",
  "fullscreen_menu"
];

function generateAction(lowercaseAction) {
  return {
    [camelCased(lowercaseAction)]: payload => ({
      type: lowercaseAction,
      payload
    })
  };
}

const actionTypes = R.mergeAll(
  lowercaseActions.map(e => ({ [e.toUpperCase()]: e }))
);
const actions = R.mergeAll(lowercaseActions.map(e => generateAction(e)));

export { actions, actionTypes };
