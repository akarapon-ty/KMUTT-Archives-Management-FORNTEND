import React from 'react'

import { Li, Divtest } from './style'

export const NavigationProfile = (props) => {
  const { onClickHanddler, name } = props
  return (
    <Li>
      <Divtest onClick={onClickHanddler}>{name}</Divtest>
    </Li>
  )
}

export default { }
