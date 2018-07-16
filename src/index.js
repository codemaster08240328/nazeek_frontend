import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import history from './utils/historyUtils'
import App from './components/App'
import Modal from 'react-modal';


Modal.setAppElement(document.getElementById('root'));
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'))
