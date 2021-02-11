import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { useHistory } from 'react-router-dom'

import DefaultLayoutStyle from '../../components/util/LayoutStyle'
import { Topic, ContentDiv } from './style'
import StatusCard from '../../components/util/statusCard/StatusCard'

const Status = () => {
  const queryStatus = gql`
    query {
      documentStatusMultiple {
          documentId,
          name,
          status,
          title,
          publish,
          image,
        }
      
    }
  `

  const [statusData, setStatusData] = useState()
  const history = useHistory()
  const { loading: loadingStatus, error: errorStatus } = useQuery(queryStatus, { onCompleted: ({ documentStatusMultiple }) => setStatusData(documentStatusMultiple), fetchPolicy: 'no-cache' })

  if (loadingStatus) {
    return null
  }

  if (errorStatus) {
    window.console.log('error : ', errorStatus)
  }

  if (!statusData) {
    return null
  }

  const handleNextStep = (clickId, status) => {
    if (status === 3) {
      history.push({ pathname: '/insertbook', search: `?step=5&id=${clickId}` })
    } else {
      history.push({ pathname: '/insertbook', search: `?step=7&id=${clickId}` })
    }
  }

  const dataFilter = (getData, getStatus) => {
    const filterStatus = getData.filter((datas) => datas.status === getStatus)
    return filterStatus.length !== 0 ? filterStatus.map((value) => (
      <StatusCard
        handleNextStep={handleNextStep}
        key={value.documentId}
        id={value.documentId}
        titleBook={value.title}
        compileState={value.status}
        publishDate={value.publish}
        image={value.image}
      />
    )) : false
  }

  return (
    <DefaultLayoutStyle>
      <Topic>STATUS UPLOAD</Topic>
      <ContentDiv>

        {dataFilter(statusData, 5) ? (
          <h6>
            Ready to edit tag
            <br />
          </h6>
        ) : null}
        {dataFilter(statusData, 5)}

        {dataFilter(statusData, 4) ? (
          <h6>
            Tag Generating
            <br />
          </h6>
        ) : null}
        {dataFilter(statusData, 4)}
        {dataFilter(statusData, 3) ? (
          <h6>
            Ready to correction
            <br />
          </h6>
        ) : null}
        {dataFilter(statusData, 3)}

        {dataFilter(statusData, 2) ? (
          <h6>
            Text processing
            <br />
          </h6>
        ) : null}
        {dataFilter(statusData, 2)}

        {dataFilter(statusData, 1) ? (
          <h6>
            OCR
            <br />
          </h6>
        ) : null}
        {dataFilter(statusData, 1)}

        {dataFilter(statusData, 0) ? (
          <h6>
            In queue
            <br />
          </h6>
        ) : null}
        {dataFilter(statusData, 0)}

      </ContentDiv>
    </DefaultLayoutStyle>
  )
}

export default Status
