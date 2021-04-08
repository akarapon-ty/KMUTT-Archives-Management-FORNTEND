import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import SearchResult from './SearchResult'
import MutiSearchBar from '../util/input/mutiSearchBar/MutiSearchBar'

const SearchComponents = (props) => {
  const {
    initializeTokenSearch,
  } = props

  const [storeTokenState, setStoreTokenState] = useState([])
  const [yearRangeState, setYearRangeState] = useState([])

  useEffect(() => {
    if (initializeTokenSearch !== null && initializeTokenSearch !== '') {
      setStoreTokenState((prevState) => {
        const newState = [...prevState, { prefix: null, value: initializeTokenSearch }]
        return newState
      })
    }
  }, [initializeTokenSearch])

  return (
    <div>
      <h3>Search KMUTT Archives</h3>
      <MutiSearchBar
        storeToken={storeTokenState}
        yearRange={yearRangeState}
        setStoreToken={setStoreTokenState}
        setYearRange={setYearRangeState}
      />
      <SearchResult searchToken={storeTokenState} yearRange={yearRangeState} />
    </div>
  )
}

SearchComponents.defaultProps = {
  initializeTokenSearch: '',
}

SearchComponents.propTypes = {
  initializeTokenSearch: PropTypes.string,
}

export default SearchComponents
