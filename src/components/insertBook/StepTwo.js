import React from 'react'

import { useFormContext } from 'react-hook-form'

const StepTwo = (props) => {
  const { value } = props
  const { title } = value

  const StepTwoForm = ({ children }) => {
    const methods = useFormContext()
    return children({ ...methods })
  }

  return (
    <>
      <h4>2. Fill the data</h4>
      <StepTwoForm>
        {({ register }) => (
          <>
            <p>test</p>
            <input ref={register} name="title" placeholder="Title" defaultValue={title} />
          </>
        )}
      </StepTwoForm>
    </>
  )
}

export default StepTwo
