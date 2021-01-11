import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

import { InputField, InputSelector, InputLabel } from './styleAll'

export const SelectorFormat = (props) => {
  const {
    inputName, inputLabel, inputDefault, options, inputName2, inputLabel2, inputDefault2,
  } = props

  const { register } = useFormContext()

  return (
    <>
      <InputLabel>{inputLabel}</InputLabel>
      <InputSelector name={inputName} ref={register} defaultValue={inputDefault} placeholder={inputLabel}>
        {options.map((option) => (
          <option key={`option.val-${option.val}`} value={option.val}>{option.lab}</option>
        ))}
      </InputSelector>
      {inputName2 ? <InputField type="number" numb name={inputName2} ref={register} defaultValue={inputDefault2} placeholder={inputLabel2} /> : null }
    </>
  )
}

export default { }

SelectorFormat.defaultProps = {
  inputLabel: 'titleAlernative',
  inputName: 'titleAlernative',
  inputDefault: null,
  options: [],

}

SelectorFormat.propTypes = {
  inputLabel: PropTypes.string,
  inputDefault: PropTypes.string,
  inputName: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),

}
