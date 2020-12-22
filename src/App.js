import React, { useContext, useEffect } from 'react'

import { AuthInContext } from './store/actions/auth'
import { Search } from './pages/search/index'

function App() {
  const { loggedIn, auth } = useContext(AuthInContext)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      auth(localStorage.getItem('token'))
    }
  }, [loggedIn])

  return (
    <div className="App">
      <Search />
    </div>
  )
}

export default App
