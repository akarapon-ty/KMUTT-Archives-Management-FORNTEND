import React from 'react'

import CloseIcon from '@material-ui/icons/Close'

import {
  Space, InsertButton, Inline, LeftRightBox,
} from '../insertBook/css/styleAll'
import { InputFormat } from '../insertBook/InputField'
import { SelectorFormat } from '../insertBook/InputSelector'
import { MultiInputFormat } from '../insertBook/MultiInputField'
import SearchCard from '../search/searchCard/SearchCard'

const StepTwo = (props) => {
  const {
    value, handlerAddRelation, handlerRemoveRelation, handleOnChangeRelation,
  } = props

  const {
    title,
    creator,
    coverageTemporal,
    identifierURL,
    identifierISBN,
    source,
    relation,
    thesisDegreeName,
    thesisDegreeLevel,
    thesisDegreeDiscipline,
    thesisDegreeGrantor,
    type,
    language,
    tag,
    image,
  } = value

  const selectLan = [{
    val: 'Thai',
    lab: 'Thai',
    selected: language === 'Thai' ? 'selected' : null,
  }, {
    val: 'Eng',
    lab: 'Eng',
    selected: language === 'Eng' ? 'selected' : null,
  },
  ]
  const selectType = [{
    val: 'Text',
    lab: 'Text',
  },
  ]

  return (
    <>
      <SearchCard title={title} creator={creator} coverageTemporal={coverageTemporal} tag={tag} image={image} />

      <h5>Identifier</h5>
      <InputFormat inputDefault={identifierURL} inputLabel="Identifier URL" inputName="identifierURL" />
      <InputFormat inputDefault={identifierISBN} inputLabel="Identifier ISBN" inputName="identifierISBN" />
      <h5>Source</h5>
      <InputFormat inputDefault={source} inputLabel="Source" inputName="source" />
      <LeftRightBox>
        <h5>Relation</h5>
        <InsertButton type="button" name="addRelation" onClick={() => handlerAddRelation()}>+ ADD</InsertButton>
      </LeftRightBox>
      {relation.map((key, index) => (
        <React.Fragment key={`divrelation-${index * 5}`}>
          <Inline long>
            <MultiInputFormat
              handleOnChangeRelation={handleOnChangeRelation}
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
        </React.Fragment>
      ))}
      <h5>Thesis</h5>
      <InputFormat inputDefault={thesisDegreeName} inputLabel="Degree Name" inputName="thesisDegreeName" />
      <InputFormat inputDefault={thesisDegreeLevel} inputLabel="Degree Level" inputName="thesisDegreeLevel" />
      <InputFormat inputDefault={thesisDegreeDiscipline} inputLabel="Degree Dicipline" inputName="thesisDegreeDiscipline" />
      <InputFormat inputDefault={thesisDegreeGrantor} inputLabel="Degree Grantor" inputName="thesisDegreeGrantor" />

      <h5>Type</h5>
      <SelectorFormat inputDefault={type[0]} inputLabel="Type" inputName="type" options={selectType} />
      <h5>Language</h5>
      <SelectorFormat inputDefault={language} inputLabel="Language" inputName="language" options={selectLan} />
      <Space />
    </>

  )
}

export default StepTwo
