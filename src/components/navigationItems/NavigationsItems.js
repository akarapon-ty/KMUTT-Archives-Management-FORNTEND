import React, { useContext, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import GetAppIcon from '@material-ui/icons/GetApp'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import PostAddIcon from '@material-ui/icons/PostAdd'
import EditIcon from '@material-ui/icons/Edit'

import { userInformation } from '../../graphql/gql/user'
import { AuthInContext } from '../../store/actions/auth'
import {
  UlNavigationitems, DropdownDiv, Logout, Logo, AlignCenter,
} from './style'
import { NavigationItem, NavigationProfile } from './navigationItem'
import Backdrop from '../util/backdrop/BackDrop'

const NavigationsItems = () => {
  const [listItem, setlistItem] = useState([{
    name: 'LOGIN', link: '/login', exact: false, icon: <AccountCircleIcon />,
  }])
  const [profileShow, setProfileShow] = useState(false)
  const [profileInfor, setProfileInfor] = useState(null)
  const { logout, loggedIn } = useContext(AuthInContext)
  const [isLogin, setIsLogin] = useState(loggedIn)

  let naviProfile = null
  const naviBar = listItem.map((item) => (
    <NavigationItem key={item.name} link={item.link} exact={item.exact}>
      <AlignCenter>
        {item.icon}
        &nbsp;&nbsp;
        {item.name}
      </AlignCenter>

    </NavigationItem>
  ))
  const { loading, error } = useQuery(userInformation, { onCompleted: setProfileInfor, errorPolicy: 'all' })

  const profileHandler = () => {
    setProfileShow((prevState) => !prevState)
  }
  const logoutHandler = () => {
    setlistItem([{
      name: 'LOGIN', link: '/login', exact: false, icon: <AccountCircleIcon />,
    }])
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
          name: 'MANAGE BOOK', link: '/managebook', exact: false, icon: <EditIcon />,
        },
        {
          name: 'INSERT BOOK', link: '/insertbook', exact: false, icon: <PostAddIcon />,
        },
        {
          name: 'STATUS', link: '/status', exact: false, icon: <GetAppIcon />,
        }])
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
