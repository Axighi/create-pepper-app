import R from "ramda";

import store, { history } from "./store";
import { actions } from "./actions";
import config from "./config";

const socket = new WebSocket(config.websocket_server);

const response = (type, data) => {
  if (socket.readyState === 1) {
    const now = new Date();
    socket.send(
      JSON.stringify({
        timestamp: now.getTime(),
        type,
        data
      })
    );
  }
  return;
};

const camelCased = str => {
  if (str) return str.replace(/_([a-z])/g, g => g[1].toUpperCase());
};

const dispatchAction = ({ action, payload }) => {
  if (payload.is_page) history.push(action);
  const reduxAction = actions[camelCased(action)];
  if (reduxAction) store.dispatch(reduxAction(payload));
  return;
};

// socket.addEventListener("open", event => {
//   socket.send("Hello Server!");
// });

socket.addEventListener("message", event => {
  const data = JSON.parse(event.data);
  const { gui_text, need_callback } = data;
  console.log(data);

  // tell server message received
  const ack = R.curry(response)("msg_received");
  if (need_callback) ack(data);

  dispatchAction(gui_text);
});

const responseServer = R.curry(response)("button_clicked");

export { responseServer };
