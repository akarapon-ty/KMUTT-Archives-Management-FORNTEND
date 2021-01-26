import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'

import DefaultLayoutStyle from '../../components/util/LayoutStyle'
import MultiPage from '../../components/viewBook/multiPage'

const ViewBook = () => {
  const PDF_QUERY = gql`
    query pdfDocument($documentId: Int!){
      pdfDocument(documentId: $documentId){
        pdfBase64
      }
    }
  `
  const DOCUMENT_QUERY = gql`
    query document($pk: Int!){
      document(pk: $pk){
        document{
          title,
          image,
          tag,
          creator,
          coverageTemporal,
        }
      }
    }
  `

  const params = new URLSearchParams(window.location.search)
  const docId = parseInt(params.get('id'), 10)

  const [filePdf, setFilePdf] = useState(null)
  const [document, setDocument] = useState(null)

  const { loading: pdfLoading, error: pdfError } = useQuery(PDF_QUERY, { variables: { documentId: docId }, skip: filePdf !== null, onCompleted: (res) => setFilePdf(res.pdfDocument.pdfBase64) })
  const { loading: documentLoading, error: documentError } = useQuery(DOCUMENT_QUERY, { variables: { pk: docId }, skip: document !== null, onCompleted: (res) => setDocument(res.document.document) })

  if (pdfLoading || documentLoading) {
    return null
  }
  if (pdfError) {
    window.console.log('pdf', pdfError)
    return null
  }
  if (documentError) {
    window.console.log('doc', documentError)
    return null
  }

  return (
    <DefaultLayoutStyle wide>
      <MultiPage filePdf={filePdf} document={document} />
    </DefaultLayoutStyle>
  )
}

export default ViewBook
