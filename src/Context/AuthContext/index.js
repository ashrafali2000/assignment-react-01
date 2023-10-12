import { createContext } from "react"

  export  const AuthContext = createContext({
       isLoggedIn: false,
        imgUrl:"",
        signInForImageHandler:() => {},
        signInHandler:() => {}
    })
  

