import React, { useState } from 'react'

import DefaultLayoutStyle from '../../components/util/LayoutStyle'
import filePdf from '../../assets/pdf/hel.pdf'
import MultiPage from '../../components/viewBook/multiPage'

const ViewBook = () => (
  <DefaultLayoutStyle wide>
    <MultiPage filePdf={filePdf} />

  </DefaultLayoutStyle>
)

export default ViewBook
