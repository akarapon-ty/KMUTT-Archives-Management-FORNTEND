import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

import { InputField } from './styleAll'

export const MultiInputFormat = (props) => {
  const {
    inputName, inputLabel, inputDefault, index, handleOnChangeRelation,
  } = props

  const { register } = useFormContext()

  return (
    <InputField
      name={inputName}
      ref={register}
      value={inputDefault}
      placeholder={inputLabel}
      onChange={(e) => handleOnChangeRelation(index, e.target.value)}
    />
  )
}

export default { }

MultiInputFormat.defaultProps = {
  inputLabel: 'titleAlernative',
  inputName: 'titleAlernative',
  inputDefault: null,

}

MultiInputFormat.propTypes = {
  inputLabel: PropTypes.string,
  inputDefault: PropTypes.string,
  inputName: PropTypes.string,
}
