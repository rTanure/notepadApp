import React from 'react'
import ReactDOM from 'react-dom/client'

import PageRouted from './Routes'

import './styles/general.css'
import './styles/reset.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageRouted />
  </React.StrictMode>
)
