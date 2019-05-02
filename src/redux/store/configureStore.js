import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/rootReducer'
import initialState from './initialState';
import logger from 'redux-logger' // Without configuration
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function() {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(logger, thunk))
    )
} 