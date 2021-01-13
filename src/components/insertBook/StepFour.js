import React from 'react'
import { withRouter } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

import StatusCard from '../util/statusCard/StatusCard'

const StepFour = (props) => {
  const { docId } = props
  const QUERY_STATUS = gql`
    query documentStatus($documentId: Int!){
        documentStatus(documentId: $documentId){
            documentId,
            title,
            version,
            status,
            publish,
            image,
        }
    }
  `

  const { data, loading, error } = useQuery(QUERY_STATUS, { variables: { documentId: docId } })

  if (loading) {
    return null
  }

  if (error) {
    window.console.log('stepFour', error)
  }

  if (!data) {
    return null
  }

  const handleNextStep = (clickId) => {
    props.history.push({ pathname: '/insertbook', search: `?step=5&id=${clickId}` })
  }

  return (
    <>
      <h4>4. Waiting for upload</h4>
      <StatusCard handleNextStep={handleNextStep} titleBook={data.documentStatus.title} publishDate={data.documentStatus.publish} compileState={data.documentStatus.status} image={data.documentStatus.image} />
    </>
  )
}

export default withRouter(StepFour)
