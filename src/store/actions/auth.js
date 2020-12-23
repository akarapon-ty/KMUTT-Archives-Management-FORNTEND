import React, { useReducer, createContext } from 'react'

import * as actionTypes from './actionTypes'
import { authReducer, initialState } from '../reducers/auth'

export const AuthInContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [loggedInState, loggedInDispatch] = useReducer(
    authReducer,
    initialState,
  )

  const { loggedIn, token } = loggedInState

  const loginSuccess = (payload) => loggedInDispatch({ type: actionTypes.AUTH_SUCCESS, payload })
  const loginFail = (payload) => loggedInDispatch({ type: actionTypes.AUTH_FAIL, payload })
  const logout = (payload) => loggedInDispatch({ type: actionTypes.AUTH_LOGOUT, payload })
  const auth = (payload) => loggedInDispatch({ type: actionTypes.AUTH_TOKEN, payload })

  return (
    <AuthInContext.Provider value={{
      loggedIn, loginSuccess, loginFail, logout, token, auth,
    }}
    >
      {children}
    </AuthInContext.Provider>
  )
}

export default { }
