import React from 'react'
import { useQuery, gql } from '@apollo/client'

import DefaultLayoutStyle from '../../components/util/LayoutStyle'
import { Topic, ContentDiv } from './style'

const Status = () => {
  const test = 'test'
  return (
    <DefaultLayoutStyle>
      <Topic>STATUS UPLOAD</Topic>
      <ContentDiv />
    </DefaultLayoutStyle>
  )
}

export default Status
