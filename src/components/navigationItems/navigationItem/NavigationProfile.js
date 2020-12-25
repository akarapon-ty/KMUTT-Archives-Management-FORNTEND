import React from 'react'

import { Li, ProfileText } from './style'

export const NavigationProfile = (props) => {
  const { onClickHanddler, name } = props
  return (
    <Li>
      <ProfileText onClick={onClickHanddler}>{`Hello, ${name}`}</ProfileText>
    </Li>
  )
}

export default { }
