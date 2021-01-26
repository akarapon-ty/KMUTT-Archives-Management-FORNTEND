import React, { useState } from 'react'

import DefaultLayoutStyle from '../../components/util/LayoutStyle'
import { HeadHomepage } from './style'
import InputSearchBar from '../../components/util/input/searchBar/InputSearchBar'

const Homepage = () => {
  const [inputSearchState, setInputSearchState] = useState('')

  const handdleOnKeyDownSearch = (event) => {
    if (event.key === 'Enter') {
      window.location.href = `/search?keyword=${inputSearchState}`
    }
  }

  return (
    <>
      <DefaultLayoutStyle activate>
        <HeadHomepage>KMUTT ARCHIVES MANAGEMENT</HeadHomepage>
        <InputSearchBar
          onChange={(e) => {
            setInputSearchState(e.target.value)
          }}
          onKeyDown={handdleOnKeyDownSearch}
          value={inputSearchState}
        />
      </DefaultLayoutStyle>
    </>
  )
}

export default Homepage
