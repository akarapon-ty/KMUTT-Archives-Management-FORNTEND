import React from 'react'

import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Li, ProfileText } from './style'

export const NavigationProfile = (props) => {
  const { onClickHanddler, name } = props
  return (
    <Li>
      <ProfileText onClick={onClickHanddler}>

        <AccountCircleIcon />
        {'   '}
        &nbsp;&nbsp;
        {`Hello, ${name}`}
      </ProfileText>
    </Li>
  )
}

export default { }
