import React, { useContext } from 'react'
import { AuthContext } from './AuthCtx'

const AuthHandler = () => {
    const authCtx = useContext(AuthContext);
  return  authCtx.isLoggedIn
}

export default AuthHandler