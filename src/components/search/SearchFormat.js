import React, { useState } from 'react'
import PropTypes from 'prop-types'
import bgInput from '../../assets/icon/search_24px.png'
import { SearchInputStyle, SearchText, SearchTextFill } from './style'

export const SearchFormat = (props) => {
  const { searchFill, searchTotal } = props
  const [stateCurrentFill, setStateCurrentFill] = useState('')

  return (
    <div>
      <SearchInputStyle onChange={(e) => setStateCurrentFill(e.target.value)} bg={bgInput} placeholder={searchFill} value={stateCurrentFill} />
      <SearchText>
        {searchTotal}
        {' '}
        Results found :
        {' '}
        <SearchTextFill>{searchFill}</SearchTextFill>
      </SearchText>
    </div>

  )
}

export default { }

SearchFormat.defaultProps = {
  searchFill: 'searchFill default',
  searchTotal: 'searchTotal default',

}

SearchFormat.propTypes = {
  searchFill: PropTypes.string,
  searchTotal: PropTypes.number,
}
