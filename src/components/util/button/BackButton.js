import React from 'react'
import styled from 'styled-components'

const BackButtonStyle = styled.button`
    border: none;
    background-color: white;
    font-size: 19px;
`

const BackButton = (props) => {
  const { onClickHandler } = props
  return (
    <BackButtonStyle onClick={() => onClickHandler('back')}>Back</BackButtonStyle>
  )
}

export default BackButton
