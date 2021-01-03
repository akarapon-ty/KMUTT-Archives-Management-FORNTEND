import React from 'react'
import { useFormContext } from 'react-hook-form'

import { Space } from './styleAll'
import { InputFormat } from './InputField'
import { SelectorFormat } from './InputSelector'

const StepThree = (props) => {
  const {
    value, handlerAddRelation, handlerOnChangeRelation, handlerRemoveRelation,
  } = props
  const {
    identifierUrl, identifierIsbn, source, relation, degreeName, degreeLevel, degreeDicipline, degreeGrantor, type, language,
  } = value

  const relationValue = Object.keys(relation).length > 0 ? relation : { 1: '' }

  const selectLan = [{
    val: 'Thai',
    lab: 'Thai',
  }, {
    val: 'Eng',
    lab: 'Eng',
  },
  ]
  const selectType = [{
    val: 'Text',
    lab: 'Text',
  },
  ]

  const { register } = useFormContext()

  return (
    <>
      <h4>3. Optional data</h4>
      <h5>Identifier</h5>
      <InputFormat inputDefault={identifierUrl} inputLabel="Identifier URL" inputName="identifierUrl" />
      <InputFormat inputDefault={identifierIsbn} inputLabel="Identifier ISBN" inputName="identifierIsbn" />
      <h5>Source</h5>
      <InputFormat inputDefault={source} inputLabel="Source" inputName="source" />
      <div>
        <h5>Relation</h5>
        <button type="button" name="addRelation" onClick={() => handlerAddRelation()}>add</button>
      </div>
      {Object.keys(relationValue).map((key) => (
        <>
          <input
            onChange={handlerOnChangeRelation}
            inputdefault={relationValue[key]}
            value={relationValue[key]}
            name={key}
            ref={register}
            key={`relation-${key}input`}
            placeholder="relation"
          />
          <button key={`relation-${key}button`} value={key} onClick={(e) => handlerRemoveRelation(e)} type="button"> remove</button>
        </>
      ))}
      <h5>Thesis</h5>
      <InputFormat inputDefault={degreeName} inputLabel="Degree Name" inputName="degreeName" />
      <InputFormat inputDefault={degreeLevel} inputLabel="Degree Level" inputName="degreeLevel" />
      <InputFormat inputDefault={degreeDicipline} inputLabel="Degree Dicipline" inputName="degreeDicipline" />
      <InputFormat inputDefault={degreeGrantor} inputLabel="Degree Grantor" inputName="degreeGrantor" />

      <h5>Type</h5>
      <SelectorFormat inputDefault={type} inputLabel="Type" inputName="type" options={selectType} />
      <h5>Language</h5>
      <SelectorFormat inputDefault={language} inputLabel="Language" inputName="language" options={selectLan} />
      <Space />
    </>

  )
}

export default StepThree
