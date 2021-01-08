import React from 'react'
import CloseIcon from '@material-ui/icons/Close'

import {
  Space, InsertButton, Inline, LeftRightBox,
} from './styleAll'
import { InputFormat } from './InputField'
import { SelectorFormat } from './InputSelector'
import { MultiInputFormat } from './MultiInputField'

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

  return (
    <>
      <h4>3. Optional data</h4>
      <h5>Identifier</h5>
      <InputFormat inputDefault={identifierUrl} inputLabel="Identifier URL" inputName="identifierUrl" />
      <InputFormat inputDefault={identifierIsbn} inputLabel="Identifier ISBN" inputName="identifierIsbn" />
      <h5>Source</h5>
      <InputFormat inputDefault={source} inputLabel="Source" inputName="source" />
      <LeftRightBox>
        <h5>Relation</h5>
        <InsertButton type="button" name="addRelation" onClick={() => handlerAddRelation()}>+ ADD</InsertButton>
      </LeftRightBox>
      {Object.keys(relationValue).map((key) => (
        <>
          <Inline long>
            <MultiInputFormat
              onChange={handlerOnChangeRelation}
              inputdefault={relationValue[key]}
              value={relationValue[key]}
              name={key}
              key={`relation-${key}input`}
              inputLabel="Relation"
            />
            <InsertButton key={`relation-${key}button`} value={key} onClick={() => handlerRemoveRelation(key)} type="button">
              <CloseIcon />
            </InsertButton>
          </Inline>
          <Space />
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
