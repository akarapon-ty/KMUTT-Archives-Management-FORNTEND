import React from 'react'
import styled from 'styled-components'

const NextButtonStyle = styled.button`
    border: none;
    background-color: white;
    font-size: 19px;
`

const NextButton = (props) => {
  const { onClickHandler } = props
  return (
    <NextButtonStyle onClick={() => onClickHandler('next')} type="submit">Next</NextButtonStyle>
  )
}

export default NextButton
