import React from 'react'

import { StepForm } from '../../components/insertBook'
import DefaultLayoutStyle from '../../components/util/LayoutStyle'
import { Topic } from './style'

const InsertBook = () => {
  const test = 'test'
  return (
    <DefaultLayoutStyle>
      <Topic>InsertBook</Topic>
      <StepForm />
    </DefaultLayoutStyle>
  )
}

export default InsertBook
