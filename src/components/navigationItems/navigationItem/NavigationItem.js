import React from 'react'

import { Li, NavLinkStyle } from './style'

const NavigationItem = (props) => (
  <Li>
    <NavLinkStyle to={props.link} exact={props.exact}>
      {props.children}
    </NavLinkStyle>
  </Li>
)

export default NavigationItem
