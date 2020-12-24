import React, { useState, useContext } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import axios from 'axios'

import { ContainerLogin } from '../../components/login/index'
import { AuthInContext } from '../../store/actions/auth'
import { FormLogin } from './style'

const Login = () => {
  const { loginSuccess, loginFail } = useContext(AuthInContext)
  const [login, setLogin] = useState(false)

  const {
    register, handleSubmit, setValue, getValues,
  } = useForm()

  const loginHandler = (data) => {
    const { username, password } = data
    axios.post(`${process.env.REACT_APP_API_ENDPOINT}login`, {
      username,
      password,
    }).then((response) => {
      setLogin(false)
      loginSuccess(response.data)
      window.location.replace('/homepage')
    }).catch((error) => {
      loginFail()
      if (error.response.data.message === 'incorrect username password') {
        setLogin(true)
      }
    })
  }

  return (
    <FormProvider register={register} handleSubmit={handleSubmit} setValue={setValue} getValues={getValues}>
      <FormLogin onSubmit={handleSubmit(loginHandler)}>
        <ContainerLogin login={login} />
      </FormLogin>
    </FormProvider>
  )
}

export default Login
