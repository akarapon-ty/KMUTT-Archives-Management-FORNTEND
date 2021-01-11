import React from 'react'
import PropTypes from 'prop-types'

import { SearchInputStyle } from './style'
import bgInput from '../../../../assets/icon/search_24px.png'

const InputSearchBar = (props) => {
  const { onChange, onKeyDown, value } = props
  return (
    <SearchInputStyle
      type="text"
      onChange={onChange}
      onKeyDown={onKeyDown}
      bg={bgInput}
      placeholder="Input tokens for search..."
      value={value}
    />
  )
}

InputSearchBar.defaultProps = {
  onChange: () => { },
  onKeyDown: () => {},
  value: '',
}

InputSearchBar.propTypes = {
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  value: PropTypes.string,
}

export default InputSearchBar
