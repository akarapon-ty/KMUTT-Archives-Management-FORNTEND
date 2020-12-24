import React from 'react'
import Backdrop from './style'

const backdrop = (props) => (
  props.show ? (
    <Backdrop onClick={props.clicked}>
      {props.children}
    </Backdrop>
  ) : null
)

export default backdrop
