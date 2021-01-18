import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { useForm, FormProvider } from 'react-hook-form'

import { FormInsert, Edit } from './style'
import DefaultLayoutStyle from '../../components/util/LayoutStyle'
import StepOne from '../../components/editBook/StepOne'
import StepTwo from '../../components/editBook/StepTwo'
import StepThree from '../../components/editBook/StepThree'

import ControlStep from '../../components/editBook/ControlStep'

const EditBook = () => {
  const {
    register, handleSubmit, setValue, getValues, control, errors,
  } = useForm()
  const params = new URLSearchParams(window.location.search)
  if (!params.get('id')) {
    window.location.replace('/homepage')
  }
  const documentId = parseInt(params.get('id'), 10)

  const QUERY_DOCUMENT_BY_ID = gql`
    query document($pk: Int!){
        document(pk: $pk) {
          statusQuery,
          document{
          title,
          titleAlternative,
          tableOfContents,
          abstract,
          summary,
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
          tag,
          relation,
          type,
          creator,
          creatorOrgName,
          publisher,
          publisherEmail,
          contributor,
          contributorRole,
          issuedDate,
          image
        }}
    }`

  const defaultInformation = {
    title: '',
    titleAlternative: '',
    tableOfContents: '',
    abstract: '',
    summary: '',
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
    tag: [''],
    relation: [''],
    type: '',
    creator: '',
    creatorOrgName: '',
    publisher: '',
    publisherEmail: '',
    contributor: '',
    contributorRole: '',
    issuedDate: '',
    image: '',
  }

  const [newInformation, setNewInformation] = useState(defaultInformation)
  const [activeStep, setActiveStep] = useState(0)

  const setData = (dataQuery) => {
    const TempQuery = { ...dataQuery }
    if (TempQuery.relation.length === 0) {
      TempQuery.relation = ['']
    }
    setNewInformation(TempQuery)
  }

  const { loading: documentDataLoading, error: documentDataError } = useQuery(QUERY_DOCUMENT_BY_ID, {
    variables: { pk: documentId },
    onCompleted: ({ document }) => setData(document.document),
  })

  const handlerOnSubmit = (data) => {
    setNewInformation({ ...newInformation, ...data })
  }

  if (documentDataLoading) {
    return null
  }

  if (documentDataError) {
    window.console.log('oldData error', documentDataError)
    return null
  }
  const handlerBackStep = () => {
    setActiveStep((prevState) => prevState - 1)
    const tempValue = getValues()
    setNewInformation({ ...newInformation, ...tempValue })
  }

  const handlerNextStep = () => {
    setActiveStep((prevState) => prevState + 1)
    const tempValue = getValues()
    setNewInformation({ ...newInformation, ...tempValue })
  }

  const handlerRemoveRelation = (index) => {
    const tempTag = [...newInformation.relation]
    tempTag.splice(index, 1)
    setNewInformation({ ...newInformation, relation: tempTag })
  }

  const handlerAddRelation = () => {
    let newData = [...newInformation.relation]
    if (newInformation.relation.length === 0) {
      newData = ['', '']
    } else {
      newData.push('')
    }
    setNewInformation({ ...newInformation, relation: newData })
  }

  const handlerAddTag = () => {
    const tagAddValue = getValues('Tag / Keyword')
    const tempTag = [...newInformation.tag]
    let alreadyKeyword = false
    tempTag.map((temp) => {
      if (temp === tagAddValue) {
        alreadyKeyword = true
      }
      return { }
    })
    if (!alreadyKeyword) {
      tempTag.push(tagAddValue)
      setNewInformation({ ...newInformation, tag: tempTag })
    }
    setValue('Tag / Keyword', '')
  }

  const handlerRemoveTag = (key) => {
    const tempTag = [...newInformation.tag]
    tempTag.splice(key, 1)
    setNewInformation({ ...newInformation, tag: tempTag })
  }

  const handlerActiveStep = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <StepOne value={newInformation} />
      case 1:
        return <StepTwo handlerAddRelation={handlerAddRelation} value={newInformation} handlerRemoveRelation={handlerRemoveRelation} />
      default:
        return <StepThree handlerAddTag={handlerAddTag} value={newInformation} handlerRemoveTag={handlerRemoveTag} />
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
