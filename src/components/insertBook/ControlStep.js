import React from 'react'
import { useFormContext } from 'react-hook-form'

import { ControlStepDiv, LineControlStepDiv } from './styleStepForm'
import BackButton from '../util/button/BackButton'
import NextButton from '../util/button/NextButton'

const ControlStep = (props) => {
  const { handlerStep, active } = props

  const ControlStepForm = ({ children }) => {
    const methods = useFormContext()
    return children({ ...methods })
  }

  const switchButton = active ? <NextButton onClickHandler={handlerStep} /> : null

  return (
    <ControlStepForm>
      <LineControlStepDiv />
      <ControlStepDiv>
        <BackButton onClickHandler={handlerStep} />
        {switchButton}
      </ControlStepDiv>
    </ControlStepForm>
  )
}

export default ControlStep
