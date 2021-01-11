import React from 'react'
import { withRouter } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

import StatusCard from '../util/statusCard/StatusCard'

const StepSix = (props) => {
  const { docId } = props
  const QUERY_STATUS = gql`
    query documentStatus($documentId: Int!){
        documentStatus(documentId: $documentId){
            documentId,
            title,
            version,
            status,
            publish,
        }
    }
    `

  const { data, loading, error } = useQuery(QUERY_STATUS, { variables: { documentId: docId } })

  if (loading) {
    return null
  }

  if (error) {
    window.console.log('stepSix', error)
  }

  if (!data) {
    return null
  }

  const handleNextStep = (clickId) => {
    props.history.push({ pathname: '/insertbook', search: `?step=7&id=${clickId}` })
  }

  return (
    <>
      <h4>6. Waiting for tag</h4>
      <StatusCard handleNextStep={handleNextStep} titleBook={data.documentStatus.title} publishDate={data.documentStatus.publish} compileState={data.documentStatus.status} />
    </>
  )
}

export default withRouter(StepSix)
