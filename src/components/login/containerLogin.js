import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

import {
  InputLogin, FormLabel, LoginButton, ErrorMessage,
} from './style'

export const ContainerLogin = (props) => {
  const { login } = props
  const loginFail = login ? (<ErrorMessage>* incorrect username password</ErrorMessage>) : null

  const LoginForm = ({ children }) => {
    const methods = useFormContext()
    return children({ ...methods })
  }
  return (
    <LoginForm>
      {({ register }) => (
        <>
          <h4>Login</h4>
          <FormLabel> Username </FormLabel>
          <InputLogin ref={register} name="username" />
          <FormLabel> Password </FormLabel>
          <InputLogin ref={register} name="password" type="password" />
          {loginFail}
          <LoginButton type="submit">Login</LoginButton>
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
