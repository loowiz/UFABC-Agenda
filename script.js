import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set, child, onValue } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

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

onValue(ref(db, ".info/connected"), (snap) => {
  if (snap.val() === true) {
    console.log("Firebase inicializado com sucesso");
  }
});


const submitButton = document.getElementById("Submit");
submitButton.addEventListener("click", registerEmail, false);

function registerEmail(event) {  
  event.preventDefault();
  const userEmail = document.getElementById("userEmail").value;
  const userPassword = document.getElementById("Password").value;
  
  const newRef = child(db, "UsersInfo").push(); // cria um novo nó com uma chave única
  set(child(db, "UsersInfo"), {
    User: userEmail,
    Password: userPassword
  }, (error) => {
    if (error) {
      console.log("Erro ao registrar usuário no Firebase Realtime Database", error);
    } else {
      console.log("Usuário registrado com sucesso no Firebase Realtime Database");
    }
  });
}
