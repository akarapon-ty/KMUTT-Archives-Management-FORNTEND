import * as actionTypes from '../actions/actionTypes'

export const initialState = {
  loggedIn: !!localStorage.getItem('token'),
  token: '',
}

export const authReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      localStorage.setItem('token', action.payload)
      return {
        ...state,
        loggedIn: true,
        token: action.payload,
      }
    case actionTypes.AUTH_LOGOUT:
      localStorage.clear()
      sessionStorage.clear()
      return {
        loggedIn: false,
        token: null,
      }
    case actionTypes.AUTH_FAIL:
      localStorage.clear()
      sessionStorage.clear()
      return {
        ...state,
        loggedIn: false,
        token: null,
      }
    case actionTypes.AUTH_TOKEN:
      return {
        ...state,
        loggedIn: true,
        token: action.payload,
      }
    default:
      return state
  }
}

export default {}
