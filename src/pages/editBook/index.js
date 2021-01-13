import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { useForm, FormProvider } from 'react-hook-form'

import { FormInsert, Edit } from './style'
import DefaultLayoutStyle from '../../components/util/LayoutStyle'
import StepOne from '../../components/editBook/StepOne'
import StepTwo from '../../components/editBook/StepTwo'
import StepThree from '../../components/editBook/StepThree'

import ControlStep from '../../components/editBook/ControlStep'

const EditBook = (props) => {
  const {
    register, handleSubmit, setValue, getValues, control, errors,
  } = useForm()
  const documentId = 4
  const QUERY_DOCUMENT_BY_ID = gql`
    query document($pk: Int!){
        document(pk: $pk) {
          statusQuery,
          document{
          title,
          titleAlternative,
          tableOfContents,
          abstract,
          note,
          format,
          formatExtent,
          identifierURL,
          identifierISBN,
          source,
          language,
          coverageSpatial,
          coverageTemporal,
          coverageTemporalYear,
          rights,
          rightsAccess,
          thesisDegreeName,
          thesisDegreeLevel,
          thesisDegreeDiscipline,
          thesisDegreeGrantor,
          recCreateAt,
          recCreateBy,
          recModifiedAt,
          recModifiedBy,
          keyword,
          relation,
          type,
          creator,
          creatorOrgName,
          publisher,
          publisherEmail,
          contributor,
          contributorEmail,
          issuedDate,
        }}
    }`

  const defaultInformation = {
    title: '',
    titleAlternative: '',
    tableOfContents: '',
    abstract: '',
    note: '',
    format: '',
    formatExtent: '',
    identifierURL: '',
    identifierISBN: '',
    source: '',
    language: '',
    coverageSpatial: '',
    coverageTemporal: '',
    coverageTemporalYear: '',
    rights: '',
    rightsAccess: '',
    thesisDegreeName: '',
    thesisDegreeLevel: '',
    thesisDegreeDiscipline: '',
    thesisDegreeGrantor: '',
    recCreateAt: '',
    recCreateBy: '',
    recModifiedAt: '',
    recModifiedBy: '',
    keyword: '',
    relation: '',
    type: '',
    creator: '',
    creatorOrgName: '',
    publisher: '',
    publisherEmail: '',
    contributor: '',
    contributorEmail: '',
    issuedDate: '',
  }
  const [newInformation, setNewInformation] = useState(defaultInformation)
  const [activeStep, setActiveStep] = useState(0)
  const [tagMockupData, setTagData] = useState({ 1: 'tag1', 2: 'tag2' })

  const setData = (dataQuery) => {
    window.console.log('Data nu :', dataQuery)

    setNewInformation(dataQuery)
  }

  const { data: oldData, loading: oldDataLoading, error: oldDataError } = useQuery(QUERY_DOCUMENT_BY_ID, { variables: { pk: documentId }, onCompleted: ({ document }) => setData(document.document) })

  const handlerOnSubmit = (data) => {
    const tempData = { ...newInformation, ...data }
    setNewInformation({ ...newInformation, ...data })
  }

  if (oldDataLoading) {
    return null
  }
  window.console.log(oldData)
  if (oldDataError) {
    window.console.log('oldData error', oldDataError)
    return (
      null
    )
  }
  const handlerBackStep = () => {
    setActiveStep((prevState) => prevState - 1)
    window.console.log('acst', activeStep)
  }

  const handlerNextStep = () => {
    setActiveStep((prevState) => prevState + 1)
    window.console.log('backst', activeStep)
  }

  const handlerRemoveRelation = (value) => {
    const tempRelation = newInformation.relation
    const keyRelation = value
    delete tempRelation[keyRelation]
    setNewInformation({ ...newInformation, relation: tempRelation })
  }

  const handlerAddRelation = () => {
    let newData = null
    if (Object.keys(newInformation.relation).length === 0) {
      newData = { 1: '', 2: '' }
    } else {
      const tempRelation = Object.keys(newInformation.relation).length > 0 ? Object.keys(newInformation.relation).sort() : ['1']
      const counter = parseInt(tempRelation[tempRelation.length - 1], 10) + 1
      newData = { ...newInformation.relation, [counter]: '' }
    }
    setNewInformation({ ...newInformation, relation: newData })
  }

  const handlerOnChangeRelation = (e) => {
    const tempRelation = newInformation.relation
    const temp = { ...tempRelation, [e.target.name]: e.target.value }
    setNewInformation({ ...newInformation, relation: temp })
  }

  const handlerAddTag = () => {
    let newData = null
    const tagAddValue = getValues('Tag / Keyword')
    if (tagAddValue) {
      const tempTag = Object.keys(tagMockupData).length > 0 ? Object.keys(tagMockupData).sort() : ['0']
      const counter = parseInt(tempTag[tempTag.length - 1], 10) + 1
      newData = { ...tagMockupData, [counter]: tagAddValue }
      setValue('Tag / Keyword', '')

      window.console.log('tag', tagMockupData)
      window.console.log('tag mock::', tempTag)
      window.console.log('tag mock2::', newData)

      setTagData(newData)
    }
  }

  const handlerRemoveTag = (key) => {
    window.console.log('remove tag hello', key)

    const tempTag = { ...tagMockupData }
    const keyTag = key
    delete tempTag[keyTag]

    setTagData(tempTag)
  }

  const handlerOnChangeTag = (e) => {
    const tempTag = tagMockupData
    const temp = { ...tempTag, [e.target.name]: e.target.value }
    setTagData({ ...tagMockupData, temp })
  }

  const handlerActiveStep = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <StepOne value={newInformation} />
      case 1:
        return <StepTwo handlerAddRelation={handlerAddRelation} handlerOnChangeRelation={handlerOnChangeRelation} value={newInformation} handlerRemoveRelation={handlerRemoveRelation} />

      default:
        return <StepThree handlerAddTag={handlerAddTag} handlerOnChangeTag={handlerOnChangeTag} value={tagMockupData} handlerRemoveTag={handlerRemoveTag} />
    }
  }

  return (
    <>
      <FormProvider register={register} handleSubmit={handleSubmit} setValue={setValue} getValues={getValues} control={control} errors={errors}>
        <FormInsert onSubmit={handleSubmit(handlerOnSubmit)}>
          <h3>Edit Book</h3>
          <DefaultLayoutStyle>
            <Edit>
              {handlerActiveStep(activeStep)}
              <ControlStep
                handlerBackStep={handlerBackStep}
                handlerNextStep={handlerNextStep}
                show
                disableBack={activeStep === 0}
                disableNext={activeStep === 2}
              />
            </Edit>

          </DefaultLayoutStyle>
        </FormInsert>
      </FormProvider>
    </>
  )
}

export default EditBook
