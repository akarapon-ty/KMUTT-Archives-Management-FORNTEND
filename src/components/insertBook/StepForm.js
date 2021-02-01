import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Stepper, Step, StepLabel } from '@material-ui/core'
import { useMutation, gql } from '@apollo/client'
import { ThemeProvider } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

import {
  StepFormDiv, FormDiv, FormInsert, muiTheme,
} from './styleStepForm'
import SelectFile from './SelectFile'
import StepTwo from './StepTwo'
import ControlStep from './ControlStep'
import StepThree from './StepThree'
import StepFour from './StepFour'
import StepFive from './StepFive'
import StepSix from './StepSix'
import StepSeven from './StepSeven'

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
        message,
        documentId,
      }
    }
  `

  const INSERT_TERM = gql`
    mutation overridePerterm($newInformation: InputSeleceOverridePerterm!, $documentId: Int!){
      overridePerterm(newInformation: $newInformation, documentId: $documentId){
        overidestatus,
        addNewStatus{
          pageIndex,
          documentId,
          status
        }
      }
    }
  `

  const STRAT_GENERATETAG = gql`
    mutation startTfDjango($documentId: Int!){
      startTfDjango(documentId: $documentId){
        status,
        message
      }
    }
  `

  const INSERT_USERKEYWORD = gql`
    mutation overrideUserKeyword($keywords: [String]!, $documentId: Int!){
      overrideUserKeyword(keywords: $keywords, documentId: $documentId){
        status,
        message
      }
    }
  `

  const UPDATE_STATUS = gql`
    mutation putDocumentDone($documentID: Int!){
      putDocumentDone(documentID: $documentID)
    }
  `

  const getSteps = () => ['Select file', 'Fill the data', 'Optional data', 'Waiting for upload', 'Correction', 'Waiting for tag', 'Edit tag']

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
      relation: [''],
      degreeName: null,
      degreeLevel: null,
      degreeDicipline: null,
      degreeGrantor: null,
      type: null,
      language: null,
    }
  )

  const history = useHistory()
  const params = new URLSearchParams(window.location.search)
  const step = params.get('step')
  const docId = parseInt(params.get('id'), 10)

  const [tagData, setTagData] = useState(null)
  const [activeStep, setActiveStep] = useState(0)
  const [informationForm, setInformationForm] = useState(fieldForm)
  const [termAll, setTermAll] = useState({})
  const [pageNumber, setPageNumber] = useState(0)
  const [tempPageNumber, setTempPageNumber] = useState(0)
  const [limitPage, setLimitPage] = useState(0)
  const [limitPageStart, setLimitPageStart] = useState(0)
  const [insertTermID, setinsertTermID] = useState(1)

  const [uploadFile] = useMutation(UPLOAD_FILE)
  const [insertDocument, { error: insertDocumentError }] = useMutation(INSERT_DOCUMENT)
  const [insertTerm, { error: insertTermError }] = useMutation(INSERT_TERM)
  const [startTfIdf, { error: startTfIdfError }] = useMutation(STRAT_GENERATETAG)
  const [insertTag] = useMutation(INSERT_USERKEYWORD)
  const [updateStatus] = useMutation(UPDATE_STATUS)

  const {
    register, handleSubmit, setValue, getValues, control, errors,
  } = useForm()

  if (step === '4' && activeStep < 3) {
    setActiveStep(3)
  }

  if (step === '5' && activeStep < 4) {
    setActiveStep(4)
  }

  if (step === '6' && activeStep < 5) {
    setActiveStep(5)
  }

  if (step === '7' && activeStep < 6) {
    setActiveStep(6)
  }

  const handlerBackStep = () => {
    setActiveStep((prevState) => prevState - 1)
    const value = getValues()
    setInformationForm({ ...informationForm, ...value })
  }

  const handlerNextStep = () => {
    setActiveStep((prevState) => prevState + 1)
  }

  const handlerAddTag = () => {
    const tagAddValue = getValues('Tag / Keyword')
    const tempTag = [...tagData]
    let alreadyKeyword = false
    tempTag.map((temp) => {
      if (temp === tagAddValue) {
        alreadyKeyword = true
      }
      return { }
    })
    if (!alreadyKeyword) {
      tempTag.push(tagAddValue)
      setTagData(tempTag)
    }
    setValue('Tag / Keyword', '')
  }

  const handlerRemoveTag = (key) => {
    const tempTag = [...tagData]
    tempTag.splice(key, 1)
    setTagData(tempTag)
  }

  const handlerRemoveRelation = (index) => {
    const tempTag = [...informationForm.relation]
    tempTag.splice(index, 1)
    setInformationForm({ ...informationForm, relation: tempTag })
  }

  const handlerAddRelation = () => {
    let newData = [...informationForm.relation]
    if (newData.length === 0) {
      newData = ['', '']
    } else {
      newData.push('')
    }
    setInformationForm({ ...informationForm, relation: newData })
  }

  const handlerOnChangeRelation = (index, value) => {
    const temp = [...informationForm.relation]
    temp[index] = value
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
        return <StepFour docId={docId} />
      case 4:
        return (
          <StepFive
            termAll={termAll}
            setTermAll={setTermAll}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            insertTermID={insertTermID}
            setinsertTermID={setinsertTermID}
            limitPage={limitPage}
            setLimitPage={setLimitPage}
            limitPageStart={limitPageStart}
            setLimitPageStart={setLimitPageStart}
            tempPageNumber={tempPageNumber}
            setTempPageNumber={setTempPageNumber}
          />
        )
      case 5:
        return <StepSix docId={docId} />
      case 6:
        return <StepSeven handlerAddTag={handlerAddTag} value={tagData} handlerRemoveTag={handlerRemoveTag} docId={docId} setTagData={setTagData} />
      default:
        return null
    }
  }

  if (insertDocumentError) {
    window.console.log('mutationDocumentError:', insertDocumentError)
  }

  if (insertTermError) {
    window.console.log('mutationTermError:', insertTermError)
  }

  if (startTfIdfError) {
    window.console.log('mutationStartTfError:', startTfIdfError)
  }

  const handlerSubmitInsertDocument = (tempData) => {
    uploadFile({ variables: { file: informationForm.file } }).then((res) => {
      insertDocument({
        variables: {
          body: {
            startPage: parseInt(tempData.startPage, 10),
            addVersion: false,
            name: res.data.uploadDocument.filename,
            path: res.data.uploadDocument.pathFile,
            DC_relation: tempData.relation,
            DC_type: [tempData.type],
            DC_title: tempData.title,
            DC_title_alternative: tempData.titleAlernative,
            DC_description_table_of_contents: tempData.tableOfContents,
            DC_description_summary: tempData.summary,
            DC_description_abstract: tempData.abstract,
            DC_description_note: tempData.note,
            DC_format: 'pdf',
            DC_format_extent: '',
            DC_identifier_URL: tempData.identifierUrl,
            DC_identifier_ISBN: tempData.identifierIsbn,
            DC_source: tempData.source,
            DC_language: tempData.language,
            DC_coverage_spatial: tempData.coverageSpatial,
            DC_coverage_temporal: tempData.coverageTemporalMonth,
            DC_coverage_temporal_year: tempData.coverageTempooralYear,
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
      }).then((result) => {
        history.push(`/insertbook?step=4&id=${result.data.addDocument.documentId}`)
      })
        .catch((err) => window.console.log(err))
    })
      .catch((err) => window.console.log(err))
  }

  const parseTerms = () => {
    const tempTerms = { ...termAll }
    const resultOverRide = []
    const resultNewPage = []
    Object.keys(tempTerms).map((page) => {
      const tokens = []
      Object.keys(tempTerms[page]).map((term) => {
        if (term === 'pageId' || term === 'pageNumber') {
          return { }
        }
        const resultToken = tempTerms[page][term].inputTerm === '' ? null : tempTerms[page][term].inputTerm
        tokens.push(resultToken)
        return { }
      })
      if (tempTerms[page].pageId === -1) {
        resultNewPage.push({ pageIndex: tempTerms[page].pageNumber, token: tokens })
      } else {
        resultOverRide.push({ pageId: tempTerms[page].pageId, token: tokens })
      }
      return { }
    })
    return { overide: resultOverRide, newPage: resultNewPage }
  }

  const handlerSubmitUpdateTerm = () => {
    const result = parseTerms()
    insertTerm({ variables: { newInformation: result, documentId: docId } })
      .catch((err) => window.console.log(err))
      .then(() => startTfIdf({ variables: { documentId: docId } }))
      .then(() => setTimeout(() => {
        history.push(`/insertbook?step=6&id=${docId}`)
      }, 2000))
  }

  const handlerSubmitUpdateKeyword = () => {
    insertTag({
      variables: {
        documentId: docId,
        keywords: tagData,
      },
    }).then(() => updateStatus({ variables: { documentID: docId } })).then(() => window.location.replace('/homepage'))
  }

  const handlerOnSubmit = (data) => {
    const tempData = { ...informationForm, ...data }
    setInformationForm({ ...informationForm, ...data })
    if (activeStep === 2 && tempData.file) {
      handlerSubmitInsertDocument(tempData)
      return
    }

    if (activeStep === 4) {
      handlerSubmitUpdateTerm()
      return
    }

    if (activeStep === 6) {
      handlerSubmitUpdateKeyword()
      return
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
            <ControlStep
              handlerBackStep={handlerBackStep}
              handlerNextStep={handlerNextStep}
              active={!(activeStep >= 6)}
              show={!(activeStep === 3 || activeStep === 5)}
              disableBack={activeStep === 0 || activeStep >= 4}
              disableNext={informationForm.file === null && activeStep <= 3}
              activeStep={activeStep}
              finish={activeStep === 6}
            />
          </FormInsert>
        </FormProvider>
      </FormDiv>
    </StepFormDiv>
  )
}

export default StepForm
