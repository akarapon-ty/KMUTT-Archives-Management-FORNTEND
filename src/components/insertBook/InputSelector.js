import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

import { InputField, InputSelector, InputLabel } from './css/styleAll'

export const SelectorFormat = (props) => {
  const {
    inputName, inputLabel, options, inputName2, inputLabel2, inputDefault2,
  } = props

  const { register } = useFormContext()

  return (
    <>
      <InputLabel>{inputLabel}</InputLabel>
      <InputSelector name={inputName} ref={register} placeholder={inputLabel} options={options}>
        {options.map((option) => (
          <option key={`option.val-${option.lab}`} value={option.val} selected={option.selected}>{option.lab}</option>
        ))}
      </InputSelector>
      {inputName2 ? <InputField type="number" numb name={inputName2} ref={register} defaultValue={inputDefault2} placeholder={inputLabel2} /> : null }
    </>
  )
}

export default { }

SelectorFormat.defaultProps = {
  inputLabel: 'defaultProp',
  inputName: 'defaultProp',
  options: [],

}

SelectorFormat.propTypes = {
  inputLabel: PropTypes.string,
  inputName: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
}
