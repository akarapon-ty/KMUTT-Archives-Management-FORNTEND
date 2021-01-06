import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

import { InputField } from './styleAll'

export const MultiInputFormat = (props) => {
  const {
    inputName, inputLabel, inputDefault,
  } = props

  const StepThreeForm = ({ children }) => {
    const methods = useFormContext()
    return children({ ...methods })
  }

  return (
    <StepThreeForm>
      {({ register }) => (
        <>
          <InputField name={inputName} ref={register} defaultValue={inputDefault} placeholder={inputLabel} />
        </>
      )}
    </StepThreeForm>

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
