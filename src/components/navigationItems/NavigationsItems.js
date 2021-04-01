import React, { useContext, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom'

import { userInformation } from '../../graphql/gql/user'
import { AuthInContext } from '../../store/actions/auth'
import {
  UlNavigationitems, DropdownDiv, Logout, Logo,
} from './style'
import { NavigationItem, NavigationProfile } from './navigationItem'
import Backdrop from '../util/backdrop/BackDrop'

const NavigationsItems = () => {
  const [listItem, setlistItem] = useState([{ name: 'LOGIN', link: '/login', exact: false }])
  const [profileShow, setProfileShow] = useState(false)
  const [profileInfor, setProfileInfor] = useState(null)
  const { logout, loggedIn } = useContext(AuthInContext)
  const [isLogin, setIsLogin] = useState(loggedIn)

  let naviProfile = null
  let naviBar = listItem.map((item) => <NavigationItem key={item.name} link={item.link} exact={item.exact}>{item.name}</NavigationItem>)
  const { loading, error } = useQuery(userInformation, { onCompleted: setProfileInfor, errorPolicy: 'all' })

  const profileHandler = () => {
    setProfileShow((prevState) => !prevState)
  }
  const logoutHandler = () => {
    setlistItem([{ name: 'LOGIN', link: '/login', exact: false }])
    logout()
    setIsLogin(false)
    setProfileInfor(null)
  }
  const history = useHistory()

  useEffect(() => {
    setIsLogin(loggedIn)
  }, [loggedIn])

  useEffect(() => {
    if (isLogin && !loading && !error) {
      setlistItem([
        {
          name: 'MANAGE BOOK', link: '/managebook', exact: false,
        },
        {
          name: 'INSERT BOOK', link: '/insertbook', exact: false,
        },
        {
          name: 'STATUS', link: '/status', exact: false,
        }])
      naviBar = listItem.map((item) => <NavigationItem key={item.name} link={item.link} exact={item.exact}>{item.name}</NavigationItem>)
    } else if (error && !loading && !loggedIn) {
      if (error.networkError.result.errors) {
        if (error.networkError.result.errors[0].extensions.code === 'UNAUTHENTICATED') {
          logout()
        }
      }
    }
  }, [isLogin, loading])

  if (profileInfor !== null) {
    naviProfile = <NavigationProfile onClickHanddler={profileHandler} name={profileInfor.userInformation.name} />
  }

  return (
    <>
      <UlNavigationitems>
        <Logo href="/homepage" onClick={() => history.replace()}>Kmutt Archives Management</Logo>
        {naviBar}
        {naviProfile}
      </UlNavigationitems>
      <Backdrop clicked={profileHandler} show={profileShow}>
        <DropdownDiv show={profileShow}>
          <Logout onClick={logoutHandler}>LOGOUT</Logout>
        </DropdownDiv>
      </Backdrop>
    </>
  )
}

export default NavigationsItems
