import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Stepper, Step, StepLabel } from '@material-ui/core'

import SelectFile from './SelectFile'
import StepTwo from './StepTwo'
import { StepFormDiv, FormDiv, FormInsert } from './styleStepForm'
import ControlStep from './ControlStep'
import Test from './test'

import StepThree from './StepThree'

const StepForm = () => {
  const getSteps = () => ['Select file', 'Fill the data', 'Optional data', 'Waiting for upload', 'Correction', 'Edit tag']

  const fieldForm = () => (
    {
      startPage: 1,
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
  const [relation, setRelation] = useState({ 1: 'gsdg', 2: 'sdf' })

  const handlerBackStep = () => {
    setActiveStep((prevState) => prevState - 1)
    const value = getValues()
    setInformationForm({ ...informationForm, ...value })
  }

  const handlerNextStep = () => {
    setActiveStep((prevState) => prevState + 1)
  }
  // const handlerSetRelation = (e) => {
  //   console.log(relation)
  //   const tempRelation = { [e.target.name]: e.target.value }
  //   setRelation({ ...relation, tempRelation })
  // }

  const handlerRemoveRelation = (e) => {
    const tempRelation = relation
    const keyRelation = e.target.value
    delete tempRelation[keyRelation]
    setRelation({ ...tempRelation })
  }

  const handlerAddRelation = () => {
    if (Object.keys(relation).length === 0) {
      const newData = { 1: '', 2: '' }
      setRelation({ ...relation, ...newData })
    } else {
      const tempRelation = Object.keys(relation).length > 0 ? Object.keys(relation).sort() : ['1']
      const counter = parseInt(tempRelation[tempRelation.length - 1], 10) + 1
      const newData = { [counter]: '' }
      setRelation({ ...relation, ...newData })
    }
  }

  const handlerOnChangeRelation = (e) => {
    const temp = { [e.target.name]: e.target.value }
    setRelation({ ...relation, ...temp })
  }

  const handlerActiveStep = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <SelectFile value={informationForm} />
      case 1:
        return <StepTwo value={informationForm} />
      case 2:
        return <Test handlerAddRelation={handlerAddRelation} handlerOnChangeRelation={handlerOnChangeRelation} value={relation} handlerRemoveRelation={handlerRemoveRelation} />
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
    setInformationForm({ ...informationForm, ...data })
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
        <FormProvider register={register} handleSubmit={handleSubmit} setValue={setValue} getValues={getValues} control={control} errors={errors}>
          <FormInsert onSubmit={handleSubmit(handlerOnSubmit)}>
            {handlerActiveStep(activeStep)}
            <ControlStep handlerBackStep={handlerBackStep} handlerNextStep={handlerNextStep} active={!(activeStep >= 5)} disableBack={activeStep === 0} />
          </FormInsert>
        </FormProvider>
      </FormDiv>
    </StepFormDiv>
  )
}

export default StepForm
