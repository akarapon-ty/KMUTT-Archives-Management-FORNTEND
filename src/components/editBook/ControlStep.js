import React from 'react'

import {
  ButtonControlStepDiv, LineControlStepDiv, ControlStepDiv, SaveButtonStyle,
} from './style'
import NextButton from '../util/button/NextButton'
import BackButton from '../util/button/BackButton'

const ControlStep = (props) => {
  const {
    active, disableBack, handlerBackStep, disableNext, show, handlerNextStep,
  } = props

  return (
    <ControlStepDiv show={show}>
      <LineControlStepDiv />
      <ButtonControlStepDiv>
        <BackButton disableBack={disableBack} onClick={handlerBackStep} />
        <SaveButtonStyle type="submit">save</SaveButtonStyle>
        <NextButton active={active} disable={disableNext} onClick={handlerNextStep} type />
      </ButtonControlStepDiv>
    </ControlStepDiv>
  )
}

export default ControlStep
