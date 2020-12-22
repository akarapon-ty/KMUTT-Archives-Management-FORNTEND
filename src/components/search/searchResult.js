import React from 'react'
import PropTypes from 'prop-types'

export const SearchResult = (props) => {
  const { create, name, tag } = props
  const loginFail = create ? 'test' : 'no noo no'

  return (
    <div>
      <p>
        Login
        {loginFail}
      </p>
    </div>
  )
}

export default { }

ContainerLogin.defaultProps = {
  login2222: false,
}

ContainerLogin.propTypes = {
  login2222: PropTypes.bool,
}
