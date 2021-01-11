import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client'

import client from './graphql/index'
import ContextProvider from './store/actions'
import App from './App'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
