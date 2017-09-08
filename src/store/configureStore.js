import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducers from '../reducers';

export default (initialState) => {
  return combineReducers(reducers, initialState);
}
