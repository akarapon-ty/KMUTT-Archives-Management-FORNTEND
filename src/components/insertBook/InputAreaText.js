import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

import { InputArea, InputLabel } from './styleAll'

export const InputAreaText = (props) => {
  const { inputName, inputLabel, inputDefault } = props

  const { register } = useFormContext()

  return (
    <>
      <InputLabel>{inputLabel}</InputLabel>
      <InputArea rows="4" name={inputName} ref={register} defaultValue={inputDefault} placeholder={inputLabel} />
    </>

  )
}

export default { }

InputAreaText.defaultProps = {
  inputLabel: 'defaultProp',
  inputName: 'defaultProp',
  inputDefault: null,

}

InputAreaText.propTypes = {
  inputLabel: PropTypes.string,
  inputDefault: PropTypes.string,
  inputName: PropTypes.string,
}
