import React from 'react'

import {
  InputTermStyle, LineBetweenLableAndInput, LabelTermDiv, InputTermDiv, LabelTerm,
} from './styleStepFive'

const InputTerm = (props) => {
  const {
    defaultLabel, defaultInput, handlerOnChange, name, placeholder,
  } = props

  return (
    <InputTermDiv>
      <LabelTermDiv>
        <LabelTerm>{defaultLabel}</LabelTerm>
      </LabelTermDiv>
      <LineBetweenLableAndInput />
      <InputTermStyle defaultValue={defaultInput} placeholder={placeholder} onChange={(e) => handlerOnChange(e)} name={name} />
    </InputTermDiv>
  )
}

export default InputTerm
