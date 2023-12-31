import { useContext } from "react";
import Form from "../../../components/form";
import { AuthContext } from "../../../Context/AuthContext";

// firebase
// import { getDatabase, ref, set, onValue } from "firebase/database";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyBdnhGetpEZXSKmZbK4Lc5lz9zYRo4p26A",
//   authDomain: "projects-8f236.firebaseapp.com",
//   projectId: "projects-8f236",
//   storageBucket: "projects-8f236.appspot.com",
//   messagingSenderId: "606794719752",
//   appId: "1:606794719752:web:abb08f25aa1d765cdfa7bd",
//   measurementId: "G-KRJ96V0CX0",
//   databaseUrl: "https://projects-8f236-default-rtdb.firebaseio.com",
// };
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getDatabase();
// const signUpUser = (firstName, lastName, email, password, imageUrl) => {
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       set(ref(db, `users/${user.uid}`), {
//         username: firstName + lastName,
//         email: email,
//         password: password,
//         profile_picture: imageUrl,
//       });
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode);
//       console.log(errorMessage);
//     });
// };
// const signInUser = (email, password) => {
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       const myData = ref(db, `users${user.uid}`);
//       onValue(myData, (data) => {
//         const myOneUser = data.val();
//         console.log("user data => " + myOneUser + user.email);
//       });
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode);
//       console.log(errorMessage);
//     });
// };

// With LocalStorage signUp and signIn

// Create context
const MyAccount = () => {
  const autCtx = useContext(AuthContext);
  const imageSave = autCtx.signInForImageHandler;
  const setLoggedIn = autCtx.signInHandler;
  const userEmail = autCtx.emailHandler;
  // signUp Function
  const signUpUser = (firstName, lastName, email, password, imageUrl) => {
    let userFind = localStorage.getItem(email);
    if (
      firstName === "" ||
      lastName === "" ||
      password === "" ||
      imageUrl === ""
    ) {
      alert("Please Fill the Input");
    } else {
      if (userFind) {
        alert("User already exit");
      } else {
        localStorage.setItem(
          email,
          JSON.stringify({ firstName, lastName, email, password, imageUrl, products:[] })
        );
        alert("SignUp Sucessfull");
      }
    }
  };

  // SignIn Function
  const signInUser = (email, password) => {
    let userFind = JSON.parse(localStorage.getItem(email));
    if (userFind) {
      if (userFind.email === email && userFind.password === password) {
        alert("User Sucessfully Login");
        imageSave(userFind.imageUrl);
        userEmail(userFind.email);
        setLoggedIn(true);
        console.log(userFind.imageUrl);
      } else {
        alert("Please type correct password");
      }
    } else {
      alert("User not exist");
    }
  };
  return (
    <Form
      signIn
      onFormSubmitSignUp={signUpUser}
      onFormSubmitSignIn={signInUser}
    ></Form>
  );
};
export default MyAccount;

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
