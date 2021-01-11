import React from 'react'

import SearchComponents from '../../components/search'
import DefaultLayoutStyle from '../../components/util/LayoutStyle'

export const SearchPage = () => (
  <DefaultLayoutStyle>
    <SearchComponents initInputSearch="KMUTT" />
  </DefaultLayoutStyle>
)

export default SearchPage
