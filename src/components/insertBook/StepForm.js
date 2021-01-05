import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Stepper, Step, StepLabel } from '@material-ui/core'
import { useMutation, gql } from '@apollo/client'

import SelectFile from './SelectFile'
import StepTwo from './StepTwo'
import { StepFormDiv, FormDiv, FormInsert } from './styleStepForm'
import ControlStep from './ControlStep'
import StepThree from './StepThree'

const StepForm = () => {
  const UPLOAD_FILE = gql`
    mutation uploadDocument($file: Upload!) {
      uploadDocument(file: $file) {
        filename,
        mimetype,
        encoding,
        pathFile,
      }
    }
  `

  const INSERT_DOCUMENT = gql`
    mutation addDocument($body: AddDocumentInput!) {
      addDocument(body: $body) {
        status,
        message
      }
    }
  `

  const [uploadFile] = useMutation(UPLOAD_FILE)
  const [insertDocument, { error: insertError }] = useMutation(INSERT_DOCUMENT)

  const getSteps = () => ['Select file', 'Fill the data', 'Optional data', 'Waiting for upload', 'Correction', 'Edit tag']

  const fieldForm = () => (
    {
      startPage: 1,
      file: null,
      title: '',
      titleAlernative: '',
      creatorName: '',
      creatorOrganizationName: '',
      tableOfContents: '',
      summary: '',
      abstract: '',
      note: '',
      publisher: '',
      publisherEmail: '',
      contributor: '',
      contributorRole: '',
      issuedDate: '',
      coverageSpatial: '',
      coverageTemporalMonth: '',
      coverageTempooralYear: '',
      rights: '',
      rightsAccess: '',
      identifierUrl: '',
      identifierIsbn: '',
      source: '',
      relation: {},
      degreeName: '',
      degreeLevel: '',
      degreeDicipline: '',
      degreeGrantor: '',
      type: '',
      language: '',
    }
  )

  const {
    register, handleSubmit, setValue, getValues, control, errors,
  } = useForm()

  const [activeStep, setActiveStep] = useState(0)
  const [informationForm, setInformationForm] = useState(fieldForm)

  const params = new URLSearchParams(window.location.search)
  const step = params.get('step')
  const idDocument = params.get('id')

  if (step === '3' && activeStep !== 3) {
    setActiveStep(3)
  }

  const handlerBackStep = () => {
    setActiveStep((prevState) => prevState - 1)
    const value = getValues()
    setInformationForm({ ...informationForm, ...value })
  }

  const handlerNextStep = () => {
    setActiveStep((prevState) => prevState + 1)
  }

  const handlerRemoveRelation = (e) => {
    const tempRelation = informationForm.relation
    const keyRelation = e.target.value
    delete tempRelation[keyRelation]
    setInformationForm({ ...informationForm, relation: tempRelation })
  }

  const handlerAddRelation = () => {
    let newData = null
    if (Object.keys(informationForm.relation).length === 0) {
      newData = { 1: '', 2: '' }
    } else {
      const tempRelation = Object.keys(informationForm.relation).length > 0 ? Object.keys(informationForm.relation).sort() : ['1']
      const counter = parseInt(tempRelation[tempRelation.length - 1], 10) + 1
      newData = { ...informationForm.relation, [counter]: '' }
    }
    setInformationForm({ ...informationForm, relation: newData })
  }

  const handlerOnChangeRelation = (e) => {
    const tempRelation = informationForm.relation
    const temp = { ...tempRelation, [e.target.name]: e.target.value }
    setInformationForm({ ...informationForm, relation: temp })
  }

  const handleUploadFile = (files) => {
    const validTypes = 'application/pdf'
    const inputFile = files
    if (inputFile) {
      if (validTypes === inputFile.type) {
        setInformationForm({ ...informationForm, file: inputFile })
      }
    }
  }

  const handlerDeleteUploadFile = () => {
    setInformationForm({ ...informationForm, file: null })
  }

  const handlerActiveStep = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <SelectFile value={informationForm} handleUploadFile={handleUploadFile} handlerDeleteUploadFile={handlerDeleteUploadFile} />
      case 1:
        return <StepTwo value={informationForm} />
      case 2:
        return <StepThree handlerAddRelation={handlerAddRelation} handlerOnChangeRelation={handlerOnChangeRelation} value={informationForm} handlerRemoveRelation={handlerRemoveRelation} />
      case 3:
        return null
      case 4:
        return null
      case 5:
        return null
      default:
        return null
    }
  }

  const parseRelation = (relation) => {
    const result = []
    Object.keys(relation).map((value) => result.push(value))
    return result
  }

  if (insertError) {
    window.console.log('mutationError:', insertError)
  }

  const handlerOnSubmit = (data) => {
    const tempData = { ...informationForm, ...data }
    setInformationForm({ ...informationForm, ...data })
    handlerNextStep()

    if (activeStep === 2 && tempData.file) {
      const tempRelation = parseRelation(informationForm.relation)
      uploadFile({ variables: { file: informationForm.file } }).then((res) => {
        insertDocument({
          variables: {
            body: {
              startPage: tempData.startPage,
              addVersion: false,
              name: tempData.title,
              path: res.data.uploadDocument.pathFile,
              DC_relation: tempRelation,
              DC_type: tempData.type,
              DC_title: tempData.title,
              DC_title_alternative: tempData.titleAlernative,
              DC_description_table_of_contents: tempData.tableOfContents,
              DC_description_summary_or_abstract: tempData.summary,
              DC_description_note: tempData.note,
              DC_format: 'pdf',
              DC_format_extent: '',
              DC_identifier_URL: tempData.identifierUrl,
              DC_identifier_ISBN: tempData.identifierIsbn,
              DC_source: tempData.source,
              DC_language: tempData.language,
              DC_coverage_spatial: tempData.coverageSpatial,
              DC_coverage_temporal: tempData.coverageTemporalMonth,
              DC_rights: tempData.rights,
              DC_rights_access: tempData.rightsAccess,
              thesis_degree_name: tempData.degreeName,
              thesis_degree_level: tempData.degreeLevel,
              thesis_degree_discipline: tempData.degreeDicipline,
              thesis_degree_grantor: tempData.degreeGrantor,
              DC_creator: tempData.creatorName,
              DC_creator_orgname: tempData.creatorOrganizationName,
              DC_publisher: tempData.publisher,
              DC_publisher_email: tempData.publisherEmail,
              DC_contributor: tempData.contributor,
              DC_contributor_role: tempData.contributorRole,
              DC_issued_date: tempData.issuedDate,
            },
          },
        })
      })
        .catch((err) => window.console.log(err))
    }
  }

  const steps = getSteps()

  return (
    <StepFormDiv>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <FormDiv>
        <FormProvider register={register} handleSubmit={handleSubmit} setValue={setValue} getValues={getValues} control={control} errors={errors}>
          <FormInsert onSubmit={handleSubmit(handlerOnSubmit)}>
            {handlerActiveStep(activeStep)}
            <ControlStep handlerBackStep={handlerBackStep} handlerNextStep={handlerNextStep} active={!(activeStep >= 5 || activeStep === 3)} disableBack={activeStep === 0} disableNext={informationForm.file === null} />
          </FormInsert>
        </FormProvider>
      </FormDiv>
    </StepFormDiv>
  )
}

export default StepForm
