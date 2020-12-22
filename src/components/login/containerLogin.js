import React from 'react'
import PropTypes from 'prop-types'

export const ContainerLogin = (props) => {
  const { login2222 } = props
  const loginFail = login2222 ? 'test' : 'no noo no'

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
