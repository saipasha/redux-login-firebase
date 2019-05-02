import { combineReducers } from 'redux'

function data(state={}, action) {
  switch(action.type) {
    case "SET_USER_DATA":
      return action.data
    case "ALREADY_LOGGED":
      return action.data
    case "REMOVE_USER_DATA":
      return {}
    default: 
      return state
  }
}

function session(state=false, action){
  switch(action.type) {
    case "SET_TO_TRUE": // More common to specify buuuut you could save one of these and send the boolean using just one case
      return action.session
    case "SET_TO_FALSE":
      return action.session
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