import React, { useContext, useEffect } from 'react'

import { AuthInContext } from './store/actions/auth'
import Router from './routing'

function App() {
  const { loggedIn, auth } = useContext(AuthInContext)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      auth(localStorage.getItem('token'))
    }
  }, [loggedIn])

  return (
    <Router />
  )
}

export default App
