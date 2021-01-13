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
          image,
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

  const handleNextStep = (clickId, status) => {
    if (status === 3) {
      history.push({ pathname: '/insertbook', search: `?step=5&id=${clickId}` })
    } else {
      history.push({ pathname: '/insertbook', search: `?step=7&id=${clickId}` })
    }
  }

  const dataFilter = (getData, getStatus) => {
    const filterStatus = getData.documentStatusMultiple.filter((datas) => datas.status === getStatus)
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

        {dataFilter(dataStatus, 5) ? <h6>Ready to edit tag</h6> : null}
        {dataFilter(dataStatus, 5)}
        <br />
        {dataFilter(dataStatus, 4) ? <h6>Tag Generating</h6> : null}
        {dataFilter(dataStatus, 4)}
        <br />
        {dataFilter(dataStatus, 3) ? <h6>Ready to correction</h6> : null}
        {dataFilter(dataStatus, 3)}
        <br />
        {dataFilter(dataStatus, 2) ? <h6>Text processing</h6> : null}
        {dataFilter(dataStatus, 2)}
        <br />
        {dataFilter(dataStatus, 1) ? <h6>OCR</h6> : null}
        {dataFilter(dataStatus, 1)}
        <br />
        {dataFilter(dataStatus, 0) ? <h6>In queue</h6> : null}
        {dataFilter(dataStatus, 0)}
        <br />
      </ContentDiv>
    </DefaultLayoutStyle>
  )
}

export default Status
