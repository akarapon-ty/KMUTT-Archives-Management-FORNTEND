import React, { useState } from 'react'
import PropTypes from 'prop-types'

import SearchResult from './ManageResult'

import InputSearchBar from '../util/input/searchBar/InputSearchBar'

const ManageComponents = (props) => {
  const {
    initInputSearch,
  } = props

  const [inputSearchState, setInputSearchState] = useState('')
  const [inputSearchConfirmState, setInputSearchConfirmState] = useState(initInputSearch)

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

ManageComponents.defaultProps = {
  initInputSearch: '',
}

ManageComponents.propTypes = {
  initInputSearch: PropTypes.string,
}

export default ManageComponents
