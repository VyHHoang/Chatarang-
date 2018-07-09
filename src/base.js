import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import Rebase from 're-base'


  const config = {
    apiKey: "AIzaSyD2PYIIHO-Qg7-4Ogr11sOg6GsQjs9Cc9M",
    authDomain: "chat-3dc3b.firebaseapp.com",
    databaseURL: "https://chat-3dc3b.firebaseio.com",
    projectId: "chat-3dc3b",
    storageBucket: "",
    messagingSenderId: "988968427008"
  }
   const app = firebase.initializeApp(config)

   export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const githubProvider = new firebase.auth.GithubAuthProvider()
export const auth = firebase.auth()

   const db = firebase.database(app)
const base = Rebase.createClass(db)
export default base