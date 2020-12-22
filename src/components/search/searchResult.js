import React from 'react'
import PropTypes from 'prop-types'

export const SearchResult = (props) => {
  const { create, name, tag } = props

  return (
    <div>
      <p>
        Login
        {create}
        {name}
        {tag}
      </p>
    </div>
  )
}

export default { }

SearchResult.defaultProps = {
  create: 'ceate default',
  name: 'name default',
  tag: [],

}

SearchResult.propTypes = {
  create: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.arrayOf(PropTypes.number),
}
