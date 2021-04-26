import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

import { InputField, InputLabel } from './css/styleAll'

export const InputFormat = (props) => {
  const {
    inputName, inputLabel, inputDefault, conts, types, onChange, required, short, numb,
  } = props

  const { register } = useFormContext()

  const funcOnChange = onChange ? (e) => onChange(e) : null

  return (
    <>
      <InputLabel>{inputLabel}</InputLabel>
      <InputField required={required} type={types} numb={numb} shorts={short} cont={conts} name={inputName} ref={register} defaultValue={inputDefault} placeholder={inputLabel} onChange={funcOnChange} />
    </>
  )
}

export default { }

InputFormat.defaultProps = {
  inputLabel: 'defaultProp',
  inputName: 'defaultProp',
  inputDefault: null,
  conts: null,
  types: null,
  short: null,
  numb: null,
}

InputFormat.propTypes = {
  inputLabel: PropTypes.string,
  inputDefault: PropTypes.string,
  inputName: PropTypes.string,
  conts: PropTypes.bool,
  types: PropTypes.string,
  short: PropTypes.bool,
  numb: PropTypes.bool,

}
