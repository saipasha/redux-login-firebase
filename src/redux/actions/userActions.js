import { store } from '../../index'
import firebase, { googleLogin } from '../../firebase'

export function userLoginAction() {
  googleLogin()
      .then(user=>{
        store.dispatch({ // Common to use set, update, fetch, delete for good practices and each one has standard, success and error options and each one has an action.
          type: "SET_USER_DATA",
          data: {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          }
        })
        store.dispatch({
          type: "SET_TO_TRUE",
          session: true,
        })
      })
}

export function userLogoutAction(){
  store.dispatch({
    type: "SET_TO_FALSE",
    session: false,
  })
  store.dispatch({
    type: "REMOVE_USER_DATA"
  })
}

export function alreadyLoggedAction() {
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        store.dispatch({
          type: "ALREADY_LOGGED",
          data: {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          }
        })
        store.dispatch({
          type: "SET_TO_TRUE",
          session: true
        })
      } else {
        store.dispatch({
          type: "SET_TO_FALSE",
          session: false
        })
      }
    })
}