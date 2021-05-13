import React, { useState, useEffect } from 'react'
import { useHttp } from '../../hooks/http.hook'

import './Auth.css'

const Auth = () => {
  const { loading, request, error } = useHttp()

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form })
      console.log('Data: ', data)
    } catch (e) {}
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form })
      console.log('Data: ', data)
    } catch (e) {}
  }

  return (
    <div className='row auth'>
      {/*Если всего 12 столбцов, а содержимое 6 столбцов, то если мы сместим все на 3 столбца это приведет к центрированию содержимого*/}
      <h3 className='auth__header'>Авторизация</h3>
      <div className='card'>
        <div className='card-content white-text'>
          <span className='card-title head'>Authorization</span>

          <div className='input-field'>
            <input
              placeholder='Введите email'
              id='email'
              type='email'
              className='validate'
              name='email'
              onChange={changeHandler}
            />
            <label htmlFor='email'>Email</label>
          </div>

          <div className='input-field'>
            <input
              placeholder='Введите пароль'
              id='password'
              type='password'
              className='validate'
              name='password'
              onChange={changeHandler}
            />
            <label htmlFor='email'>Password</label>
          </div>
        </div>
        <div className='card-action'>
          <button
            className='btn sign-in'
            onClick={loginHandler}
            disabled={loading}
          >
            Войти
          </button>
          <button
            className='btn sign-up'
            onClick={registerHandler}
            disabled={loading}
          >
            Регистрация
          </button>
        </div>
      </div>
    </div>
  )
}

export default Auth

// light-blue lighten-2
