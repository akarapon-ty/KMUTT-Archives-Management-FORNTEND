import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

import { InputField } from './css/styleAll'

export const MultiInputFormat = (props) => {
  const {
    inputName, inputLabel, inputDefault, index, handleOnChange,
  } = props

  const { register } = useFormContext()

  return (
    <InputField
      name={inputName}
      ref={register}
      value={inputDefault}
      placeholder={inputLabel}
      onChange={(e) => handleOnChange(index, e.target.value)}
    />
  )
}

export default { }

MultiInputFormat.defaultProps = {
  inputLabel: 'defaultProp',
  inputName: 'defaultProp',
  inputDefault: null,

}

MultiInputFormat.propTypes = {
  inputLabel: PropTypes.string,
  inputDefault: PropTypes.string,
  inputName: PropTypes.string,
}
