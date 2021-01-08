import React from 'react'
import { useQuery, gql } from '@apollo/client'

import {
  ContainerPicture, ImagePage, ContainerOptions, InsertButton, ContainerWord, ControlPage, InputPage,
} from './styleStepFive'
import InputTerm from './inputTerm'

const StepFive = (props) => {
  const {
    termAll, setTermAll, pageNumber, setPageNumber, setinsertTermID, insertTermID,
  } = props

  const QUERY_CORRECTNESSPAGE = gql`
    query keywordInPage($pageId: Int!, $documentId: Int!){
      keywordInPage(pageId: $pageId, documentId: $documentId){
        PreTerms{
          preTermId,
          preTerm,
        },
        image
      }
    }
  `

  const params = new URLSearchParams(window.location.search)
  const docId = parseInt(params.get('id'), 10)

  const handlerSetTerm = (terms) => {
    const tempTerms = termAll
    // cheack no term in back end
    if (terms.length === 1 && terms[0].preTermId === null) {
      return
    }
    let parseTerms = { }
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
        },
      }
      return { }
    })
    setTermAll({ ...tempTerms, ...parseTerms })
  }

  const handlerSetPageNumber = (e) => {
    if (e.target.value <= 0) {
      setPageNumber(1)
    } else {
      setPageNumber(parseInt(e.target.value, 10))
    }
  }

  const { data: dataImagePage, loading: imageLoading, error: imageError } = useQuery(QUERY_CORRECTNESSPAGE,
    {
      variables: { pageId: pageNumber, documentId: docId },
      onCompleted: ({ keywordInPage }) => handlerSetTerm(keywordInPage.PreTerms),
    })

  if (imageLoading) {
    return null
  }

  if (imageError) {
    window.console.log(imageError)
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
      const parseTerm = { [`page-${pageNumber}`]: { ...termAll[`page-${pageNumber}`], [insertTermID]: { queryTerm: 'เพิ่มคำ', inputTerm: '' } } }
      setinsertTermID((prevState) => prevState + 1)
      setTermAll({ ...tempTerms, ...parseTerm })
    } else {
      const parseTerm = { [`page-${pageNumber}`]: { ...termAll[`page-${pageNumber}`], [insertTermID]: { queryTerm: 'เพิ่มคำ', inputTerm: '' }, [insertTermID + 1]: { queryTerm: 'เพิ่มคำ', inputTerm: '' } } }
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
    // check less than max page
    // if (pageNumber > 1) {
    setPageNumber((prevState) => prevState + 1)
    // }
  }

  let inputRender = <InputTerm defaultLabel="เพิ่มคำ" placeholder="พิมพ์คำที่ต้องการ" />

  if (termAll[`page-${pageNumber}`]) {
    inputRender = Object.keys(termAll[`page-${pageNumber}`])
      .map((indexTerm) => (
        <InputTerm
          key={indexTerm}
          defaultLabel={termAll[`page-${pageNumber}`][indexTerm].queryTerm}
          defaultInput={termAll[`page-${pageNumber}`][indexTerm].inputTerm}
          placeholder="พิมพ์คำที่ต้องการ"
          name={indexTerm}
          handlerOnChange={handlerOnChangeTerm}
        />
      ))
  }

  return (
    <>
      <h4>5. Correction</h4>
      <ContainerPicture>
        <ImagePage alt="imagePage" src={`data:image/jpeg;base64,${dataImagePage.keywordInPage.image}`} />
      </ContainerPicture>
      <ContainerOptions>
        <InsertButton type="button" onClick={() => handlerAddTerm()}> + Add text </InsertButton>
      </ContainerOptions>
      <ContainerWord>
        {inputRender}
      </ContainerWord>
      <ControlPage>
        <button type="button" disabled={pageNumber <= 1} onClick={() => handlerBackPage()}>back</button>
        <InputPage value={pageNumber} onChange={handlerSetPageNumber} />
        <p>/ 123</p>
        <button type="button" onClick={() => handlerNextPage()}>next</button>
      </ControlPage>
    </>
  )
}

export default StepFive
