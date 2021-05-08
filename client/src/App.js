import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
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
        <Sticky>
          <NavBar />
        </Sticky>

        <div className='container'>
          <UseRoutes />
        </div>

        <Footer />
      </div>
    </Router>
  )
}

export default App
