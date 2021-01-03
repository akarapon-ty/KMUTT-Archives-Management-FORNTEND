import React from 'react'
import styled from 'styled-components'
import { useFormContext } from 'react-hook-form'

const NextButtonStyle = styled.button`
    border: none;
    background-color: white;
    font-size: 19px;
`

const NextButton = (props) => {
  const { active, disable } = props

  const { register } = useFormContext()

  return (
    <>
      {active ? <NextButtonStyle disabled={disable} name="submitNextForm" ref={register} type="submit">Next</NextButtonStyle> : <NextButtonStyle disabled={disable} name="submitNextForm" ref={register} type="submit">Finish</NextButtonStyle>}
    </>

  )
}

export default NextButton
