import React from 'react'
import styled from 'styled-components'

const BackButtonStyle = styled.button`
    border: none;
    background-color: white;
    font-size: 19px;
`

const BackButton = (props) => {
  const { onClickHandler, disableBack } = props
  return (
    <BackButtonStyle disabled={disableBack} onClick={() => onClickHandler()}>Back</BackButtonStyle>
  )
}

export default BackButton
