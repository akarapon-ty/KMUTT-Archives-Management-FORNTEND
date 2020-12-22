import React, { cloneElement } from 'react'
// import providers
import { AuthProvider } from './auth'

const ProviderComposer = ({ contexts, children }) => contexts.reduce(
  (kids, parent) => cloneElement(parent, {
    children: kids,
  }),
  children,
)

const ContextProvider = ({ children }) => (
  <ProviderComposer
    // add providers to array of contexts
    contexts={[
      <AuthProvider />,
    ]}
  >
    {children}
  </ProviderComposer>
)

export default ContextProvider
