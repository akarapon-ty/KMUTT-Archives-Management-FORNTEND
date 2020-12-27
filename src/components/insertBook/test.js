import React from 'react'

import { useFormContext } from 'react-hook-form'

const Test = (props) => {
  const {
    value, handlerOnChangeRelation, handlerAddRelation, handlerRemoveRelation,
  } = props
  const valueTest = Object.keys(value).length > 0 ? value : { init: '' }
  const { register } = useFormContext()

  return (
    <>
      <div>
        {Object.keys(valueTest).map((key) => (
          <>
            <input
              ref={register}
              onChange={(e) => handlerOnChangeRelation(e)}
              defaultValue={valueTest[key]}
              name={key}
              key={key}
              placeholder="relation"
            />
            <button key={`${key}button`} value={key} onClick={(e) => handlerRemoveRelation(e)} type="button"> remove</button>
          </>
        ))}
      </div>
      <button type="button" name="addRelation" onClick={() => handlerAddRelation()}>add</button>
    </>
  )
}

export default Test
