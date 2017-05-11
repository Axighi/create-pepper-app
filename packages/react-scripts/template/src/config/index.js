const config = {
  development: {
    websocket_server: "ws://192.168.0.135:9527/ws"
  },
  production: {
    websocket_server: ""
  }
};

export default config[process.env.NODE_ENV];
