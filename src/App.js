import React, { useContext, useEffect } from 'react'

import { AuthInContext } from './store/actions/auth'
import Router from './routing'

function App() {
  const { loggedIn, auth } = useContext(AuthInContext)

  //   localStorage.setItem('token', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFubm9wIiwic3VybmFtZSI6IktTQiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYxMDM1MDAzMSwiZXhwIjoxNjEwOTU0ODMxfQ.N7VTHHix023YhPt_9wkp4Pr9GV4rcOEMr3y7S3xFock')

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
