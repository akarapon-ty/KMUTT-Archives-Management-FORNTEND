import React from 'react'
import styled from 'styled-components'
import { useFormContext } from 'react-hook-form'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'

const BackButtonStyle = styled.button`
    display: flex;
    justify-content: center;
    border: none;
    background-color: white;
    font-size: 19px;
    color: ${(props) => (props.disabled ? 'white;' : '#10A0A2;')}
`

const BackButton = (props) => {
  const { disableBack, onClick } = props

  const { register } = useFormContext()

  return (
    <BackButtonStyle name="submitBackForm" onClick={() => onClick()} disabled={disableBack} ref={register} type="button">
      <NavigateBeforeIcon />
      Back
    </BackButtonStyle>
  )
}

export default BackButton
