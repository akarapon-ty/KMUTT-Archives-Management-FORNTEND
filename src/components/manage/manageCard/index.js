import React from 'react'

import { gql, useQuery } from '@apollo/client'

import ManageCard from './ManageCard'

const IndexManageCard = ({ documentId }) => {
  const QUERY_DOCUMENT_BY_ID = gql`
    query document($pk: Int!) {
        document(pk: $pk){
          statusQuery,
          document{
            id,
            title,
            coverageTemporal,
            creator,
          }
        }
    }
`
  const { loading: loadDocument, error: errorDocument, data: dataDocument } = useQuery(QUERY_DOCUMENT_BY_ID, { variables: { pk: documentId } })

  if (loadDocument) return null
  if (errorDocument) {
    window.console.error(errorDocument.message)
    return null
  }

  const { statusQuery, document } = dataDocument.document

  if (!statusQuery) {
    return null
  }

  const {
    id, title: dcTitle, creator, coverageTemporal: dcCoverageTemporal,
  } = document

  return (
    <ManageCard key={id} title={dcTitle} creator={creator} coverageTemporal={dcCoverageTemporal} tag={[]} />
  )
}

export default IndexManageCard
