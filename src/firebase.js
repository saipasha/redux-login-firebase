import firebase from 'firebase'

// Initialize Firebase
let config = {
  apiKey: "AIzaSyDO23claZOwIMS0p9IzLvjkk1PgkxZP9es",
  authDomain: "fixteruser.firebaseapp.com",
  databaseURL: "https://fixteruser.firebaseio.com",
  projectId: "fixteruser",
  storageBucket: "fixteruser.appspot.com",
  messagingSenderId: "383842124894"
};

firebase.initializeApp(config);

export function googleLogin(){
  let provider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(provider)
    .then(snap=>snap.user)
    .catch(e=>console.log(e))
}

// export function googleLogout(){
//   return firebase.auth().signOut()
// }

export default firebase 