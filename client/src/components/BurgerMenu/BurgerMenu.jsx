import React, { useState, useEffect } from 'react'
import { NavLink, Redirect } from 'react-router-dom'

import BurgerMenuButton from './BurgerMenuButton/BurgerMenuButton'

import './BurgerMenu.css'

const BurgerMenu = () => {
  const [open, setOpen] = useState(false)

  const openerMenu = () => {
    setOpen(!open)
  }

  // useEffect(() => {
  //   document.addEventListener('mousedown', function (event) {
  //     if (event.target.id !== 'menu') {
  //       setOpen(false)
  //     }
  //     // console.log(event.target.ariaCurrent)
  //   })
  // })

  if (open === true)
    return (
      <div className='menuWrapper'>
        <BurgerMenuButton openerMenu={openerMenu} />
        <div id='menu' className='menu open'>
          <div className='menu__item'>
            <NavLink to='/'>Авторизация</NavLink>
          </div>
          <div className='menu__item'>
            <NavLink to='/'>Корзина</NavLink>
          </div>
          <div className='menu__item'>
            <NavLink to='/'>Авторы</NavLink>
          </div>
          <div className='menu__item'>
            <NavLink to='/'>Жанры</NavLink>
          </div>
          <div className='menu__item'>
            <NavLink to='/contacts'>Контакты</NavLink>
          </div>
          <div className='menu__item'>
            <NavLink to='/aboutUs'>О нас</NavLink>
          </div>
        </div>
        <div className='blur'></div>
      </div>
    )

  return (
    <div className='menuWrapper'>
      <BurgerMenuButton openerMenu={openerMenu} />
      <div className='menu e'></div>
      <div className='blur none'></div>
    </div>
    // <div className='menu'>
    //   <BurgerMenuButton openerMenu={openerMenu} />
    // </div>
  )
}

export default BurgerMenu
