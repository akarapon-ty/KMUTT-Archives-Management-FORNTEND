import React from 'react'

import SearchComponents from '../../components/search'
import DefaultLayoutStyle from '../../components/util/LayoutStyle'

export const SearchPage = () => {
  const queryParam = new URLSearchParams(window.location.search)
  const keyword = queryParam.get('keyword')

  return (
    <DefaultLayoutStyle>
      <SearchComponents initInputSearch={keyword} />
    </DefaultLayoutStyle>
  )
}
export default SearchPage
