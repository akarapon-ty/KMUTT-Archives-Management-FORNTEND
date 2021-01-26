import React, { useState } from 'react'

import SearchResult from './ManageResult'

import InputSearchBar from '../util/input/searchBar/InputSearchBar'

const ManageComponents = () => {
  const [inputSearchState, setInputSearchState] = useState('')
  const [inputSearchConfirmState, setInputSearchConfirmState] = useState('')

  const handdleOnKeyDownSearch = (event) => {
    if (event.key === 'Enter') {
      setInputSearchConfirmState(inputSearchState)
    }
  }

  return (
    <div>
      <h3>Manage KMUTT Archives</h3>
      <InputSearchBar
        onChange={(e) => {
          setInputSearchState(e.target.value)
        }}
        onKeyDown={handdleOnKeyDownSearch}
        value={inputSearchState}
      />
      <SearchResult input={inputSearchConfirmState} />
    </div>
  )
}

export default ManageComponents
