import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

import { InputField, InputLabel } from './styleAll'

export const InputFormat = (props) => {
  const {
    inputName, inputLabel, inputDefault, conts, types, onChange,
  } = props

  const { register } = useFormContext()

  const funcOnChange = onChange ? (e) => onChange(e) : null

  return (
    <>
      <InputLabel>{inputLabel}</InputLabel>
      <InputField type={types} cont={conts} name={inputName} ref={register} defaultValue={inputDefault} placeholder={inputLabel} onChange={funcOnChange} />
    </>
  )
}

export default { }

InputFormat.defaultProps = {
  inputLabel: 'titleAlernative',
  inputName: 'titleAlernative',
  inputDefault: 'null',
  conts: null,
  types: null,
}

InputFormat.propTypes = {
  inputLabel: PropTypes.string,
  inputDefault: PropTypes.string,
  inputName: PropTypes.string,
  conts: PropTypes.bool,
  types: PropTypes.string,

}
