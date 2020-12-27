import React from 'react'

import { useFormContext } from 'react-hook-form'

const StepTwo = (props) => {
  const { value } = props
  const { title } = value

  const { register } = useFormContext()

  return (
    <>
      <h4>2. Fill the data</h4>
      <p>test</p>
      <input ref={register} name="title" placeholder="Title" defaultValue={title} />
    </>
  )
}

export default StepTwo
