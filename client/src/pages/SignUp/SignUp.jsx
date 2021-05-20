import React, { useState, useEffect } from 'react'
import { useHttp } from '../../hooks/http.hook'
// import { createBrowserHistory } from 'history'
import { NavLink, Router, Route, Switch, Redirect } from 'react-router-dom'
import { Formik } from 'formik'
import * as yup from 'yup'
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import './SignUp.css'
// import Auth from '../Authorization/Auth'

toast.configure()

// const history = createBrowserHistory()
const SignUp = () => {
  // const [rend, setRend] = useState(false)

  const notify = (mes) => {
    toast.success(mes)
  }

  const { loading, request, error, clearError } = useHttp()

  useEffect(() => {
    const notify = (error) => {
      toast.error(error)
    }
    notify(error)
    clearError()
  }, [error, clearError])

  const validationsSchema = yup.object().shape({
    login: yup
      .string()
      .min(3, 'Минимальная длина логина - 3 символа')
      .max(11, 'Максимальная длина логина - 11 символов')
      .typeError('Логин должен быть строкой')
      .required('Обязательно для заполнения'),
    password: yup
      .string()
      .min(6, 'Минимальная длина пароля - 6 символов')
      .max(14, 'Максимальная длина пароля - 14 символов')
      .typeError('Недопустимые символы')
      .required('Обязательно для заполнения'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password')], 'Пароли не совпадают')
      .required('Обязательно для заполнения'),
    email: yup
      .string()
      .email('Введите верный email')
      .required('Обязательно для заполнения'),
  })

  return (
    <Formik
      initialValues={{
        login: '',
        email: '',
        password: '',
        passwordConfirm: '',
      }}
      validateOnBlur
      onSubmit={async (obj) => {
        try {
          const data = await request('/api/auth/register', 'POST', { ...obj })
          console.log('Data: ', data)
          // if (data.message === 'Пользоват') {
            notify(data.message)

            // setTimeout(() => setRend(true), 1000)
          // }
        } catch (e) {}
      }}
      validationSchema={validationsSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
      }) => (
        <div className='row auth'>
          <h3 className='auth__header'>Авторизация</h3>
          <div className='card'>
            <div className='card-content white-text'>
              <span className='card-title head'>Authorization</span>
              <div className='input-field'>
                <input
                  placeholder='Введите логин'
                  id='login'
                  type='text'
                  className='validate'
                  name={'login'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.login}
                />
                <label htmlFor='login'>Login</label>
                {touched.login && errors.login && (
                  <p className='errorValidation'>{errors.login}</p>
                )}
              </div>

              <div className='input-field'>
                <input
                  placeholder='Введите email'
                  id='email'
                  type='email'
                  className='validate'
                  name={'email'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <label htmlFor='email'>Email</label>
                {touched.email && errors.email && (
                  <p className='errorValidation'>{errors.email}</p>
                )}
              </div>

              <div className='input-field'>
                <input
                  placeholder='Введите пароль'
                  id='password'
                  type='password'
                  className='validate'
                  name={'password'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <label htmlFor='password'>Password</label>
                {touched.password && errors.password && (
                  <p className='errorValidation'>{errors.password}</p>
                )}
              </div>

              <div className='input-field'>
                <input
                  placeholder='Подтвердите пароль'
                  id='passwordConfirm'
                  type='password'
                  className='validate'
                  name={'passwordConfirm'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordConfirm}
                />
                <label htmlFor='passwordConfirm'>Password confirm</label>
                {touched.passwordConfirm && errors.passwordConfirm && (
                  <p className='errorValidation'>{errors.passwordConfirm}</p>
                )}
              </div>
            </div>
            <div className='card-action'>
              <button
                className='btn sign-up'
                onClick={(e) => {
                  handleSubmit({ login: values.login })
                }}
                type={'submit'}
                disabled={loading && !isValid && !dirty}
              >
                Регистрация
              </button>
              <p>
                <NavLink to='/auth' className='signIn'>
                  Уже зарегестрированны? Войти
                </NavLink>
              </p>
            </div>
          </div>
          {/* <Router history={history}></Router> */}
        </div>
      )}
    </Formik>
  )
}
// return <Auth />

export default SignUp
