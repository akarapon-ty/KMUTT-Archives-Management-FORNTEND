import React from 'react'

import {
  ButtonControlStepDiv, LineControlStepDiv, ControlStepDiv,
} from './styleStepForm'
import NextButton from '../util/button/NextButton'
import BackButton from '../util/button/BackButton'

const ControlStep = (props) => {
  const {
    active, disableBack, handlerBackStep, disableNext, show, finish, activeStep, handleSubmit,
  } = props

  return (
    <ControlStepDiv show={show}>
      <LineControlStepDiv />
      <ButtonControlStepDiv>
        <BackButton disableBack={disableBack} onClick={handlerBackStep} />
        <NextButton active={active} disable={disableNext} finish={finish} activeStep={activeStep} handleSubmit={handleSubmit} />
      </ButtonControlStepDiv>
    </ControlStepDiv>
  )
}

export default ControlStep
