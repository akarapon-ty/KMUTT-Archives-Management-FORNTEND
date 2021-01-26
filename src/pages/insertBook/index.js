import React from 'react'

import { StepForm } from '../../components/insertBook'
import DefaultLayoutStyle from '../../components/util/LayoutStyle'
import { Topic } from './style'

const InsertBook = () => (
  <DefaultLayoutStyle>
    <Topic>InsertBook</Topic>
    <StepForm />
  </DefaultLayoutStyle>
)

export default InsertBook
