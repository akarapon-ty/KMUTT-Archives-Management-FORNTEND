import React from 'react'

import { gql, useQuery } from '@apollo/client'

import SearchCard from './SearchCard'

const IndexSearchCard = ({ documentId, onClick }) => {
  const QUERY_DOCUMENT_BY_ID = gql`
    query document($pk: Int!) {
        document(pk: $pk){
            id,
            title,
            coverageTemporal,
            creator,
        }
    }
`
  const { loading: loadDocument, error: errorDocument, data: dataDocument } = useQuery(QUERY_DOCUMENT_BY_ID, { variables: { pk: documentId } })

  if (loadDocument) return null
  if (errorDocument) {
    window.console.error(errorDocument.message)
    return null
  }

  const {
    id, title: dcTitle, creator, coverageTemporal: dcCoverageTemporal,
  } = dataDocument.document

  return (
    <SearchCard key={id} title={dcTitle} creator={creator} coverageTemporal={dcCoverageTemporal} tag={[]} onClick={() => onClick(documentId)} />
  )
}

export default IndexSearchCard
