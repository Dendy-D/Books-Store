import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import './NavBar.css'

import icon from '../../images/main-icon.png'

const NavBar = () => {
  const [drop, setDrop] = useState(true)

  const dropHandler = (event) => {
    event.preventDefault()
    setDrop(!drop)
  }

  useEffect(() => {
    document.addEventListener('mousedown', function (event) {
      if (event.target.id !== 'dropdown') {
        setDrop(true)
      }
    })
  })

  return (
    <nav>
      <div className='nav-wrapper'>
        <NavLink to='/main' className='brand-logo'>
          <span>booksStore</span> <img src={icon} alt='' />
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
              id='dropdown'
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
