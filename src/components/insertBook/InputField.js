import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

import { InputField, InputLabel } from './styleAll'

export const InputFormat = (props) => {
  const {
    inputName, inputLabel, inputDefault, conts, types,
  } = props

  const StepThreeForm = ({ children }) => {
    const methods = useFormContext()
    return children({ ...methods })
  }

  return (
    <StepThreeForm>
      {({ register }) => (
        <>
          <InputLabel>{inputLabel}</InputLabel>
          <InputField type={types} cont={conts} name={inputName} ref={register} defaultValue={inputDefault} placeholder={inputLabel} />
        </>
      )}
    </StepThreeForm>

  )
}

export default { }

InputFormat.defaultProps = {
  inputLabel: 'titleAlernative',
  inputName: 'titleAlernative',
  inputDefault: null,
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
