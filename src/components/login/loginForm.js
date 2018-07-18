import React from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import validate from './FromValidation'
import renderErrors from '../../utils/renderErrors'
import renderField from '../../utils/renderField'

const LoginForm = (props) => {
  const { handleSubmit, errors, valid } = props;
  const lang = localStorage.getItem('lang');
  return (
    <form className='form-st1' onSubmit={handleSubmit}>
      {renderErrors(errors)}
      <div className='form-group row'>
        <label className='col-sm-4 control-label'>{lang==='ar'?'البريد الإلكتروني':'Email'}</label>
        <div className='col-sm-7'>
          <div className='control--group'>
            <Field name='email' component={renderField} type='text' />
            <span className='fc-icon'><i className='icon-user icons' /></span>
          </div>
        </div>
      </div>
      <div className='form-group row'>
        <label className='col-sm-4 control-label'>{lang==='ar'?'كلمة المرور':'Password'}</label>
        <div className='col-sm-7'>
          <div className='control--group'>
            <Field name='password' component={renderField} type='password' />
            <span className='fc-icon'><i className='icon-lock-open icons' /></span>
          </div>
        </div>
      </div>
      <div className='form-check row'>
        <div className='col-sm-offset-4 col-sm-7'>
          <a href='#' className='forget-pass'><i className='icon-question icons' /><Link to='/reset'>{lang==='ar'?'نسيت كلمة المرور؟':'Forgot Password?'}</Link></a>
        </div>
        <div className='col-sm-offset-4 col-sm-7'>
          <div className='ui_checkbox'>
            <Field type='checkbox' name='remember-me' component='input' />
            <label>{lang==='ar'?'تذكرنى':'Remember me'}</label>
          </div>
        </div>
      </div>
      <button type='submit' className='btn btn-submit' disabled={!valid}>{lang==='ar'?'تسجيل الدخول':'Log in'}</button>
      <p className='aready-p'>{lang==='ar'?'أليس عندك حساب؟':"Don't you have an account?"} <Link to='/register'>{lang==='ar'?'إنشاء حساب':'create account'}</Link></p>
    </form>
  )
}

export default reduxForm({
  form: 'login',
  validate
})(LoginForm)
