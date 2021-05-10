import React, { useState } from 'react'
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom'
import Sticky from 'react-sticky-el'
import { UseRoutes } from './routes.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'

import 'materialize-css'
import './index.css'

const App = () => {
  return (
    <Router>
      <div className='wrapper'>
        <div className='Case'>
          <Sticky>
            <NavBar />
          </Sticky>
        </div>
        <div className='container'>
          <UseRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
