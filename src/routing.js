import React, { Suspense, useContext } from 'react'
import {
  Route, BrowserRouter, Switch, Redirect,
} from 'react-router-dom'

import { AuthInContext } from './store/actions/auth'
import NavigationsItems from './components/navigationItems/NavigationsItems'

const Login = React.lazy(() => import('./pages/login'))
const Homepage = React.lazy(() => import('./pages/homepage'))
const Search = React.lazy(() => import('./pages/search'))
const Managebook = React.lazy(() => import('./pages/managebook'))
const InsertBook = React.lazy(() => import('./pages/insertBook'))
const Status = React.lazy(() => import('./pages/status'))
const EditBook = React.lazy(() => import('./pages/editBook'))
const ViewBook = React.lazy(() => import('./pages/viewBook'))

const Router = () => {
  const { loggedIn } = useContext(AuthInContext)
  const render = loggedIn ? (
    <Switch>
      <Route path="/search" component={Search} />
      <Route path="/managebook" component={Managebook} />
      <Route path="/insertbook" component={InsertBook} />
      <Route path="/status" component={Status} />
      <Route path="/editbook" component={EditBook} />
      <Route path="/viewbook" component={ViewBook} />
      <Route path="/homepage" component={Homepage} />
      <Redirect to="/homepage" />
    </Switch>
  ) : (
    <Switch>
      <Route path="/homepage" component={Homepage} />
      <Route path="/login" component={Login} />
      <Redirect to="/homepage" />
    </Switch>
  )

  return (
    <BrowserRouter>
      <Suspense fallback={<span>Loading....</span>}>
        <NavigationsItems />
        {render}
      </Suspense>
    </BrowserRouter>
  )
}

export default Router
