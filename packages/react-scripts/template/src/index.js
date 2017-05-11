import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

import "./index.css";
import store from "./store";
import { history } from "./store";

import Home from "./routes/Home";
import Text from "./routes/Text";
import List from "./routes/List";
import Select from "./routes/Select";
import FullscreenImage from "./routes/FullscreenImage";
import FullscreenSelect from "./routes/FullscreenSelect";
import FullscreenMenu from "./routes/FullscreenMenu";

// command center start working!
import "./dispatcher";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Home />
  },
  {
    path: "/text",
    component: () => <Text />
  },
  {
    path: "/list",
    component: () => <List />
  },
  {
    path: "/select",
    component: () => <Select />
  },
  {
    path: "/fullscreen_image",
    component: () => <FullscreenImage />
  },
  {
    path: "/fullscreen_select",
    component: () => <FullscreenSelect />
  },
  {
    path: "/fullscreen_menu",
    component: () => <FullscreenMenu />
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
