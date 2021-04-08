import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  MutiSearchContainer,
  MainSearchContainer,
  OptionalYearContainer,
} from './style'

import SearchBar from './components/SearchBar'
import FilterBar from './components/FilterBar'
import StoreTokenBar from './components/StoreTokenBar'
import RelaventYear from './components/RelaventYear'

const MutiSearchBar = (props) => {
  const {
    storeToken,
    setStoreToken,
    setYearRange,
  } = props

  const [filterModeState, setFilterModeState] = useState(null)
  const [blockState, setBlockState] = useState(false)

  return (
    <MutiSearchContainer>
      <MainSearchContainer disabled={blockState}>
        <SearchBar disabled={blockState} filterMode={filterModeState} setStore={setStoreToken} />
        <FilterBar disabled={blockState} filterMode={filterModeState} onClick={setFilterModeState} />
        <StoreTokenBar disabled={blockState} store={storeToken} setStore={setStoreToken} />
      </MainSearchContainer>
      <OptionalYearContainer>
        <RelaventYear setYearRange={setYearRange} block={blockState} setBlock={setBlockState} />
      </OptionalYearContainer>
    </MutiSearchContainer>
  )
}

MutiSearchBar.defaultProps = {
  storeToken: [],
  setStoreToken: () => { },
  setYearRange: () => { },
}

MutiSearchBar.propTypes = {
  storeToken: PropTypes.arrayOf(PropTypes.shape({
    prefix: PropTypes.string,
    value: PropTypes.string,
  })),
  setStoreToken: PropTypes.func,
  setYearRange: PropTypes.func,
}

export default MutiSearchBar
