import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDd4SLlFOh0Wo4YVNAcxpV9WI5I5ytc6Wk",
  authDomain: "findband-4fa3c.firebaseapp.com",
  databaseURL: "https://findband-4fa3c.firebaseio.com",
  projectId: "findband-4fa3c",
  storageBucket: "findband-4fa3c.appspot.com",
  messagingSenderId: "946433486588",
  appId: "1:946433486588:web:fd10809dfb0c39c70ef179",
  measurementId: "G-DCKBKVT8YX",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firebaseProject = firebase;
