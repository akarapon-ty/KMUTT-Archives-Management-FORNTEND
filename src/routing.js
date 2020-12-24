import React, { Suspense, useContext } from 'react'
import {
  Route, BrowserRouter, Switch, Redirect,
} from 'react-router-dom'

import { AuthInContext } from './store/actions/auth'
import NavigationsItems from './components/navigationItems/NavigationsItems'

const Login = React.lazy(() => import('./pages/login'))
const Homepage = React.lazy(() => import('./pages/homepage'))

const Router = () => {
  const { loggedIn } = useContext(AuthInContext)

  return (
    <BrowserRouter>
      <Suspense fallback={<span>Loading....</span>}>
        <NavigationsItems />
        <Switch>
          <Route path="/homepage" component={Homepage} />
          <Route path="/login" component={Login} />
          <Redirect to="/homepage" />
        </Switch>
        {loggedIn ? null : <Redirect to="/login" />}
      </Suspense>
    </BrowserRouter>
  )
}

export default Router
