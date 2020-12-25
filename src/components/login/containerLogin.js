import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

import { InputLogin, FormLabel } from './style'

export const ContainerLogin = (props) => {
  const { login } = props
  const loginFail = login ? (<p>incorrect username password</p>) : null

  const LoginForm = ({ children }) => {
    const methods = useFormContext()
    return children({ ...methods })
  }
  return (
    <LoginForm>
      {({ register }) => (
        <>
          {loginFail}
          <FormLabel> Username </FormLabel>
          <InputLogin ref={register} name="username" />
          <FormLabel> Password </FormLabel>
          <InputLogin ref={register} name="password" />
          <button type="submit">Login</button>
        </>
      )}
    </LoginForm>
  )
}

export default {}

ContainerLogin.defaultProps = {
  login: false,
}

ContainerLogin.propTypes = {
  login: PropTypes.bool,
}
