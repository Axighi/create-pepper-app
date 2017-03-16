import { combineReducers } from 'redux';
import { LOAD_PAGE } from './actions';

function globalReducer(state = {}, action) {
  switch(action.type) {
    case LOAD_PAGE:
      return state;
    default:
      return state;
  }
}

export default function createReducer() {
  return combineReducers({
    global: globalReducer,
  })
}