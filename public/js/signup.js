import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

import { createUserWithEmailAndPassword, onAuthStateChanged, getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBgZFcevi_Xt03LE2_nQZEjwZuS1qxsqzY",
  authDomain: "billing-system1.firebaseapp.com",
  projectId: "billing-system1",
  storageBucket: "billing-system1.appspot.com",
  messagingSenderId: "768530343576",
  appId: "1:768530343576:web:f7de38b5ffa945261952ed",
  measurementId: "G-QJHNZYWMBP"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const auth = getAuth()



const email = document.getElementById("email"); 
const password = document.getElementById("password");
const signupbtn = document.getElementById("signupbtn");

onAuthStateChanged(auth, (user) => {
  if (user) {
      location.href="./index.html";
  } 
});

// 
signupbtn.addEventListener('click', function()
{
  //alert("working");
  if(email.value!=null||password.value!=null)
  {
      createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // alert("user created");
        location.href="./login.html";
         console.log(userCredential)
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage+" "+errorCode)
      });
  }
  else{
      alert("Empty fields are not allowed");
  }
 
});