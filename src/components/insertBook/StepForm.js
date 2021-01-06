import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Stepper, Step, StepLabel } from '@material-ui/core'
import { useMutation, gql } from '@apollo/client'
import { ThemeProvider } from '@material-ui/core/styles'

import {
  StepFormDiv, FormDiv, FormInsert, muiTheme,
} from './styleStepForm'
import SelectFile from './SelectFile'
import StepTwo from './StepTwo'
import ControlStep from './ControlStep'
import StepThree from './StepThree'
import StepFive from './StepFive'

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
      title: null,
      titleAlernative: null,
      creatorName: null,
      creatorOrganizationName: null,
      tableOfContents: null,
      summary: null,
      abstract: null,
      note: null,
      publisher: null,
      publisherEmail: null,
      contributor: null,
      contributorRole: null,
      issuedDate: null,
      coverageSpatial: null,
      coverageTemporalMonth: null,
      coverageTempooralYear: null,
      rights: null,
      rightsAccess: null,
      identifierUrl: null,
      identifierIsbn: null,
      source: null,
      relation: {},
      degreeName: null,
      degreeLevel: null,
      degreeDicipline: null,
      degreeGrantor: null,
      type: null,
      language: null,
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

  if (step === '4' && activeStep < 4) {
    setActiveStep(4)
  }

  const handlerBackStep = () => {
    setActiveStep((prevState) => prevState - 1)
    const value = getValues()
    setInformationForm({ ...informationForm, ...value })
  }

  const handlerNextStep = () => {
    setActiveStep((prevState) => prevState + 1)
  }

  const handlerRemoveRelation = (value) => {
    const tempRelation = informationForm.relation
    const keyRelation = value
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
        return <StepFive />
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

    if (activeStep === 2 && tempData.file) {
      const tempRelation = parseRelation(informationForm.relation)
      uploadFile({ variables: { file: informationForm.file } }).then((res) => {
        insertDocument({
          variables: {
            body: {
              startPage: tempData.startPage,
              addVersion: true,
              name: res.data.uploadDocument.filename,
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
    handlerNextStep()
  }

  const steps = getSteps()

  return (
    <StepFormDiv>
      <ThemeProvider theme={muiTheme}>
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </ThemeProvider>

      <FormDiv>
        <FormProvider register={register} handleSubmit={handleSubmit} setValue={setValue} getValues={getValues} control={control} errors={errors}>
          <FormInsert onSubmit={handleSubmit(handlerOnSubmit)}>
            {handlerActiveStep(activeStep)}
            <ControlStep handlerBackStep={handlerBackStep} handlerNextStep={handlerNextStep} active={!(activeStep >= 5)} disableBack={activeStep === 0 || activeStep === 4} disableNext={informationForm.file === null && activeStep <= 3} />
          </FormInsert>
        </FormProvider>
      </FormDiv>
    </StepFormDiv>
  )
}

export default StepForm
