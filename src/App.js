import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase, { googleLogin } from './firebase';
import { store } from './index'  // Good idea to export store to use it later in pen testing 


function App() {

  useEffect(()=>{
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
          type: "SET_TO_TRUE"
        })
      } else {
        store.dispatch({
          type: "SET_TO_FALSE"
        })
      }
    })
  }, [])

  let state = store.getState()

  function login(){
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
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome, {state.user.data.displayName}</h2>
        <button onClick={login} style=
        {{backgroundColor:"skyblue",
        color:"white",
        padding:"20px 40px",
        borderRadius:"20px",
        fontSize:"20px",
        fontFamily:"Avenir",
        border:"none",
        cursor:"pointer",
        outline:"none"}}>LOG IN</button>
      </header>
    </div>
  );
}

export default App;
