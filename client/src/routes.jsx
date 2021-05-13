import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AboutUs from './pages/AboutUs/AboutUs'
import Contacts from './pages/Contacts/Contacts'
import Main from './pages/Main/Main'
import RedirectToMain from './components/RedirectToMain/RedirectToMain'
import Auth from './pages/Authorization/Auth'

import './index.css'


export const UseRoutes = () => {
  return (
    <Switch>
      <Route path='/aboutUs'>
        <AboutUs />
        <div className='caseForRedirect'>
          <RedirectToMain />
        </div>
      </Route>
      <Route path='/contacts'>
        <Contacts />
        <div className='caseForRedirect'>
          <RedirectToMain />
        </div>
      </Route>
      <Route path='/main'>
        <Main />
      </Route>
      <Route path='/auth'>
        <Auth />
      </Route>
    </Switch>
  )
}
