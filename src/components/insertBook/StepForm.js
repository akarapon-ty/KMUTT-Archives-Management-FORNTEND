import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Stepper, Step, StepLabel } from '@material-ui/core'

import SelectFile from './SelectFile'
import { StepFormDiv, FormDiv, FormInsert } from './styleStepForm'
import ControlStep from './ControlStep'

const StepForm = () => {
  const getSteps = () => ['Select file', 'Fill the data', 'Optional data', 'Waiting for upload', 'Correction', 'Edit tag']

  const fieldForm = () => (
    {
      startPage: '',
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
      relation: [],
      degreeName: '',
      degreeLevel: '',
      degreeDicipline: '',
      degreeGrantor: '',
      type: '',
      language: '',
    }
  )

  const {
    register, handleSubmit, setValue, getValues,
  } = useForm()

  const [startPage, setStartPage] = useState(1)
  const [activeStep, setActiveStep] = useState(0)
  const [informationForm, setInformationForm] = useState(fieldForm)

  const handlerStartPage = (e) => {
    const pageValue = e.target.value && e.target.value > 0 ? parseInt(e.target.value, 10) : 1
    setStartPage(pageValue)
  }

  const handlerStep = (action) => {
    if (action === 'back') {
      setActiveStep((prevState) => prevState - 1)
    } else {
      setActiveStep((prevState) => prevState + 1)
    }
  }

  const handlerActiveStep = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <SelectFile handlerStartPage={handlerStartPage} />
      case 1:
        return null
      case 2:
        return null
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

  const handlerOnSubmit = (data) => {
    console.log(data)
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
        <FormProvider register={register} handleSubmit={handleSubmit} setValue={setValue} getValues={getValues}>
          <FormInsert onSubmit={handleSubmit(handlerOnSubmit)}>
            {handlerActiveStep(activeStep)}
            <ControlStep handlerStep={handlerStep} active={!(activeStep >= 5)} />
          </FormInsert>
        </FormProvider>
      </FormDiv>
    </StepFormDiv>
  )
}

export default StepForm
