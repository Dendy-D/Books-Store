import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {
  const [drop, setDrop] = useState(true)

  const dropHandler = (event) => {
    event.preventDefault()
    setDrop(!drop)
  }

  return (
    <nav>
      <div className='nav-wrapper'>
        <NavLink to='/main' className='brand-logo'>
          booksStore
        </NavLink>
        <ul className='right hide-on-med-and-down'>
          <li>
            <NavLink to='/aboutUs'>О нас</NavLink>
          </li>
          <li>
            <NavLink to='/contacts'>Контакты</NavLink>
          </li>
          <li>
            <a
              className='dropdown-trigger'
              href='#!'
              data-target='dropdown1'
              onClick={dropHandler}
            >
              Книги &nabla;
            </a>
            <div className='collection' hidden={drop}>
              <a href='#!' className='collection-item'>
                Авторы
              </a>
              <a href='#!' className='collection-item'>
                Жанры
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
