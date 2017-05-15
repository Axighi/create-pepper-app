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

const generateAction = lowercaseAction => ({
  [camelCased(lowercaseAction)]: payload => ({
    type: lowercaseAction,
    payload
  })
});

const generateActionType = lowercaseAction => ({
  [lowercaseAction.toUpperCase()]: lowercaseAction
});

const toDict = R.pipe(R.map(R.__, lowercaseActions), R.mergeAll);
const actions = toDict(generateAction);
const actionTypes = toDict(generateActionType);

export { actions, actionTypes };
