import React, { useEffect, useState } from 'react'

import { ContainerLogin } from '../../components/login/index'

export const Login = () => {
  const [login] = useState(true)
  const [test, setTest] = useState('testss')

  useEffect(() => {
    setTimeout(() => {
      setTest('first time when use')
    }, 2000)
  }, [test])

  return (
    <>
      <ContainerLogin login={login} />
      {test}
    </>
  )
}

export default { }
