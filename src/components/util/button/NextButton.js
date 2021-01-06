import React from 'react'
import styled from 'styled-components'
import { useFormContext } from 'react-hook-form'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

const NextButtonStyle = styled.button`
    display: flex;
    justify-content: center;
    border: none;
    background-color: white;
    font-size: 19px;
    color:#10A0A2;
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
      ) : <NextButtonStyle disabled={disable} name="submitNextForm" ref={register} type="submit">Finish</NextButtonStyle>}
    </>

  )
}

export default NextButton
