import store from "./store";
import * as actions from "./actions";

const convertMsgToAction = msg => actions[msg];

// socket.on("message", msg => {
//   const action = JSON.parse(msg);
//   store.dispatch(convertMsgToAction(action.type)(action.payload));
// });
