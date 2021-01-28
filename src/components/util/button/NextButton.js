import React from 'react'
import styled from 'styled-components'
import { useFormContext } from 'react-hook-form'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import DoneAllIcon from '@material-ui/icons/DoneAll'
import Popups from '../popups/Popups'

const NextButtonStyle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
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
const FinishButtonStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding:10px 15px;
    border-radius:4px;
    background-color: #10A0A2;;
    color:white;
    font-size: 16px;
    cursor:pointer;
    &:hover {
        opacity:0.5;
    }
`

const NextButton = (props) => {
  const {
    active, disable, type, onClick, finish, activeStep,
  } = props
  const { register } = useFormContext()

  return (
    <>
      {active && activeStep !== 4 ? (
        <NextButtonStyle disabled={disable} name="submitNextForm" ref={register} type="submit">
          Next
          <NavigateNextIcon />
        </NextButtonStyle>
      ) : null}
      {type ? (
        <NextButtonStyle disabled={disable} name="submitNextForm" ref={register} type="button" onClick={() => onClick()}>
          Next
          <NavigateNextIcon />
        </NextButtonStyle>
      ) : null}
      {finish ? (
        <FinishButtonStyle disabled={disable} name="submitNextForm" ref={register} type="submit">
          <DoneAllIcon />
          {' '}
          Finish
        </FinishButtonStyle>
      ) : null}
      {activeStep === 4 ? (
        <>
          <Popups
            name="submitNextForm"
            topic="Do you want to go to next step?"
            content="If you continue to next step you won't be available to edit word in this document again."
          />
        </>
      ) : null}
    </>

  )
}

export default NextButton
