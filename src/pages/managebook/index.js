import React from 'react'

import ManageComponents from '../../components/manage'
import DefaultLayoutStyle from '../../components/util/LayoutStyle'

export const ManagePage = () => (
  <DefaultLayoutStyle>
    <ManageComponents initInputSearch="KMUTT" />
  </DefaultLayoutStyle>
)

export default ManagePage
