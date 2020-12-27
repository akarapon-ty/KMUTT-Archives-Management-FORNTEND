import React from 'react'
import styled from 'styled-components'
import { useFormContext } from 'react-hook-form'

const BackButtonStyle = styled.button`
    border: none;
    background-color: white;
    font-size: 19px;
`

const BackButton = (props) => {
  const { disableBack, onClick } = props

  const { register } = useFormContext()

  return (
    <BackButtonStyle name="submitBackForm" onClick={() => onClick()} disabled={disableBack} ref={register} type="button">Back</BackButtonStyle>
  )
}

export default BackButton
