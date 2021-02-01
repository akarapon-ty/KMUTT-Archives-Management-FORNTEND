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
    identifierUrl, identifierIsbn, source, degreeName, relation, degreeLevel, degreeDicipline, degreeGrantor, type, language,
  } = value

  const relationTemp = relation.length === 0 ? [''] : relation

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
      {relationTemp.map((key, index) => (
        <div key={`div-${index * 5}`}>
          <Inline long>
            <MultiInputFormat
              handleOnChangeRelation={handlerOnChangeRelation}
              inputDefault={key}
              name={key}
              index={index}
              key={`relation-${index * 5}input`}
              inputLabel="Relation"
            />
            <InsertButton key={`relation-${index * 5}button`} value={key} onClick={() => handlerRemoveRelation(index)} type="button">
              <CloseIcon />
            </InsertButton>
          </Inline>
          <Space />
        </div>
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
