import React from 'react'

import { gql, useQuery } from '@apollo/client'

import SearchCard from './SearchCard'

const IndexSearchCard = ({ documentId, onClick }) => {
  const QUERY_DOCUMENT_BY_ID = gql`
    query document($pk: Int!) {
        document(pk: $pk){
          statusQuery,
          document{
            id,
            title,
            coverageTemporal,
            creator,
            image,
          },
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
    id, title: dcTitle, creator, coverageTemporal: dcCoverageTemporal, image,
  } = document

  return (
    <SearchCard id={id} title={dcTitle} creator={creator} coverageTemporal={dcCoverageTemporal} tag={[]} onClick={onClick} image={image} />
  )
}

export default IndexSearchCard
