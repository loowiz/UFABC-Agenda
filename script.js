// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set, child } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDUvPAVsZYH3RIfTM9dd6vVqvLr4jo2JO4",

  authDomain: "ufabc-agenda.firebaseapp.com",

  databaseURL: "https://ufabc-agenda-default-rtdb.firebaseio.com",

  projectId: "ufabc-agenda",

  storageBucket: "ufabc-agenda.appspot.com",

  messagingSenderId: "113886022929",

  appId: "1:113886022929:web:9719790176c29b143110b0",

  measurementId: "G-ZYWJLMBXNN"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

document.getElementById("Submit").addEventListener("click", registerEmail, false);

function registerEmail() {
  
  let userEmail = document.getElementById("userEmail").value;
  let userPassword = document.getElementById("Password").value;
  
  set(child(db, "UsersInfo"), {
    User: userEmail,
    Password: userPassword
  });
}

