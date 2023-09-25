import React from 'react'
import Form from '../../../components/form'
// firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const signUpUser = (firstName,lastName,email, password) => {
  createUserWithEmailAndPassword(auth, email, password,firstName,lastName)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    const firebaseConfig = {
      apiKey: "AIzaSyAW97qIZtX0VZjzb6Y2xy-Gd3lAA-EIq8g",
      authDomain: "ecommerce-websites-60755.firebaseapp.com",
      projectId: "ecommerce-websites-60755",
      storageBucket: "ecommerce-websites-60755.appspot.com",
      messagingSenderId: "789140843562",
      appId: "1:789140843562:web:14363ba61243696f73e753",
      measurementId: "G-5N5EC82G0J"
    };
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
}


const MyAccount = () => {

  return (
   <Form signIn  onFormSubmit = {signUpUser}></Form>
  )
}

export default MyAccount