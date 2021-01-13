import React from 'react'
import { useQuery, gql } from '@apollo/client'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

import {
  ContainerPicture, ImagePage, ContainerOptions, ContainerWord, ControlPage, InputPage, PageButton, LabelPage,
} from './styleStepFive'
import {
  InsertButton,
} from './styleAll'

import InputTerm from './inputTerm'

const StepFive = (props) => {
  const {
    termAll, setTermAll, pageNumber, setPageNumber, setinsertTermID, insertTermID, limitPage, setLimitPage, setLimitPageStart, limitPageStart,
  } = props

  const QUERY_CORRECTNESSPAGE = gql`
    query keywordInPage($pageId: Int!, $documentId: Int!){
      keywordInPage(pageId: $pageId, documentId: $documentId){
        PreTerms{
          preTermId,
          preTerm,
        },
        image,
        pageId,
        amountPage,
      }
    }
  `

  const QUERY_AMOUNTPAGE = gql`
    query amountPage($documentId: Int!){
      amountPage(documentId: $documentId){
        firstPage,
        lastPage
      }
    }
  `

  const params = new URLSearchParams(window.location.search)
  const docId = parseInt(params.get('id'), 10)

  const handlerSetTerm = (terms, pageId) => {
    const tempTerms = { ...termAll }
    let parseTerms = { }
    // cheack no term in back end
    if (terms.length === 1 && terms[0].preTermId === null) {
      if (tempTerms[`page-${pageNumber}`]) {
        return
      }
      parseTerms = {
        [`page-${pageNumber}`]: { [`newterm-${insertTermID}`]: { queryTerm: 'เพิ่มคำ', inputTerm: '' }, pageId, pageNumber },
      }
      setinsertTermID((prevState) => prevState + 1)
      setTermAll({ ...tempTerms, ...parseTerms })
      return
    }

    // check if already add term in state don't change input term
    terms.map((term) => {
      let tempInputTerm = term.preTerm
      if (termAll[`page-${pageNumber}`]) {
        if (termAll[`page-${pageNumber}`][`term-${term.preTermId}`]) {
          tempInputTerm = termAll[`page-${pageNumber}`][`term-${term.preTermId}`].inputTerm
        }
      }
      parseTerms = {
        ...parseTerms,
        [`page-${pageNumber}`]: {
          ...parseTerms[`page-${pageNumber}`],
          [`term-${term.preTermId}`]: { queryTerm: term.preTerm, inputTerm: tempInputTerm },
          pageId,
          pageNumber,
        },
      }
      return { }
    })
    setTermAll({ ...tempTerms, ...parseTerms })
  }

  const handlerSetLimitPage = (start, stop, status) => {
    if (status !== 5) {
      window.location.replace('/homepage')
    }
    setLimitPageStart(start)
    setPageNumber(start)
    setLimitPage(stop)
  }

  const handlerSetPageNumber = (e) => {
    if (e.target.value <= 0) {
      setPageNumber(1)
    } else {
      setPageNumber(parseInt(e.target.value, 10))
    }
  }

  if (pageNumber === 0) {
    const { error } = useQuery(QUERY_AMOUNTPAGE,
      {
        variables: { documentId: docId },
        onCompleted: ({ amountPage }) => handlerSetLimitPage(amountPage.firstPage, amountPage.lastPage, amountPage.status),
        skip: pageNumber !== 0,
      })
    if (error) {
      window.console.log(error)
    }
    return null
  }

  const { data: dataImagePage, loading: imageLoading, error: imageError } = useQuery(QUERY_CORRECTNESSPAGE,
    {
      variables: { pageId: pageNumber, documentId: docId },
      onCompleted: ({ keywordInPage }) => handlerSetTerm(keywordInPage.PreTerms, keywordInPage.pageId),
      skip: pageNumber === 0,
    })

  if (imageLoading) {
    return null
  }

  if (imageError) {
    window.console.log(imageError)
  }

  if (!dataImagePage) {
    return null
  }

  const handlerOnChangeTerm = (e) => {
    const tempTerms = { ...termAll }
    const parseTerm = {
      [`page-${pageNumber}`]: {
        ...termAll[`page-${pageNumber}`],
        [e.target.name]: { queryTerm: termAll[`page-${pageNumber}`][e.target.name].queryTerm, inputTerm: e.target.value },
      },
    }
    setTermAll({ ...tempTerms, ...parseTerm })
  }

  const handlerAddTerm = () => {
    const tempTerms = { ...termAll }
    // normal insert Term || first insert Term
    if (termAll[`page-${pageNumber}`]) {
      const parseTerm = { [`page-${pageNumber}`]: { ...termAll[`page-${pageNumber}`], [`newterm-${insertTermID}`]: { queryTerm: 'เพิ่มคำ', inputTerm: '', newTerm: true } } }
      setinsertTermID((prevState) => prevState + 1)
      setTermAll({ ...tempTerms, ...parseTerm })
    } else {
      const parseTerm = {
        [`page-${pageNumber}`]: {
          ...termAll[`page-${pageNumber}`],
          [`newterm-${insertTermID}`]: { queryTerm: 'เพิ่มคำ', inputTerm: '', newTerm: true },
          [`newterm-${insertTermID + 1}`]: { queryTerm: 'เพิ่มคำ', inputTerm: '', newTerm: true },
        },
      }
      setinsertTermID((prevState) => prevState + 2)
      setTermAll({ ...tempTerms, ...parseTerm })
    }
  }

  const handlerBackPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prevState) => prevState - 1)
    }
  }

  const handlerNextPage = () => {
    if (pageNumber < limitPage) {
      setPageNumber((prevState) => prevState + 1)
    }
  }

  let inputRender = null

  if (termAll[`page-${pageNumber}`]) {
    inputRender = Object.keys(termAll[`page-${pageNumber}`])
      .map((indexTerm) => {
        if (indexTerm === 'pageId' || indexTerm === 'pageNumber') return
        return (
          <InputTerm
            key={indexTerm}
            defaultLabel={termAll[`page-${pageNumber}`][indexTerm].queryTerm}
            defaultInput={termAll[`page-${pageNumber}`][indexTerm].inputTerm}
            placeholder="พิมพ์คำที่ต้องการ"
            name={indexTerm}
            handlerOnChange={handlerOnChangeTerm}
          />
        )
      })
  }

  return (
    <>
      <h4>5. Correction</h4>
      <ContainerPicture>
        <ImagePage alt="imagePage" src={`data:image/jpeg;base64,${dataImagePage.keywordInPage.image}`} />
      </ContainerPicture>
      <ContainerOptions>
        <InsertButton type="button" onClick={() => handlerAddTerm()}> + ADD TEXT </InsertButton>
      </ContainerOptions>
      <ContainerWord>
        {inputRender}
      </ContainerWord>
      <ControlPage>
        <PageButton type="button" disabled={pageNumber <= limitPageStart} onClick={() => handlerBackPage()}>
          {' '}
          <NavigateBeforeIcon />
        </PageButton>
        <InputPage value={pageNumber} onChange={(e) => handlerSetPageNumber(e)} />
        <LabelPage>
          /
          {' '}
          {limitPage}
        </LabelPage>
        <PageButton type="button" disabled={pageNumber === limitPage} onClick={() => handlerNextPage()}>
          {' '}
          <NavigateNextIcon />
        </PageButton>
      </ControlPage>
    </>
  )
}

export default StepFive
