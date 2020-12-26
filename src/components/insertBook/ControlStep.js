import React from 'react'
import { useFormContext } from 'react-hook-form'

import { ControlStepDiv, LineControlStepDiv, NextButtonStyle } from './styleStepForm'
import BackButton from '../util/button/BackButton'

const ControlStep = (props) => {
  const { handlerStep, active, disableBack } = props

  const ControlStepForm = ({ children }) => {
    const methods = useFormContext()
    return children({ ...methods })
  }

  return (
    <ControlStepForm>
      {({ register }) => (
        <>
          <LineControlStepDiv />
          <ControlStepDiv>
            <BackButton onClickHandler={handlerStep} disableBack={disableBack} />
            {active ? <NextButtonStyle name="submitForm" ref={register} type="submit">Next</NextButtonStyle> : null}
          </ControlStepDiv>
        </>
      )}
    </ControlStepForm>
  )
}

export default ControlStep
