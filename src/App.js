import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from './index'  // Good idea to export store to use it later in pen testing 
import { userLoginAction, userLogoutAction, alreadyLoggedAction } from './redux/actions/userActions'

function App() {

  useEffect(()=>{  
    alreadyLoggedAction()
  }, [])

  let state = store.getState()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome, {state.user.data.displayName}</h2>
        <button onClick={state.user.session ? userLogoutAction : userLoginAction} style=
        {{backgroundColor:"skyblue",
        color:"white",
        padding:"20px 40px",
        borderRadius:"20px",
        fontSize:"20px",
        fontFamily:"Avenir",
        border:"none",
        cursor:"pointer",
        outline:"none"}}>{state.user.session ? "LOG OUT" : "LOG IN"}</button>
      </header>
    </div>
  );
}

export default App;
