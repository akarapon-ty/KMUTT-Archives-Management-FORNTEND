import React from 'react'
import styled from 'styled-components'
import { useFormContext } from 'react-hook-form'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import DoneAllIcon from '@material-ui/icons/DoneAll'

const NextButtonStyle = styled.button`
    display: flex;
    justify-content: center;
    border: none;
    background-color: white;
    font-size: 19px;
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
    border: none;
    padding:10px 15px;
    border-radius:4px;
    height:40px;

    background-color: #10A0A2;;
    color:white;
    font-size: 19px;
    cursor:pointer;
    &:hover {
      background-color: #4DC8C5;
  }
`

const NextButton = (props) => {
  const { active, disable } = props

  const { register } = useFormContext()

  return (
    <>
      {active ? (
        <NextButtonStyle disabled={disable} name="submitNextForm" ref={register} type="submit">
          Next
          <NavigateNextIcon />
        </NextButtonStyle>
      ) : (
        <FinishButtonStyle disabled={disable} name="submitNextForm" ref={register} type="submit">
          <DoneAllIcon />
          {' '}
          Finish
        </FinishButtonStyle>
      )}
    </>

  )
}

export default NextButton
