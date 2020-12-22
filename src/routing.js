import React, { Suspense, useContext } from 'react'
import {
  Route, BrowserRouter, Switch, Redirect,
} from 'react-router-dom'

import { AuthInContext } from './store/actions/auth'

const Login = React.lazy(() => import('./pages/login'))

const Router = () => {
  const { loggedIn } = useContext(AuthInContext)

  return (
    <BrowserRouter>
      <Suspense fallback={<span>Loading....</span>}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/homepage" component={Login} />
        </Switch>
        {loggedIn ? null : <Redirect to="/login" />}
      </Suspense>
    </BrowserRouter>
  )
}

export default Router
