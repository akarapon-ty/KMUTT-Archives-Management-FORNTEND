import React from 'react'
import styled from 'styled-components'
import { useFormContext } from 'react-hook-form'

const NextButtonStyle = styled.button`
    border: none;
    background-color: white;
    font-size: 19px;
`

const NextButton = (props) => {
  const { active } = props

  const { register } = useFormContext()

  return (
    <>
      {active ? <NextButtonStyle name="submitNextForm" value="test" ref={register} type="submit">Next</NextButtonStyle> : <NextButtonStyle name="submitNextForm" ref={register} type="submit">Finish</NextButtonStyle>}
    </>

  )
}

export default NextButton
