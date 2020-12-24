import React, { useContext, useEffect } from 'react'

import { AuthInContext } from './store/actions/auth'
import { Search } from './pages/search/index'

function App() {
  const { loggedIn, auth } = useContext(AuthInContext)
  localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFubm9wIiwic3VybmFtZSI6IktTQiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYwODc5MDEzNiwiZXhwIjoxNjA5Mzk0OTM2fQ.ewvf-xh7VhwYdXCevjtgsLSC8jASdypHRhVBUA4gz2w')

  useEffect(() => {
    if (localStorage.getItem('token')) {
      auth(localStorage.getItem('token'))
    }
  }, [loggedIn])

  return (
    <Search />
  )
}

export default App
