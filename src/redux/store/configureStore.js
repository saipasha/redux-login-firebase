import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/rootReducer'
import initialState from './initialState';
import logger from 'redux-logger' // Without configuration

export default function() {
  return createStore(rootReducer, initialState, applyMiddleware(logger))
} 