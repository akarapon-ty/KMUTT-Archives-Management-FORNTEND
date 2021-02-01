import React from 'react'

import { gql, useQuery, useMutation } from '@apollo/client'

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
            image,
            tag,
          }
        }
    }
`

  const SOFT_DELETE_DOCUMENT = gql`
    mutation softDeleteDocument($documentId: Int!){
      softDeleteDocument(documentId: $documentId)
    }
  `
  const { loading: loadDocument, error: errorDocument, data: dataDocument } = useQuery(QUERY_DOCUMENT_BY_ID, { variables: { pk: documentId } })

  const [softDeleteDocument, { error: errorSoftDelete }] = useMutation(SOFT_DELETE_DOCUMENT)

  if (loadDocument) return null

  if (errorDocument) {
    window.console.error(errorDocument.message)
    return null
  }

  if (errorSoftDelete) {
    window.console.error(errorSoftDelete)
    return null
  }

  const { statusQuery, document } = dataDocument.document

  if (!statusQuery) {
    return null
  }

  const {
    id, title: dcTitle, creator, coverageTemporal: dcCoverageTemporal, image, tag,
  } = document

  const handlerEditOnClick = () => {
    window.location.href = `/editbook?id=${id}`
  }

  const handlerDeleteOnClick = () => {
    softDeleteDocument({ variables: { documentId: id } }).then(() => { window.location.href = '/managebook' })
  }

  return (
    <ManageCard key={id} title={dcTitle} creator={creator} coverageTemporal={dcCoverageTemporal} tag={tag} image={image} onClick={handlerEditOnClick} handlerDeleteOnClick={handlerDeleteOnClick} />
  )
}

export default IndexManageCard
