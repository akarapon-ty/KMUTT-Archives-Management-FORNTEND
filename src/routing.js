import React, { Suspense } from 'react'
import {
  Route, BrowserRouter, Switch, Redirect,
} from 'react-router-dom'

import NavigationsItems from './components/navigationItems/NavigationsItems'

const Login = React.lazy(() => import('./pages/login'))
const Homepage = React.lazy(() => import('./pages/homepage'))
const Search = React.lazy(() => import('./pages/search'))
const Managebook = React.lazy(() => import('./pages/managebook'))
const InsertBook = React.lazy(() => import('./pages/insertBook'))
const Status = React.lazy(() => import('./pages/status'))
const EditBook = React.lazy(() => import('./pages/editBook'))
const ViewBook = React.lazy(() => import('./pages/viewBook'))

const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<span>Loading....</span>}>
      <NavigationsItems />
      <Switch>
        <Route path="/homepage" component={Homepage} />
        <Route path="/search" component={Search} />
        <Route path="/login" component={Login} />
        <Route path="/managebook" component={Managebook} />
        <Route path="/insertbook" component={InsertBook} />
        <Route path="/status" component={Status} />
        <Route path="/editbook" component={EditBook} />
        <Route path="/viewbook" component={ViewBook} />

        <Redirect to="/homepage" />
      </Switch>
    </Suspense>
  </BrowserRouter>
)

export default Router
