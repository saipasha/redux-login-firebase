import { combineReducers } from 'redux'

function data(state={}, action) {
  switch(action.type) {
    case "SET_USER_DATA":
      return action.data
    case "ALREADY_LOGGED":
      return action.data
    default: 
      return state
  }
}

function session(state=false, action){
  switch(action.type) {
    case "SET_LOGGED_USER":
      return true
    case "SET_TO_FALSE":
      return false
    default:
      return state
  }
}

function alerts(state=[], action){
  switch(action.type) {
    default:
      return state
  }
} 

export default combineReducers({data, session, alerts})