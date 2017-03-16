import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import createReducer from './reducers';
import Home from './routes/Home/index';
// import Pepper from './lib/pepper';

// const pepper = new Pepper();
// pepper.autoSubscribe('AXMService/dialog_tablet', res => console.log(res));

const store = createStore(createReducer(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

export {
  store
};