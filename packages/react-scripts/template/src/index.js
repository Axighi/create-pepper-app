import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

import "./index.css";
import Home from "./routes/Home";

import store from "./store";
import { history } from "./store";

// command center stat working!
import "./dispatcher";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Home />
  }
];

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

export { store };
