import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from 'store'

import Routes from './routes'

import GlobalStyle from './styles/global'

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Routes />
        </Provider>
      </Router>

      <GlobalStyle />
    </>
  )
}

export default App
