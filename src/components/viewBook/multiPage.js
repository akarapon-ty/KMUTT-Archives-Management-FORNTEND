import React, { useState, useEffect, useRef } from 'react'
import {
  Document, Page, pdfjs,
} from 'react-pdf'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import DetailBook from './DetailBook'
import SearchCard from '../search/searchCard/SearchCard'

import {
  NavigatePage, PageContain, PageButton, ZoomSelector, PageInput, Inline, Top, ShowButton, ShowMore,
} from './style'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const MultiPage = (props) => {
  const { filePdf, document } = props
  const [numPage, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scalePage, setScalePage] = useState(1.0)
  const [tempPageNumber, setTempPageNumber] = useState(pageNumber)
  const [isSticky, setSticky] = useState(false)
  const [isShow, setShow] = useState(false)
  const [tempTop, setTempTop] = useState(0)
  const ref = useRef(null)
  const detailRef = useRef(null)

  let tempCurrent = tempTop
  const getYPosition = () => {
    const top = window.pageYOffset
    return top
  }

  const handleScroll = () => {
    if (ref.current) {
      const scrollNow = getYPosition()
      setSticky(tempCurrent - scrollNow <= 0)
    }
  }

  useEffect(() => {
    setTempTop(ref.current.getBoundingClientRect().top)
  }, [])

  useEffect(() => {
    if (!isShow) {
      tempCurrent = tempTop
    } else {
      tempCurrent = tempTop + detailRef.current.getBoundingClientRect().height
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [isShow, tempTop])

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  const prevPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber - 1)
    setTempPageNumber(pageNumber - 1)
  }

  const nextPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1)
    setTempPageNumber(pageNumber + 1)
  }

  const scalePageChange = (scaleValue) => {
    const scale = parseFloat(scaleValue) / 100.0
    setScalePage(scale)
  }

  const handlerSetPageNumber = (e) => {
    const tempValue = parseInt(e.target.value, 10)
    if (Number.isNaN(tempValue) || tempValue > numPage || tempValue < 1) {
      setTempPageNumber(null)
      return
    }
    setTempPageNumber(tempValue)
    setPageNumber(tempValue)
  }

  const handleClickOpen = () => {
    setShow(true)
  }

  const handleClickClose = () => {
    setShow(false)
  }

  const widthScale = [{
    val: '150%',
    lab: '100%',
  }, {
    val: '175%',
    lab: '125%',
  },
  {
    val: '200%',
    lab: '150%',
  }, {
    val: '250%',
    lab: '200%',
  },
  ]

  return (
    <>
      <Top />
      <SearchCard title={document.title} creator={document.creator} coverageTemporal={document.coverageTemporal} tag={document.tag} image={document.image} />
      <ShowMore ref={detailRef}>
        {isShow ? (
          <>
            <DetailBook document={document} />
            <ShowButton onClick={() => handleClickClose()} type="button">Show less detail</ShowButton>
          </>
        )
          : <ShowButton onClick={() => handleClickOpen()} type="button">Show more detail</ShowButton>}
      </ShowMore>

      <NavigatePage stick={isSticky} ref={ref}>
        <Inline>
          {pageNumber === 1 ? <PageButton disabled type="button" onClick={prevPage}><NavigateBeforeIcon /></PageButton> : <PageButton type="button" onClick={prevPage}><NavigateBeforeIcon /></PageButton>}
          <PageInput type="number" min="1" max={numPage} value={tempPageNumber} onChange={(e) => handlerSetPageNumber(e)} />
          /
          {' '}
          {numPage}
          {pageNumber === numPage ? <PageButton disabled type="button" onClick={nextPage}><NavigateNextIcon /></PageButton> : <PageButton type="button" onClick={nextPage}><NavigateNextIcon /></PageButton>}
        </Inline>
        <ZoomSelector onChange={(e) => scalePageChange(e.target.value)}>
          {widthScale.map((option) => (
            <option key={`option.val-${option.val}`} value={option.val}>{option.lab}</option>
          ))}
        </ZoomSelector>
      </NavigatePage>

      <PageContain>
        <Document
          file={filePdf}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            pageNumber={pageNumber}
            scale={scalePage}
            width={500}
          />
        </Document>
      </PageContain>
    </>
  )
}
export default MultiPage
