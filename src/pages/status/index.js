import React from 'react'
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
        }
      
    }
  `
  const history = useHistory()
  const { data: dataStatus, loading: loadingStatus, error: errorStatus } = useQuery(queryStatus)

  if (loadingStatus) {
    return null
  }

  if (errorStatus) {
    window.console.log('error : ', errorStatus)
  }

  const handleNextStep = (clickId) => {
    if (dataStatus === 3) {
      history.push({ pathname: '/insertbook', search: `?step=5&id=${clickId}` })
    } else {
      history.push({ pathname: '/insertbook', search: `?step=7&id=${clickId}` })
    }
  }
  window.console.log(dataStatus)
  const dataFilter = (getData, getStatus) => {
    const filterStatus = getData.documentStatusMultiple.filter((datas) => datas.status === getStatus)
    return filterStatus.length !== 0 ? filterStatus.map((value) => <StatusCard handleNextStep={handleNextStep} key={value.documentId} id={value.documentId} titleBook={value.title} compileState={value.status} publishDate={value.publish} />) : false
  }

  return (
    <DefaultLayoutStyle>
      <Topic>STATUS UPLOAD</Topic>
      <ContentDiv>

        {dataFilter(dataStatus, 5) ? (
          <h6>
            Ready to edit tag
            <br />
          </h6>
        ) : null}
        {dataFilter(dataStatus, 5)}

        {dataFilter(dataStatus, 4) ? (
          <h6>
            Tag Generating
            <br />
          </h6>
        ) : null}
        {dataFilter(dataStatus, 4)}
        {dataFilter(dataStatus, 3) ? (
          <h6>
            Ready to correction
            <br />
          </h6>
        ) : null}
        {dataFilter(dataStatus, 3)}

        {dataFilter(dataStatus, 2) ? (
          <h6>
            Text processing
            <br />
          </h6>
        ) : null}
        {dataFilter(dataStatus, 2)}

        {dataFilter(dataStatus, 1) ? (
          <h6>
            OCR
            <br />
          </h6>
        ) : null}
        {dataFilter(dataStatus, 1)}

        {dataFilter(dataStatus, 0) ? (
          <h6>
            In queue
            <br />
          </h6>
        ) : null}
        {dataFilter(dataStatus, 0)}

      </ContentDiv>
    </DefaultLayoutStyle>
  )
}

export default Status
