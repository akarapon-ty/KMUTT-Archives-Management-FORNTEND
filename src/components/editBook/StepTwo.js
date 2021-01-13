import React from 'react'
import PropTypes from 'prop-types'
import CloseIcon from '@material-ui/icons/Close'

import {
  Space, InsertButton, Inline, LeftRightBox,
} from '../insertBook/styleAll'
import { InputFormat } from '../insertBook/InputField'
import { SelectorFormat } from '../insertBook/InputSelector'
import { MultiInputFormat } from '../insertBook/MultiInputField'
import { SearchResult } from '../search'

const StepTwo = (props) => {
  const {
    value, handlerOnChangeRelation, handlerAddRelation, handlerRemoveRelation,
  } = props
  const {
    title,
    creatorName,
    coverageTemporalMonth,
    identifierURL,
    identifierISBN,
    source,
    relation,
    degreeName,
    degreeLevel,
    degreeDicipline,
    degreeGrantor,
    type,
    language,

  } = value
  const relationValue = relation.length > 0 ? relation : ['']

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
      <SearchResult title={title} creator={creatorName} coverageTemporal={coverageTemporalMonth} tag={[]} />
      <h5>Identifier</h5>
      <InputFormat inputDefault={identifierURL} inputLabel="Identifier URL" inputName="identifierUrl" />
      <InputFormat inputDefault={identifierISBN} inputLabel="Identifier ISBN" inputName="identifierIsbn" />
      <h5>Source</h5>
      <InputFormat inputDefault={source} inputLabel="Source" inputName="source" />
      <LeftRightBox>
        <h5>Relation</h5>
        <InsertButton type="button" name="addRelation" onClick={() => handlerAddRelation()}>+ ADD</InsertButton>
      </LeftRightBox>
      {relationValue.map((key) => (
        <div key={`div-${key}`}>
          <Inline long>
            <MultiInputFormat
              onChange={handlerOnChangeRelation}
              inputdefault={key}
              value={key}
              name={key}
              key={`relation-${key}input`}
              inputLabel="Relation"
            />
            <InsertButton key={`relation-${key}button`} value={key} onClick={() => handlerRemoveRelation(key)} type="button">
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

InputFormat.defaultProps = {
  identifierURL: '',
  identifierISBN: '',
  source: '',
  relation: [''],
  degreeName: '',
  degreeLevel: '',
  degreeDicipline: '',
  degreeGrantor: '',
  type: [''],
  language: '',
}

InputFormat.propTypes = {
  identifierURL: PropTypes.string,
  identifierISBN: PropTypes.string,
  source: PropTypes.string,
  relation: PropTypes.arrayOf[PropTypes.string],
  degreeName: PropTypes.string,
  degreeLevel: PropTypes.string,
  degreeDicipline: PropTypes.string,
  degreeGrantor: PropTypes.string,
  type: PropTypes.arrayOf[PropTypes.string],
  language: PropTypes.string,

}

export default StepTwo
