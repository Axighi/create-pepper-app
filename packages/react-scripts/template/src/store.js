import { createStore, applyMiddleware } from "redux";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";

import createReducer from "./reducers";

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  createReducer(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(middleware)
);

export { history };
export default store;
