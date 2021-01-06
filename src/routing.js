import React, { Suspense } from 'react'
import {
  Route, BrowserRouter, Switch, Redirect,
} from 'react-router-dom'

import NavigationsItems from './components/navigationItems/NavigationsItems'
import Test from './pages/test'

const Login = React.lazy(() => import('./pages/login'))
const Homepage = React.lazy(() => import('./pages/homepage'))
const InsertBook = React.lazy(() => import('./pages/insertBook'))
const Status = React.lazy(() => import('./pages/status'))

const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<span>Loading....</span>}>
      <NavigationsItems />
      <Switch>
        <Route path="/homepage" component={Homepage} />
        <Route path="/test" component={Test} />
        <Route path="/login" component={Login} />
        <Route path="/insertbook" component={InsertBook} />
        <Route path="/status" component={Status} />
        <Redirect to="/homepage" />
      </Switch>
    </Suspense>
  </BrowserRouter>
)

export default Router
