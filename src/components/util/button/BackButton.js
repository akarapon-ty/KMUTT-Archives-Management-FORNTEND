import React from 'react'
import styled from 'styled-components'
import { useFormContext } from 'react-hook-form'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'

const BackButtonStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: white;
    font-size: 16px;
    padding:10px 0px;
    color: ${(props) => (props.disabled ? 'white;' : '#10A0A2;')}
    ${(props) => (props.disabled ? null : 'cursor:pointer;')}
    &:hover {
      color: ${(props) => (props.disabled ? 'white;' : '#4DC8C5;')}
      ;
  }
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
