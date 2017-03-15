import { combineReducers } from 'redux';
import { LOAD_PAGE } from './actions';
import { hashHistory } from 'react-router';

function globalReducer(state = {}, action) {
  return state;
}

export default function createReducer() {
  return combineReducers({
    global: globalReducer,
  })
}