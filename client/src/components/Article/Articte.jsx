import React from 'react'
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import './Article.css'

toast.configure()
const Articte = () => {
  const notify = (event) => {
    event.preventDefault()
    toast.error('Произошла ошибка соединения')
  }

  return (
    <article>
      <div className='article__container'>
        <ul>
          <li>
            <div className='icon'>
              <span onClick={notify}>
                <i className='medium material-icons'>phone_iphone</i>
              </span>
            </div>
            <div className='icon-description'>
              <span onClick={notify}>Круглосуточная поддержка</span>
            </div>
          </li>
          <li>
            <div className='icon'>
              <span onClick={notify}>
                <i className='medium material-icons'>local_shipping</i>
              </span>
            </div>
            <div className='icon-description'>
              <span onClick={notify}>Доставка по всей стране</span>
            </div>
          </li>
          <li>
            <div className='icon'>
              <span onClick={notify}>
                <i className='medium material-icons'>loyalty</i>
              </span>
            </div>
            <div className='icon-description'>
              <span onClick={notify}>Подарочные купоны</span>
            </div>
          </li>
          <li>
            <div className='icon'>
              <span onClick={notify}>
                <i className='medium material-icons'>smoke_free</i>
              </span>
            </div>
            <div className='icon-description'>
              <span onClick={notify}>У нас тут не курят</span>
            </div>
          </li>
          <li>
            <div className='icon'>
              <span onClick={notify}>
                <i className='medium material-icons'>search</i>
              </span>
            </div>
            <div className='icon-description'>
              <span onClick={notify}>Найдете все что искали</span>
            </div>
          </li>
        </ul>
      </div>
      <ToastContainer limit={3} />
    </article>
  )
}

export default Articte

// transfer_within_a_station
