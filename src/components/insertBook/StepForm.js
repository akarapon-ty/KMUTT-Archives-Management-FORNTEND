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
        encoding
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

  const INSERT = gql`
  mutation {
    addDocument(body: {
      addVersion: true,
      name: "A History of the Philippines2222",
      path: "/A History of the Philippines222",
      DC_relation: ["history", "philippines"],
      DC_type: ["text", "picture"],
      DC_title: "A History of the Philippines",
      DC_title_alternative: "foo",
      DC_description_table_of_contents: "foo",
      DC_description_summary_or_abstract: "foo",
      DC_description_note: "foo",
      DC_format: "foo",
      DC_format_extent: "foo",
      DC_identifier_URL: "foo",
      DC_identifier_ISBN: "foo",
      DC_source: "foo",
      DC_language: "foo",
      DC_coverage_spatial: "foo",
      DC_coverage_temporal: "foo",
      DC_rights: "foo",
      DC_rights_access: "foo",
      thesis_degree_name: "foo",
      thesis_degree_level: "foo",
      thesis_degree_discipline: "foo",
      thesis_degree_grantor: "foo",
      DC_creator: "foo",
      DC_creator_orgname: "foo",
      DC_publisher: "foo",
      DC_publisher_email: "foo",
      DC_contributor: "foo",
      DC_contributor_role: "foo",
      DC_issued_date: "1999-03-15",
    }) {
      status,
      message
    }
  }
  `

  const [uploadFile] = useMutation(UPLOAD_FILE)
  const [insertDocument, { error: mutationError }] = useMutation(INSERT_DOCUMENT)

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

  if (mutationError) {
    console.log(mutationError)
  }

  const handlerOnSubmit = (data) => {
    const tempData = { ...informationForm, ...data }
    setInformationForm({ ...informationForm, ...data })
    handlerNextStep()
    // api send to backend if activeStep = 2
    if (activeStep === 2) {
      uploadFile({ variables: { file: informationForm.file } })
      insertDocument({
        variables: {
          body: {
            DC_title: 'test',
            name: 'tests',
          },
        },
      }).then((res) => console.log(res)).catch((err) => console.log('error catch', err))
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
            <ControlStep handlerBackStep={handlerBackStep} handlerNextStep={handlerNextStep} active={!(activeStep >= 5)} disableBack={activeStep === 0} disableNext={informationForm.file === null} />
          </FormInsert>
        </FormProvider>
      </FormDiv>
    </StepFormDiv>
  )
}

export default StepForm
