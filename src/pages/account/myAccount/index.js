import React from 'react'
import Form from '../../../components/form'
// firebase

import { getDatabase, ref, set  } from "firebase/database";

import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from './Firebase';

const auth = getAuth(firebaseApp);
const db = getDatabase();

const signUpUser = (firstName,lastName,email, password,imageUrl) => {
  createUserWithEmailAndPassword(auth,firstName,lastName, email, password,imageUrl)
  .then((userCredential) => {
    const user = userCredential.user;
    set(ref(db, `users/${user.uid}`), {
          username: firstName+lastName,
          email: email,
          password:password,
          profile_picture : imageUrl
        });

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
  });

}




// Authentication

// import { getAnalytics } from "firebase/analytics";

// import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
// import { firebaseApp } from './Firebase';

// const auth = getAuth(firebaseApp);
// const auth1 = getAuth();

// const signUpUser = (email, password) => {
//   createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     console.log(user)
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode)
//     console.log(errorMessage)
//   });

// }

// const signInUser = (email, password) => {
//   signInWithEmailAndPassword(auth1, email, password)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     console.log(user)
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode)
//     console.log(errorMessage)
//   });

// }


const MyAccount = () => {

  return (
   <Form signI  onFormSubmitSignUp = {signUpUser}  onFormSubmitSignIn></Form>
  )
}

export default MyAccount