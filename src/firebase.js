import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAe1JGnHLdFSkLBj7DEzh4w9LaqlzrIYvo",
    authDomain: "lesson9app.firebaseapp.com",
    databaseURL: "https://lesson9app-default-rtdb.firebaseio.com",
    projectId: "lesson9app",
    storageBucket: "lesson9app.appspot.com",
    messagingSenderId: "485460623690",
    appId: "1:485460623690:web:692fde1c5e3dda697081b3"
};

const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.database().ref();
export const auth = firebase.auth;