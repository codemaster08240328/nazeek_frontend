import React from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import validate from './FromValidation'
import renderErrors from '../../utils/renderErrors'
import renderField from '../../utils/renderField'

const ResetPassConfirmForm = (props) => {
  const { handleSubmit, errors, valid } = props
  return (
    <form className='form-st1' onSubmit={handleSubmit}>
      {renderErrors(errors)}
      <div className='form-group row'>
        <label className='col-sm-4 control-label'>Password</label>
        <div className='col-sm-7'>
          <div className='control--group'>
            <Field type='password' component={renderField} name='password1' />
            <span className='fc-icon'><i className='icon-lock-open icons' /></span>
          </div>
        </div>
      </div>
      <div className='form-group row'>
        <label className='col-sm-4 control-label'>Confirm Password</label>
        <div className='col-sm-7'>
          <div className='control--group'>
            <Field type='password' component={renderField} name='password2' />
            <span className='fc-icon'><i className='icon-lock-open icons' /></span>
          </div>
        </div>
      </div>
      <button type='submit' className='btn btn-submit' disabled={!valid}>Submit</button>
    </form>
  )
}

export default reduxForm({
  form: 'reset',
  validate
})(ResetPassConfirmForm)
