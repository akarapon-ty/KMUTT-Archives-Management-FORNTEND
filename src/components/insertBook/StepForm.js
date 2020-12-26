import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Stepper, Step, StepLabel } from '@material-ui/core'

import SelectFile from './SelectFile'
import StepTwo from './StepTwo'
import { StepFormDiv, FormDiv, FormInsert } from './styleStepForm'
import ControlStep from './ControlStep'
import StepThree from './StepThree'

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
    register, handleSubmit, setValue, getValues,
  } = useForm()

  const [startPage, setStartPage] = useState(1)
  const [activeStep, setActiveStep] = useState(0)
  const [informationForm, setInformationForm] = useState(fieldForm)
  // const [relation, setRelation] = useState({})

  const handlerStartPage = (e) => {
    const pageValue = e.target.value && e.target.value > 0 ? parseInt(e.target.value, 10) : 1
    setStartPage(pageValue)
  }

  const handlerBackStep = () => {
    setActiveStep((prevState) => prevState - 1)
  }

  const handlerNextStep = () => {
    setActiveStep((prevState) => prevState + 1)
  }
  // const handlerSetRelation = (e) => {
  //   console.log(relation)
  //   const tempRelation = { [e.target.name]: e.target.value }
  //   setRelation({ ...relation, tempRelation })
  // }

  const handlerActiveStep = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <SelectFile handlerStartPage={handlerStartPage} startPage={startPage} />
      case 1:
        return <StepTwo value={informationForm} />
      case 2:
        return <StepThree value={informationForm} />
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
    window.console.log(data)
    if (activeStep === 0) {
      setInformationForm({ ...informationForm, startPage })
    } else {
      setInformationForm({ ...informationForm, ...data })
    }
    handlerNextStep()
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
            <ControlStep handlerStep={handlerBackStep} active={!(activeStep >= 5)} disableBack={activeStep === 0} />
          </FormInsert>
        </FormProvider>
      </FormDiv>
    </StepFormDiv>
  )
}

export default StepForm
