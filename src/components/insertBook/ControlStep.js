import React from 'react'

import { ControlStepDiv, LineControlStepDiv } from './styleStepForm'
import NextButton from '../util/button/NextButton'
import BackButton from '../util/button/BackButton'

const ControlStep = (props) => {
  const {
    active, disableBack, handlerBackStep,
  } = props

  return (
    <>
      <LineControlStepDiv />
      <ControlStepDiv>
        <BackButton disableBack={disableBack} onClick={handlerBackStep} />
        <NextButton active={active} />
      </ControlStepDiv>
    </>
  )
}

export default ControlStep
