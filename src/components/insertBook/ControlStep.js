import React from 'react'

import { ButtonControlStepDiv, LineControlStepDiv, ControlStepDiv } from './styleStepForm'
import NextButton from '../util/button/NextButton'
import BackButton from '../util/button/BackButton'

const ControlStep = (props) => {
  const {
    active, disableBack, handlerBackStep, disableNext,
  } = props

  return (
    <ControlStepDiv show={active}>
      <LineControlStepDiv />
      <ButtonControlStepDiv>
        <BackButton disableBack={disableBack} onClick={handlerBackStep} />
        <NextButton active={active} disable={disableNext} />
      </ButtonControlStepDiv>
    </ControlStepDiv>
  )
}

export default ControlStep
