import store from "./store";
import * as actions from "./actions";

const response = needed => {
  if (needed) {
    const now = new Date();
    socket.send(
      JSON.stringify({
        timestamp: now.getTime(),
        type: "msg_received",
        data
      })
    );
  }
  return;
};

const dispatchAction = ({ actionName, payload }) => {
  const action = actions[actionName];
  if (action) store.dispatch(action(payload));
  return;
};

const socket = new WebSocket("ws://192.168.0.135:9527/ws");

socket.addEventListener("open", event => {
  socket.send("Hello Server!");
});

socket.addEventListener("message", event => {
  const data = JSON.parse(event.data);
  const { gui_text, need_callback } = data;

  // tell server message received
  response(need_callback);

  dispatchAction(gui_text);
});
