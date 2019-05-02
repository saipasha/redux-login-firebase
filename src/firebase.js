import firebase from 'firebase'

// Initialize Firebase
let config = {
  // ADD CONFIG FILE FROM FIREBASE 
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
