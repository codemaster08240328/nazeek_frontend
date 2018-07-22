import React from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import validate from './FromValidation'
import renderErrors from '../../utils/renderErrors'
import renderField from '../../utils/renderField'

const ResetPassForm = (props) => {
  const { handleSubmit, errors, valid } = props;
  const lang = localStorage.getItem('lang')
  return (
    <form className='form-st1' onSubmit={handleSubmit}>
      {renderErrors(errors)}
      <div className='form-group row'>
        <label className='col-sm-4 control-label'>{lang==='ar'?'بريد':'Email'}</label>
        <div className='col-sm-7'>
          <div className='control--group'>
            <Field name='email' component={renderField} type='text' />
            <span className='fc-icon'><i className='icon-user icons' /></span>
          </div>
        </div>
      </div>
      <button type='submit' className='btn btn-submit' disabled={!valid}>{lang==='ar'?'إرسال':'Submit'}</button>
      <p className='aready-p'>{lang==='ar'?'ليس لديك حساب؟':"don't have an account? "}<Link to='/register'>{lang==='ar'?'إصنع حساب':'create account'}</Link></p>
    </form>
  )
}

export default reduxForm({
  form: 'reset',
  validate
})(ResetPassForm)
