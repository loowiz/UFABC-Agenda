// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";

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

const analytics = getAnalytics(app);

function registerEmail() {
  let myDBConn = app.database().ref;
  
  let Users = myDBConn.child("Users");
  
  let userEmail = document.getElementById("userEmail");
  
  let userPassword = document.getElementById("password");
  
  Users.push({Email: userEmail, Password: userPassword});
}

