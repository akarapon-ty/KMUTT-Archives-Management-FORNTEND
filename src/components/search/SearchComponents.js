import React, { useState } from 'react'
import PropTypes from 'prop-types'

import SearchResult from './SearchResult'

import InputSearchBar from '../util/input/searchBar/InputSearchBar'

const SearchComponents = (props) => {
  const {
    initInputSearch,
  } = props

  const [inputSearchState, setInputSearchState] = useState(initInputSearch)
  const [inputSearchConfirmState, setInputSearchConfirmState] = useState(initInputSearch)

  const handdleOnKeyDownSearch = (event) => {
    if (event.key === 'Enter') {
      setInputSearchConfirmState(inputSearchState)
    }
  }

  return (
    <div>
      <h3>Search KMUTT Archives</h3>
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

SearchComponents.defaultProps = {
  initInputSearch: '',
}

SearchComponents.propTypes = {
  initInputSearch: PropTypes.string,
}

export default SearchComponents
